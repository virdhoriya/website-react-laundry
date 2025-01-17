import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="section-space">
      <div className="secondary-container">
        <div className="flex items-center justify-start relative tab:flex-col tab:gap-10 mb-l:gap-8 tab:items-stretch star-psudo">
          <div className="basis-1/2 flex flex-col items-start gap-20 laptop-l:gap-16 laptop-md:gap-10 laptop:gap-8 tab:flex-row tab:justify-between">
            <h2 className="banner-title">
              Our
              <br className="tab:hidden" />
              <span className="tab:pl-4">Prices</span>
            </h2>
            <Link to="/contact" className="primary-button">
              Contact Us
            </Link>
          </div>
          <div className="basis-[45%] laptop-m:basis-1/2">
            <p className="para2">
              We make doing your laundry simple. We can save your time, so you
              can enjoy doing the things you love. We can save you money on
              soap, water, heating and electricity. So you can enjoy even more
              of the things you love. Our prices are simple and affordable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
