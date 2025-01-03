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
          toast.error("Failed to fetch shipping charge");
        }
      } catch {
        toast.error("Failed to fetch shipping charge information!");
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, [baseURL, dispatch]);

  return { loading };
};

export default useFetchSettings;
