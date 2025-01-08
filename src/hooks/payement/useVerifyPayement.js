import { useState } from "react";
import toast from "react-hot-toast";

const useVerifyPayement = () => {
  const [loading, setLoading] = useState(false);
  const baseURL = import.meta.env.VITE_BASE_URL;

  const verifyPayement = async (param) => {
    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/razorpay/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(param),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data?.message);
      } else {
        toast.success("Failed to verify payement!");
      }
    } catch {
      toast.error("Failed to verify payement");
    } finally {
      setLoading(false);
    }
  };

  return { verifyPayement, loading };
};

export default useVerifyPayement;
