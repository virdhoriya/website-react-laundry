const Banner = () => {
  return (
    <section className="section-space">
      <div className="secondary-container">
        <div className="flex items-start justify-start">
          <div className="flex-[0_0_50%]">
            <h2 className="banner-title mb-20">
              Services We’re
              <br />
              Offering
            </h2>
            <a href="#" className="btn">
              Contact Us
            </a>
          </div>
          <div className="flex-[0_0_50%]">
            <p className="para2">
              We strive to ensure quality laundry, on-time delivery and reliable
              service for all linen, uniform and guest laundry needs. A
              dedicated in-plant quality assurance team is on hand to provide a
              regular visual inspection to maintain quality standards and seek
              continuous improvements. The team would review and offer precise
              washing formula suitable for each type of linen.
            </p>
            <p className="para2">
              Our philosophy is to offer neither discount prices nor high
              prices. We will also make contracts with retail stores to have
              their garments cleaned and altered with a special discount within
              an agreement in place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
