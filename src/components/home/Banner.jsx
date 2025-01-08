import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import useGetBanners from "../../hooks/banner/useFetchBanners";

const Banner = () => {
  const { loading, banners } = useGetBanners();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (banners.length > 0) {
      const intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }, 10000);

      return () => clearInterval(intervalId);
    }
  }, [banners.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  if (loading) {
    return <Loading />;
  }

  if (banners.length === 0) {
    return;
  }

  const activeBanner = banners[activeIndex];

  return (
    <section className="bg-[var(--navbar)]">
      <div className="container-b">
        <div className="flex justify-center items-center tab:flex-col-reverse tab:py-8 tab:gap-4 mb:py-4 mb:gap-2">
          <div className="inner-banner-container flex justify-start items-center">
            <div className="flex flex-col gap-40 laptop-l:gap-32 laptop-m:gap-24 laptop-s:gap-20 tab-l:gap-16 tab:items-center tab:gap-4">
              <div>
                <h1>{activeBanner?.title || "No Title"}</h1>
                <p className="tab:text-center">
                  {activeBanner?.description || "No Description"}
                </p>
              </div>
              <div className="pagination-container">
                <span>01</span>
                <span className="dots">
                  {banners.map((banner, index) => {
                    const { banner_id } = banner;
                    return (
                      <span
                        key={banner_id}
                        onClick={() => handleDotClick(index)}
                        className={activeIndex === index ? "active-dot" : ""}
                      ></span>
                    );
                  })}
                </span>
                <span>0{banners.length}</span>
              </div>
            </div>
          </div>

          <div className="banner-img-container">
            <img
              key={activeBanner?.image}
              src={activeBanner?.image}
              alt={activeBanner?.title || "Banner Image"}
              className="banner-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
