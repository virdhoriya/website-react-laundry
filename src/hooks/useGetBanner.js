import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetBanner = () => {
  const [banners, setBanners] = useState([]);
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getBanner = async () => {
      try {
        const response = await fetch(`${baseURL}/web/banners`, {
          method: "GET",
        });

        const data = await response.json();
        if (response.ok) {
          setBanners(data?.data);
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        toast("Unable to fecth banners !");
      }
    };

    getBanner();
  }, [baseURL]);

  return { banners };
};

export default useGetBanner;
