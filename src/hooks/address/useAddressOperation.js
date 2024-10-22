import toast from "react-hot-toast";

const useAddressOperation = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const fetchAddress = async () => {
    try {
      const response = await fetch(`${baseURL}/address`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        return data.data.result;
      } else {
        toast.error("Failed to fetch address data!");
      }
    } catch {
      toast.error("Unable to fetch address data!");
    }
  };

  const addAddress = async (formData) => {
    try {
      const response = await fetch(`${baseURL}/address`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        return data.message;
      } else {
        return null;
      }
    } catch {
      toast.error("Unable to add address!");
    }
  };

  return { fetchAddress, addAddress };
};

export default useAddressOperation;
