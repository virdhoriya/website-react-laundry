import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="section-space">
      <div className="tertiary-container">
        <div className="flex items-start justify-start tab-s:items-stretch tab:flex-col tab:gap-12">
          <div className="flex-[0_0_50%] tab:flex tab:justify-between tab:items-center">
            <h2 className="banner-title mb-20 laptop-l:mb-16 laptop-m:mb-12 laptop-s:mb-8 tab-s:mb-16 tab:mb-0 tab:flex-wrap">
              Laundry
              <span className="hidden tab:inline-block px-2"></span>
              <br className="tab:hidden" />
              Service
            </h2>
            <Link to="/contact" className="primary-button">
              Contact Us
            </Link>
          </div>
          <div className="flex-[0_0_45%] space-y-16 laptop-m:space-y-12 laptop-m:flex-[0_0_50%]  laptop-s:space-y-8 tab:space-y-6">
            <p className="para2">
              We are professional cleaners in delivering you the highest quality
              of services in pressing and clean.
            </p>
            <p className="para2">
              Our laundry services take pride in meeting our customers’ needs.
              Our staff is trained and ready to meet any demand or request that
              comes their way. We embrace the opportunity to gain your trust in
              your valuable items and deliver 100% customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
