/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { RiHourglassFill, RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoCaretDown, IoCaretUp, IoNewspaper } from "react-icons/io5";
import useGetOrders from "../../hooks/dashboard/useGetOrders";
import Loading from "./Loading";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
  FaEye,
} from "react-icons/fa";
import useGetOrders02 from "../../hooks/dashboard/useGetOrders02";

const Home = () => {
  const { getOrders } = useGetOrders();
  const { getOrders02 } = useGetOrders02();
  const [orders, setOrders] = useState([]);
  const [ipoCount, setIpoCount] = useState(0);
  const [totalDueAmt, SetTotalDueAmt] = useState(0);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRows, setTotalRows] = useState(0);
  const [activeBtn, setActiveBtn] = useState(1);
  const [sortOrder, setSortOrder] = useState("asc");
  const navigate = useNavigate();

  const handlePageClick = async (page) => {
    setLoading(true);
    setCurrentPage(page);
    const result = await getOrders02(page);
    if (result) {
      setOrders(result.result);
      setLoading(false);
    }
  };

  const handleUpDownClick = async (order_by) => {
    if (sortOrder == "desc") {
      setSortOrder("asc");
      const result = await getOrders02(currentPage, sortOrder, order_by);
      if (result) {
        setOrders(result.result);
      }
    } else {
      setSortOrder("desc");
      const result = await getOrders02(currentPage, sortOrder, order_by);
      if (result) {
        setOrders(result.result);
      }
    }
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const result = await getOrders();
      if (result) {
        SetTotalDueAmt(result?.totalPendingAmount?.total_pending_due_amount);
        setIpoCount(result.inProgressCount);
        setTotalRows(result.count);
        setCount(Math.ceil(result.count / 10));
        setOrders(result.result);
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-14">
        <div className="status-card flex gap-8 items-center">
          <span className="bg-[#FFE0EB] inline-block h-[6rem] w-[6rem] rounded-full">
            <RiMoneyRupeeCircleFill className="inline-block p-5 h-full w-full fill-[#FF82AC]" />
          </span>
          <div className="flex flex-col gap-4">
            <p className="card-label">Total Pending Due Amount</p>
            <p className="card-price">₹{totalDueAmt || "0"}</p>
          </div>
        </div>

        <div className="status-card flex gap-8 items-center">
          <span className="bg-[#DCFAF8] inline-block h-[6rem] w-[6rem] rounded-full">
            <IoNewspaper className="inline-block p-7 h-full w-full fill-[#16DBCC]" />
          </span>
          <div className="flex flex-col gap-4">
            <p className="card-label">Lifetime Total Order Number</p>
            <p className="card-price">{totalRows}</p>
          </div>
        </div>

        <div className="status-card flex gap-8 items-center">
          <span className="bg-[#FEF7E7] inline-block h-[6rem] w-[6rem] rounded-full">
            <RiHourglassFill className="inline-block p-6 h-full w-full fill-[#F2B413]" />
          </span>
          <div className="flex flex-col gap-4">
            <p className="card-label">Total In Progress Orders</p>
            <p className="card-price">{ipoCount}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <h3 className="booking-title">Your Booking List</h3>
        <div className="orders-table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th
                  className="flex items-center justify-center gap-2 cursor-pointer"
                  onClick={() => handleUpDownClick("order_id")}
                >
                  <span>order id</span>
                  <span className="flex flex-col">
                    <IoCaretUp className="updown-icon" />
                    <IoCaretDown className="updown-icon" />
                  </span>
                </th>
                <th
                  className="flex items-center justify-center gap-2 cursor-pointer"
                  onClick={() => handleUpDownClick("created_at")}
                >
                  <span>booking date</span>
                  <span className="flex flex-col">
                    <IoCaretUp className="updown-icon" />
                    <IoCaretDown className="updown-icon" />
                  </span>
                </th>
                <th
                  className="flex items-center justify-center gap-2 cursor-pointer"
                  onClick={() => handleUpDownClick("estimated_delivery_time")}
                >
                  <span>delivery date</span>
                  <span className="flex flex-col">
                    <IoCaretUp className="updown-icon" />
                    <IoCaretDown className="updown-icon" />
                  </span>
                </th>
                <th
                  className="flex items-center justify-center gap-2 cursor-pointer"
                  onClick={() => handleUpDownClick("total")}
                >
                  <span>amount</span>
                  <span className="flex flex-col">
                    <IoCaretUp className="updown-icon" />
                    <IoCaretDown className="updown-icon" />
                  </span>
                </th>
                <th
                  className="flex items-center justify-center gap-2 cursor-pointer"
                  onClick={() => handleUpDownClick("kasar_amount")}
                >
                  <span>kasar</span>
                  <span className="flex flex-col">
                    <IoCaretUp className="updown-icon" />
                    <IoCaretDown className="updown-icon" />
                  </span>
                </th>
                <th
                  className="flex items-center justify-center gap-2 cursor-pointer"
                  onClick={() => handleUpDownClick("paid_amount")}
                >
                  <span>paid amount</span>
                  <span className="flex flex-col">
                    <IoCaretUp className="updown-icon" />
                    <IoCaretDown className="updown-icon" />
                  </span>
                </th>
                <th
                  className="flex items-center justify-center gap-2 cursor-pointer"
                  onClick={() => handleUpDownClick("order_status")}
                >
                  <span>status</span>
                  <span className="flex flex-col">
                    <IoCaretUp className="updown-icon" />
                    <IoCaretDown className="updown-icon" />
                  </span>
                </th>
                <th>
                  <span>View</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {totalRows > 0 ? (
                orders.map((order, index) => {
                  const {
                    order_id,
                    total,
                    created_at,
                    estimated_delivery_time,
                    kasar_amount,
                    paid_amount,
                    order_status,
                    order_status_name,
                  } = order;

                  return (
                    <tr key={index}>
                      <td>{order_id}</td>
                      <td>{dayjs(created_at).format("DD/MM/YYYY, hh:mm A")}</td>
                      <td>
                        {dayjs(estimated_delivery_time).format("DD/MM/YYYY")}
                      </td>
                      <td>₹{total}</td>
                      <td>₹{kasar_amount}</td>
                      <td>{paid_amount || "₹0"}</td>
                      <td
                        style={{ padding: "5px", textAlign: "left" }}
                        className="flex items-center justify-center"
                      >
                        {order_status == 1 && (
                          <span className="inline-block px-4 rounded-xl bg-[#FEF7E7] text-[#F2B413] font-medium text-[1rem] leading-[2.4rem]">
                            {order_status_name}
                          </span>
                        )}
                        {order_status == 2 && (
                          <span className="inline-block px-4 rounded-xl bg-[#E8E9EF] text-[#161F5F] font-medium text-[1rem] leading-[2.4rem]">
                            In Process
                          </span>
                        )}
                        {order_status == 3 && (
                          <span className="inline-block px-4 rounded-xl bg-[#FAEEE7] text-[#CC5511] font-medium text-[1rem] leading-[2.4rem]">
                            Picked Up
                          </span>
                        )}
                        {order_status == 4 && (
                          <span className="inline-block px-4 rounded-xl bg-[#EBF8FB] text-[#39B8D3] font-medium text-[1rem] leading-[2.4rem]">
                            Out for Delivery
                          </span>
                        )}
                        {order_status == 5 && (
                          <span className="inline-block px-4 rounded-xl bg-[#EBFBF1] text-[#39D377] font-medium text-[1rem] leading-[2.4rem]">
                            Delivered
                          </span>
                        )}
                      </td>
                      <td
                        style={{ padding: "5px" }}
                        className="flex items-center justify-center"
                      >
                        <FaEye
                          className="inline-block h-8 w-8 cursor-pointer"
                          onClick={() =>
                            navigate("/dashboard/view-order", {
                              state: { order_id },
                            })
                          }
                        />
                      </td>
                    </tr>
                  );
                })
              ) : (
                <td>No record found !</td>
              )}
            </tbody>
          </table>

          <div className="bg-white flex items-center justify-between px-8">
            {totalRows > 10 && (
              <>
                <p className="current-page-num">
                  Showing{" "}
                  {(currentPage === 1 && "1") || (currentPage - 1) * 10 + 1} to{" "}
                  {currentPage === count ? totalRows : currentPage * 10} entries
                </p>
                <div className="flex items-center gap-4">
                  <button
                    className={`pagination-btn ${
                      activeBtn === -2 && "active-page"
                    }`}
                    onClick={() => {
                      if (currentPage !== 1) {
                        handlePageClick(1);
                        setActiveBtn(-2);
                      }
                    }}
                  >
                    <FaAngleDoubleLeft className="page-icon" />
                  </button>
                  <button
                    className={`pagination-btn ${
                      activeBtn === -1 && "active-page"
                    }`}
                    onClick={() => {
                      if (currentPage !== 1) {
                        handlePageClick(currentPage - 1);
                        setActiveBtn(-1);
                      }
                    }}
                  >
                    <FaAngleLeft className="page-icon" />
                  </button>
                  <button
                    className={`pagination-btn ${
                      activeBtn === 1 && "active-page"
                    }`}
                    onClick={() => {
                      if (currentPage !== 1) {
                        handlePageClick(1);
                        setActiveBtn(1);
                      }
                    }}
                  >
                    <span className="page-num">1</span>
                  </button>
                  {count > 1 && (
                    <button
                      className={`pagination-btn ${
                        activeBtn === 2 && "active-page"
                      }`}
                      onClick={() => {
                        if (currentPage !== 2) {
                          handlePageClick(2);
                          setActiveBtn(2);
                        }
                      }}
                    >
                      <span className="page-num">2</span>
                    </button>
                  )}
                  {count > 2 && (
                    <button
                      className={`pagination-btn ${
                        activeBtn === 3 && "active-page"
                      }`}
                      onClick={() => {
                        if (currentPage !== 3) {
                          handlePageClick(3);
                          setActiveBtn(3);
                        }
                      }}
                    >
                      <span className="page-num">3</span>
                    </button>
                  )}
                  {count > 3 && (
                    <>
                      <button className="pagination-btn border-transparent">
                        <span className="page-num">...</span>
                      </button>
                      <button
                        className={`pagination-btn ${
                          activeBtn === count && "active-page"
                        }`}
                        onClick={() => {
                          if (currentPage !== count) {
                            handlePageClick(count);
                            setActiveBtn(count);
                          }
                        }}
                      >
                        <span className="page-num">{count}</span>
                      </button>
                    </>
                  )}
                  <button
                    className={`pagination-btn ${
                      activeBtn === 100 && "active-page"
                    }`}
                  >
                    <FaAngleRight
                      className="page-icon"
                      onClick={() => {
                        if (currentPage !== count) {
                          handlePageClick(currentPage + 1);
                          setActiveBtn(100);
                        }
                      }}
                    />
                  </button>
                  <button
                    className={`pagination-btn ${
                      activeBtn === 200 && "active-page"
                    }`}
                  >
                    <FaAngleDoubleRight
                      className="page-icon"
                      onClick={() => {
                        if (currentPage !== count) {
                          handlePageClick(count);
                          setActiveBtn(200);
                        }
                      }}
                    />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
