/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import useGetUserDetail from "../../hooks/dashboard/useGetUserDetail";
import useUpdateUserDetail from "../../hooks/dashboard/useUpdateUserDetail";
import Loading from "./Loading";

const Profile = () => {
  const { getUserDetail } = useGetUserDetail();
  const { updateUserDetail } = useUpdateUserDetail();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile_number: "",
    gender: 0,
    id_proof: null,
  });
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUserDetail(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name == "gender") {
      setFormData({
        ...formData,
        [name]: Number(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const updateFileChange = (e) => {
    let imageFile = e.target.files[0];
    setFile(imageFile);
    let generateUrl = URL.createObjectURL(imageFile);
    setPreview(generateUrl);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const result = await getUserDetail();
      if (result) {
        const { first_name, last_name, email, mobile_number, gender } =
          result.user;
        setFormData({
          first_name,
          last_name,
          email,
          mobile_number,
          gender,
        });
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <h3 className="dash-section-head mb-5">Customer Master - Details</h3>
        <div className="cus-detail-container">
          <div className="p-14 flex items-start gap-20">
            <div className="profile-img-container relative">
              <img
                src="/default_avatar.png"
                alt="Avatar"
                className="h-full w-full rounded-full border-[1.5px] border-[var(--black)]"
              />
              <button className="edit-profile-img">
                <FaPencilAlt className="inline-block h-full w-full fill-white p-3" />
              </button>
            </div>
            <div className="grow">
              <form className="user-detail" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-x-12 gap-y-14">
                  <div className="flex flex-col gap-4">
                    <label htmlFor="firstname">first name</label>
                    <input
                      id="firstname"
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className="border-[1.5px] border-indigo-200 focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <label htmlFor="lastname">last name</label>
                    <input
                      id="lastname"
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className="border-[1.5px] border-indigo-200 focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <label htmlFor="email">email</label>
                    <input
                      readOnly
                      id="email"
                      type="text"
                      name="email"
                      value={formData.email}
                      className="border-[1.5px] border-indigo-200 focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <label htmlFor="mobile">mobile</label>
                    <input
                      readOnly
                      id="mobile"
                      type="text"
                      name="mobile_number"
                      value={formData.mobile_number}
                      className="border-[1.5px] border-indigo-200 focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="col-span-2 flex flex-col gap-4">
                    <label htmlFor="document">Update/Add document</label>
                    <input
                      id="document"
                      type="file"
                      accept="image/*"
                      onChange={updateFileChange}
                      className="border-[1.5px] border-indigo-200 focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-4">
                    <label htmlFor="gender">gender</label>
                    <div className="grow flex items-stretch justify-stretch gap-8">
                      <label
                        htmlFor="male"
                        className="flex items-center justify-center gap-2 border border-indigo-300 py-[1.25rem] rounded-lg px-4"
                      >
                        <input
                          id="male"
                          type="radio"
                          name="gender"
                          value={1}
                          onChange={handleChange}
                          checked={formData.gender == 1}
                        />
                        <span className="text-[1.5rem] leading-[1.7rem] text-[var(--black)]">
                          Male
                        </span>
                      </label>
                      <label
                        htmlFor="female"
                        className="flex items-center justify-center gap-2 border border-indigo-300 py-[1.25rem] rounded-lg px-4"
                      >
                        <input
                          id="female"
                          type="radio"
                          name="gender"
                          value={2}
                          onChange={handleChange}
                          checked={formData.gender == 2}
                        />
                        <span className="text-[1.5rem] leading-[1.7rem] text-[var(--black)]">
                          Female
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="col-span-2">
                    <button className="update-btn" type="submit">
                      update
                    </button>
                  </div>

                  <div className="col-span-2">
                    {preview && <img src={preview} alt="ok" />}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Profile;
