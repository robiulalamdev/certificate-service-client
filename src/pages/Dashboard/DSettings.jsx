import React, { useState } from "react";
import "../../styles/dashboard/dSettings.css";
import SettingTab from "./Settings-ui/SettingTab";
import AccountSetting from "./Settings-ui/AccountSetting";
import { iHr } from "../../utils/icons";

const DSettings = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="dashboard_setting">
      <SettingTab tab={tab} setTab={setTab} />
      <div>{tab === 0 && <AccountSetting />}</div>
    </div>
  );
};

export default DSettings;
