import PropTypes from "prop-types";
import { useState } from "react";
import usePlaceOrder from "../../hooks/order/usePlaceOrder";
import { useNavigate } from "react-router-dom";
import useApplyCoupon from "../../hooks/coupon/useApplyCoupon";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { clearCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { RiDiscountPercentFill } from "react-icons/ri";
import useGetAllCoupon from "../../hooks/coupon/useGetAllCoupon";

const OrderSummary = ({ instruction, paymentMethod, selectedAddId }) => {
  const dispatch = useDispatch();
  const {
    getAllCoupon,
    loading: loadingAllCoupons,
    coupons,
  } = useGetAllCoupon();
  const [viewCoupon, setViewCoupon] = useState(false);
  const subTotal = useSelector((state) => state.cart.subTotal);
  const items = useSelector((state) => state.cart.cartItems);
  const shippingCharge = parseInt(
    useSelector((state) => state?.setting?.settings?.shipping_charge)
  );
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [discountValue, setDiscountValue] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState({
    code: "",
    status: "",
  });
  const { applyCoupon } = useApplyCoupon();
  const { placeOrder, loading } = usePlaceOrder();

  const handleApplyClick = async (e) => {
    e.preventDefault();
    const result = await applyCoupon(subTotal, couponCode.toUpperCase());
    if (result) {
      setDiscountValue(result?.discountAmount);
      setIsCouponApplied({
        code: couponCode.toUpperCase(),
        status: true,
      });
    }
  };

  const handleCheckout = async () => {
    if (!paymentMethod && !selectedAddId) {
      toast.error("Please select Payment Method and Shipping Address");
      return;
    }

    if (!paymentMethod) {
      toast.error("Please select Payment Method");
      return;
    }

    if (!selectedAddId) {
      toast.error("Please select Shipping Address");
      return;
    }
    let newSubTotal = subTotal - discountValue;
    const result = await placeOrder(
      items,
      newSubTotal,
      instruction,
      isCouponApplied.code,
      shippingCharge,
      paymentMethod,
      selectedAddId
    );
    if (result) {
      dispatch(clearCart());
      navigate("/order", { state: { result } });
    }
  };

  const handleRemoveCoupon = () => {
    setIsCouponApplied({
      code: "",
      status: false,
    });
    setCouponCode("");
    setDiscountValue(0);
  };

  const handleViewMoreClick = async () => {
    toast.success("Showing all coupons ...");

    if (!viewCoupon) {
      await getAllCoupon();
    }
    setViewCoupon(!viewCoupon);
  };

  const applyBtnClick = async (code) => {
    const result = await applyCoupon(subTotal, code.toUpperCase());
    if (result) {
      setDiscountValue(result?.discountAmount);
      setIsCouponApplied({
        code: code.toUpperCase(),
        status: true,
      });
      setCouponCode(code.toUpperCase());
      setViewCoupon(false);
    }
  };

  return (
    <>
      {viewCoupon ? (
        <div className="all-coupon-container space-y-10">
          <div className="flex justify-between items-center">
            <h3>Coupons</h3>
            <span
              className="cursor-pointer inline-block h-10 w-10"
              onClick={() => setViewCoupon(!viewCoupon)}
            >
              <RxCross2 className="h-full w-full text-[var(--primary)]" />
            </span>
          </div>
          {loadingAllCoupons ? (
            <div className="flex justify-center items-center">
              <span className="spinner"></span>
            </div>
          ) : (
            <table className="coupon-table w-full">
              <tbody>
                {coupons.length !== 0 ? (
                  coupons.map((coupon) => {
                    const { coupon_id, code, discount_type, discount_value } =
                      coupon;
                    return (
                      <tr key={coupon_id}>
                        <td className="justify-self-start py-3">
                          <RiDiscountPercentFill className="h-20 w-20 fill-[var(--secondary)] laptop-m:h-16 laptop-m:w-16" />
                        </td>
                        <td>
                          <p className="text-[1.8rem] text-[var(--black)] font-medium uppercase">
                            {code}
                          </p>
                        </td>
                        <td>
                          <p className="text-[1.8rem] text-[var(--black)] uppercase">
                            {discount_type === 1
                              ? "₹" + discount_value + " OFF"
                              : discount_value + "%" + " OFF"}
                          </p>
                        </td>
                        <td>
                          <button
                            className="new-apply-btn"
                            onClick={() => applyBtnClick(code)}
                          >
                            apply
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td className="col-span-full text-3xl font-medium text-[var(--black)]">
                      No coupon code found !
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      ) : (
        <div className="flex flex-col">
          <h4 className="cart-title">Order Summary</h4>
          <div className="p-10 border-b border-[#b9bccf4d] flex flex-col gap-8">
            <form
              onSubmit={handleApplyClick}
              className="flex items-center gap-8"
            >
              <div className="grow relative">
                <input
                  type="text"
                  placeholder="Add Coupon Code"
                  aria-label="Add Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="w-full uppercase border border-[#EFF3FF] rounded-xl text-[1.8rem] leading-10 py-5 px-4 focus:ring-0 placeholder:lowercase"
                ></input>
                {isCouponApplied.status && (
                  <span
                    className="clear-btn"
                    role="button"
                    aria-label="remove coupon code"
                    onClick={handleRemoveCoupon}
                  >
                    <RxCross2 className="h-full w-full p-1 text-[var(--primary)]" />
                  </span>
                )}
              </div>
              <button
                type="submit"
                className={`apply-btn ${
                  isCouponApplied.status ? "disabled-apply-btn" : ""
                }`}
                disabled={isCouponApplied.status}
              >
                Apply
              </button>
            </form>
            <div>
              <button
                className="flex items-center gap-8"
                onClick={handleViewMoreClick}
              >
                <p className="text-[1.8rem] text-[var(--primary)] font-medium">
                  View More Offers
                </p>
                <span className="inline-block h-10 w-10">
                  <IoIosArrowDown className="h-full w-full fill-[var(--primary)]" />
                </span>
              </button>
            </div>
          </div>
          <div className="px-12 py-12 flex flex-col gap-12">
            <div className="place-center">
              <p>Sub Total</p>
              <h5>₹{subTotal}</h5>
            </div>
            <div className="place-center">
              <p>
                Applied Coupon
                {isCouponApplied.status && (
                  <span className="applied-coupon">
                    {`( ${isCouponApplied?.code} )`}
                  </span>
                )}
              </p>
              <h5>₹{discountValue}</h5>
            </div>
            <div className="place-center">
              <p>Shipping Charge</p>
              <h5>₹{shippingCharge}</h5>
            </div>
            <span className="line"></span>
            <div className="place-center total-container">
              <p>Total</p>
              <h5>
                ₹
                {Number(subTotal) -
                  Number(discountValue) +
                  Number(shippingCharge)}
              </h5>
            </div>
            <button
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? (
                <div className="flex justify-center items-center">
                  <span className="spinner"></span>
                </div>
              ) : (
                "checkout"
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

OrderSummary.propTypes = {
  instruction: PropTypes.string.isRequired,
  paymentMethod: PropTypes.number.isRequired,
  selectedAddId: PropTypes.number.isRequired,
};

export default OrderSummary;
