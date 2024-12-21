import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useFetchBanners = () => {
  const [loading, setLoading] = useState(true);
  const [banners, setBanners] = useState([]);
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await fetch(`${baseURL}/web/banners`, {
          method: "GET",
        });

        const data = await response.json();
        if (response.ok) {
          setBanners(data?.data?.banner || []);
        } else {
          toast.error("Failed to fetch banners!");
        }
      } catch {
        toast.error("Failed to fetch banners!");
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, [baseURL]);

  return { loading, banners };
};

export default useFetchBanners;
