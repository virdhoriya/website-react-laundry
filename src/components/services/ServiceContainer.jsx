import Filter from "./Filter";
import SelectClothes from "./SelectClothes";
import Cart from "./Cart";

const ServiceContainer = () => {
  return (
    <section className="pt-16 pb-48">
      <div className="secondary-container">
        <div className="flex items-start justify-between">
          <div className="flex-[0_0_28%]">
            <Filter />
          </div>
          <div className="flex-[0_0_46%]">
            <SelectClothes />
          </div>
          <div className="flex-[0_0_21.45%]">
            <Cart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContainer;
