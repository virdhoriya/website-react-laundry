import { useState } from "react";
import toast from "react-hot-toast";

const useVerifyPayement = () => {
  const [loading, setLoading] = useState(false);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const verifyPayement = async (param) => {
    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/razorpay/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(param),
      });

      if (response.ok) {
        return { status: true };
      } else {
        toast.success("Failed to verify payement!");
        return { status: false };
      }
    } catch {
      toast.error("Failed to verify payement");
      return { status: false };
    } finally {
      setLoading(false);
    }
  };

  return { verifyPayement, loading };
};

export default useVerifyPayement;
