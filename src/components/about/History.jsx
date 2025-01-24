const History = () => {
  return (
    <section className="section-space bg-history">
      <div className="secondary-container">
        <div>
          <h2 className="pb-24 laptop-l:pb-20 laptop:pb-16 tab-m:pb-14 mb-l:pb-10">
            Our History
          </h2>
          <div className="flex justify-center items-center">
            <div className="bg-[#F7F8FD] shadow-lg rounded-3xl py-20 px-28 flex items-center gap-40 relative year-psudo laptop-l:py-16 laptop-l:px-20 laptop-l:gap-32 laptop-md:py-14 laptop-md:px-16 laptop-md:gap-24 laptop:p-12 laptop:gap-20 laptop:rounded-2xl laptop-s:p-10 laptop-s:rounded-xl tab-m:p-9 tab-m:gap-14 tab-m:basis-[86%] tab-s:gap-12 tab:basis-full tab:p-8 tab:rounded-lg tab:gap-8 mb-l:p-8 mb-l:py-10 mb-l:gap-6 mb-l:flex-wrap mb-l:justify-center">
              <img
                src="/washing-machine01.png"
                alt="Washing Machine"
                className="rounded-3xl laptop-l:max-h-[32.5rem] laptop-md:max-h-[30rem] laptop:max-h-[25rem] laptop:rounded-2xl laptop-s:max-h-[22.5rem] laptop-s:rounded-xl tab-m:max-h-[17.5rem] tab:rounded-lg tab:max-w-60"
              />
              <div className="max-w-[62rem] laptop-l:max-w-[55rem] laptop-s:max-w-[50rem] tab-m:max-w-auto">
                <p className="history-text">
                  Third Branch Opening at Udaipur, Rajasthan After successful
                  steps, Sikka Cleaners team started to expand their business
                  not in different city, but in other State of India.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-16 pt-32 timeline-text laptop-l:pt-24 laptop-md:gap-14 laptop-md:pt-20 laptop:gap-12 tab-m:pt-16 tab-m:gap-10 tab:pt-14 tab:flex-wrap tab:gap-6">
            <span>1978</span>
            <span>2001</span>
            <span className="active-time">2008</span>
            <span>2009</span>
            <span>2013</span>
            <span>2018</span>
            <span>2020</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
