import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="section-space">
      <div className="secondary-container">
        <div className="flex items-center justify-start tab:flex-col tab:items-stretch tab:gap-8">
          <div className="flex-[0_0_50%] flex flex-col items-start gap-20 laptop-l:gap-16 laptop-m:gap-12 laptop-s:gap-8 tab:gap-12 tab:flex-row tab:justify-between">
            <h2 className="banner-title">
              Our
              <br className="tab:hidden" />
              <span className="tab:pl-4">Prices</span>
            </h2>
            <Link to="/contact" className="primary-button">
              Contact Us
            </Link>
          </div>
          <div className="flex-[0_0_45%] laptop:flex-[0_0_50%]">
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
