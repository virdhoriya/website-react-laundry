import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setShippingInfo } from "../../redux/slices/shippingSlice";

const useFetchShippingInfo = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchShippingInfo = async () => {
      try {
        const response = await fetch(`${baseURL}/settings`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          dispatch(setShippingInfo(data.data));
        } else {
          toast.error("Failed to fetch shipping charge");
        }
      } catch {
        toast.error("Failed to fetch shipping charge information!");
      } finally {
        setLoading(false);
      }
    };
    fetchShippingInfo();
  }, [baseURL, dispatch, token]);

  return { loading };
};

export default useFetchShippingInfo;
