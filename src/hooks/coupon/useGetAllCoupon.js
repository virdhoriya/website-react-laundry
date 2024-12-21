import { useState } from "react";
import toast from "react-hot-toast";

const useGetAllCoupon = () => {
  const [loading, setLoading] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const getAllCoupon = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/customer/coupon`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setCoupons(data?.data?.result);
      } else {
        toast.error("Failed to get coupon codes!");
      }
    } catch {
      toast.error("Failed to get coupon codes!");
    } finally {
      setLoading(false);
    }
  };

  return { getAllCoupon, loading, coupons };
};

export default useGetAllCoupon;
