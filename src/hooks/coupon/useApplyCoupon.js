import toast from "react-hot-toast";

const useApplyCoupon = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const applyCoupon = async (subTotal, couponCode) => {
    try {
      const response = await fetch(`${baseURL}/coupon/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          coupon_Code: couponCode,
          order_Total: subTotal,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data?.message);
        return data?.data;
      } else {
        toast.error(data.message || "Invalid coupon code.");
        return null;
      }
    } catch {
      toast.error("Failed to apply coupon code!");
      return null;
    }
  };
  return { applyCoupon };
};

export default useApplyCoupon;
