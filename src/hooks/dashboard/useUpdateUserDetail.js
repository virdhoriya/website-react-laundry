import toast from "react-hot-toast";

const useUpdateUserDetail = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const updateUserDetail = async (formData) => {
    try {
      const response = await fetch(`${baseURL}/user/customer`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        toast.success("user data updates successfully");
      } else {
        toast.error("Failed to update user data!");
      }
    } catch {
      toast.error("Failed to update user data!");
    }
  };
  return { updateUserDetail };
};

export default useUpdateUserDetail;
