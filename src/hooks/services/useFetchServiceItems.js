import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setPruducts } from "../../redux/slices/productSlice";

const useFetchServiceItems = (service_id, category_id) => {
  const dispatch = useDispatch();
  const baseURL = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchServiceItems = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const headers = {};

        if (token) {
          headers.Authorization = `Bearer ${token}`;
        }

        const response = await fetch(
          `${baseURL}/web/products?category_id=${category_id}&service_id=${service_id}`,
          {
            method: "GET",
            headers,
          }
        );
        const data = await response.json();
        if (response.ok) {
          dispatch(setPruducts(data?.data));
        } else {
          toast.error(
            data?.message ||
              "There was an issue retrieving the products. Please try again later.",
            {
              className: "toast-error",
            }
          );
        }
      } catch {
        toast.error(
          "Failed to load products. Please check your connection and try again.",
          {
            className: "toast-error",
          }
        );
      } finally {
        setLoading(false);
      }
    };

    if (service_id && category_id) {
      fetchServiceItems();
    }
  }, [service_id, category_id, dispatch, baseURL]);

  return { loading };
};

export default useFetchServiceItems;
