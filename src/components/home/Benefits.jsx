import { Link } from "react-router-dom";

const Benefits = () => {
  return (
    <section className="space-xl benefits-container">
      <div className="secondary-container">
        <div className="flex justify-around items-center gap-24 tab-l:gap-12 tab:flex-col mb:items-stretch">
          <img
            src="/laundry-benefits.png"
            alt="Laundry-benefits"
            className="laundry-benefits-img"
          />
          <div className="px-20 laptop-l:px-14 laptop-md:px-12 laptop:px-10 tab-l:px-12 tab-s:px-0 mb:px-4">
            <p className="section-title">Why Should You Believe Us?</p>
            <h2>Our Laundry Benefits</h2>
            <Link
              to="/contact"
              className="btn my-20 laptop-l:my-16 laptop-md:my-12 laptop-s:my-12 tab-l:my-8"
            >
              Contact Us
            </Link>
            <div className="grid grid-cols-2 gap-x-44 gap-y-36 justify-center laptop-l:gap-x-36 laptop-l:gap-y-28 laptop-m:gap-y-28 laptop-m:gap-x-20 laptop:gap-y-24 laptop:gap-x-[5.5rem] laptop-s:gap-20 tab-l:gap-16 mb-l:gap-12 mb:justify-between">
              <figure>
                <img src="/safe-chemicals.png" alt="safe-chemicals" />
                <figcaption className="caption">Safe Chemicals</figcaption>
              </figure>
              <figure>
                <img src="/germ-free.png" alt="germ-free" />
                <figcaption className="caption">Germ Free</figcaption>
              </figure>
              <figure>
                <img src="/safe-handling.png" alt="safe-handling" />
                <figcaption className="caption">Safe Handling</figcaption>
              </figure>
              <figure>
                <img src="/insured-fabric.png" alt="insured-fabric" />
                <figcaption className="caption">Insured Fabric</figcaption>
              </figure>
              <figure>
                <img src="/expert-care.png" alt="expert-care" />
                <figcaption className="caption">Expert Care</figcaption>
              </figure>
              <figure>
                <img src="/pick-drop.png" alt="pick-drop" />
                <figcaption className="caption">Pick & Drop</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
