import React, { useState } from "react";
import "../../styles/signup.css";
import img from "../../assets/images/login/img.png";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password", "");
  const [agre, setAgre] = useState(false);

  const handleSignup = (data) => {
    console.log(data);
  };

  return (
    <div
      className="container"
      style={{ minHeight: "100vh", backgroundColor: "white" }}
    >
      <div className="grid md:grid-cols-2">
        <div className="auth_left_part">
          <img className="w-full auth_side_image" src={img} alt="" />
        </div>
        <form onSubmit={handleSubmit(handleSignup)} className="auth_right_part">
          <div className="flex justify-center items-center  gap-4 mb-5">
            <button className="login_btn">Log In</button>
            <button className="signup_btn">Sign up</button>
          </div>
          <div className="auth_input_container w-full">
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
          <div className="auth_input_container w-full">
            <label htmlFor="E-full_name">FULL NAME</label>
            <input
              {...register("full_name", {
                required: "Full Name is required",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Full Name should contain only letters",
                },
              })}
              className="auth_input"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div className="auth_input_container w-full">
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
          <div className="auth_input_container w-full">
            <label htmlFor="confirm_password">CONFIRM PASSWORD</label>
            <input
              {...register("confirm_password", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="auth_input"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center !gap-y-4 gap-x-4 w-full mt-5">
            <div
              onClick={() => setAgre(!agre)}
              className="cursor-pointer flex items-center gap-2 mt-4"
            >
              <input className="auth_checkbox" type="checkbox" checked={agre} />
              <p className="auth_checkbox_label">
                I agree all statements in terms of services
              </p>
            </div>
            <button type="submit" className="auth_register_btn mt-2 md:mt-0">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
