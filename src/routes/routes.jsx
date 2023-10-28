import { BrowserRouter as Router, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomePage from "../pages/Home/Home";
import ReasonsToOutsource from "../pages/WhatIsCos/ReasonsToOutsource";
import DueProcess from "../pages/WhatIsCos/DueProcess";
import CustomerService from "../pages/Home/HowItsWork/CustomerService";
import MailSchedule from "../pages/WhatIsCos/MailSchedule";
import BackStory from "../pages/BackStory/BackStory";
import Pricing from "../pages/pricing/Pricing";

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
        path: "/back-story",
        element: <BackStory />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
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
    ],
  },
]);
