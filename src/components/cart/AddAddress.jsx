import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddAddressModel from "./AddAddressModel";
import useAddressOperation from "../../hooks/address/useAddressOperation";

const AddAddress = () => {
  const [flag, setFlag] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [addresses, setAddresses] = useState();
  const [editAddress, setEditAddress] = useState(null);
  const { fetchAddress, deleteAddress } = useAddressOperation();

  function onEditClick(address) {
    setFlag(false);
    setEditAddress(address);
    setIsOpen(true);
  }

  async function onDelClick(address) {
    const { address_id } = address;
    await deleteAddress(address_id);
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
            onClick={() => setIsOpen(true)}
          >
            <FaPlus className="inline-block h-[1.6rem] w-[1.6rem] fill-[var(--red)]" />
            <span>Add New Address</span>
          </button>
        </div>

        <div className="flex flex-col gap-8">
          {addresses && addresses.length != 0
            ? addresses.map((address) => {
                const {
                  address_id,
                  full_name,
                  building_number,
                  phone_number,
                  landmark,
                  area,
                  city,
                  state,
                  pincode,
                  address_type,
                } = address;

                const typeMapping = {
                  1: "Home",
                  2: "Office",
                  3: "Other",
                };

                return (
                  <div
                    className="p-8 border border-[#e0e0e0] flex flex-col gap-3 items-start rounded-sm relative"
                    key={address_id}
                  >
                    <span className="bg-[#f0f0f0] px-2 py-2.5 rounded-md uppercase text-[1.1rem] text-[#878787] font-semibold">
                      {typeMapping[address_type]}
                    </span>
                    <div className="flex gap-4">
                      <h4 className="text-[1.4rem] text-[var(--black)] font-semibold">
                        {full_name}
                      </h4>
                      <h4 className="text-[1.4rem] text-[var(--black)] font-semibold">
                        {phone_number}
                      </h4>
                    </div>
                    <span className="text-[1.4rem] text-[var(--black)] font-normal">
                      {`${building_number}, ${area}, ${landmark}, ${city}, ${state} - `}
                      <h4 className="inline-block text-[1.4rem] text-[var(--black)] font-semibold">
                        {pincode}
                      </h4>
                    </span>

                    <div className="del-edit-menu relative">
                      <span className="three-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                      <ul className="shortcut">
                        <li onClick={() => onEditClick(address)}>Edit</li>
                        <li onClick={() => onDelClick(address)}>Delete</li>
                      </ul>
                    </div>
                  </div>
                );
              })
            : "No address Found!"}
        </div>
      </div>
      <AddAddressModel
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        address={editAddress}
        flag={flag}
      />
    </>
  );
};

export default AddAddress;
