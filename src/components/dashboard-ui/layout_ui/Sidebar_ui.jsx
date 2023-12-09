import React from "react";
import logo from "../../../assets/brand/logo.png";
import { iLogout, iOverview, iSetEdit } from "../../../utiles/icons";
import { useLocation } from "react-router-dom";

const routes = [
  { id: 1, name: "Overview", url: "overview", icon: iOverview },
  {
    id: 2,
    name: "SET/EDIT DEFAULTS",
    url: "set-edit-defaults",
    icon: iSetEdit,
  },
];

const Sidebar_ui = () => {
  const { pathname } = useLocation();
  return (
    <div className="d_sidebar_container">
      <div className="d_sidebar_item_container">
        <div className="d_sidebar_brand">
          <img src={logo} alt="" />
          <h1>CertificateofService.com</h1>
        </div>
        <div className="d_sidebar_routes">
          {routes.map((route, index) => (
            <button
              key={index}
              className={` ${
                pathname.includes("/dashboard") &&
                index === 0 &&
                "route_btn_active"
              }`}
            >
              {route.icon} <span>{route.name}</span>
            </button>
          ))}
        </div>
        <div className="w-100">
          <button className="d_logout_btn">
            {iLogout} <h1>Log out </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar_ui;
