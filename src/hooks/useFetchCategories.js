import { useEffect, useState } from "react";

const useFetchCategories = (selectedSerivceId) => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = import.meta.env.VITE_TOKEN;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async (selectedSerivceId) => {
      try {
        const response = await fetch(
          `${baseURL}/mobile/categories?service_id=${selectedSerivceId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories(selectedSerivceId);
  }, [baseURL, selectedSerivceId, token]);

  return { categories };
};

export default useFetchCategories;
