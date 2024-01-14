/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/signup.css";
import { useForgotPasswordMutation } from "../../redux/features/auth/authApi";
import { Link } from "react-router-dom";
import { SpinnerCircularFixed } from "spinners-react";

const ForgotPassword = () => {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [privetEmail, setPrivetEmail] = useState("");

  const [isResetting, setIsResetting] = useState(false);
  const [countdown, setCountdown] = useState(120);

  function obfuscateEmail(email) {
    setEmail(email);
    const [username, domain] = email.split("@");
    const obfuscatedUsername =
      username.charAt(0) +
      "*".repeat(username.length - 2) +
      username.charAt(username.length - 1);
    const [firstPart, secondPart] = domain.split(".");
    const obfuscatedDomain =
      firstPart.charAt(0) +
      "*".repeat(firstPart?.length - 1) +
      "." +
      secondPart.charAt(0);

    const result = obfuscatedUsername + "@" + obfuscatedDomain + "om";
    setPrivetEmail(result);
  }

  const handleReset = () => {
    setIsResetting(true);
  };

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  const handlePassword = async (data) => {
    const options = {
      data: data,
    };
    const result = await forgotPassword(options);
    if (result?.data?.success) {
      obfuscateEmail(data?.email);
      setStep(2);
      handleReset();
    } else {
      if (result?.data?.type === "email") {
        setError("email", { message: "Account not Found!" });
      }
    }
  };

  useEffect(() => {
    let countdownTimer;
    setCountdown(120);
    if (isResetting) {
      countdownTimer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            setIsResetting(false); // Reset state to true after 2 minutes
            clearInterval(countdownTimer);
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }

    return () => clearInterval(countdownTimer);
  }, [isResetting]);

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
              className={errors.email && "!border !border-red-600"}
              placeholder="Email"
            />
            {errors?.email && (
              <i className="text-red-600 text-sm">* {errors.email.message}</i>
            )}
          </div>
          <button
            type="submit"
            className="forgot_send_btn flex justify-center items-center gap-2"
          >
            {isLoading && (
              <SpinnerCircularFixed
                size={25}
                thickness={170}
                speed={350}
                color="white"
                secondaryColor="rgba(124, 57, 172, 0.19)"
              />
            )}
            Send
          </button>
          <Link to="/login">
            <button type="button" className="forgot_back_btn">
              Back to Login
            </button>
          </Link>
        </form>
      )}
      {step === 2 && (
        <div className="forgot_pass_container w-full h-100 bg-white">
          <h1>Check your Email</h1>
          <p className="pb-4">
            We have sent an email with password reset information to{" "}
            {privetEmail}.
          </p>

          <p>Didn’t receive the email? Check spam or promotion folder or</p>
          <button
            onClick={() => handlePassword({ email: email })}
            type="submit"
            className="forgot_send_btn mt-2 flex justify-center items-center gap-2"
            disabled={isResetting}
            style={{ cursor: isResetting ? "not-allowed" : "pointer" }}
          >
            {isLoading && (
              <SpinnerCircularFixed
                size={25}
                thickness={170}
                speed={350}
                color="white"
                secondaryColor="rgba(124, 57, 172, 0.19)"
              />
            )}{" "}
            {isResetting ? `${countdown} ` : "Resend Email"}
          </button>
          <Link to="/login">
            <button type="button" className="forgot_back_btn">
              Back to Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
