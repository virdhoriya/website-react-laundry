import { useState } from "react";
import toast from "react-hot-toast";

const useGetTransactionId = () => {
  const [loading, setLoading] = useState(false);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const getTransactionId = async (amount) => {
    if (!amount) {
      toast.error("Amount is required to generate the transaction id.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/razorpay/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error("Failed to create order !");
        return;
      }
      return data?.razorpay_order_id;
    } catch {
      toast.error("Failed to create order !");
      return;
    } finally {
      setLoading(false);
    }
  };

  return { getTransactionId, loading };
};

export default useGetTransactionId;
