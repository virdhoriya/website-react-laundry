import { RxCross2 } from "react-icons/rx";

const Filter = () => {
  return (
    <div className="filter flex flex-col gap-12">
      <div className="flex justify-between">
        <h5 className="text-filters">Filters</h5>
        <h5 className="text-clear">Clear all</h5>
      </div>
      <div>
        <p className="dd-title mb-8">select cloth types</p>
        <select className="filter-dd mb-8">
          <option value="shirt">shirt</option>
          <option value="t-shirt">t-shirt</option>
          <option value="pant">pant</option>
          <option value="zabhbha/kurta">shzabhbha/kurtairt</option>
          <option value="coat/blazer">coat/blazer</option>
        </select>
        <div className="flex gap-6">
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
      <div className="flex flex-col gap-12">
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
