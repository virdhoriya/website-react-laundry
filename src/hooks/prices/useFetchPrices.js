import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useFetchPrices = () => {
  const [loading, setLoading] = useState(true);
  const [prices, setPrices] = useState();
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(`${baseURL}/price-content`, {
          method: "GET",
        });
        const data = await response.json();
        if (response.ok) {
          setPrices(data?.data);
        } else {
          toast.error(
            data?.message ||
              "Failed to retrieve pricing information. Please try again later.",
            {
              className: "toast-error",
            }
          );
        }
      } catch {
        toast.error(
          "There was an issue retrieving pricing data. Please check your connection.",
          {
            className: "toast-error",
          }
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, [baseURL]);

  return { prices, loading };
};

export default useFetchPrices;
