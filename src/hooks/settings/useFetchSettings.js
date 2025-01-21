import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSettings } from "../../redux/slices/settingSlice";
import toast from "react-hot-toast";

const useFetchSettings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch(`${baseURL}/settings`, {
          method: "GET",
        });
        const data = await response.json();
        if (response.ok) {
          dispatch(setSettings(data?.data));
        } else {
          toast.error(
            data?.message ||
              "Failed to retrieve settings. Please try again later.",
            {
              className: "toast-error",
            }
          );
        }
      } catch {
        toast.error(
          "An unexpected error occurred while fetching settings. Please check your network connection and try again.",
          {
            className: "toast-error",
          }
        );
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, [baseURL, dispatch]);

  return { loading };
};

export default useFetchSettings;
