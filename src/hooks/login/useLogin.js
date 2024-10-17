import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_BASE_URL;
  const role_id = 5;
  const login = async (username, password) => {
    try {
      const response = await fetch(`${baseURL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          role_id: role_id,
        }),
      });

      const data = await response.json();

      if (data.statusCode == 200) {
        toast.success(data.message);
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));
        navigate("/");
      } else {
        toast.error(data.message, {
          style: {
            maxWidth: "800px",
          },
        });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Login failed. Please check your credentials and try again.");
    }
  };

  return { login };
};

export default useLogin;
