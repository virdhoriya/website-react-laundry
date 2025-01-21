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
        toast.error("Failed to retrieve price list. Please try again later.", {
          className: "toast-error",
        });
        return false;
      }
    } catch {
      toast.error(
        "Failed to load pricing information. Please check your connection and try again.",
        {
          className: "toast-error",
        }
      );
      return false;
    }
  };

  return { getPriceList };
};

export default useGetPriceList;
