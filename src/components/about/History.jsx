const History = () => {
  return (
    <section className="section-space bg-history">
      <div className="secondary-container">
        <div>
          <h2 className="pb-24">Our History</h2>
          <div className="flex justify-center items-center">
            <div className="bg-white rounded-xl py-20 px-32 flex items-center gap-40 relative">
              <img src="/washing-machine01.png" alt="Washing Machine" />
              <div className="w-[62rem]">
                <p className="para2">
                  Third Branch Opening at Udaipur, Rajasthan After successful
                  steps, Sikka Cleaners team started to expand their business
                  not in different city, but in other State of India.
                </p>
              </div>
              <img src="/2008.png" alt="2008" className="year" />
            </div>
          </div>
          <div className="flex justify-center items-center gap-16 pt-32 timeline-text">
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
