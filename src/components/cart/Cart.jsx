import { useState } from "react";
import Main from "./Main";
import AddAddress from "./AddAddress";
import AddInstruction from "./AddInstruction";
import PayementMethod from "./PayementMethod";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const [subTotal, setSubTotal] = useState(0);
  return (
    <section className="section-cart">
      <div className="secondary-container">
        <h1>{subTotal}</h1>
        <div className="flex justify-between items-start">
          <div className="flex-[0_0_63%]">
            <div className="flex flex-col gap-24">
              <Main setSubTotal={setSubTotal}/>
              <AddAddress />
              <AddInstruction />
              <PayementMethod />
            </div>
          </div>
          <div className="flex-[0_0_31%] border border-[#b9bccf4d] rounded-xl">
            <OrderSummary />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
