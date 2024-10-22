import { useState } from "react";
import PropTypes from "prop-types";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import useCartOperations from "../../hooks/cart/useCartOperations";

const TableRow = ({ item }) => {
  const { updateItemQuantity, deleteProduct } = useCartOperations();
  const [quantity, setQuantity] = useState(item.quantity);
  const { cart_id, product_name, service_name, price } = item;

  const handleUpClick = async () => {
    let newQuantity = quantity + 1;
    setQuantity(newQuantity);
    await updateItemQuantity(cart_id, newQuantity);
  };

  const handleDownClick = async () => {
    if (quantity > 1) {
      let newQuantity = quantity - 1;
      setQuantity(newQuantity);
      await updateItemQuantity(cart_id, newQuantity);
    } else {
      deleteProduct(item.cart_id);
      return;
    }
  };

  return (
    <tr>
      <td>
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
