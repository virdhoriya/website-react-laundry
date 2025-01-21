import { useState } from "react";
import toast from "react-hot-toast";

const useApplyCoupon = () => {
  const [loading, setLoading] = useState(false);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const applyCoupon = async (subTotal, couponCode) => {
    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/coupon/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          coupon_code: couponCode,
          order_Total: subTotal,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data?.message || "Coupon applied successfully.", {
          className: "toast-success",
        });
        return data?.data;
      } else {
        toast.error(
          data.message ||
            "Invalid coupon code. Please check the code and try again.",
          {
            className: "toast-error",
          }
        );
        return null;
      }
    } catch {
      toast.error(
        "There was an issue applying the coupon. Please try again later.",
        {
          className: "toast-error",
        }
      );
      return null;
    } finally {
      setLoading(false);
    }
  };
  return { applyCoupon, loading };
};

export default useApplyCoupon;
