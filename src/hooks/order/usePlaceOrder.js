import { useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const usePlaceOrder = () => {
  const [loading, setLoading] = useState(false);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");
  const user_id = useSelector((state) => state.user.user.user_id);

  const placeOrder = async (
    items,
    sub_total,
    description,
    coupon_code,
    shipping_charges,
    payment_type,
    address_id
  ) => {
    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          items,
          description,
          coupon_code,
          sub_total,
          shipping_charges,
          payment_type,
          order_status: 1,
          payment_status: 1,
          address_id,
          user_id,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success("Order placed successfully!");
        return data.data;
      } else {
        toast.error(data.message);
        return false;
      }
    } catch {
      toast.error("Failed to place an order!");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { placeOrder, loading };
};

export default usePlaceOrder;
