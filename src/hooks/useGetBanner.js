import { useEffect, useState } from "react";

const useGetBanner = () => {
  const [banners, setBanners] = useState([]);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = import.meta.env.VITE_TOKEN;

  useEffect(() => {
    const getBanner = async () => {
      try {
        const response = await fetch(`${baseURL}/admin/banners`, {
          method: "GET",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inp0OHpAZ21haWwuY29tIiwidXNlcl9pZCI6MzAsInJvbGVfaWQiOjEsImlhdCI6MTcyODQ1MjkwOCwiZXhwIjoxNzI4NDU2NTA4fQ.qxpM4TXTVVX2Dv_0TGNFzZogjE4foPrikMQS9oU8qvE`,
          },
        });

        const data = await response.json();

        data.statusCode === 200
          ? setBanners(data.data)
          : console.log("Data not found");
      } catch (error) {
        console.log(`ERROR : ${error}`);
      }
    };

    getBanner();
  }, [baseURL, token]);

  return { banners };
};

export default useGetBanner;
