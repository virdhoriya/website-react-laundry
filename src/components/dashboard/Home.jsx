import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { RiHourglassFill, RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoNewspaper } from "react-icons/io5";

const Home = () => {
  let date = Date();
  const [value, setValue] = useState(dayjs(date));

  function handleDateChange(newDate) {
    setValue(newDate);
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <div className="text-[1.6rem] leading-[2rem] text-[var(--primary)] flex gap-4">
          <span className="font-light">Date & Time:</span>
          <span className="font-semibold">Tue 2 Apr, 10:18 AM</span>
        </div>
        <div className="datepicker-container">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={value}
              onChange={(newDate) => handleDateChange(newDate)}
              format="DD-MM-YYYY"
              slotProps={{
                textField: {
                  className: "text-[1.6rem] font-semibold",
                  InputProps: {
                    style: { fontSize: "14px", color: "var(--primary)" },
                  },
                },
              }}
            />
          </LocalizationProvider>
        </div>
      </div>

      <div className="flex gap-14">
        <div className="status-card flex gap-8 items-center">
          <span className="bg-[#FFE0EB] inline-block h-[6rem] w-[6rem] rounded-full">
            <RiMoneyRupeeCircleFill className="inline-block p-5 h-full w-full fill-[#FF82AC]" />
          </span>
          <div className="flex flex-col gap-4">
            <p className="card-label">Total Pending Due Amount</p>
            <p className="card-price">₹250</p>
          </div>
        </div>

        <div className="status-card flex gap-8 items-center">
          <span className="bg-[#DCFAF8] inline-block h-[6rem] w-[6rem] rounded-full">
            <IoNewspaper className="inline-block p-7 h-full w-full fill-[#16DBCC]" />
          </span>
          <div className="flex flex-col gap-4">
            <p className="card-label">Lifetime Total Order Number</p>
            <p className="card-price">1000</p>
          </div>
        </div>

        <div className="status-card flex gap-8 items-center">
          <span className="bg-[#FEF7E7] inline-block h-[6rem] w-[6rem] rounded-full">
            <RiHourglassFill className="inline-block p-6 h-full w-full fill-[#F2B413]" />
          </span>
          <div className="flex flex-col gap-4">
            <p className="card-label">Total In Progress Orders</p>
            <p className="card-price">10</p>
          </div>
        </div>
      </div>

      <div className="booking-list">
        <h3>Your Booking List</h3>
      </div>
    </div>
  );
};

export default Home;
