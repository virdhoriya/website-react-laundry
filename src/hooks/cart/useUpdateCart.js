import toast from "react-hot-toast";

const useUpdateCart = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");
  const updateCart = async (quantity, cartId) => {
    try {
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
      if (!response.ok) {
        toast.error(`Failed to update cart!`);
      }
    } catch {
      toast.error("Failed to update cart!");
    }
  };

  return { updateCart };
};

export default useUpdateCart;
