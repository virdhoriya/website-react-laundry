import toast from "react-hot-toast";

const useGetPriceList = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const getPriceList = async () => {
    try {
      const response = await fetch(`${baseURL}/prices/customer`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        toast.error("Failed to fetch price list!");
        return false;
      }
    } catch {
      toast.error("Failed to fetch price list!");
      return false;
    }
  };

  return { getPriceList };
};

export default useGetPriceList;
