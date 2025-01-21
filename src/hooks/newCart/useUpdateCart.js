import { useState } from "react";
import toast from "react-hot-toast";

const useUpdateCart = () => {
  const [loading, setLoading] = useState(false);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const updateCart = async (cartId, payload) => {
    if (!cartId || !payload || typeof payload !== "object") {
      toast.error("Cart ID and valid payload are required!");
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
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        toast.error("Failed to update cart!", {
          className: "toast-error",
        });
        return null;
      }
    } catch {
      toast.error("An error occurred while updating the cart!", {
        className: "toast-error",
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { updateCart, loading };
};

export default useUpdateCart;
