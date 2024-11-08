import toast from "react-hot-toast";

const useFetchAddress = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");
  const fetchAddress = async () => {
    try {
      const response = await fetch(`${baseURL}/address`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        return data.data.result;
      } else {
        toast.error("Failed to fetch address data!");
        return false;
      }
    } catch {
      toast.error("Failed to fetch address data!");
      return false;
    }
  };

  return { fetchAddress };
};

export default useFetchAddress;
