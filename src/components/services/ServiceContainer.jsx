import PropTypes from "prop-types";
import SelectClothes from "./SelectClothes";
import Filter from "./Filter";
import Cart from "./Cart";

const ServiceContainer = ({
  serviceSectionCategory,
  sid,
  setParamId,
  paramId,
  isAuthenticated,
}) => {
  return (
    <section className="pt-16 pb-48">
      <div className="secondary-container">
        <div className="flex items-start justify-between">
          <div className="flex-[0_0_28%]">
            <Filter />
          </div>
          <div className="flex-[0_0_46%]">
            <SelectClothes
              serviceSection={serviceSectionCategory}
              sid={sid}
              setParamId={setParamId}
              paramId={paramId}
              isAuthenticated={isAuthenticated}
            />
          </div>
          <div className="flex-[0_0_21.45%]">
            <Cart />
          </div>
        </div>
      </div>
    </section>
  );
};

ServiceContainer.propTypes = {
  serviceSectionCategory: PropTypes.arrayOf(
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

export default ServiceContainer;
