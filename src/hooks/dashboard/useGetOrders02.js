import toast from "react-hot-toast";

const useGetOrders02 = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const getOrders02 = async (page, ascdes = "ASC", order_by = "order_id") => {
    try {
      const response = await fetch(
        `${baseURL}/orders?sort_by=${order_by}&order=${ascdes.toUpperCase()}&per_page=10&page_number=${page}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        return data.data;
      } else {
        toast.error("Failed to fetch orders!");
        return false;
      }
    } catch {
      toast.error("Failed to fetch orders!");
      return false;
    }
  };

  return { getOrders02 };
};

export default useGetOrders02;
