import { useState } from "react";
import toast from "react-hot-toast";

const useUpdateProductQuantity = () => {
  const [loading, setLoading] = useState(false);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const updateProductQuantity = async (cartId, quantity) => {
    if (!cartId && !quantity) {
      toast.error("Cart ID and Quantity is required to update an item!");
      return null;
    }
    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/carts/${cartId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          quantity: quantity,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        toast.error("Failed to update item quantity!");
      }
    } catch {
      toast.error("Failed to update item quantity!");
    } finally {
      setLoading(false);
    }
  };

  return { updateProductQuantity, loading };
};

export default useUpdateProductQuantity;
