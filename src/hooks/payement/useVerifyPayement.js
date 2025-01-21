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
        toast.success("Payment verification failed. Please try again later.", {
          className: "toast-error",
        });
        return { status: false };
      }
    } catch {
      toast.error(
        "An error occurred while verifying the payment. Please check your connection.",
        {
          className: "toast-error",
        }
      );
      return { status: false };
    } finally {
      setLoading(false);
    }
  };

  return { verifyPayement, loading };
};

export default useVerifyPayement;
