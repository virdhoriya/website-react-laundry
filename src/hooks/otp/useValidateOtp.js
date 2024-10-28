import toast from "react-hot-toast";

const useValidateOtp = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const validateOtp = async (otp, mobile_number) => {
    try {
      const response = await fetch(`${baseURL}/user/validate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          mobile_number: mobile_number,
          otp: otp,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        return { success: true };
      } else {
        toast.error(data.message);
        return { success: false };
      }
    } catch {
      toast.error("Failed to validate otp!");
      return { success: false };
    }
  };
  return { validateOtp };
};

export default useValidateOtp;
