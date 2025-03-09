const { signup, login } = require("../controller/AuthController");
const {
  signupValidation,
  loginValidation,
} = require("../middleware/AuthValidation");

const express = require("express");
const router = express.Router();

router.post("/register",signupValidation, signup);
router.post("/login", loginValidation, login);

module.exports = router;
