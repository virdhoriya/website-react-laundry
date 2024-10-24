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
    const upDatedFormData = {
      ...formData,
      address_type: Number(formData.address_type),
    };

    try {
      const response = await fetch(`${baseURL}/address`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(upDatedFormData),
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

  const deleteAddress = async (address_id) => {
    try {
      const response = await fetch(`${baseURL}/address/${address_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message);
      }
      toast.success(data.message);
    } catch {
      toast.error("Unable to delete address, please try again later!");
    }
  };

  const editAddress = async (formData, id) => {
    const upDatedFormData = {
      ...formData,
      address_type: Number(formData.address_type),
      pincode: String(formData.pincode),
    };

    try {
      const response = await fetch(`${baseURL}/address/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(upDatedFormData),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
      } else {
        toast.error(data.message, {
          style: {
            maxWidth: "700px",
          },
        });
      }
    } catch {
      toast.error("Unable to update address");
    }
  };

  return { fetchAddress, addAddress, deleteAddress, editAddress };
};

export default useAddressOperation;
