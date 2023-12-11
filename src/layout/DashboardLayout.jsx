import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import "../styles/dashboard/dashboard.css";
import DSidebar from "../components/dashboard-ui/layout_ui/DSidebar";
import { menu } from "../utiles/icons";
import { AuthContext } from "../context/AuthContext";

const DashboardLayout = () => {
  const { open, setOpen } = useContext(AuthContext);
  return (
    <div className="dashboard_layout_container">
      <DSidebar />
      <div className="dashboard_outlet_main">
        <div className="dashboard_outlet">
          <Outlet />
        </div>
      </div>

      {!open && (
        <button onClick={() => setOpen(!open)} className="menu_btn">
          {menu}
        </button>
      )}
    </div>
  );
};

export default DashboardLayout;
