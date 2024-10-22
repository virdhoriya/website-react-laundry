import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddAddressModel from "./AddAddressModel";
import useAddressOperation from "../../hooks/address/useAddressOperation";

const AddAddress = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [addresses, setAddresses] = useState();
  const { fetchAddress } = useAddressOperation();

  function handleBtnClick() {
    setIsOpen(true);
  }

  useEffect(() => {
    const getAddress = async () => {
      const res = await fetchAddress();
      if (res) setAddresses(res);
    };
    getAddress();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="flex items-center justify-between">
          <h4 className="cart-sub-title">Select Address</h4>
          <button
            className="address-btn flex items-center gap-4"
            onClick={handleBtnClick}
          >
            <FaPlus className="inline-block h-[1.6rem] w-[1.6rem] fill-[var(--red)]" />
            <span>Add New Address</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-14">
          {addresses && addresses.length != 0
            ? addresses.map((address) => {
                const {
                  address_id,
                  building_number,
                  landmark,
                  area,
                  city,
                  pincode,
                } = address;
                return (
                  <div
                    className="px-6 py-8 rounded-xl text-[1.6rem] tracking-normal flex gap-4 items-start justify-start flex-wrap border border-[#B9BCCF4D]"
                    key={address_id}
                  >
                    <input
                      type="radio"
                      id="address"
                      name="address"
                      className="inline-block mt-[0.70rem] border-4"
                    />
                    <h4 className="capitalize text-[var(--black)] text-[1.8rem] font-semibold basis-[80%]">
                      Home
                    </h4>
                    <label htmlFor="address">{`${building_number}, ${landmark}, ${area}, ${city}, ${pincode}`}</label>
                  </div>
                );
              })
            : "No address Found!"}
        </div>
      </div>
      <AddAddressModel setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default AddAddress;
