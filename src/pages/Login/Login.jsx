import React, { useState } from "react";
import "../../styles/signup.css";
import img from "../../assets/images/login/img.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div
      className="container"
      style={{ minHeight: "100vh", backgroundColor: "white" }}
    >
      <div className="row">
        <div className="auth_left_part col-md-6">
          <img className="w-100 auth_side_image" src={img} alt="" />
        </div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="auth_right_part col-md-6"
        >
          <div className="d-flex justify-content-center align-items-center  gap-4 mb-5">
            <button className="signup_btn">Log In</button>
            <button className="login_btn">Sign up</button>
          </div>
          <div className="auth_input_container w-100">
            <label htmlFor="E-MAIL">E-MAIL</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              className="auth_input"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="auth_input_container w-100">
            <label htmlFor="password">PASSWORD</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              className="auth_input"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="d-flex justify-content-between align-items-center gap-4 flex-wrap flex-md-nowrap w-100 mt-5">
            <button type="submit" className="auth_register_btn">
              login
            </button>
            <Link to="/forgot-password" className="forgot_pass">
              Forgot password
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
