import logo from "../../../assets/brand/logo.png";
import useAuth from "../../../lib/useAuth";
import {
  iCredit,
  iEstimate,
  iInvoice,
  iLogout,
  iOverview,
  iPostageDiscount,
  iReferral,
  iSetEdit,
  iSetting,
} from "../../../utiles/icons";
import { Link, useLocation } from "react-router-dom";

const routes = [
  { id: 1, name: "Overview", url: "dashboard/overview", icon: iOverview },
  {
    id: 2,
    name: "SET/EDIT DEFAULTS",
    url: "set-edit-defaults",
    icon: iSetEdit,
  },
  {
    id: 3,
    name: "REFERRAL PROGRAM",
    url: "referral-program",
    icon: iReferral,
  },
  {
    id: 4,
    name: "GET ESTIMATE",
    url: "get-estimate",
    icon: iEstimate,
  },
  {
    id: 5,
    name: "UPDATE CREDIT CARD",
    url: "update-credit-card",
    icon: iCredit,
  },
  {
    id: 6,
    name: "PAY OUTSTANDING INVOICE",
    url: "pay-outstanding-invoice",
    icon: iInvoice,
  },
  {
    id: 7,
    name: "POSTAGE DISCOUNT FORM",
    url: "postage-discount-form",
    icon: iPostageDiscount,
  },
  {
    id: 8,
    name: "Settings",
    url: "dashboard/settings",
    icon: iSetting,
  },
];

const Sidebar_ui = () => {
  const { logout } = useAuth();
  const { pathname } = useLocation();
  return (
    <div className="d_sidebar_container">
      <div className="d_sidebar_item_container">
        <div className="w-full">
          <div className="d_sidebar_brand">
            <img src={logo} alt="" />
            <h1>CertificateofService.com</h1>
          </div>
        </div>
        <div className="d_sidebar_routes">
          {routes.map((route, index) => (
            <Link key={index} to={`/${route.url}`}>
              <button
                className={` ${
                  pathname.includes("/dashboard") &&
                  index === 0 &&
                  "route_btn_active"
                }`}
              >
                {route.icon} <span>{route.name}</span>
              </button>
            </Link>
          ))}
        </div>
        <div className="w-full">
          <button
            onClick={() => logout()}
            className="d_logout_btn hover:!text-primary"
          >
            {iLogout} <h1 className="hover:!text-primary">Log out </h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar_ui;
