import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { TbSearch } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedServiceId } from "../../redux/slices/serviceSlice";
import useFetchServices from "../../hooks/services/useFetchServices";
import useFetchCategories from "../../hooks/services/useFetchCategories";
import {
  setCategories,
  setSelectedCategoryId,
} from "../../redux/slices/categorySlice";
import toast from "react-hot-toast";

const ChooseService = () => {
  const { services, loading } = useFetchServices();
  const { fetchCategories } = useFetchCategories();
  const dispatch = useDispatch();
  const selectedServiceId = useSelector(
    (state) => state.service.selectedServiceId
  );
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleServiceClick = async (id) => {
    dispatch(setSelectedServiceId(id));
  };

  const onSearchClick = (e) => {
    e.preventDefault();
    if (search) {
      setSearch("");
      toast.success(search, {
        className: "toast-success",
      });
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
          <div className="bg-white flex flex-col rounded-3xl shadow-lg laptop-l:rounded-2xl laptop-md:rounded-xl tab:rounded-lg">
            <div className="flex justify-center gap-20 pt-12 px-12 border-b border-[#B9BCCF4D] laptop-l:gap-14 laptop-l:px-10 laptop-l:pt-10 laptop-md:pt-8 laptop-md:px-8 laptop-md:gap-12 laptop:gap-10 laptop-s:px-7 laptop-s:pt-7 tab-m:px-6 tab-m:pt-6 tab-s:px-5 tab-s:pt-5 tab-s:gap-6 tab:px-4 tab:pt-4 tab:gap-4">
              {services.map((service) => {
                const { name, image, service_id } = service;
                return (
                  <div
                    key={name}
                    className={`service-container flex flex-col gap-8 items-center laptop-l:gap-6 laptop-md:gap-5 laptop-s:gap-4 tab:gap-3 ${
                      selectedServiceId === service_id ? "active-service" : ""
                    }`}
                    onClick={() => handleServiceClick(service_id)}
                  >
                    <div className="h-24 w-24 text-center laptop-l:h-[4.5rem] laptop-l:w-[4.5rem] laptop-md:h-16 laptop-md:w-16 laptop-s:h-14 laptop-s:w-14 tab-m:h-12 tab-m:w-12 tab:h-10 tab:w-10">
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
              <div className="flex-[0_0_17%] border-r border-[#B9BCCF4D] px-8 py-10 laptop-l:px-8 laptop-l:py-7  laptop-md:py-6 laptop-md:px-8 laptop-s:px-7 laptop-s:py-5 tab-m:px-6 tab-m:py-4 tab-s:px-5 tab-s:py-3 tab:px-4">
                <div className="flex items-center justify-between">
                  <FaLocationDot className="h-12 w-12 fill-[var(--primary)] laptop-l:h-10 laptop-l:w-10 laptop-md:h-8 laptop-md:w-8 laptop-s:h-6 laptop-s:w-6 tab-s:h-4 tab-s:w-4" />
                  <p className="text-[1.6rem] leading-[3rem] font-semibold text-[var(--black)] laptop-l:text-[1.5rem] laptop-l:leading-[2.5rem] laptop-md:text-[1.3rem] laptop-md:leading-[2rem] laptop:text-[1.2rem] tab-s:text-[1rem] tab:text-[0.8rem] tab:leading-[1.5rem]">
                    Paldi
                  </p>
                  <IoIosArrowDown className="h-10 w-10 laptop-l:h-8 laptop-l:w-8 laptop-md:h-6 laptop-md:w-6 laptop-s:h-6 laptop-s:w-6 tab-s:h-4 tab-s:w-4" />
                </div>
              </div>
              <form
                className="flex-grow flex gap-4 px-8 py-6 laptop-l:px-10 laptop-l:py-4 laptop-md:px-8 laptop-md:py-3 laptop-s:px-7 laptop-s:py-4 laptop-s:gap-3 tab-m:px-6 tab-m:py-4 tab-m:items-center tab-s:px-5 tab-s:py-3 tab:px-4 tab:gap-2"
                onSubmit={onSearchClick}
              >
                <label
                  htmlFor="search"
                  className="flex justify-center items-center"
                >
                  <TbSearch className="h-10 w-10 stroke-[#687182] laptop-l:h-8 laptop-l:w-8 laptop-md:h-8 laptop-md:w-8 laptop-s:h-6 laptop-s:w-6 tab:h-4 tab:w-4" />
                </label>

                <div className="flex-grow relative tab-m:flex tab-m:items-center tab-m:justify-center">
                  <input
                    id="search"
                    type="text"
                    autoComplete="off"
                    value={search}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search here..."
                    className="w-full h-full text-[1.8rem] text-[var(--black)] leading-[2rem] focus:outline-none px-4 laptop-l:px-0 laptop-l:text-[1.6rem] laptop-l:placeholder:text-[1.4rem] laptop-md:text-[1.4rem] laptop-md:leading-normal laptop-md:placeholder:text-[1.2rem] laptop-s:text-[1.2rem] laptop-s:placeholder:text-[1rem] tab-s:text-[1rem] tab-s:placeholder:text-[0.8rem]"
                  />
                  {/* <div
                    className={`${
                      isFocused ? "search-container" : "hidden opacity-0"
                    }`}
                  >
                    <button className="cateory-option">men</button>
                    <button className="cateory-option">women</button>
                    <button className="cateory-option">kids</button>
                    <button className="cateory-option">household</button>
                  </div> */}
                </div>

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
