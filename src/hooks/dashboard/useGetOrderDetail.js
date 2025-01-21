import toast from "react-hot-toast";

const useGetOrderDetail = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const getOrderDetail = async (order_id) => {
    try {
      const response = await fetch(`${baseURL}/orders/${order_id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        return data.data;
      } else {
        toast.error(
          "Failed to fetch order details. Please check your connection and try again.",
          {
            className: "toast-error",
          }
        );
        return false;
      }
    } catch {
      toast.error(
        "Failed to retrieve the order details. Please try again later.",
        {
          className: "toast-error",
        }
      );
      return false;
    }
  };

  return { getOrderDetail };
};

export default useGetOrderDetail;
