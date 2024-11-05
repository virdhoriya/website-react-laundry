import toast from "react-hot-toast";

const useViewCart = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");
  const viewCart = async () => {
    try {
      const response = await fetch(`${baseURL}/carts`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        return data.data;
      } else {
        toast.error("Failed to fetch cart data!");
      }
    } catch {
      toast.error("Failed to fetch cart data!");
    }
  };

  return { viewCart };
};

export default useViewCart;
