import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/dashboard/dashboard.css";
import DSidebar from "../components/dashboard-ui/layout_ui/DSidebar";

const DashboardLayout = () => {
  return (
    <div className="dashboard_layout_container">
      <DSidebar />
      <div className="w-100">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
