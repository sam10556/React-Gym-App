const Joi = require("joi");

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false }); // Show all errors at once

  if (error) {
    return res.status(400).json({
      message: "Validation Error",
      errors: error.details.map((err) => err.message), // Send all error messages
    });
  }
  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required().messages({
      "string.email": "Invalid email format",
      "any.required": "Email is required",
    }),
    password: Joi.string().min(4).max(100).required().messages({
      "string.min": "Password must be at least 4 characters long",
      "string.max": "Password cannot exceed 100 characters",
      "any.required": "Password is required",
    }),
  });

  const { error } = schema.validate(req.body, { abortEarly: false }); // Show all validation errors

  if (error) {
    return res.status(400).json({
      message: "Validation Error",
      errors: error.details.map((err) => err.message), // Extract specific error messages
    });
  }

  next();
};

module.exports = {
  signupValidation,
  loginValidation,
};
