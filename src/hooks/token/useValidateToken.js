import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthStatus } from "../../redux/slices/authSlice";
import { addUser } from "../../redux/slices/userSlice";
import toast from "react-hot-toast";

const useValidateToken = () => {
  const dispatch = useDispatch();
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = window.localStorage.getItem("token");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      try {
        if (!token) {
          dispatch(setAuthStatus(false));
          setLoading(false);
          return;
        }

        const response = await fetch(`${baseURL}/auth/validate-token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();

        if (response.ok) {
          dispatch(addUser(data?.data));
          dispatch(setAuthStatus(true));
        } else {
          toast.error(data?.message || "Token validation failed!");
          handleLogout();
        }
      } catch {
        toast.error("Failed to validate user token.");
      } finally {
        setLoading(false);
      }
    };

    const handleLogout = () => {
      localStorage.clear();
      dispatch(setAuthStatus(false));
    };

    validateToken();
  }, [baseURL, dispatch, token]);

  return { loading };
};

export default useValidateToken;
