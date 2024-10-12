const Services = () => {
  return (
    <section className="section-space">
      <div className="secondary-container">
        <div className="flex justify-between items-start mb-16">
          <div>
            <p className="section-title">Our Services List</p>
            <h2>Services We’re Offering</h2>
          </div>
          <a href="#" className="btn">
            Explore More
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="rounded-xl py-28 px-16 bg-[#F7F8FD]">
            <div className="flex flex-col items-start gap-20">
              <div className="min-h-[10rem]">
                <img src="/services-laundry.png" alt="laundry service" />
              </div>
              <div>
                <h3>Laundry</h3>
                <p className="content">
                  We are professional cleaners in delivering you the highest
                  quality of services in laundry
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl py-28 px-16 bg-[#F7F8FD]">
            <div className="flex flex-col items-start gap-20">
              <div className="min-h-[10rem]">
                <img src="/services-dry.png" alt="dry cleaning service" />
              </div>
              <div>
                <h3>Dry Cleaning</h3>
                <p className="content">
                We are professional cleaners in delivering 
                you the highest quality of services in laundry
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl py-28 px-16 bg-[#F7F8FD]">
            <div className="flex flex-col items-start gap-20">
              <div className="min-h-[10rem]">
                <img src="/services-estree.png" alt="steam iron service" />
              </div>
              <div>
                <h3>Steam Iron</h3>
                <p className="content">
                  We do no more burnt or stained clothes. We deliver clean and
                  presses clothes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
