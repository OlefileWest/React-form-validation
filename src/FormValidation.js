import React, { useState } from "react";
import "./FormValidation.css";

function FormValidation() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "Username is required.";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required.";
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      validationErrors.email = "Email is invalid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters.";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Password does not match";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfuly");
    }
  };
  return (
    <div className="app">
      <h4 id="heading"> Sign up</h4>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          type="text"
          name="username"
          onChange={handleChange}
          autoComplete="off"
        />
        <br />
        {errors.username && (
          <span className="errorMessage">{errors.username}</span>
        )}
        <input
          placeholder="Email@gmail.com"
          name="email"
          type="text"
          onChange={handleChange}
        />
        {errors.email && <span className="errorMessage">{errors.email}</span>}
        <input
          placeholder="Password"
          type="password"
          onChange={handleChange}
          name="password"
        />
        {errors.password && (
          <span className="errorMessage">{errors.password}</span>
        )}
        <input
          placeholder="confirm password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <span className="errorMessage">{errors.confirmPassword}</span>
        )}

        <br />
        <button id="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormValidation;
