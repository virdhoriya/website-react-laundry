import toast from "react-hot-toast";

const useFetchCategories = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const fetchCategories = async (selectedServiceId) => {
    try {
      const response = await fetch(
        `${baseURL}/web/categories?service_id=${selectedServiceId}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      if (response.ok) {
        return data?.data;
      } else {
        toast.error("Failed to fetch categories!");
      }
    } catch {
      toast.error("Failed to fetch categories !");
    }
  };

  return { fetchCategories };
};

export default useFetchCategories;
