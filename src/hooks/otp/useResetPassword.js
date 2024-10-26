import toast from "react-hot-toast";

const useResetPassword = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const resetPassword = async (mobile_number, otp, password) => {
    console.log("Mobile : ", typeof mobile_number);
    console.log("Otp : ", typeof otp);
    console.log("Password : ", typeof password);
    console.log(
      `data send mobile ${mobile_number} otp ${otp} password ${password}`
    );

    try {
      const response = await fetch(`${baseURL}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile_number: Number(mobile_number),
          otp: Number(otp),
          new_password: password,
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
      toast.error("Failed to reset password!");
      return { success: false };
    }
  };

  return { resetPassword };
};

export default useResetPassword;
