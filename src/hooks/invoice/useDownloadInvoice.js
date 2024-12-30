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
        toast.error(`Failed to download invoice. Status`);
      }
    } catch {
      toast.error("An error occurred while downloading the invoice!");
    } finally {
      setLoading(false);
    }
  };

  return { downloadInvoice, loading };
};

export default useDownloadInvoice;
