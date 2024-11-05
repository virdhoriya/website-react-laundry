import { useState } from "react";
import Main from "./Main";
import AddAddress from "./AddAddress";
import AddInstruction from "./AddInstruction";
import PayementMethod from "./PayementMethod";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [instruction, setInstruction] = useState("");
  const [paymentMethod, setPayementMethod] = useState(0);
  const [selectedAddId, setSelectAddId] = useState(0);

  return (
    <section className="section-cart">
      <div className="secondary-container">
        <div className="flex justify-between items-start">
          <div className="flex-[0_0_63%]">
            <div className="flex flex-col gap-24">
              <Main setSubTotal={setSubTotal} />
              <AddAddress setSelectAddId={setSelectAddId} />
              <AddInstruction
                instruction={instruction}
                setInstruction={setInstruction}
              />
              <PayementMethod setPayementMethod={setPayementMethod} />
            </div>
          </div>
          <div className="flex-[0_0_31%] border border-[#b9bccf4d] rounded-xl">
            <OrderSummary
              subTotal={subTotal}
              instruction={instruction}
              paymentMethod={paymentMethod}
              selectedAddId={selectedAddId}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
