import { useState } from "react";
import toast from "react-hot-toast";

const useGetAllCoupon = () => {
  const [loading, setLoading] = useState(false);
  const [coupons, setCoupons] = useState([]);

  const getAllCoupon = async () => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const token = localStorage.getItem("token");

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
        setCoupons(data?.data);
      } else {
        toast.error("Failed to get coupon codes!");
        setCoupons([]);
      }
    } catch {
      toast.error("Failed to get coupon codes!");
      setCoupons([]);
    } finally {
      setLoading(false);
    }
  };

  return { getAllCoupon, loading, coupons };
};

export default useGetAllCoupon;
