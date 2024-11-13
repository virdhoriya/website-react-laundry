import PropTypes from "prop-types";
import { useState } from "react";
import BackgroundImage from "./BackgroundImage";
import ChooseService from "./ChooseService";
import ServiceContainer from "./ServiceContainer";

const Services = ({ isAuthenticated }) => {
  const defaultService = 1;
  const [serviceSectionCategory, setServiceSectionCategory] = useState([]);
  const [sid, setSid] = useState(defaultService);
  const [paramId, setParamId] = useState(175);
  return (
    <div>
      <BackgroundImage />
      <ChooseService
        setServiceSectionCategory={setServiceSectionCategory}
        setSid={setSid}
        sid={sid}
        setParamId={setParamId}
      />
      <ServiceContainer
        serviceSectionCategory={serviceSectionCategory}
        sid={sid}
        setParamId={setParamId}
        paramId={paramId}
        isAuthenticated={isAuthenticated}
      />
    </div>
  );
};

Services.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Services;
