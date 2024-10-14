import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useFetchServices = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await fetch(`${baseURL}/web/services`, {
          method: "GET",
        });
        const data = await response.json();
        if (response.ok) {
          setServices(data?.data?.services);
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        toast.error("Unable to fetch services !");
      }
    };

    getServices();
  }, [baseURL]);

  return { services };
};

export default useFetchServices;
