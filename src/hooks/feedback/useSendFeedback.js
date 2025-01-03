import { useState } from "react";
import toast from "react-hot-toast";

const useSendFeedback = () => {
  const [loading, setLoading] = useState(false);
  const baseURL = import.meta.env.VITE_BASE_URL;

  const sendFeedBack = async (param) => {
    if (!param || typeof param !== "object") {
      toast.error("Invalid feedback data.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(param),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message || "Failed to send feedback!");
        return;
      }
      toast.success(data?.message || "Feedback sent successfully!");
      return data;
    } catch {
      toast.error("Failed to send feedback!");
      return;
    } finally {
      setLoading(false);
    }
  };

  return { sendFeedBack, loading };
};

export default useSendFeedback;
