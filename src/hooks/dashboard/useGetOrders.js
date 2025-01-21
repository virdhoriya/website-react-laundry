import toast from "react-hot-toast";

const useGetOrders = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const getOrders = async () => {
    try {
      const response = await fetch(`${baseURL}/orders`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        return data?.data;
      } else {
        toast.error(
          "Failed to fetch orders. Please check your connection and try again.",
          {
            className: "toast-error",
          }
        );
        return false;
      }
    } catch {
      toast.error("Failed to retrieve your orders. Please try again later.", {
        className: "toast-error",
      });
      return false;
    }
  };

  return { getOrders };
};

export default useGetOrders;
