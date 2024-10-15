import PropTypes from "prop-types";
import useFetchServiceItems from "../../hooks/useFetchServiceItems";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

const SelectClothes = ({ serviceSection, sid, setParamId, paramId }) => {
  const [categoryItemsList, setCategoryItemsList] = useState([]);
  const { categoryItems } = useFetchServiceItems(paramId, sid);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = import.meta.env.VITE_DUMMY_TOKEN;
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    setCategoryItemsList(categoryItems);
  }, [categoryItems]);

  const handleCategoryClick = (category_id) => {
    setParamId(category_id);
  };

  const onIncClick = () => {
    setItemCount(itemCount + 1);
  };

  const onDecClick = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };

  const handleBtnClick = async (product_id, service_id) => {
    console.log(
      `Category id : ${paramId}  Product Id : ${product_id}  Service Id : ${service_id}`
    );

    try {
      const response = await fetch(`${baseURL}/carts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          category_id: paramId,
          product_id: product_id,
          service_id: service_id,
          quantity: 1,
        }),
      });
      if (response.ok) {
        toast.success("Item Added Successfully!");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Error occur while adding item into cart!", {
        style: {
          maxWidth: "400px",
        },
      });
    }
  };

  return (
    <div className="select-clothes-container">
      <h4 className="service-title">Select Cloths</h4>
      <div className="flex gap-16">
        {serviceSection.map((category) => {
          const { category_name, category_category_id } = category;
          return (
            <span
              key={category_category_id}
              className="category-tags"
              onClick={() => handleCategoryClick(category_category_id)}
            >
              {category_name}
            </span>
          );
        })}
      </div>
      <div className="flex flex-col gap-12">
        {categoryItemsList.map((categoryItem) => {
          return (
            <div
              key={categoryItem.product_id}
              className="cat-item-container flex gap-8"
            >
              <img
                src={categoryItem.product.image}
                alt="Service Image"
                className="h-32 w-32 rounded-2xl"
              />
              <div className="flex-grow flex justify-between items-center">
                <div>
                  <h5 className="cat-item-name">{categoryItem.product.name}</h5>
                  <p className="cat-item-price">₹{categoryItem.price}</p>
                </div>
                <button
                  className="add-btn"
                  onClick={() =>
                    handleBtnClick(
                      categoryItem.product_id,
                      categoryItem.service_id
                    )
                  }
                >
                  Add
                </button>

                <button className="inc-dec-btn">
                  <HiOutlineMinus
                    className="stroke-[#B9BCCF]"
                    onClick={onDecClick}
                  />
                  {itemCount}
                  <HiOutlinePlus
                    className="stroke-[#B9BCCF]" 
                    onClick={onIncClick}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

SelectClothes.propTypes = {
  serviceSection: PropTypes.arrayOf(
    PropTypes.shape({
      category_category_id: PropTypes.number.isRequired,
      category_name: PropTypes.string.isRequired,
    })
  ),
  sid: PropTypes.number.isRequired,
  setParamId: PropTypes.func.isRequired,
  paramId: PropTypes.number.isRequired,
};

export default SelectClothes;
