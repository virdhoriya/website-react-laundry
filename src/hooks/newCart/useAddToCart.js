import { useState } from "react";
import toast from "react-hot-toast";

const useAddToCart = () => {
  const [loading, setLoading] = useState(false);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const addToCart = async ({
    category_id,
    product_id,
    service_id,
    itemCount,
  }) => {
    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/carts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          category_id: Number(category_id),
          product_id: product_id,
          service_id: service_id,
          quantity: itemCount,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        return data?.data;
      } else {
        return null;
      }
    } catch {
      toast.error("Error occur while adding item into cart!", {
        style: {
          maxWidth: "400px",
        },
      });
      return null;
    } finally {
      setLoading(false);
    }
  };
  return { addToCart, loading };
};

export default useAddToCart;
