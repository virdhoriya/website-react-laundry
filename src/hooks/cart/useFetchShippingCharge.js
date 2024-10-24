import toast from "react-hot-toast";

const useFetchShippingCharge = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");
  const fetchShippingCharge = async () => {
    try {
      const response = await fetch(`${baseURL}/settings`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        return data.data;
      } else {
        toast.error("Failed to fetch shipping charge");
      }
    } catch {
      toast.error("Failed to fetch shipping charge information!");
    }
  };

  return { fetchShippingCharge };
};

export default useFetchShippingCharge;
