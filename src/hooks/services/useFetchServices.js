import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useFetchServices = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${baseURL}/web/services`, {
          method: "GET",
        });

        const data = await response.json();
        if (response.ok) {
          setServices(data?.data?.services);
        } else {
          toast.error(
            data?.message ||
              "We encountered an issue while fetching services. Please try again.",
            {
              className: "toast-error",
            }
          );
        }
      } catch {
        toast.error(
          "Failed to fetch services. Please check your connection and try again.",
          {
            className: "toast-error",
          }
        );
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, [baseURL]);

  return { services, loading };
};

export default useFetchServices;
