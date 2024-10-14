import { IoIosArrowDown } from "react-icons/io";
import { RiDiscountPercentFill } from "react-icons/ri";

const Cart = () => {
  return (
    <>
      <div className="card-container">
        <h5 className="cart-title">cart</h5>
        <div className="px-12 py-12 flex flex-col gap-8 ">
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
          <a href="#" className="view-cart-btn">
            view cart
          </a>
        </div>
      </div>

      <div className="coupon-container">
        <div className="flex gap-4 items-center">
          <RiDiscountPercentFill className="h-20 w-20 fill-[#FF2E17]" />
          <div className="flex flex-col gap-2">
            <p className="dis-text">20% off on this Holi</p>
            <p className="dis-price">Up to INR 20</p>
          </div>
        </div>
        <div className="mt-12 flex gap-6 ">
          <p className="view-more">View More Offers</p>
          <IoIosArrowDown className="h-8 w-auto fill-[#161F5F]" />
        </div>
      </div>
    </>
  );
};

export default Cart;
