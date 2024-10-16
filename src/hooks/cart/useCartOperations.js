import { useState } from "react";
import toast from "react-hot-toast";

const useCartOperations = () => {
  const [cartId, setCartId] = useState(null);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = import.meta.env.VITE_DUMMY_TOKEN;

  const addToCart = async ({ paramId, product_id, service_id, itemCount }) => {
    try {
      console.log(
        `Category id : ${paramId}  Product Id : ${product_id}  Service Id : ${service_id} Quantity : ${itemCount}`
      );
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

  const deleteProduct = async () => {
    try {
      const response = await fetch(`${baseURL}/carts/${cartId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message, {
          style: {
            maxWidth: "400px",
          },
        });
        console.log(response);
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Unable to delete item from cart!");
    }
  };

  return { addToCart, updateProductQuantity, deleteProduct };
};

export default useCartOperations;
