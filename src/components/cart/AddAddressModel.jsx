import PropTypes from "prop-types";
import { CgCloseR } from "react-icons/cg";
import useAddressOperation from "../../hooks/address/useAddressOperation";
import { useState } from "react";
import toast from "react-hot-toast";

const AddAddressModel = ({ setIsOpen, isOpen }) => {
  const { addAddress } = useAddressOperation();
  const [formData, setFormData] = useState({
    building_number: "",
    area: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addAddress(formData);
    setFormData({
      building_number: "",
      area: "",
      landmark: "",
      pincode: "",
      city: "",
      state: "",
      country: "",
    });
    if (res) {
      toast.success(res);
      setIsOpen(false);
    } else {
      toast.error("Unable to add address");
    }
  };

  const onCloseBtnClick = () => {
    setIsOpen(false);
    setFormData({
      building_number: "",
      area: "",
      landmark: "",
      pincode: "",
      city: "",
      state: "",
      country: "",
    });
  };

  return (
    <section
      className={`fixed inset-0 bg-black/95 flex justify-center items-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="w-[60rem] bg-white shadow-2xl px-12 py-12 pb-16 rounded-xl">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-[2.4rem] leading-[2.4rem]">add new address</h2>
          <CgCloseR
            className="inline-block h-8 w-8 text-black cursor-pointer"
            onClick={onCloseBtnClick}
          />
        </div>
        <form className="grid grid-cols-2 w-full gap-x-10 gap-y-12">
          <div className="flex flex-col gap-3">
            <label
              htmlFor="building_number"
              className="self-start text-[1.2rem] text-[var(--black)]"
            >
              Building number
            </label>
            <input
              name="building_number"
              id="building_number"
              type="text"
              onChange={handleChange}
              value={formData.building_number}
              className="inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg text-[var(--black)"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="area"
              className="self-start text-[1.2rem] text-[var(--black)]"
            >
              area
            </label>
            <input
              name="area"
              id="area"
              type="text"
              onChange={handleChange}
              value={formData.area}
              className="inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="landmark"
              className="self-start text-[1.2rem] text-[var(--black)]"
            >
              landmark
            </label>
            <input
              name="landmark"
              id="landmark"
              type="text"
              onChange={handleChange}
              value={formData.landmark}
              className="inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="pincode"
              className="self-start text-[1.2rem] text-[var(--black)]"
            >
              pincode
            </label>
            <input
              name="pincode"
              id="pincode"
              type="text"
              onChange={handleChange}
              value={formData.pincode}
              className="inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="city"
              className="self-start text-[1.2rem] text-[var(--black)]"
            >
              city
            </label>
            <input
              name="city"
              id="city"
              type="text"
              onChange={handleChange}
              value={formData.city}
              className="inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="state"
              className="self-start text-[1.2rem] text-[var(--black)]"
            >
              state
            </label>
            <input
              name="state"
              id="state"
              type="text"
              onChange={handleChange}
              value={formData.state}
              className="inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="country"
              className="self-start text-[1.2rem] text-[var(--black)]"
            >
              country
            </label>
            <input
              name="country"
              id="country"
              type="text"
              onChange={handleChange}
              value={formData.country}
              className="inline-block w-full p-3 ring-1 text-[1.2rem] rounded-lg"
            />
          </div>

          <div className="flex justify-start items-end row-start-5">
            <button
              type="button"
              className="text-white bg-blue-700 text-[1.4rem] font-medium px-6 py-4 rounded-md"
              onClick={handleSubmit}
            >
              Add Address
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

AddAddressModel.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
export default AddAddressModel;
