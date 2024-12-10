import "./dashboard.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashBoard = () => {
  return (
    <section>
      <div className="dashboard-container">
        <Navbar />
        <div className="flex min-h-full">
          <div className="basis-[28rem] border-r border-l border-[#b9bccf4d]">
            <div className="py-16">
              <Sidebar />
            </div>
          </div>
          <div className="grow py-14 px-12 bg-[rgba(239,243,255,0.8)]">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashBoard;
