import { FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../../redux/slices/productSlice";
import { MdSearch } from "react-icons/md";

const Filter = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.product?.products);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleClearAll = () => {
    setFilteredItems([]);
    dispatch(updateProducts(products));
  };

  const hanldeClick = (item) => {
    setSelectedProduct(item.product.name);
    const paramArray = [...filteredItems];
    if (!paramArray.some((existingItem) => existingItem === item)) {
      paramArray.push(item);
      setFilteredItems(paramArray);
      dispatch(updateProducts(paramArray));
    }
  };

  const handleRemove = (itemToRemove) => {
    setSelectedProduct("");
    const paramArray = filteredItems.filter((item) => item !== itemToRemove);
    setFilteredItems(paramArray);
    dispatch(updateProducts(paramArray));

    if (paramArray.length === 0) {
      dispatch(updateProducts(products));
    }
  };

  useEffect(() => {
    const processedArray = products.filter((item) =>
      item.product.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    setFilteredProducts(processedArray);
  }, [products, searchQuery]);

  return (
    <div className="filter flex flex-col gap-12 laptop-l:gap-10 laptop-m:gap-8">
      <div className="flex justify-between items-center">
        <h5 className="text-filters">Filters</h5>
        <h5 className="text-clear cursor-pointer" onClick={handleClearAll}>
          Clear all
        </h5>
      </div>
      <div className="flex flex-col justify-center items-stretch gap-8 laptop-l:gap-6 laptop-m:gap-4">
        <p className="dd-title">Select cloth types</p>
        <FormControl fullWidth>
          <Select
            value={selectedProduct}
            sx={{ fontSize: "16px", position: "relative" }}
            disableRipple
            onClick={(e) => e.stopPropagation()}
            MenuProps={{
              PaperProps: {
                sx: { maxHeight: 300 },
              },
            }}
          >
            <div
              className="px-8 py-5 flex items-center justify-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <MdSearch className="h-10 w-10 fill-gray-400 mx-2" />
              <input
                type="text"
                placeholder="Search product..."
                className="grow focus:outline-none focus:ring-0"
              />
            </div>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <MenuItem
                  sx={{
                    fontSize: "16px",
                    padding: "12px 20px",
                    textTransform: "capitalize",
                  }}
                  key={item.product.name}
                  value={item.product.name}
                  onClick={() => hanldeClick(item)}
                >
                  {item.product.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem
                sx={{ fontSize: "16px", padding: "12px 20px" }}
                disabled
              >
                No product found!
              </MenuItem>
            )}
          </Select>
        </FormControl>
        <div className="flex items-center justify-start flex-wrap gap-6">
          {filteredItems.length > 0 &&
            filteredItems.map((item) => {
              const { name } = item.product;
              return (
                <span className="selected-clothes" key={name}>
                  <span>{name}</span>
                  <RxCross2
                    onClick={() => handleRemove(item)}
                    className="h-8 w-8 cursor-pointer"
                  />
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
