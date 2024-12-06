import { RxCross2 } from "react-icons/rx";

const Filter = () => {
  return (
    <div className="filter flex flex-col gap-12 laptop-l:gap-10 laptop-m:gap-8">
      <div className="flex justify-between items-center">
        <h5 className="text-filters">Filters</h5>
        <h5 className="text-clear">Clear all</h5>
      </div>
      <div className="flex flex-col justify-center items-stretch gap-8 laptop-l:gap-6 laptop-m:gap-4">
        <p className="dd-title">select cloth types</p>
        <select className="filter-dd">
          <option value="shirt">shirt</option>
          <option value="t-shirt">t-shirt</option>
          <option value="pant">pant</option>
          <option value="zabhbha/kurta">shzabhbha/kurtairt</option>
          <option value="coat/blazer">coat/blazer</option>
        </select>
        <div className="flex items-center justify-start flex-wrap gap-6">
          <span className="selected-clothes">
            <span>pant</span>
            <RxCross2 />
          </span>
          <span className="selected-clothes">
            <span>shirt</span>
            <RxCross2 />
          </span>
          <span className="selected-clothes">
            <span>t-shirt</span>
            <RxCross2 />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8 laptop-l:gap-6 laptop-m:gap-4">
        <div className="flex items-center justify-between w-full">
          <p className="dd-title">Price</p>
          <p className="filter-price">₹10 - ₹180</p>
        </div>
        <div>
          <form>
            <input type="range" className="input-range" />
          </form>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[1.2rem]">₹10</span>
          <span className="text-[1.2rem]">₹500</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
