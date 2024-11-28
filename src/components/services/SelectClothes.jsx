import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSelectedCategoryId } from "../../redux/slices/categorySlice";
import useFetchServiceItems from "../../hooks/useFetchServiceItems";

const SelectClothes = () => {
  const dispatch = useDispatch();
  const { fetchServiceItems } = useFetchServiceItems();
  const categories = useSelector((store) => store.category.categories);
  const service_id = useSelector((state) => state.service.selectedServiceId);
  const category_id = useSelector((state) => state.category.selectedCategoryId);
  const [categoryItemsList, setCategoryItemsList] = useState([]);

  useEffect(() => {
    if (service_id && category_id) {
      const getProducts = async () => {
        const result = await fetchServiceItems(category_id, service_id);
        if (result && result.length > 0) {
          setCategoryItemsList(result);
        }
      };
      getProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category_id, service_id]);

  const handleCategoryClick = (category_id) => {
    dispatch(setSelectedCategoryId(category_id));
  };

  return (
    <div className="select-clothes-container">
      <h4 className="service-title">Select Cloths</h4>
      <div className="flex gap-16">
        {categories.length > 0
          ? categories.map((category) => {
              const { category_name, category_category_id } = category;
              return (
                <span
                  key={category_category_id}
                  className={`category-tags ${
                    category_id === category_category_id && "active-tag"
                  }`}
                  onClick={() => handleCategoryClick(category_category_id)}
                >
                  {category_name}
                </span>
              );
            })
          : "No category Found"}
      </div>
      <div className="flex flex-col gap-12">
        {categories.length > 0 &&
          categoryItemsList.map((categoryItem) => {
            return (
              <CategoryItem
                key={categoryItem.product_id}
                categoryItem={categoryItem}
                category_id={category_id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SelectClothes;
