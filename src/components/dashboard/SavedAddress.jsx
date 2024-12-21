import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { deleteAddress as deleteAddressAction } from "../../redux/slices/addressSlice";
import useFetchAddress from "../../hooks/address/useFetchAddress";
import useDeleteAddress from "../../hooks/address/useDeleteAddress";
import AddAddressModel from "../cart/AddAddressModel";
import AddressShimmer from "./AddressShimmer";

const SavedAddress = () => {
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [editAddress, setEditAddress] = useState(null);
  const [loadingStates, setLoadingStates] = useState({});
  const addresses = useSelector((state) => state.address.address);
  const { loading: loadingFetchAddress } = useFetchAddress();
  const { loading: loadingDelAdd, deleteAddress } = useDeleteAddress();

  const addressMapping = {
    1: "Home",
    2: "Office",
    3: "Other",
  };

  const handleAddClick = () => {
    setIsModelOpen(true);
    setEditAddress(null);
  };

  const handleEdit = (address) => {
    setEditAddress(address);
    setIsEditMode(true);
    setIsModelOpen(true);
  };

  const handleDelete = async (address_id) => {
    setLoadingStates((prev) => ({ ...prev, [address_id]: true }));

    const result = await deleteAddress(address_id);
    if (result) {
      dispatch(deleteAddressAction(address_id));
    }
    setLoadingStates((prev) => ({ ...prev, [address_id]: false }));
  };

  if (loadingFetchAddress) {
    return <AddressShimmer />;
  }

  return (
    <>
      <div className="p-14 border border-[#b9bccf4d] bg-white rounded-2xl">
        <div className="grid grid-cols-2 gap-x-12 gap-y-16 items-start">
          <div className="col-span-full justify-self-end">
            <button
              className="new-address-btn address-btn flex items-center gap-4 rounded-full"
              onClick={handleAddClick}
            >
              <FaPlus className="inline-block h-[1.6rem] w-[1.6rem] fill-[var(--red)]" />
              <span className="leading-[1.8rem]">Add New Address</span>
            </button>
          </div>
          {addresses &&
            addresses.map((address) => {
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
              const isDeleting = loadingStates[address_id] || false;
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
                  <div className="flex items-stretch justify-stretch">
                    <div className="basis-[50%] border-r border-[#b9bccf4d]">
                      <button
                        className="text-2xl text-[var(--primary)] font-medium py-5 w-full"
                        onClick={() => handleEdit(address)}
                      >
                        Edit
                      </button>
                    </div>
                    <div className="basis-[50%]">
                      <button
                        className="text-2xl text-[var(--primary)] font-medium h-full w-full text-center"
                        disabled={loadingDelAdd}
                        onClick={() => handleDelete(address_id)}
                      >
                        {isDeleting ? "Removing..." : "Remove"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {isModelOpen && (
        <AddAddressModel
          setIsOpen={setIsModelOpen}
          isOpen={isModelOpen}
          address={editAddress}
          isEditMode={isEditMode}
        />
      )}
    </>
  );
};

export default SavedAddress;
