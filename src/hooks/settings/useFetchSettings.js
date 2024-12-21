import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSettings } from "../../redux/slices/settingSlice";
import toast from "react-hot-toast";

const useFetchSettings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");
  const authStatus = useSelector((state) => state?.auth?.isAuthenticated);

  useEffect(() => {
    if (!authStatus || !token) {
      setLoading(false);
      return;
    }

    const fetchSettings = async () => {
      try {
        const response = await fetch(`${baseURL}/settings`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
  }, [authStatus, baseURL, dispatch, token]);

  return { loading };
};

export default useFetchSettings;
