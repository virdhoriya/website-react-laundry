import { FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

const Filter = () => {
  const categories = useSelector((state) => state.category.categories);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    categories.filter((item) => item !== newValue);
    setSelectedCategory(newValue);
    setFilteredItems((prevItems) =>
      prevItems.includes(newValue) ? prevItems : [...prevItems, newValue]
    );
  };

  const handleRemove = (itemToRemove) => {
    setFilteredItems((prevItems) =>
      prevItems.filter((item) => item !== itemToRemove)
    );
  };

  return (
    <div className="filter flex flex-col gap-12 laptop-l:gap-10 laptop-m:gap-8">
      <div className="flex justify-between items-center">
        <h5 className="text-filters">Filters</h5>
        <h5 className="text-clear">Clear all</h5>
      </div>
      <div className="flex flex-col justify-center items-stretch gap-8 laptop-l:gap-6 laptop-m:gap-4">
        <p className="dd-title">select cloth types</p>
        <FormControl fullWidth>
          <Select
            value={selectedCategory || ""}
            onChange={handleChange}
            sx={{ fontSize: "16px" }}
          >
            {categories
              ? categories.map((category) => {
                  const { category_category_id, category_name } = category;
                  return (
                    <MenuItem
                      sx={{ fontSize: "16px" }}
                      key={category_category_id}
                      value={category_name}
                    >
                      {category_name}
                    </MenuItem>
                  );
                })
              : ""}
          </Select>
        </FormControl>
        <div className="flex items-center justify-start flex-wrap gap-6">
          {filteredItems.length > 0
            ? filteredItems.map((item) => (
                <span className="selected-clothes" key={item}>
                  <span>{item}</span>
                  <RxCross2
                    onClick={() => handleRemove(item)}
                    className="h-8 w-8 cursor-pointer"
                  />
                </span>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Filter;
