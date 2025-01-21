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
        toast.error(
          data?.message ||
            "We encountered an issue while fetching categories. Please try again.",
          {
            className: "toast-error",
          }
        );
      }
    } catch {
      toast.error(
        "Failed to fetch categories. Please check your connection and try again.",
        {
          className: "toast-error",
        }
      );
    }
  };

  return { fetchCategories };
};

export default useFetchCategories;
