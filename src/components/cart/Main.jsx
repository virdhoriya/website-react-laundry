import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TableRow from "./TableRow";
import useViewCart from "../../hooks/cart/useViewCart";

const Main = ({ setSubTotal }) => {
  const [cart, setCart] = useState([]);
  const { viewCart } = useViewCart();

  useEffect(() => {
    const fetchCart = async () => {
      const res = await viewCart();
      if (res) {
        setCart(res);
      }
    };
    fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const total = cart.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
    setSubTotal(total);
  }, [cart, setSubTotal]);
  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th>Items</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.length === 0 ? (
          <tr>
            <td colSpan="4" className="text-center">
              No item found
            </td>
          </tr>
        ) : (
          cart.map((item, index) => {
            return <TableRow item={item} key={index} />;
          })
        )}
      </tbody>
    </table>
  );
};

Main.propTypes = {
  setSubTotal: PropTypes.func.isRequired,
};

export default Main;
