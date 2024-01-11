/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import "../../styles/signup.css";
import img from "../../assets/images/login/img.png";
import { useForm } from "react-hook-form";
import { Button, Dialog, Spinner } from "@material-tailwind/react";
import { Link, useRouteError } from "react-router-dom";
import {
  useHandleOtpMutation,
  useHandleResendOtpMutation,
  usePostRegisterMutation,
} from "../../redux/features/auth/authApi";
import { SpinnerCircular, SpinnerCircularFixed } from "spinners-react";
import { SECRET_TOKEN } from "../../lib/global";

const Signup = () => {
  const [postRegister, { isLoading }] = usePostRegisterMutation();
  const [handleOtp, { isOtpLoading }] = useHandleOtpMutation();
  const [handleResendOtp] = useHandleResendOtpMutation();
  const {
    handleSubmit,
    register,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const password = watch("password", "");
  const [agree, setAgree] = useState(false);

  const [openModal, setOpenModal] = useState(null);

  const handleSignup = async (data) => {
    const options = {
      data: data,
    };
    const result = await postRegister(options);
    console.log("coall", result);
    if (result?.data?.success) {
      setOpenModal(data?.email);
    } else {
      if (result?.data?.type === "email") {
        setError("email", result?.data?.message);
      }
    }
  };
  // console.log(openModal);

  const [completeStep, setCompleteStep] = useState(0);
  const router = useRouteError();

  const closeModalRef = useRef(null);

  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [isResend, setIsResend] = useState("");

  const inputRefs = useRef([]);
  const handleChange = async (index, value) => {
    if (value.length > 1) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const isFilled = otp.every((digit) => digit !== "");

  const handleOTP = async () => {
    const otpData = { email: openModal, otp: otp.join("") };

    const options = { data: otpData };
    const result = await handleOtp(options);
    if (result?.error?.data?.success === false) {
      setIsResend(result?.error?.data.message);
    }
    if (result?.data?.accessToken) {
      localStorage.setItem(SECRET_TOKEN, result?.data?.accessToken);
      setCompleteStep(1);
      setIsResend("");
    }
  };

  // const handleResend = async () => {
  //   const options = {
  //     data: { email: openModal },
  //   };
  //   const result = await handleResendOtp(options);
  //   if (result?.data?.success) {
  //     setIsResend("Resend OTP");
  //   }
  // };

  return (
    <>
      <div
        className="container"
        style={{ minHeight: "100vh", backgroundColor: "white" }}
      >
        <div className="grid md:grid-cols-2">
          <div className="auth_left_part">
            <img className="w-full auth_side_image" src={img} alt="" />
          </div>
          <form
            onSubmit={handleSubmit(handleSignup)}
            className="auth_right_part"
          >
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
                className={`auth_input ${
                  errors?.email && "!border-b !border-red-600"
                }`}
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <small className="text-xs text-red-600">
                  {errors.email.message}
                </small>
              )}
            </div>
            <div className="auth_input_container w-full">
              <label htmlFor="E-full_name">FULL NAME</label>
              <input
                {...register("full_name", {
                  required: "Full Name is required",
                })}
                className={`auth_input ${
                  errors?.full_name && "!border-b !border-red-600"
                }`}
                type="text"
                placeholder="Enter your full name"
              />
              {errors.full_name && (
                <small className="text-xs text-red-600">
                  {errors.full_name.message}
                </small>
              )}
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
                className={`auth_input ${
                  errors?.password && "!border-b !border-red-600"
                }`}
                type="password"
                placeholder="Enter your password"
              />
              {errors.password && (
                <small className="text-xs text-red-600">
                  {errors.password.message}
                </small>
              )}
            </div>
            <div className="auth_input_container w-full">
              <label htmlFor="confirm_password">CONFIRM PASSWORD</label>
              <input
                {...register("confirm_password", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className={`auth_input ${
                  errors?.confirm_password && "!border-b !border-red-600"
                }`}
                type="password"
                placeholder="Enter your password"
              />
              {errors.confirm_password && (
                <small className="text-xs text-red-600">
                  {errors.confirm_password.message}
                </small>
              )}
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center !gap-y-4 gap-x-4 w-full mt-5">
              <div
                onClick={() => setAgree(!agree)}
                className="cursor-pointer flex items-center gap-2 mt-4"
              >
                <input
                  className="auth_checkbox cursor-pointer"
                  type="checkbox"
                  checked={agree}
                />
                <p className="auth_checkbox_label">
                  I agree all statements in
                  <Link to={"/"} className="font-semibold hover:text-primary">
                    terms of services
                  </Link>
                </p>
              </div>
              {agree ? (
                <Button
                  type="submit"
                  className="auth_register_btn mt-2 md:mt-0 bg-[#008EDE] rounded-[57px] shadow-none flex justify-center items-center gap-3 duration-150"
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
                  REGISTER
                </Button>
              ) : (
                <Button
                  type="button"
                  disabled
                  className="auth_register_btn mt-2 md:mt-0 bg-[#008EDE] rounded-[57px] shadow-none"
                >
                  REGISTER
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>

      <Dialog
        open={openModal ? true : false}
        handler={() => setOpenModal(null)}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size="xs"
      >
        <div className="p-4">
          {completeStep === 0 && (
            <div className="">
              <p className="text-center text-green-600 font-bold text-xl">
                Please enter the Verification code received in your email,
                <span className="text-sm text-center">{openModal}</span>
              </p>
              <div className="mt-4">
                <div className={`flex justify-center items-center gap-2 mb-5`}>
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={digit}
                      min={0}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      ref={(ref) => (inputRefs.current[index] = ref)}
                      autoComplete="off"
                      className="w-[50px] h-[50px] border border-black rounded text-center"
                    />
                  ))}
                </div>
              </div>
              <div>
                {/* <div
                  className="flex justify-center"
                  style={{ marginBottom: "10px" }}
                >
                  <button
                    onClick={() => handleResend()}
                    className="text-blue-600"
                  >
                    Resend Code
                  </button>
                </div> */}
                {isResend && (
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "14px",
                      marginBottom: "10px",
                      color: "red",
                    }}
                  >
                    {isResend}
                  </p>
                )}
              </div>
              <div className="flex justify-center">
                <Button
                  disabled={!isFilled || isOtpLoading}
                  onClick={handleOTP}
                  className="flex justify-center items-center shadow-none bg-primaryDark hover:bg-primaryDark text-white"
                >
                  {isOtpLoading ? (
                    <Spinner color="white" />
                  ) : (
                    "Complete Verification"
                  )}
                </Button>
              </div>
            </div>
          )}
          {completeStep === 1 && (
            <div className="">
              <div className="">
                <div className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <path
                      d="M37.5 50L45.8333 58.3333L62.5 41.6667M87.5 50C87.5 70.7107 70.7107 87.5 50 87.5C29.2893 87.5 12.5 70.7107 12.5 50C12.5 29.2893 29.2893 12.5 50 12.5C70.7107 12.5 87.5 29.2893 87.5 50Z"
                      stroke="#34A853"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-center text-green-600 mb-2 font-bold">
                  Registered Successfully!
                </h3>

                <div className="flex justify-center">
                  <Link to="/">
                    <Button className="flex justify-center items-center shadow-none bg-primaryDark hover:bg-primaryDark text-white">
                      Go to my Home
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </Dialog>
    </>
  );
};

export default Signup;
