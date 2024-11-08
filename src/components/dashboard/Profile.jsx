import toast from "react-hot-toast";
import { FaPencilAlt } from "react-icons/fa";

const Profile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("success");
  };
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
            <form className="user-detail">
              <div className="grid grid-cols-2 gap-x-12 gap-y-14">
                <div className="flex flex-col gap-4">
                  <label htmlFor="firstname">first name</label>
                  <input
                    id="firstname"
                    type="text"
                    className="border-[1.5px] border-indigo-200 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label htmlFor="lastname">last name</label>
                  <input
                    id="lastname"
                    type="text"
                    className="border-[1.5px] border-indigo-200 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label htmlFor="email">email</label>
                  <input
                    readOnly
                    id="email"
                    type="text"
                    value={"virdhoriya@gmail.com"}
                    className="border-[1.5px] border-indigo-200 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label htmlFor="mobile">mobile</label>
                  <input
                    readOnly
                    id="mobile"
                    type="text"
                    value={"7046057595"}
                    className="border-[1.5px] border-indigo-200 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="col-span-2 flex flex-col gap-4">
                  <label htmlFor="document">Update/Add document</label>
                  <input
                    id="document"
                    type="file"
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
                      <input id="male" type="radio" name="gender" />
                      <span className="text-[1.5rem] leading-[1.7rem] text-[var(--black)]">
                        Male
                      </span>
                    </label>
                    <label
                      htmlFor="female"
                      className="flex items-center justify-center gap-2 border border-indigo-300 py-[1.25rem] rounded-lg px-4"
                    >
                      <input id="female" type="radio" name="gender" />
                      <span className="text-[1.5rem] leading-[1.7rem] text-[var(--black)]">
                        Female
                      </span>
                    </label>
                  </div>
                </div>

                <div className="col-span-2">
                  <button
                    className="update-btn"
                    type="button"
                    onClick={handleSubmit}
                  >
                    update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
