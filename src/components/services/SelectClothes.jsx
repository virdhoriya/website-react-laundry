import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategoryId } from "../../redux/slices/categorySlice";
import useFetchServiceItems from "../../hooks/services/useFetchServiceItems";
import ProductShimmer from "./ProductShimmer";
import CategoryItem from "./CategoryItem";

const SelectClothes = () => {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.category.categories);
  const service_id = useSelector((state) => state.service.selectedServiceId);
  const category_id = useSelector((state) => state.category.selectedCategoryId);
  const { loading } = useFetchServiceItems(service_id, category_id);
  const categoryItemsList = useSelector(
    (state) => state?.product?.filteredProducts
  );

  const handleCategoryClick = (category_id) => {
    dispatch(setSelectedCategoryId(category_id));
  };

  return (
    <div className="select-clothes-container">
      <h4 className="service-title">Select Clothes</h4>
      <div className="flex items-center gap-16 laptop-l:gap-12 laptop-m:gap-8">
        {categories.length > 0 ? (
          categories.map((category) => {
            const { category_name, category_category_id } = category;
            return (
              <span
                key={category_category_id}
                className={`category-tags ${
                  category_id === category_category_id ? "active-tag" : ""
                }`}
                onClick={() => handleCategoryClick(category_category_id)}
              >
                {category_name}
              </span>
            );
          })
        ) : (
          <p>No category found!</p>
        )}
      </div>
      <div className="flex flex-col gap-12 laptop-l:gap-10 laptop-m:gap-8">
        {loading ? (
          Array(5)
            .fill(0)
            .map((_, index) => <ProductShimmer key={index} />)
        ) : categories.length > 0 && categoryItemsList.length > 0 ? (
          categoryItemsList.map((categoryItem) => (
            <CategoryItem
              key={categoryItem.product_id}
              categoryItem={categoryItem}
              category_id={category_id}
            />
          ))
        ) : (
          <p>No products found for this category!</p>
        )}
      </div>
    </div>
  );
};

export default SelectClothes;
