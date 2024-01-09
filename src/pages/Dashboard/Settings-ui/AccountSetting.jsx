import React from "react";
import { iUploadImg } from "../../../utils/icons";

const AccountSetting = () => {
  return (
    <div>
      <h1 className="ypp_title">Your Profile Picture</h1>
      <div className="accountImgUpload_container">
        {iUploadImg}
        <p>Upload your photo</p>
      </div>

      <div className="w-100 setting_hr"></div>
      <form className="account_setting_form_container">
        <div className="account_setting_input_container">
          <label htmlFor="Full_name">Full name</label>
          <input
            type="text"
            className=""
            placeholder="Please enter your full name"
          />
        </div>
        <div className="account_setting_input_container">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            className=""
            placeholder="Please enter your email"
          />
        </div>
        <div className="account_setting_input_container">
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            className=""
            placeholder="Please enter your username"
          />
        </div>
        <div className="account_setting_input_container">
          <label htmlFor="Phone_number">Phone number</label>
          <div className="account_setting_input_container d-flex align-items-center">
            <select
              className="accouont_setting_phone_select"
              style={{ maxWidth: "80px" }}
            >
              <option value="+1">+1</option>
              <option value="+1">+1</option>
              <option value="+1">+1</option>
              <option value="+1">+1</option>
            </select>
            <input
              type="text"
              className="flex-grow border-start-0"
              placeholder="Please enter your phone number"
            />
          </div>
        </div>

        <div className="update_profile_btns_container">
          <button className="update_profile_btn">Update Profile</button>
          <div className="update_profile_reset_btn">Reset</div>
        </div>
      </form>
    </div>
  );
};

export default AccountSetting;
