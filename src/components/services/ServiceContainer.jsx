import Filter from "./Filter";
import SelectClothes from "./SelectClothes";
import Cart from "./Cart";

const ServiceContainer = () => {
  return (
    <section className="pt-16 pb-48 laptop-l:pt-12 laptop-l:pb-40 laptop-m:pb-32 laptop:pb-24">
      <div className="services-con-container">
        <div className="flex items-start justify-between gap-12 laptop:gap-8 laptop:justify-around">
          <div className="flex-[0_0_27.78%] laptop:flex-[0_0_26%]">
            <Filter />
          </div>
          <div className="flex-[0_0_45.8%] laptop:flex-[0_0_39%]">
            <SelectClothes />
          </div>
          <div className="flex-[0_0_21.45%] laptop:flex-[0_0_22.5%]">
            <Cart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContainer;
