import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import Chat from "../Pages/Dashboard/Chat";
import Subscription from "../Pages/Dashboard/Subscription";
import Users from "../Pages/Dashboard/Users";
import HelpSupport from "../Pages/Dashboard/HelpSupport";
import Faq from "../Pages/Dashboard/Faq";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Chat />,
      },
      {
        path: "subscription",
        element: <Subscription />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "help-support",
        element: <HelpSupport />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
    ],
  },
]);
export default Routes;
