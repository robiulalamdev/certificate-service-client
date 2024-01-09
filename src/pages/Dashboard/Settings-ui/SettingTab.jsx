import React from "react";

const tabs = ["Account  Setting", "Login & Security"];

const SettingTab = ({ tab, setTab }) => {
  return (
    <div className="setting_tab_container">
      {tabs.map((t, index) => (
        <div
          onClick={() => setTab(index)}
          key={index}
          className={` ${
            tab === index ? "setting_tab_active" : "setting_tab_btn"
          }`}
        >
          {t}
        </div>
      ))}
    </div>
  );
};

export default SettingTab;
