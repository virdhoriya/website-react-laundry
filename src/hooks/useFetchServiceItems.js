import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useFetchServiceItems = (category_id, sid) => {
  const [categoryItems, setCategoryItems] = useState([]);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const service_id = sid;

  useEffect(() => {
    const fetchServiceItems = async () => {
      try {
        const response = await fetch(
          `${baseURL}/web/products?category_id=${category_id}&service_id=${service_id}'`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        if (response.ok) {
          setCategoryItems(data?.data);
        } else {
          toast.error("Failed to fetch selected category items !", {
            style: {
              maxWidth: "400px",
            },
          });
        }
      } catch {
        toast.error("Failed to fetch selected category items !", {
          style: {
            maxWidth: "400px",
          },
        });
      }
    };

    fetchServiceItems();
  }, [baseURL, category_id, service_id]);

  return { categoryItems };
};

export default useFetchServiceItems;
