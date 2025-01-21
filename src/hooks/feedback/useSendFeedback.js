import { useState } from "react";
import toast from "react-hot-toast";

const useSendFeedback = () => {
  const [loading, setLoading] = useState(false);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = window.localStorage.getItem("token");

  const sendFeedBack = async (param) => {
    if (!param || typeof param !== "object") {
      toast.error(
        "Please provide valid feedback data. Ensure all fields are filled correctly.",
        {
          className: "toast-error",
        }
      );
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(param),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(
          data?.message ||
            "Oops! Something went wrong while sending your feedback. Please try again later.",
          {
            className: "toast-error",
          }
        );
        return;
      }
      toast.success("Thank you for your feedback!", {
        className: "toast-success",
      });
      return data;
    } catch {
      toast.error(
        "Unable to send feedback at the moment. Please check your connection or try again later.",
        {
          className: "toast-error",
        }
      );
      return;
    } finally {
      setLoading(false);
    }
  };

  return { sendFeedBack, loading };
};

export default useSendFeedback;
