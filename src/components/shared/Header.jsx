import React from "react";
import logo from "../../assets/images/global/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar__section min-h-[71px]">
      <div className="container flex justify-between items-center min-h-[71px] h-full">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" />
          <div className="logo-name">
            <a className="logo-title">CertificateofService.com</a>
            <a className="logo-slogan">
              accelerating te velocity of your practice!
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="button-parent ">
            <Link to="/login">
              <button
                className="bg-white w-[110px] h-[45px] border border-primaryDark rounded text-black"
                type="submit"
              >
                Log In
              </button>
            </Link>
            <Link to="/create-account">
              <button
                className="bg-primaryDark w-[150px] h-[45px] custom rounded"
                type="submit"
              >
                Create account
              </button>
            </Link>

            <button
              className="bg-primaryDark w-[150px] h-[45px] custom rounded custom"
              type="submit"
            >
              <i className="fa-regular fa-comment-dots"></i> Let’s chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
