import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useValidateToken = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = window.localStorage.getItem("token");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await fetch(`${baseURL}/auth/validate-token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();
        if (response.ok) {
          setUser(data?.data);
        } else {
          toast.error(data?.message || "Token validation failed!");
        }
      } catch {
        toast.error("Failed to validate user token.");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      validateToken();
    } else {
      setLoading(false);
    }
  }, [baseURL, token]);

  return { user, loading };
};

export default useValidateToken;
