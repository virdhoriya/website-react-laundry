import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="space-xl">
      <div className="secondary-container">
        <div className="flex justify-between items-start mb-16 laptop-m:mb-14 laptop-s:mb-10 tab-l:mb-8">
          <div className="tab:self-stretch">
            <p className="section-title">Our Services List</p>
            <h2>Services We’re Offering</h2>
          </div>
          <Link
            to="/services"
            className="btn"
            role="button"
            title="Explore More"
          >
            Explore More
          </Link>
        </div>

        <div className="flex justify-between tab-m:flex-col tab-m:gap-10">
          <div className="basis-[31%] rounded-3xl py-24 px-20 bg-[#F7F8FD] laptop-l:py-20 laptop-l:px-16 laptop-m:py-16 laptop-m:px-12 tab-m:p-12 tab-m:rounded-xl">
            <div className="flex flex-col items-start gap-20 laptop:gap-16 tab-m:gap-8">
              <div className="min-h-40 laptop-m:min-h-32 tab-m:min-h-24">
                <img
                  src="/services-laundry.png"
                  alt="Professional laundry service"
                  className="inline-block laptop:h-28 laptop:w-auto tab-m:h-20"
                />
              </div>
              <div className="flex flex-col gap-6 tab-m:gap-2">
                <h3>Laundry</h3>
                <p className="content">
                  We are professional cleaners in delivering you the highest
                  quality of services in laundry
                </p>
              </div>
            </div>
          </div>
          <div className="basis-[31%] rounded-3xl py-24 px-20 bg-[#F7F8FD] laptop-l:py-20 laptop-l:px-16 laptop-m:py-16 laptop-m:px-12 tab-m:p-12 tab-m:rounded-xl">
            <div className="flex flex-col items-start gap-20 laptop:gap-16 tab-m:gap-8">
              <div className="min-h-40 laptop-m:min-h-32 tab-m:min-h-24">
                <img
                  src="/services-dry.png"
                  alt="Professional dry cleaning service"
                  className="inline-block laptop:h-32 laptop:w-auto tab-m:h-24"
                />
              </div>
              <div className="flex flex-col gap-6 tab-m:gap-2">
                <h3>Dry Cleaning</h3>
                <p className="content">
                  We are professional cleaners in delivering the highest quality
                  dry cleaning services.
                </p>
              </div>
            </div>
          </div>
          <div className="basis-[31%] rounded-3xl py-24 px-20 bg-[#F7F8FD] laptop-l:py-20 laptop-l:px-16 laptop-m:py-16 laptop-m:px-12 tab-m:p-12 tab-m:rounded-xl">
            <div className="flex flex-col items-start gap-20 laptop:gap-16 tab-m:gap-8">
              <div className="min-h-40 laptop-m:min-h-32 tab-m:min-h-24">
                <img
                  src="/services-estree.png"
                  alt="Steam ironing service"
                  className="inline-block laptop:h-auto laptop:w-36 tab-m:w-24"
                />
              </div>
              <div className="flex flex-col gap-6 tab-m:gap-2">
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
