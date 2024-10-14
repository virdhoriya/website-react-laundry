const Banner = () => {
  return (
    <section className="section-space">
      <div className="secondary-container">
        <div className="flex items-start justify-start">
          <div className="flex-[0_0_50%]">
            <h2 className="banner-title mb-20">
              Laundry
              <br />
              Service
            </h2>
            <a href="#" className="btn">
              Contact Us
            </a>
          </div>
          <div className="flex-[0_0_50%]">
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
