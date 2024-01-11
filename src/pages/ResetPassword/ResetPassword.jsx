import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/signup.css";
import { iEyeHide, iEyeOpen, iSuccessReset } from "../../utiles/icons";

const ResetPassword = () => {
  const [step, setStep] = useState(1);
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [confirmPasswordOpen, setConfirmPasswordOpen] = useState(false);
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password", "");

  const handlePassword = (data) => {
    setStep(step + 1);
  };
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "white" }}
    >
      {step === 1 && (
        <form
          onSubmit={handleSubmit(handlePassword)}
          className="forgot_pass_container w-full h-100 bg-white"
        >
          <h1>Reset Password</h1>
          <p className="pb-4">Choose a new password for your account</p>
          <div className="forgot_input_container position-relative">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              type={passwordOpen ? "text" : "password"}
              placeholder="Your new password"
            />
            <div
              onClick={() => setPasswordOpen(!passwordOpen)}
              className="position-absolute cursor-pointer"
              style={{
                right: "15px",
                top: "15px",
                width: "19px",
                height: "19px",
                color: "#04030866",
              }}
            >
              {passwordOpen ? iEyeHide : iEyeOpen}
            </div>
          </div>
          <div className="forgot_input_container position-relative">
            <input
              {...register("confirm_password", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type={confirmPasswordOpen ? "text" : "password"}
              placeholder="Confirm your new password"
            />
            <div
              onClick={() => setConfirmPasswordOpen(!confirmPasswordOpen)}
              className="position-absolute cursor-pointer"
              style={{
                right: "15px",
                top: "15px",
                width: "19px",
                height: "19px",
                color: "#04030866",
              }}
            >
              {confirmPasswordOpen ? iEyeHide : iEyeOpen}
            </div>
          </div>
          <button type="submit" className="forgot_send_btn">
            Reset Password
          </button>
          <button className="forgot_back_btn">Back to Login</button>
        </form>
      )}
      {step === 2 && (
        <div className="forgot_pass_container d-flex flex-column justify-content-center align-items-center gap-3 w-full h-100 bg-white">
          <div
            style={{
              backgroundColor: "#34a85311",
              width: "100px",
              height: "100px",
              borderRadius: "100%",
            }}
          >
            {iSuccessReset}
          </div>
          <h1>Password reset successfully</h1>

          <button className="forgot_send_btn mt-2">Login</button>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
