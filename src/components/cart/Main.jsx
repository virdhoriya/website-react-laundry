import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

const Main = () => {
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
        <tr>
          <td>
            <h3>Shirt</h3>
            <p>Wet Cleaning</p>
            <p>Material: A</p>
          </td>
          <td>₹40</td>
          <td>
            <span className="flex justify-center items-center">
              <button className="inc-dec-btn">
                <HiOutlineMinus className="stroke-[#B9BCCF]" />
                {"2"}
                <HiOutlinePlus className="stroke-[#B9BCCF]" />
              </button>
            </span>
          </td>
          <td>₹80</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Main;
