import "../../styles/signup.css";
import img from "../../assets/images/login/img.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { SpinnerCircularFixed } from "spinners-react";
import { usePostLoginMutation } from "../../redux/features/auth/authApi";
import { toast } from "react-toastify";
import { SECRET_TOKEN } from "../../lib/global";

const Login = () => {
  const [postLogin, { isLoading }] = usePostLoginMutation();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    const options = { data: data };
    const result = await postLogin(options);
    if (result?.data?.success) {
      localStorage.setItem(SECRET_TOKEN, result?.data?.accessToken);
      toast.success("User Login Successful");
      navigate("/");
    }
    if (
      result?.error?.data?.success === false &&
      result?.error?.data?.type === "email"
    ) {
      setError("email", {
        type: "manual",
        message: result?.error?.data?.message,
      });
    }
    if (
      result?.error?.data?.success === false &&
      result?.error?.data?.type === "password"
    ) {
      setError("password", {
        type: "manual",
        message: result?.error?.data?.message,
      });
    }
  };

  return (
    <div
      className="max-w-[1440px] mx-auto !p-0"
      style={{ minHeight: "100vh", backgroundColor: "white" }}
    >
      <div className="grid lg:grid-cols-2">
        <div className="auth_left_part hidden lg:block">
          <img className="w-full auth_side_image" src={img} alt="" />
        </div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="auth_right_part w-full"
        >
          <div className="flex justify-center items-center  gap-4 mb-5">
            <Link to="/login" className="w-full signup_btn">
              <button type="button" className="signup_btn">
                Log In
              </button>
            </Link>
            <Link to="/signup" className="w-full login_btn">
              <button type="button" className="login_btn">
                Sign up
              </button>
            </Link>
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

          <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center !gap-y-4 gap-x-4 w-full mt-5">
            <Button
              type="submit"
              className="auth_register_btn bg-[#008EDE] rounded-[57px] shadow-none flex justify-center items-center gap-3 duration-150"
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
              login
            </Button>
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
