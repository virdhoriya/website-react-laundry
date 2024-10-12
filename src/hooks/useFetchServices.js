import { useState, useEffect } from "react";

const useFetchServices = () => {
  const [services, setServices] = useState([]);
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${baseURL}/admin/services`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InR1c2hhcjFAZ21haWwuY29tIiwidXNlcl9pZCI6MTMsInJvbGVfaWQiOjEsImlhdCI6MTcyNzc5MTg1MSwiZXhwIjoxNzI3Nzk1NDUxfQ.xE8EWtxIU9MpvWvTM8BL_Lx5nOpYrMGsM1hx0ftAtFg",
          },
        });
        const data = await response.json();
        setServices(data.data.services);
      } catch (error) {
        console.log(error);
      }
    };

    fetchServices();
  }, [baseURL]);

  return { services };
};

export default useFetchServices;
