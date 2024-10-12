import { useEffect, useState } from "react";
import useGetBanner from "../../hooks/useGetBanner";

const Banner = () => {
  const [activeBanner, setActiveBanner] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const { banners } = useGetBanner();
  // console.log("Banners List : ", banners);
  // console.log("Total Banner : ", banners.count);

  useEffect(() => {
    if (banners.banner) {
      setActiveBanner(banners.banner[0]);
    } else {
      // console.log("no data found!");
    }
  }, [banners]);

  const handleDot = (index) => {
    // console.log(index);
    setActiveDot(index);
    setActiveBanner(banners.banner[index]);
  };

  return (
    <section className="main-banner-container relative">
      {/* <div className="full-width relative"> */}
      <div className="container">
        <div className="relative">
          <div className="inner-banner-container flex justify-start items-center">
            <div className="flex flex-col gap-40">
              <div className="w-[100%]">
                <h1>{activeBanner.title}</h1>
                <p>{activeBanner.description}</p>
              </div>
              <div className="pagination-container">
                <span>01</span>
                <span className="dots">
                  {banners.banner ? (
                    banners.banner.map((ban, index) => {
                      return (
                        <span
                          key={index}
                          onClick={() => handleDot(index)}
                          className={activeDot === index ? "active-dot" : ""}
                        ></span>
                      );
                    })
                  ) : (
                    <p>no</p>
                  )}
                </span>
                <span>0{banners.count}</span>
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

      {/* <img src="/rectangle.png" alt="Rectangle" className="rectange-shape"/>

      <img src="/ellipse.png" alt="Ellipse" className="ellipse-img"/> */}
      {/* </div> */}
    </section>
  );
};

export default Banner;
