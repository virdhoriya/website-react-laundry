const StatsDisplay = () => {
  return (
    <section className="section-space">
      <div className="secondary-container pr-none relative">
        <img src="/shirt-collection.png" alt="Shirts Collection" />
        <div className="status-container flex items-center justify-center gap-16 text-white bg-primary py-[7.6rem] w-[150.7rem] rounded-xl">
                <div className="flex  justify-center items-center gap-8">
                    <h2>2 LC+</h2>
                    <span>
                        Shirts
                        <br/>
                        Washed
                    </span>
                </div>
                <div className="flex  justify-center items-center gap-8">
                    <h2>5+</h2>
                    <span>
                        Washing
                        <br/>
                        Machines Works
                    </span>
                </div>
                <div className="flex  justify-center items-center gap-8">
                    <h2>3 LC +</h2>
                    <span>
                        Dry Cleaned
                        <br/>
                        Items
                    </span>
                </div>
                <div className="flex  justify-center items-center gap-8">
                    <h2>3K +</h2>
                    <span>
                        Happy
                        <br/>
                        customers
                    </span>
                </div>

            </div>
      </div>
    </section>
  );
};

export default StatsDisplay;
