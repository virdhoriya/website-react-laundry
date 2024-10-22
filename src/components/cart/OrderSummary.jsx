import { Link } from "react-router-dom";

const OrderSummary = () => {
  return (
    <div className="flex flex-col">
      <h4 className="cart-title">Order Summary</h4>
      <div className="flex items-center gap-8 p-10 border-b border-[#b9bccf4d]">
        <input
          type="text"
          placeholder="Add Coupon Code"
          className="grow border border-[#EFF3FF] rounded-xl text-[1.8rem] leading-10 py-5 px-4 focus:ring-0"
        />
        <button className="apply-btn">Apply</button>
      </div>
      <div className="px-12 py-12 flex flex-col gap-10 ">
          <div className="subtotal-container">
            <p>Sub Total</p>
            <h5>₹80</h5>
          </div>
          <div className="shipcharge-container">
            <p>Shipping Charge</p>
            <h5>₹5</h5>
          </div>
          <span className="line"></span>
          <div className="total-container">
            <p>Total</p>
            <h5>₹85</h5>
          </div>
          <Link to="/cart" className="view-cart-btn">
            checkout
          </Link>
        </div>
    </div>
  );
};

export default OrderSummary;
