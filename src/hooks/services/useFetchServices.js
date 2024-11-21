import toast from "react-hot-toast";

const useFetchServices = () => {

  const baseURL = import.meta.env.VITE_BASE_URL;
  const fetchServices = async () => {
    try {
      const response = await fetch(`${baseURL}/web/services`, {
        method: "GET",
      });
      const data = await response.json();
      if (response.ok) {
        return data.data.services;
      } else {
        toast.error("Failed to fetch services!");
      }
    } catch {
      toast.error("Failed to fetch services!");
    }
  };
  
  return { fetchServices };
};

export default useFetchServices;
