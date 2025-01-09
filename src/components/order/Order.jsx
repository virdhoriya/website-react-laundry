import "./order.css";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState({});
  const [orderDate, setOrderDate] = useState("");

  const payementMap = {
    1: "Cash on delivery",
    2: "Online Payement",
  };

  useEffect(() => {
    if (!location.state) {
      navigate("/cart");
    } else {
      setOrderData(location?.state?.result?.orderDetail);
      const date = new Date(location?.state?.result?.orderDetail?.created_at);
      const day = date.getDate();
      const month = date.toLocaleString("en-US", { month: "short" });
      const year = date.getFullYear();
      setOrderDate(`${day} ${month} ${year}`);
      setLoading(false);
    }
  }, [location, location.state, navigate]);

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <section className="bg-white py-8 antialiased md:py-24">
        <div className="mx-auto px-4 flex flex-col items-stretch gap-10 order-container">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Thanks for your order!
          </h2>
          <p className="text-[1.5rem] leading-[2.6rem] font-normal text-[var(--black)]">
            Your order{" "}
            <span className="font-bold text-[var(--primary)]">{`#${orderData.order_id}`}</span>{" "}
            will be processed within 24 hours during working days. We will
            notify you by email once your order has been shipped.
          </p>
          <div className="rounded-lg border border-gray-50 bg-[#F9FAFB] p-8 mb-6 flex flex-col gap-6 text-[1.5rem]">
            <dl className="flex items-center justify-between gap-12">
              <dt className="font-medium mb-1 text-gray-500">Name</dt>
              <dd className="font-medium text-[var(--black)] sm:text-end">
                {orderData?.user?.first_name + " " + orderData?.user?.last_name}
              </dd>
            </dl>
            <dl className="flex items-center justify-between gap-12">
              <dt className="font-medium mb-1 text-gray-500">Phone</dt>
              <dd className="font-medium text-[var(--black)] sm:text-end">
                +91 {orderData?.user?.mobile_number}
              </dd>
            </dl>
            <dl className="flex items-center justify-between gap-12">
              <dt className="font-medium mb-1 text-gray-500">Address</dt>
              <dd className="font-medium text-[var(--black)] sm:text-end">
                {orderData.address_details}
              </dd>
            </dl>
            <dl className="flex items-center justify-between gap-12">
              <dt className="font-medium mb-1 text-gray-500">Date</dt>
              <dd className="font-medium text-[var(--black)]">{orderDate}</dd>
            </dl>
            <dl className="flex items-center justify-between gap-12">
              <dt className="font-medium mb-1 text-gray-500">Payment Method</dt>
              <dd className="font-medium text-[var(--black)] sm:text-end">
                {payementMap[location?.state?.paymentMethod] || "N/A"}
              </dd>
            </dl>

            <dl className="flex items-center justify-between gap-12">
              <dt className="font-medium mb-1 text-gray-500">Total Amount</dt>
              <dd className="font-medium text-[var(--black)] sm:text-end">
                ₹ {orderData.total}
              </dd>
            </dl>
            {orderData.transaction_id && (
              <dl className="flex items-center justify-between gap-12">
                <dt className="font-medium mb-1 text-gray-500">
                  Transaction Id
                </dt>
                <dd className="font-medium text-[var(--black)] sm:text-end">
                  {orderData.transaction_id}
                </dd>
              </dl>
            )}
          </div>
          <div className="flex items-center gap-8">
            <Link
              to="/dashboard/home"
              className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-200 rounded-lg text-xl px-5 py-4 font-semibold"
            >
              Track your order
            </Link>
            <Link
              to="/services"
              className="px-5 py-4 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:text-indigo-700 focus:ring-4 focus:ring-gray-200"
            >
              Return to shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }
};

export default Order;
