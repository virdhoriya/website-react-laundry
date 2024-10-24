import { useState } from "react";
import toast from "react-hot-toast";

const useCartOperations = () => {
  const [cartId, setCartId] = useState(null);
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
        setCartId(data.data.cart_id);
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Error occur while adding item into cart!", {
        style: {
          maxWidth: "400px",
        },
      });
    }
  };

  const updateProductQuantity = async (quantity) => {
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

      if (response.ok) {
        toast.success(`quantity ${quantity} added successfully`);
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Error occur while adding item to cart!", {
        style: {
          maxWidth: "400px",
        },
      });
    }
  };

  const deleteProduct = async (delCartid = cartId) => {
    try {
      const response = await fetch(`${baseURL}/carts/${delCartid}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message, {
          style: {
            maxWidth: "400px",
          },
        });
      }
    } catch {
      toast.error("Unable to delete item from cart!");
    }
  };

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
      toast.error("Unable to fetch cart data!");
    }
  };

  const updateItemQuantity = async (cartId, quantity) => {
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
        toast.error(`Unable to update cart!`);
      }
    } catch {
      toast.error("Error occur while updating product quantity!", {
        style: {
          maxWidth: "400px",
        },
      });
    }
  };

  const applyCoupon = async (subTotal, couponCode) => {
    try {
      const response = await fetch(`${baseURL}/coupon/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          coupon_Code: couponCode,
          order_Total: subTotal,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message || "Invalid coupon code.");
        return;
      }
      toast.success(data.message);
      return data.data.discountAmount;
    } catch {
      toast.error("Unable to apply coupon code!");
    }
  };

  return {
    addToCart,
    updateProductQuantity,
    deleteProduct,
    viewCart,
    updateItemQuantity,
    applyCoupon,
  };
};

export default useCartOperations;
