import React, { useState } from "react";
import PrimaryBtn from "../../components/Button/PrimaryBtn";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../utils/toast";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password confirmation before sending request
    if (formData.password !== formData.confirmPassword) {
      return handleError("Passwords do not match");
    }

    try {
      const url = "https://react-gym-app-snowy.vercel.app/auth/register";
      const { confirmPassword, ...filteredFormData } = formData; // Exclude confirmPassword

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filteredFormData),
      });

      const result = await response.json(); // Parse JSON response

      console.log("Server Response:", result); // Debugging step

      // Handle API errors
      if (!response.ok || !result.success) {
        return handleError(
          result?.errors?.[0] || result.message || "An error occurred"
        );
      }

      // Handle successful signup
      handleSuccess(result.message || "Signup successful!");
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      console.error("Request Error:", err); // Debugging step
      handleError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#1d1d1d] to-gray-800">
      <div className="bg-black/80 p-8 rounded-lg shadow-2xl w-full max-w-md lg:max-w-lg text-white backdrop-blur-md mx-4">
        <h2 className="text-4xl font-bold text-center mb-6 uppercase tracking-wide">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base lg:text-lg"
            value={formData.name}
            onChange={handleChange}
            autoFocus
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base lg:text-lg"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base lg:text-lg"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base lg:text-lg"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <PrimaryBtn className="w-full h-12 text-lg font-semibold rounded-md mt-4 bg-indigo-500 hover:bg-indigo-600 transition-all duration-300">
            Sign Up
          </PrimaryBtn>
        </form>
        <p className="text-gray-400 text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400 hover:text-indigo-500 transition-all duration-300"
          >
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUpPage;
