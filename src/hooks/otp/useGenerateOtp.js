import toast from "react-hot-toast";
const useGenerateOtp = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const generateOtp = async (mobile_number) => {
    try {
      const response = await fetch(`${baseURL}/auth/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile_number: mobile_number,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "OTP sent successfully.", {
          className: "toast-success",
        });
        return { success: true };
      } else {
        toast.error(
          data.message || "Failed to send OTP. Please try again later.",
          {
            className: "toast-error",
          }
        );
        return { success: false };
      }
    } catch {
      toast.error("Failed to send Otp");
      return { success: false };
    }
  };
  return { generateOtp };
};

export default useGenerateOtp;
