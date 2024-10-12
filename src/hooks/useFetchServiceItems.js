import { useEffect, useState } from "react";

const useFetchServiceItems = (category_id, sid) => {
  const [categoryItems, setCategoryItems] = useState([]);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = import.meta.env.VITE_TOKEN;
  const service_id = sid;

  useEffect(() => {
    const fetchServiceItems = async () => {
      try {
        const response = await fetch(
          `${baseURL}/mobile/products?category_id=${category_id}&service_id=${service_id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setCategoryItems(data.data);
        console.log(`calling api - service id ${service_id} category id : ${category_id}`);
        // console.log("Output : ",data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchServiceItems();
  }, [baseURL, token, category_id, service_id]);

  return { categoryItems };
};

export default useFetchServiceItems;
