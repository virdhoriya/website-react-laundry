import toast from "react-hot-toast";

const useFetchServiceItems = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const fetchServiceItems = async (category_id, service_id) => {
    try {
      const response = await fetch(
        `${baseURL}/web/products?category_id=${category_id}&service_id=${service_id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      if (response.ok) {
        return data?.data;
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
  return { fetchServiceItems };
};

export default useFetchServiceItems;
