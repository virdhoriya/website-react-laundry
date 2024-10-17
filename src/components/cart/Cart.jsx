import Main from "./Main";

const Cart = () => {
  return (
    <section className="section-cart">
      <div className="secondary-container">
        <div className="flex justify-between items-start">
          <div className="flex-[0_0_63%]">
            <Main />
          </div>
          <div className="bg-blue-500 flex-[0_0_31%]">1 2 3 4</div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
