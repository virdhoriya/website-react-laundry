const PriceList = () => {
  const category = ["kids", "man", "woman", "house hold"];
  return (
    <section className="section-space">
      <div className="container">
        <div className="bg-pricelist-component bg-cover bg-center rounded-3xl text-white px-28 py-48">
          <div className="flex justify-between items-center pb-28">
            <h2 className="tracking-[2px]">
              Best Quality at{" "}
              <span className="text-red-500">REASONABLE PRICING</span>
            </h2>
            <button className="btn btn-transparent">Check Price List</button>
          </div>
          <div className="flex justify-between items-start">
            {category.map((cat) => {
              return (
                <div
                  key={cat}
                  className="border border-white rounded-3xl px-28 py-24 flex flex-col items-start gap-16"
                >
                  <span className="tag">{cat}</span>
                  <div className="flex items-end tracking-[2px]">
                    <h3 className="text-[5rem] leading-[5rem] font-bold">
                      &#8377;10
                    </h3>
                    <span className="text-[2.2rem] font-medium">/Onwards</span>
                  </div>
                  <ul className="flex flex-col gap-8 card-service-list">
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
