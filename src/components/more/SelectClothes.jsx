import PropTypes from "prop-types";
import useFetchServiceItems from "../../hooks/useFetchServiceItems";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SelectClothes = ({ serviceSection, sid, setParamId, paramId }) => {
  const [categoryItemsList, setCategoryItemsList] = useState([]);
  const { categoryItems } = useFetchServiceItems(paramId, sid);

  useEffect(() => {
    setCategoryItemsList(categoryItems);
  }, [categoryItems]);

  const handleCategoryClick = (category_id) => {
    setParamId(category_id);
  };

  const handleBtnClick = async (product_id, service_id) => {
    toast.success(
      `Category id : ${paramId}  Product Id : ${product_id}  Service Id : ${service_id}`
    );
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
        {categoryItemsList.map((categoryItem, index) => {
          return (
            <div key={index} className="cat-item-container flex gap-8">
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
