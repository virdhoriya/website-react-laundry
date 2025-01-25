const StatsDisplay = () => {
  return (
    <section className="section-space">
      <div className="secondary-container padding-adjustment">
        <div className="relative">
          <img
            src="/shirt-collection.png"
            alt="Shirts Collection"
            className="shirt-collection-image"
          />
          <div className="status-container">
            <div className="flex justify-center items-center gap-8 laptop-l:gap-6 laptop-s:gap-4 tab:gap-2">
              <h2 className="text-white flex items-center gap-2 tab:gap-1 mb-l:gap-0">
                25
                <span className="relative -top-[4px] laptop-l:-top-[3px] laptop-m:-top-[2px] mb-l:-top-[1px]">
                  +
                </span>
              </h2>
              <span className="laptop-l:text-2xl laptop-s:text-xl tab-s:text-base tab:text-sm mb-l:text-xs">
                Workers
              </span>
            </div>
            <div className="flex justify-center items-center gap-8 laptop-l:gap-6 laptop-s:gap-4 tab:gap-2">
              <h2 className="text-white">2</h2>
              <span className="laptop-md:text-2xl laptop-s:text-xl tab-s:text-base tab:text-sm mb-l:text-xs">
                Mega
                <br />
                Workshop
              </span>
            </div>
            <div className="flex justify-center items-center gap-8 laptop-l:gap-6 laptop-s:gap-4 tab:gap-2">
              <h2 className="text-white flex items-center gap-2 tab:gap-1 mb-l:gap-0">
                3 LC
                <span className="relative -top-[4px] laptop-l:-top-[3px] laptop-m:-top-[2px] mb-l:-top-[1px]">
                  +
                </span>
              </h2>
              <span className="laptop-md:text-2xl laptop-s:text-xl tab-s:text-base tab:text-sm mb-l:text-xs">
                Items
                <br />
                Dry Cleaned
              </span>
            </div>
            <div className="flex justify-center items-center gap-8 laptop-l:gap-6 laptop-s:gap-4 tab:gap-2">
              <h2 className="text-white flex items-center gap-2 tab:gap-1 mb-l:gap-0">
                9K
                <span className="relative -top-[4px] laptop-l:-top-[3px] laptop-m:-top-[2px] mb-l:-top-[1px]">
                  +
                </span>
              </h2>
              <span className="laptop-md:text-2xl laptop-s:text-xl tab-s:text-base tab:text-sm mb-l:text-xs">
                Happy
                <br />
                customers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsDisplay;
