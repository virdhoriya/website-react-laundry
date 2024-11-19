import { useEffect, useState } from "react";
import useGetBanner from "../../hooks/useGetBanner";

const Banner = () => {
  const [activeBanner, setActiveBanner] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const { banners } = useGetBanner();

  useEffect(() => {
    if (banners.banner && banners.banner.length > 0) {
      setActiveBanner(banners.banner[0]);
      setActiveDot(0);
    }
  }, [banners]);

  const handleDot = (index) => {
    setActiveDot(index);
    setActiveBanner(banners.banner[index]);
  };

  if (!banners?.banner || banners.banner.length === 0) {
    return <p>No banner found!</p>;
  }

  return (
    <section className="bg-[#f7f8fd]">
      <div className="container">
        <div className="relative">
          <div className="inner-banner-container flex justify-start items-center">
            <div className="flex flex-col gap-40">
              <div>
                <h1>{activeBanner.title}</h1>
                <p>{activeBanner.description}</p>
              </div>
              <div className="pagination-container">
                <span>01</span>
                <span className="dots">
                  {banners.banner.map((ban, index) => {
                    return (
                      <span
                        key={index}
                        onClick={() => handleDot(index)}
                        className={activeDot === index ? "active-dot" : ""}
                      ></span>
                    );
                  })}
                </span>
                <span>0{banners.banner.length}</span>
              </div>
            </div>
          </div>

          <div className="banner-img-container">
            <img
              src={activeBanner.image}
              alt="Banner Image"
              className="banner-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
