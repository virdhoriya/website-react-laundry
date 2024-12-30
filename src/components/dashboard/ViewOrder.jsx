/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useGetOrderDetail from "../../hooks/dashboard/useGetOrderDetail";
import dayjs from "dayjs";
import useDownloadInvoice from "../../hooks/invoice/useDownloadInvoice";
import toast from "react-hot-toast";
import { PiDownloadSimpleBold } from "react-icons/pi";

const ViewOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getOrderDetail } = useGetOrderDetail();
  const [order, setOrder] = useState([]);
  const { downloadInvoice, loading } = useDownloadInvoice();
  const ptMap = {
    1: "Cash on delivery",
    2: "Online payement",
  };

  const psMap = {
    1: "pending payemtn",
    2: "full payement received",
    3: "partial payement received",
  };

  const hanldeInvoiceDownload = async () => {
    const result = await downloadInvoice(location.state.order_id);
    if (result) {
      toast.success("Invoice download successfull");
    }
  };

  useEffect(() => {
    if (!location?.state) {
      navigate("/dashboard/home");
    } else {
      const fetchOrderDetail = async () => {
        const result = await getOrderDetail(location.state.order_id);
        if (result) {
          setOrder(result);
        }
      };
      fetchOrderDetail();
    }
  }, [location, navigate]);

  return (
    <div className="flex flex-col gap-8">
      <div className="text-3xl font-semibold py-4 px-6 rounded-2xl leading-[4rem] bg-white text-[var(--black)] border border-[#b9bccf4d] flex items-center justify-between">
        <span>Order Details : #{location.state.order_id}</span>
        <span
          className="flex justify-center items-center h-14 w-14 p-3 bg-gray-100 rounded-full border border-[#b9bccf4d]"
          onClick={hanldeInvoiceDownload}
        >
          {loading ? (
            <span className="inline-block h-7 w-7 rounded-full border-2 border-indigo-100 border-t-indigo-600 border-r-indigo-600 animate-spin"></span>
          ) : (
            <PiDownloadSimpleBold className="h-full w-full fill-[var(--primary)]" />
          )}
        </span>
      </div>
      <div className="flex justify-between items-start">
        <div className="basis-[48.8%] space-y-8">
          <div className="py-10 px-12 order-list-container flex flex-col gap-6">
            <div className="text-[1.7rem] text-[var(--black)] font-medium lowercase mb-2">
              order items
            </div>
            {order?.items?.map((item) => {
              const { item_id, product, category } = item;
              return (
                <div
                  key={item_id}
                  className="border border-[#b9bccf4d] rounded-lg p-2 flex justify-start gap-8 bg-slate-50"
                >
                  <img
                    src={product.image}
                    alt="product image"
                    className="inline-block max-h-16 max-w-16"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg">{product.name}</h3>
                    <h4 className="text-base text-[#78829d]">
                      Category: {category.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cus-info-container">
            <div className="text-[1.7rem] text-[var(--black)] font-medium py-5 px-12 border-b border-[#b9bccf4d]">
              order summary
            </div>
            <div className="text-[1.4rem] text-[var(--black)] font-medium py-8 px-12">
              <div className="flex flex-col gap-8 font-normal">
                <div>
                  <span className="inline-block text-[#99A1b7] w-[19rem]">
                    Sub Total
                  </span>
                  <span>₹{order?.sub_total}</span>
                </div>
                <div>
                  <span className="inline-block text-[#99A1b7] w-[19rem]">
                    Shipping charges
                  </span>
                  <span>₹{order?.shipping_charges}</span>
                </div>
                <div>
                  <span className="inline-block text-[#99A1b7] w-[19rem]">
                    Express Delivery Charges
                  </span>
                  <span>₹{order?.express_delivery_charges || "0"}</span>
                </div>
                <div>
                  <span className="inline-block text-[#99A1b7] w-[19rem]">
                    Kasar amount
                  </span>
                  <span>₹{order?.kasar_amount || "0"}</span>
                </div>
                <div>
                  <span className="inline-block text-[#99A1b7] w-[19rem]">
                    Coupon Code
                  </span>
                  <span>{order?.coupon_code || "N/A"}</span>
                </div>
                <div>
                  <span className="inline-block text-[#99A1b7] w-[19rem]">
                    Coupon Discount
                  </span>
                  <span>₹{order?.coupon_discount || "0"}</span>
                </div>
                <div>
                  <span className="inline-block text-[#99A1b7] w-[19rem]">
                    Total
                  </span>
                  <span>₹{order?.total || "0"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-[48.8%] space-y-8">
          <div className="common-container">
            <div className="text-[1.7rem] text-[var(--primary)] font-medium py-5 px-12 border-b border-[#b9bccf4d] capitalize">
              customer information
            </div>
            <div className="text-[1.4rem] text-[var(--black)] font-medium py-8 px-12">
              <div className="flex flex-col gap-8 font-normal">
                <div>
                  <span className="info-label">Name</span>
                  <span className="info-ans">
                    {order?.user?.first_name + " " + order?.user?.last_name}
                  </span>
                </div>
                <div>
                  <span className="info-label">Email</span>
                  <span className="info-ans">{order?.user?.email}</span>
                </div>
                <div>
                  <span className="info-label">Mobile Number</span>
                  <span className="info-ans">{order?.user?.mobile_number}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="common-container py-5 px-12 space-y-4">
            <h3 className="text-[1.7rem] text-[var(--primary)] font-medium capitalize">
              shipping address
            </h3>
            <p className="info-label address">{order?.address_details}</p>
          </div>

          <div className="common-container">
            <div className="text-[1.7rem] text-[var(--black)] font-medium py-5 px-12 border-b border-[#b9bccf4d]">
              payement information
            </div>
            <div className="text-[1.4rem] text-[var(--black)] font-medium py-8 px-12">
              <div className="flex flex-col gap-8 font-normal">
                <div>
                  <span className="inline-block text-[#99A1b7] w-[13rem]">
                    payement type :
                  </span>
                  <span>{ptMap[order?.payment_type]}</span>
                </div>
                <div>
                  <span className="inline-block text-[#99A1b7] w-[13rem]">
                    payement status :
                  </span>
                  <span>{psMap[order?.payment_status]}</span>
                </div>
                <div>
                  <span className="inline-block text-[#99A1b7] w-[13rem]">
                    Transaction ID :
                  </span>
                  <span>{order?.transaction_id || "N/A"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="common-container">
            <div className="text-[1.7rem] text-[var(--black)] font-medium py-5 px-12 border-b border-[#b9bccf4d]">
              Estimated Delivery & Pickup
            </div>
            <div className="text-[1.4rem] text-[var(--black)] font-medium py-8 px-12">
              <div className="flex flex-col gap-8 font-normal">
                <div>
                  <span className="inline-block text-[#99A1b7] w-[18rem]">
                    Estimated Pickup Time:
                  </span>
                  <span>
                    {dayjs(order?.estimated_pickup_time).format("DD/MM/YYYY")}
                  </span>
                </div>
                <div>
                  <span className="inline-block text-[#99A1b7] w-[18rem]">
                    Estimated Delivery Time:
                  </span>
                  <span>
                    {dayjs(order?.estimated_delivery_time).format("DD/MM/YYYY")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
