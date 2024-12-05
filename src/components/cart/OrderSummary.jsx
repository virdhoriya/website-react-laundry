import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useFetchShippingCharge from "../../hooks/cart/useFetchShippingCharge";
import usePlaceOrder from "../../hooks/order/usePlaceOrder";
import useViewCart from "../../hooks/cart/useViewCart";
import { useNavigate } from "react-router-dom";
import useApplyCoupon from "../../hooks/coupon/useApplyCoupon";

const OrderSummary = ({
  subTotal,
  instruction,
  paymentMethod,
  selectedAddId,
}) => {
  const navigate = useNavigate();
  const [shippingCharge, setShippingCharge] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [newCouponCode, setNewCouponCode] = useState("");
  const [discountValue, setDiscountValue] = useState(0);
  const { applyCoupon } = useApplyCoupon();
  const { fetchShippingCharge } = useFetchShippingCharge();
  const { placeOrder } = usePlaceOrder();
  const { viewCart } = useViewCart();
  const [items, setItems] = useState({});

  const handleApplyClick = async () => {
    let newCode = couponCode.toUpperCase();
    const res = await applyCoupon(subTotal, newCode);
    if (res) {
      setDiscountValue(res);
      setNewCouponCode(newCode);
    }
  };

  const handleCheckout = async () => {
    let newSubTotal = subTotal - discountValue;
    const result = await placeOrder(
      items,
      newSubTotal,
      instruction,
      newCouponCode,
      shippingCharge,
      paymentMethod,
      selectedAddId
    );

    if (result) {
      navigate("/order", { state: { result } });
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

    const fetchCart = async () => {
      const res = await viewCart();
      if (res) {
        setItems(res);
      }
    };
    fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <div className="px-12 py-12 flex flex-col gap-12">
        <div className="place-center">
          <p>Sub Total</p>
          <h5>₹{subTotal - discountValue}</h5>
        </div>
        <div className="place-center">
          <p>Shipping Charge</p>
          <h5>₹{shippingCharge}</h5>
        </div>
        <span className="line"></span>
        <div className="place-center total-container">
          <p>Total</p>
          <h5>₹{subTotal - discountValue + shippingCharge}</h5>
        </div>
        <button className="view-cart-btn" onClick={handleCheckout}>
          checkout
        </button>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  subTotal: PropTypes.number.isRequired,
  instruction: PropTypes.string.isRequired,
  paymentMethod: PropTypes.number.isRequired,
  selectedAddId: PropTypes.number.isRequired,
};

export default OrderSummary;
