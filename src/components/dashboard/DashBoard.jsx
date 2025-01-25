import "./dashboard.css";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <Link to="/">
        <img src="/dash-logo.png" alt="Logo" className="dash-logo" />
      </Link>
      <Navbar />
      <div className="border-r border-l border-[#b9bccf4d]">
        <div className="py-16">
          <Sidebar />
        </div>
      </div>
      <div className="py-14 px-12 bg-[rgba(239,243,255,0.8)] relative">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
