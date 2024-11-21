import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useFetchCategories = (selectedServiceId) => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      if (!selectedServiceId) return;
      try {
        const response = await fetch(
          `${baseURL}/web/categories?service_id=${selectedServiceId}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        if (response.ok) {
          setCategories(data?.data);
        } else {
          toast.error("Failed to fetch categories!");
        }
      } catch {
        toast.error("Failed to fetch categories !");
      }
    };
    getCategories();
  }, [baseURL, selectedServiceId]);

  return { categories };
};

export default useFetchCategories;
