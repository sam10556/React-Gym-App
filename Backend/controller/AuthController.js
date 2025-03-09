const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists. Please log in.", success: false });
    }

    const newUser = new UserModel({ name, email, password });
    newUser.password = await bcrypt.hash(password, 10);
    await newUser.save();

    return res.status(201).json({ message: "Sign Up Successfully", success: true });
  } catch (err) {
    console.error("Signup Error:", err);
    return res.status(500).json({ message: "Internal Server Error", success: false });
  }
};


const login = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(403).json({
        message: "Auth Failed email or password is wrong",
        success: false,
      });
    }
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res.status(403).json({
        message: "Auth Failed email or password is wrong",
        success: false,
      });
    }
    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT,
      { expiresIn: "24h" }
    );
    res.status(200).json({
      message: "Login Successfully",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (err) {
    res.status(500).json({ message: "Login Unsuccessful", success: true });
  }
};

module.exports = {
  signup,
  login,
};
