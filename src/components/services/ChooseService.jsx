import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { TbSearch } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedServiceId } from "../../redux/slices/serviceSlice";
import useFetchServices from "../../hooks/useFetchServices";
import useFetchCategories from "../../hooks/services/useFetchCategories";
import {
  setCategories,
  setSelectedCategoryId,
} from "../../redux/slices/categorySlice";
import toast from "react-hot-toast";

const ChooseService = () => {
  const dispatch = useDispatch();
  const { fetchCategories } = useFetchCategories();
  const selectedServiceId = useSelector(
    (state) => state.service.selectedServiceId
  );
  const [search, setSearch] = useState("");
  const { services, loading } = useFetchServices();

  const handleServiceClick = async (id) => {
    dispatch(setSelectedServiceId(id));
  };

  const onSearchClick = (e) => {
    e.preventDefault();
    if (search) {
      setSearch("");
      toast.success(search);
    }
  };

  useEffect(() => {
    if (!loading && services.length > 0) {
      if (!selectedServiceId) {
        dispatch(setSelectedServiceId(services[0].service_id));
      }
    }
  }, [loading, services, selectedServiceId, dispatch]);

  useEffect(() => {
    if (selectedServiceId) {
      const getCategories = async () => {
        const result = await fetchCategories(selectedServiceId);
        if (result) {
          if (result.length > 0) {
            dispatch(setSelectedCategoryId(result[0].category_category_id));
            dispatch(setCategories(result));
          } else {
            dispatch(setSelectedCategoryId(0));
            dispatch(setCategories([]));
          }
        }
      };
      getCategories();
    }
  }, [dispatch, fetchCategories, selectedServiceId]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="section-services">
      <div className="secondary-container">
        <h1>Choose your Service</h1>

        <div className="flex justify-center items-center">
          <div className="bg-white flex flex-col rounded-3xl shadow-lg laptop-m:rounded-2xl tab-s:rounded-xl">
            <div className="flex justify-center gap-20 pt-12 px-12 border-b border-[#B9BCCF4D] laptop-l:gap-16 laptop-l:px-10 laptop-l:pt-10 laptop-m:pt-8 laptop-m:px-8 laptop-m:gap-12 laptop-s:px-6 laptop-s:pt-6 laptop-s:gap-8 tab-s:px-4 tab-s:pt-4 tab-s:gap-3">
              {services.map((service) => {
                const { name, image, service_id } = service;
                return (
                  <div
                    key={name}
                    className={`service-container flex flex-col gap-8 items-center ${
                      selectedServiceId === service_id ? "active-service" : ""
                    } laptop-l:gap-6 laptop-m:gap-4 tab-s:gap-2`}
                    onClick={() => handleServiceClick(service_id)}
                  >
                    <div className="h-24 w-24 text-center laptop-l:h-20 laptop-l:w-20 laptop-m:h-16 laptop-m:w-16 laptop-s:h-14 laptop-s:w-14 tab-s:h-12 tab-s:w-12">
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
              <div className="flex-[0_0_17%] border-r border-[#B9BCCF4D] px-8 py-10 laptop-l:px-10 laptop-l:py-7  laptop-m:py-5 laptop-m:px-5 laptop-m:pl-8 laptop-s:px-4 laptop-s:py-4 laptop-s:pl-6 tab-s:px-4 tab-s:py-3">
                <div className="flex items-center justify-between">
                  <FaLocationDot className="h-12 w-12 fill-[var(--primary)] laptop-l:h-10 laptop-l:w-10 laptop-m:h-8 laptop-m:w-8 laptop-s:h-6 laptop-s:w-6 tab-s:h-4 tab-s:w-4" />
                  <p className="text-[1.6rem] leading-[3rem] font-semibold text-[var(--black)] laptop-l:text-[1.5rem] laptop-l:leading-[2.5rem] laptop-m:text-[1.4rem] laptop-m:leading-normal laptop-s:text-[1.2rem] tab-s:text-[1rem]">
                    Paldi
                  </p>
                  <IoIosArrowDown className="h-10 w-10 laptop-l:h-8 laptop-l:w-8 laptop-s:h-6 laptop-s:w-6 tab-s:h-4 tab-s:w-4" />
                </div>
              </div>
              <form
                className="flex-grow flex gap-4 px-8 py-6 laptop-l:px-10 laptop-l:py-3 laptop-m:px-8 laptop-m:py-2 laptop-s:px-6 laptop-s:py-1 tab-s:px-4"
                onSubmit={onSearchClick}
              >
                <label
                  htmlFor="search"
                  className="flex justify-center items-center"
                >
                  <TbSearch className="h-12 w-12 stroke-[#687182] laptop-l:h-10 laptop-l:w-10 laptop-m:h-8 laptop-m:w-8 laptop-s:h-6 laptop-s:w-6 tab-s:h-4 tab-s:w-6" />
                </label>

                <input
                  id="search"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search here..."
                  className="flex-grow focus:outline-none text-[1.8rem] text-[var(--black)] leading-[2rem] laptop-l:text-[1.6rem] laptop-m:text-[1.4rem] laptop-m:leading-normal laptop-s:text-[1.2rem] tab-s:text-[1.2rem]"
                />
                <button type="submit" className="search-button">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseService;
