import { BrowserRouter as Router, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/Home/Home";
import ReasonsToOutsource from "../pages/WhatIsCos/ReasonsToOutsource";
import DueProcess from "../pages/WhatIsCos/DueProcess";
import CustomerService from "../pages/Home/HowItsWork/CustomerService";
import MailSchedule from "../pages/WhatIsCos/MailSchedule";
import BackStory from "../pages/BackStory/BackStory";
import Pricing from "../pages/pricing/Pricing";
import ValueOfTime from "../pages/ValueOfTime/ValueOfTime";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Envelop from "../pages/Envelop/Envelop";
import ReferralProgramme from "../pages/ReferralProgramme/ReferralProgramme";
import ReferralProgrammePolicy from "../pages/ReferralProgrammePolicy/ReferralProgrammePolicy";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/create-account",
        element: <CreateAccount />,
      },
      {
        path: "/back-story",
        element: <BackStory />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/value-of-time",
        element: <ValueOfTime />,
      },
      {
        path: "/reasons-to-outsource",
        element: <ReasonsToOutsource />,
      },
      {
        path: "/due-process",
        element: <DueProcess />,
      },
      {
        path: "/mail-schedule",
        element: <MailSchedule />,
      },
      {
        path: "/customer-service",
        element: <CustomerService />,
      },
      {
        path: "/envelop",
        element: <Envelop />,
      },
      {
        path: "/referral-programme",
        element: <ReferralProgramme />,
      },
      {
        path: "/referral-programme-policy",
        element: <ReferralProgrammePolicy />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);
