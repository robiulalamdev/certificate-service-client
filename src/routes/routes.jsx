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
import UpdateCreditCard from "../pages/UpdateCreditCard/UpdateCreditCard";
import PostalAcknowledgmentForm from "../pages/PostalAcknowledgmentForm/PostalAcknowledgmentForm";
import CostEstimate from "../pages/CostEstimate/CostEstimate";
import StartMailing from "../pages/StartMailing/StartMailing";
import DashboardLayout from "../layout/DashboardLayout";
import DOverview from "../pages/Dashboard/DOverview";
import DSettings from "../pages/Dashboard/DSettings";
import StartMailingForm from "../pages/StartMailing/StartMailingForm";

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
        path: "/referral-program",
        element: <ReferralProgramme />,
      },
      {
        path: "/referral-program-policy",
        element: <ReferralProgrammePolicy />,
      },
      {
        path: "/update-credit-card",
        element: <UpdateCreditCard />,
      },
      {
        path: "/postal-acknowledgment-form",
        element: <PostalAcknowledgmentForm />,
      },
      {
        path: "/get-estimate",
        element: <CostEstimate />,
      },
      {
        path: "/start-mailing",
        element: <StartMailing />,
      },
      {
        path: "/start-mailing/:slug",
        element: <StartMailingForm />,
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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/overview",
        element: <DOverview />,
      },
      {
        path: "/dashboard/settings",
        element: <DSettings />,
      },
    ],
  },
]);
