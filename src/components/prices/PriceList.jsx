import { Link } from "react-router-dom";

const PriceList = () => {
  const category = ["kids", "man", "woman", "house"];
  return (
    <section className="section-space">
      <div className="container container-x">
        <div className="price-list-container rounded-3xl text-white px-28 py-32 laptop-l:px-24 laptop-l:py-28 laptop-md:px-16 laptop-md:py-20 laptop-s:px-14 laptop-s:py-16 tab-s:py-12 tab-s:px-10">
          <div className="flex justify-between items-center pb-28 laptop-l:pb-24 laptop-md:pb-20 laptop:pb-16 tab-l:pb-14 tab-s:pb-10">
            <h2 className="tracking-[2px] text-inherit">
              Best Quality at{" "}
              <span className="text-[var(--secondary)]">
                REASONABLE PRICING
              </span>
            </h2>
            <a href="/" className="price-list-btn">
              Check Price List
            </a>
          </div>
          <div className="flex justify-between items-start gap-12 laptop-s:gap-16 tab-s:flex-wrap tab-s:justify-center">
            {category.map((cat) => {
              return (
                <div
                  key={cat}
                  className="basis-[34rem] border border-white/20 rounded-3xl px-20 py-24 flex flex-col items-start gap-16 hover:border-white transition-all duration-200 laptop-l:px-16 laptop-l:py-20 laptop-l:gap-12 laptop-md:py-16 laptop-md:px-12 laptop-md:gap-10 laptop-md:border-[0.8px] laptop:px-8 laptop:py-12 laptop:gap-8 laptop:basis-[23rem] laptop-s:basis-[22rem] tab-l:py-10 tab-l:rounded-xl tab-l:basis-[18.7rem] tab-s:py-8 tab-s:px-6 tab-s:gap-8 tab:basis-[100%]"
                >
                  <span className="tag">{cat}</span>
                  <div className="flex items-end tracking-widest">
                    <h3 className="text-inherit text-[4.6rem] leading-[5rem] font-bold laptop-l:text-[3.8rem] laptop-l:leading-[4.2rem] laptop-md:text-[3.2rem] laptop-md:leading-[3.8rem] laptop:text-[2.6rem] laptop:leading-[3.2rem] laptop:font-semibold tab-l:text-[2rem] tab-l:leading-[2.7rem] tab-s:text-[1.8rem] tab-s:leading-[2.4rem]">
                      &#8377;10
                    </h3>
                    <span className="text-[2.2rem] font-medium laptop-l:text-[1.8rem] laptop-l:tracking-normal laptop-md:text-[1.6rem] laptop:text-[1.4rem] tab-l:text-[1.2rem] tab-s:text-base">
                      /Onwards
                    </span>
                  </div>
                  <ul className="flex flex-col gap-8 card-service-list w-full tab-l:gap-6">
                    <li>Washing</li>
                    <li>Wet Cleaning</li>
                    <li>Dry-clean</li>
                    <li>Steam-press</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
