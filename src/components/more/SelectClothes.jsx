import PropTypes from "prop-types";
import useFetchServiceItems from "../../hooks/useFetchServiceItems";
import { useEffect, useState } from "react";

const SelectClothes = ({ serviceSection, sid, setParamId, paramId }) => {
  const [categoryItemsList, setCategoryItemsList] = useState([]);
  const { categoryItems } = useFetchServiceItems(paramId, sid);
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    setCategoryItemsList(categoryItems);
  }, [categoryItems]);

  const handleCategoryClick = (category_id) => {
    setParamId(category_id);
  };

  const handleBtnClick = async (product_id, service_id) => {
    console.log(`Category id : ${paramId}`);
    console.log(`Product Id : ${product_id}`);
    console.log(`Service Id : ${service_id}`);

    try {
      const response = await fetch(`${baseURL}/carts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtzbmtzY2IyMDA1QGdtYWlsLmNvbSIsInVzZXJfaWQiOjQ5LCJyb2xlX2lkIjo1LCJpYXQiOjE3Mjg3MjM2ODEsImV4cCI6MTcyODcyNzI4MX0.h-WKCB0z4wlhY8Hz63uB32P61AW6Z82Jb_U4HB51Y0E`,
        },
        body: JSON.stringify({
          category_id: paramId,
          product_id: product_id,
          service_id: service_id,
          quantity: 1,
        }),
      });

      const data = await response.json();
      console.log("Output ------", data);
    } catch (error) {
      console.log(`ERROR : ${error}`);
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
