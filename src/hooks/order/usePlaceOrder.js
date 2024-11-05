import toast from "react-hot-toast";

const usePlaceOrder = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

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
          payment_status: 3,
          address_id,
          user_id: 74,
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
    }
  };

  return { placeOrder };
};

export default usePlaceOrder;
