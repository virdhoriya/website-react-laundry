import Filter from "./Filter";
import SelectClothes from "./SelectClothes";
import Cart from "./Cart";

const ServiceContainer = () => {
  return (
    <section className="pt-16 pb-48 laptop-l:pt-12 laptop-l:pb-40 laptop-md:pb-32 laptop:pb-24">
      <div className="services-con-container">
        <div className="flex items-start justify-between gap-12 laptop-md:gap-20 laptop-m:gap-16 laptop:gap-12">
          <div className="basis-[27.78%] laptop-l:basis-1/4">
            <Filter />
          </div>
          <div className="basis-[45.8%] laptop-l:grow">
            <SelectClothes />
          </div>
          <div className="basis-[21.45%] laptop-l:basis-[22.5%]">
            <Cart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContainer;
