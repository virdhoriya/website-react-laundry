import { useState } from "react";
import toast from "react-hot-toast";

const useDownloadInvoice = () => {
  const [loading, setLoading] = useState(false);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = window.localStorage.getItem("token");

  const downloadInvoice = async (order_id) => {
    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/pdf/invoice/${order_id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        const url = data?.url;
        window.open(url, "_blank");
      } else {
        toast.error(
          data?.message ||
            "Oops! Something went wrong while trying to download the invoice. Please try again.",
          {
            className: "toast-error",
          }
        );
      }
    } catch {
      toast.error(
        "We encountered an issue while fetching the invoice. Please try again later.",
        {
          className: "toast-error",
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return { downloadInvoice, loading };
};

export default useDownloadInvoice;
