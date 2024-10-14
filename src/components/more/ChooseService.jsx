import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { TbSearch } from "react-icons/tb";
import useFetchServices from "../../hooks/useFetchServices";
import useFetchCategories from "../../hooks/useFetchCategories";

const ChooseService = ({
  setServiceSectionCategory,
  setSid,
  sid,
  setParamId,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState(sid);
  const [serviceData, setServiceData] = useState([]);
  const [search, setSearch] = useState("");
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = import.meta.env.VITE_TOKEN;
  const { services } = useFetchServices();
  const { categories } = useFetchCategories(selectedServiceId);

  const handleServiceClick = (id) => {
    setSelectedServiceId(id);
    setParamId(175);
  };

  useEffect(() => {
    if (services) {
      setServiceData(services);
    }

    if (categories) {
      setServiceSectionCategory(categories);
    }
    setSid(selectedServiceId);
  }, [
    services,
    selectedServiceId,
    baseURL,
    token,
    setServiceSectionCategory,
    categories,
    setSid,
  ]);

  return (
    <section className="section-services">
      <div className="secondary-container">
        <h1 className="pb-[7.65rem]">Choose your Service</h1>

        <div className="flex justify-center items-center">
          <div className="bg-white flex flex-col rounded-3xl shadow-lg ">
            <div className="flex justify-center gap-24 pt-12 px-12 border-b border-[#B9BCCF4D] border-black">
              {serviceData.map((service) => {
                const { name, image, service_id } = service;
                return (
                  <div
                    key={name}
                    className="service-container flex flex-col gap-8 items-center"
                    onClick={() => handleServiceClick(service_id)}
                  >
                    <div className="h-24 w-24 text-center">
                      <img
                        src={image}
                        alt="Service image"
                        className="inline-block max-h-full w-auto"
                      />
                    </div>
                    <h4 className="service-name">{name}</h4>
                  </div>
                );
              })}
            </div>

            <div className="flex">
              <div className="flex-[0_0_17%] border-r border-black py-8 px-8">
                <div className="flex items-center justify-between">
                  <FaLocationDot className="h-12 w-12 fill-[#161f5f]" />
                  <p className="text-[1.6rem] leading-[3rem] font-semibold">
                    Paldi
                  </p>
                  <IoIosArrowDown className="h-8 w-8" />
                </div>
              </div>
              <div className="flex-grow py-8 px-8 flex gap-4">
                <TbSearch className="h-12 w-12 stroke-[#687182]" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search here..."
                  className="flex-grow focus:outline-none text-[2rem] leading-[2rem]"
                />
                <button>Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ChooseService.propTypes = {
  setServiceSectionCategory: PropTypes.func.isRequired,
  setSid: PropTypes.func.isRequired,
  setParamId: PropTypes.func.isRequired,
  sid: PropTypes.number.isRequired,
};

export default ChooseService;
