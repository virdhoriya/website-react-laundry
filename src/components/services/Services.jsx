import { useState } from "react";
import BackgroundImage from "./BackgroundImage";
import ChooseService from "./ChooseService";
import ServiceContainer from "./ServiceContainer";

const Services = () => {
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
      />
    </div>
  );
};

export default Services;
