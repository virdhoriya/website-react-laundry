import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Cart = () => {
  const subTotal = useSelector((state) => state?.cart?.subTotal);
  const shippingCharge = useSelector(
    (state) => state?.setting?.settings?.shipping_charge
  );
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);

  return (
    <>
      <div className="card-container">
        <h5 className="cart-title">cart</h5>
        <div className="p-12 flex flex-col gap-10 laptop-l:p-10 laptop-md:p-8 laptop-md:gap-8 laptop-m:px-8 laptop-m:py-10 laptop-m:gap-8">
          <div className="place-center">
            <p>Sub Total</p>
            <h5>₹{subTotal ? subTotal : 0}</h5>
          </div>
          <div className="place-center">
            <p>Shipping Charge</p>
            <h5>₹{!isAuthenticated || !subTotal ? 0 : shippingCharge}</h5>
          </div>
          <span className="line"></span>
          <div className="place-center total-container">
            <p>Total</p>
            <h5>
              ₹
              {subTotal && shippingCharge
                ? Number(subTotal) + Number(shippingCharge)
                : 0}
            </h5>
          </div>
          <Link to="/cart" className="view-cart-btn">
            view cart
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
