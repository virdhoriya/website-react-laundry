import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import useFetchServiceItems from "../../hooks/useFetchServiceItems";

const SelectClothes = ({
  serviceSection,
  sid,
  setParamId,
  paramId,
  isAuthenticated,
}) => {
  const [categoryItemsList, setCategoryItemsList] = useState([]);
  const { categoryItems } = useFetchServiceItems(paramId, sid);

  useEffect(() => {
    setCategoryItemsList(categoryItems);
  }, [categoryItems]);

  const handleCategoryClick = (category_id) => {
    setParamId(category_id);
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
            <CategoryItem
              key={categoryItem.product_id}
              categoryItem={categoryItem}
              paramId={paramId}
              isAuthenticated={isAuthenticated}
            />
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
  isAuthenticated: PropTypes.bool.isRequired,
};

export default SelectClothes;
