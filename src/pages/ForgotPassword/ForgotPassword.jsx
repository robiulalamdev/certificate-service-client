import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/signup.css";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handlePassword = (data) => {
    setStep(step + 1);
  };
  return (
    <div
      className="container flex justify-center items-center"
      style={{ minHeight: "100vh", backgroundColor: "white" }}
    >
      {step === 1 && (
        <form
          onSubmit={handleSubmit(handlePassword)}
          className="forgot_pass_container w-full h-100 bg-white"
        >
          <h1>Forgot Password</h1>
          <p className="pb-4">
            Enter the email you used to create your account so we can send you
            instructions on how to reset your password.
          </p>
          <div className="forgot_input_container">
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Email"
            />
          </div>
          <button type="submit" className="forgot_send_btn">
            Send
          </button>
          <button className="forgot_back_btn">Back to Login</button>
        </form>
      )}
      {step === 2 && (
        <div className="forgot_pass_container w-full h-100 bg-white">
          <h1>Check your Email</h1>
          <p className="pb-4">
            We have sent an email with password reset information to
            n****e@e***e.com.
          </p>

          <p>Didn’t receive the email? Check spam or promotion folder or</p>
          <button type="submit" className="forgot_send_btn mt-2">
            Resend Email
          </button>
          <button className="forgot_back_btn">Back to Login</button>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
