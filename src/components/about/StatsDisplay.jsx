const StatsDisplay = () => {
  return (
    <section className="section-space">
      <div className="secondary-container pr-none relative">
        <img src="/shirt-collection.png" alt="Shirts Collection" />
        <div className="status-container flex items-center justify-center gap-16 text-white bg-primary py-[7.6rem] w-[150.7rem] rounded-xl">
          <div className="flex  justify-center items-center gap-8">
            {/* <h2 className="text-white">25+</h2> */}
            <h2 className="text-white flex items-center gap-2">
              25<span className="relative -top-[4px]">+</span>
            </h2>
            <span>Workers</span>
          </div>
          <div className="flex  justify-center items-center gap-8">
            <h2 className="text-white">2</h2>
            <span>
              Mega
              <br />
              Workshop
            </span>
          </div>
          <div className="flex  justify-center items-center gap-8">
            <h2 className="text-white flex items-center gap-2">
              3 LC<span className="relative -top-[4px]">+</span>
            </h2>
            <span>
              Items
              <br />
              Dry Cleaned
            </span>
          </div>
          <div className="flex  justify-center items-center gap-8">
            <h2 className="text-white flex items-center gap-2">
              9K<span className="relative -top-[4px]">+</span>
            </h2>
            <span>
              Happy
              <br />
              customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsDisplay;
