/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useFetchAddress from "../../hooks/address/useFetchAddress";
import { FaPlus } from "react-icons/fa6";

const SavedAddress = () => {
  const { fetchAddress } = useFetchAddress();
  const [addresses, setAddresses] = useState([]);

  const addressMapping = {
    1: "Home",
    2: "Office",
    3: "Other",
  };

  useEffect(() => {
    const getAddress = async () => {
      const result = await fetchAddress();
      if (result) {
        setAddresses(result);
      }
    };
    getAddress();
  }, []);

  return (
    <div className="p-14 border border-[#b9bccf4d] bg-white rounded-2xl">
      <div className="grid grid-cols-2 gap-x-12 gap-y-16 items-start">
        {addresses.map((address) => {
          const {
            address_id,
            address_type,
            building_number,
            area,
            landmark,
            city,
            pincode,
            full_name,
            phone_number,
          } = address;
          return (
            <div
              key={address_id}
              className="border border-[#b9bccf4d] rounded-xl"
            >
              <div className="flex flex-col items-start gap-3 px-6 py-8 border-b border-[#b9bccf4d]">
                <span className="bg-[#f0f0f0] px-2 py-2.5 rounded-md uppercase text-[1.1rem] text-[#878787] font-semibold">
                  {addressMapping[address_type]}
                </span>
                <div className="flex items-center justify-start gap-6">
                  <h4 className="text-[1.4rem] text-[var(--black)] font-semibold">
                    {full_name}
                  </h4>
                  <h4 className="text-[1.4rem] text-[var(--black)] font-semibold">
                    {phone_number}
                  </h4>
                </div>
                <p className="text-[1.4rem] leading-10 w-[80%]">{`${building_number}, ${area}, ${landmark}, ${city}, ${pincode} `}</p>
              </div>
              <div className="flex items-center justify-stretch">
                <div className="basis-[50%] flex justify-center items-center py-5 border-r border-[#b9bccf4d]">
                  <button className="text-2xl text-[var(--primary)] font-medium">
                    Edit
                  </button>
                </div>
                <div className="basis-[50%] flex justify-center items-center py-5">
                  <button className="text-2xl text-[var(--primary)] font-medium">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        <div className="col-span-full">
          <button className="new-address-btn address-btn flex items-center gap-4">
            <FaPlus className="inline-block h-[1.6rem] w-[1.6rem] fill-[var(--red)]" />
            <span>Add New Address</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedAddress;
