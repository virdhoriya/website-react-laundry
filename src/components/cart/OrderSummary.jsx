import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useCartOperations from "../../hooks/cart/useCartOperations";
import useFetchShippingCharge from "../../hooks/cart/useFetchShippingCharge";

const OrderSummary = ({ subTotal }) => {
  const [shippingCharge, setShippingCharge] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [discountValue, setDiscountValue] = useState(0);
  const { applyCoupon } = useCartOperations();
  const { fetchShippingCharge } = useFetchShippingCharge();

  const handleApplyClick = async () => {
    let newCode = couponCode.toUpperCase();
    const res = await applyCoupon(subTotal, newCode);
    if (res) {
      setDiscountValue(res);
    }
  };

  useEffect(() => {
    const getShippingCharge = async () => {
      const response = await fetchShippingCharge();
      if (response) {
        const { shipping_charge } = response;
        setShippingCharge(Number(shipping_charge));
      }
    };
    getShippingCharge();
  }, [fetchShippingCharge]);

  return (
    <div className="flex flex-col">
      <h4 className="cart-title">Order Summary</h4>
      <div className="flex items-center gap-8 p-10 border-b border-[#b9bccf4d]">
        <input
          type="text"
          placeholder="Add Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="uppercase grow border border-[#EFF3FF] rounded-xl text-[1.8rem] leading-10 py-5 px-4 focus:ring-0 placeholder:lowercase"
        />
        <button className="apply-btn" onClick={handleApplyClick}>
          Apply
        </button>
      </div>
      <div className="px-12 py-12 flex flex-col gap-10 ">
        <div className="subtotal-container">
          <p>Sub Total</p>
          <h5>₹{subTotal - discountValue}</h5>
        </div>
        <div className="shipcharge-container">
          <p>Shipping Charge</p>
          <h5>₹{shippingCharge}</h5>
        </div>
        <span className="line"></span>
        <div className="total-container">
          <p>Total</p>
          <h5>₹{subTotal - discountValue + shippingCharge}</h5>
        </div>
        <Link to="/cart" className="view-cart-btn">
          checkout
        </Link>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  subTotal: PropTypes.number.isRequired,
};

export default OrderSummary;
