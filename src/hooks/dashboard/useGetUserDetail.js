import toast from "react-hot-toast";

const useGetUserDetail = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");
  const getUserDetail = async () => {
    try {
      const response = await fetch(`${baseURL}/user/customer`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        return data.data;
      } else {
        toast.error("Failed to fetch user deatil!");
      }
    } catch {
      toast.error("Failed to fetch user deatil!");
    }
  };

  return { getUserDetail };
};

export default useGetUserDetail;
