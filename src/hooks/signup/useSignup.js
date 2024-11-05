import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useSignup = () => {
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_BASE_URL;

  const signup = async (formData) => {
    let newFormData = {
      ...formData,
      gender: Number(formData.gender)
    }
    try {
      const response = await fetch(`${baseURL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFormData),
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/");
        toast.success(data.message);
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));
      } else {
        toast.error(data.message);
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("An error occurred during signup. Please try again.");
    }
  };

  const generateOtp = async (mobile) => {
    try {
      const response = await fetch(`${baseURL}/user/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile_number: mobile,
          type: 1,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Unable to send Otp");
    }
  };

  return { signup, generateOtp };
};

export default useSignup;
