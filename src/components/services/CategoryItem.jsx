import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import useAddToCart from "../../hooks/cart/useAddToCart";
import toast from "react-hot-toast";
import useUpdateCart from "../../hooks/cart/useUpdateCart";
import useDeletCart from "../../hooks/cart/useDeletCart";

const CategoryItem = ({ categoryItem, paramId }) => {
  const [itemCount, setItemCount] = useState(1);
  const [cartId, setCartId] = useState(null);
  const [numberBtn, setNumberBtn] = useState(false);

  const { addToCart } = useAddToCart();
  const { updateCart } = useUpdateCart();
  const { deleteCart } = useDeletCart();

  const onIncClick = async () => {
    setItemCount(itemCount + 1);
    const newCount = itemCount + 1;
    await updateCart(newCount, cartId);
  };

  const onDecClick = async () => {
    if (itemCount > 0 && itemCount - 1 != 0) {
      setItemCount(itemCount - 1);
      const newCount = itemCount - 1;
      await updateCart(newCount, cartId);
    } else {
      setNumberBtn(false);
      await deleteCart(cartId);
    }
  };

  const handleBtnClick = async (product_id, service_id) => {
    setNumberBtn(true);
    const result = await addToCart({
      paramId,
      product_id,
      service_id,
      itemCount,
    });
    if (result) {
      setCartId(result);
    } else {
      toast.error("Failed to add item into cart!");
    }
  };

  useEffect(() => {
    if (categoryItem?.carts) {
      setCartId(categoryItem?.carts?.cart_id);
      setItemCount(categoryItem?.carts?.quantity);
      setNumberBtn(true);
    } else {
      setNumberBtn(false);
      setItemCount(1);
    }
  }, [categoryItem]);

  return (
    <div
      key={categoryItem.product_id}
      className="cat-item-container flex gap-8"
    >
      <img
        src={categoryItem.product.image}
        alt="Service Image"
        className="h-32 w-32 rounded-2xl"
      />
      <div className="flex-grow flex justify-between items-center">
        <div>
          <h5 className="cat-item-name">{categoryItem.product.name}</h5>
          <p className="cat-item-price">₹{categoryItem.price}</p>
        </div>
        {numberBtn ? (
          <button className="inc-dec-btn">
            <HiOutlineMinus className="stroke-[#B9BCCF]" onClick={onDecClick} />
            {itemCount}
            <HiOutlinePlus className="stroke-[#B9BCCF]" onClick={onIncClick} />
          </button>
        ) : (
          <button
            className="add-btn"
            onClick={() =>
              handleBtnClick(categoryItem.product_id, categoryItem.service_id)
            }
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

CategoryItem.propTypes = {
  categoryItem: PropTypes.shape({
    carts: PropTypes.shape({
      cart_id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
    price: PropTypes.number.isRequired,
    service_id: PropTypes.number.isRequired,
    product_id: PropTypes.number.isRequired,
    product: PropTypes.shape({
      product_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  paramId: PropTypes.number.isRequired,
};

export default CategoryItem;
