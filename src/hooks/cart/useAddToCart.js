import toast from "react-hot-toast";

const useAddToCart = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");
  const addToCart = async ({ paramId, product_id, service_id, itemCount }) => {
    try {
      const response = await fetch(`${baseURL}/carts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          category_id: paramId,
          product_id: product_id,
          service_id: service_id,
          quantity: itemCount,
        }),
      });
      if (response.ok) {
        toast.success("Item Added Successfully");
        const data = await response.json();
        return data?.data?.cart_id;
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
    }
  };
  return { addToCart };
};

export default useAddToCart;
