import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashBoard = () => {
  return (
    <section>
      <div className="max-w-[144rem] mx-auto">
        <Navbar />
        <div className="flex h-[calc(100vh-8rem)]">
          <div className="basis-[28rem] py-16 border-r border-[#b9bccf4d] bg-white">
            <Sidebar />
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
