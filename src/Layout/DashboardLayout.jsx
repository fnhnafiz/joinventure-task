import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar";
import DashboardNavbar from "../Pages/Dashboard/DashboardNavbar";

function DashboardLayout() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <DashboardNavbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
