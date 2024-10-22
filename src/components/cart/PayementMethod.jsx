import { BsCreditCard2Back } from "react-icons/bs";

const PayementMethod = () => {
  return (
    <div className="flex flex-col gap-12">
      <h4 className="cart-sub-title">Select Payment Method</h4>
      <label className="border-[1.5px] border-black cursor-pointer p-6 rounded-md flex justify-between items-center shadow w-[50rem]  transition-all duration-300">
        <div className="flex items-center space-x-5">
          <div className="flex items-center">
            <BsCreditCard2Back className="inline-block h-14 w-14 fill-[var(black)]"/>
          </div>
          <h2 className="text-[2.2rem] leading-[3.5rem] capitalize">Cash On Delivery</h2>
        </div>
        <input
          type="radio"
          name="payment"
          className="appearance-none h-8 w-8 border-2 border-black rounded-full checked:bg-black checked:border-transparent checked:ring-2 checked:ring-black checked:ring-offset-2"
        />
      </label>
    </div>
  );
};

export default PayementMethod;
