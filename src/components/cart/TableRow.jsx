import { useState } from "react";
import PropTypes from "prop-types";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import useDeleteProduct from "../../hooks/newCart/useDeleteProduct";
import useUpdateProductQuantity from "../../hooks/newCart/useUpdateProductQuantity";
import { useDispatch } from "react-redux";
import { addDescription, deleteItem } from "../../redux/slices/cartSlice";
import { updateQty } from "../../redux/slices/cartSlice";
import { MdVerified } from "react-icons/md";
import toast from "react-hot-toast";

const TableRow = ({ item }) => {
  const dispatch = useDispatch();
  const { deleteProduct, loading: loadingDelProduct } = useDeleteProduct();
  const { updateProductQuantity, loading: loadingUpdateQty } =
    useUpdateProductQuantity();
  const [quantity, setQuantity] = useState(item.quantity);
  const [isChecked, setIsChecked] = useState(false);
  const [isDescAdded, setIsDescAdded] = useState(false);
  const [description, setDescription] = useState("");
  const { cart_id, product_name, service_name, price } = item;

  if (loadingUpdateQty) {
    toast.success("Loading...")
  }

  const handleUpClick = async () => {
    let newQuantity = quantity + 1;
    setQuantity(newQuantity);

    const result = await updateProductQuantity(cart_id, newQuantity);
    if (result) {
      dispatch(updateQty({ cart_id, newQuantity }));
    }
  };

  const handleDownClick = async () => {
    if (quantity > 1) {
      let newQuantity = quantity - 1;
      setQuantity(newQuantity);
      const result = await updateProductQuantity(cart_id, newQuantity);
      if (result) {
        dispatch(updateQty({ cart_id, newQuantity }));
      }
    } else {
      const result = await deleteProduct(cart_id);
      if (result) {
        dispatch(deleteItem(cart_id));
      }
    }
  };

  const handleDelClick = async () => {
    const result = await deleteProduct(cart_id);
    if (result) {
      dispatch(deleteItem(cart_id));
    }
  };

  const handleSave = () => {
    if (description) {
      dispatch(addDescription({ cart_id, description }));
      setIsChecked(false);
      setIsDescAdded(true);
    }
  };

  return (
    <tr className="relative">
      <td className="items-detail-cell space-y-1">
        <h3>{product_name}</h3>
        <p>{service_name}</p>
        <p>Material: A</p>
      </td>
      <td className="text-center">₹{price}</td>
      <td>
        <span className="flex justify-center items-center">
          <button className="inc-dec-btn">
            <HiOutlineMinus
              className="stroke-[#B9BCCF]"
              onClick={handleDownClick}
            />
            {quantity}
            <HiOutlinePlus
              className="stroke-[#B9BCCF]"
              onClick={handleUpClick}
            />
          </button>
        </span>
      </td>
      <td className="text-center">₹{price * quantity}</td>
      <td className="text-center">
        {isDescAdded ? (
          <span className="inline-block h-12 w-12">
            <MdVerified className="h-full w-full fill-green-500" />
          </span>
        ) : (
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            value=""
            className="w-10 h-10 my-2 text-[var(--black)] bg-gray-100 border-2 rounded-3xl border-gray-300"
          />
        )}
      </td>
      <td className="text-center">
        <span
          className="mx-auto h-14 w-14 bg-[rgba(103,113,130,0.2)] rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => handleDelClick(cart_id)}
        >
          {loadingDelProduct ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-9 h-9 text-white animate-spin fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <FaTrash className="inline-block h-8 w-8 fill-[var(--secondary)]" />
          )}
        </span>
      </td>
      {isChecked && (
        <td className="description-cell col-span-full">
          <div className="relative">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="2"
              placeholder="Description"
            ></textarea>
            <button
              aria-label="save-description"
              className="save-description"
              onClick={handleSave}
            >
              save
            </button>
          </div>
        </td>
      )}
    </tr>
  );
};

TableRow.propTypes = {
  item: PropTypes.shape({
    cart_id: PropTypes.number.isRequired,
    product_name: PropTypes.string.isRequired,
    service_name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default TableRow;
