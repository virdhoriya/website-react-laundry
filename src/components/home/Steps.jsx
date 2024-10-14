const Steps = () => {
  return (
    <section className="section-easy-steps">
      <div className="secondary-container">
        <p className="section-title">How We Works</p>
        <h2 className="mb-16">Follow 4 Easy Steps</h2>

        <div className="flex justify-between items-center text-[1.8rem]">
          <div className="flex flex-col items-center">
            <img src="/step-1.png" alt="step01" height={80} width={74} className="inline-block pb-16"/>
            <span className="uppercase text-[1.8rem]">Step 01</span>
            <p className="text-[2.2rem] font-semibold text-center"><span className="text-red-500">Bag up </span>all your dirty<br/>clothes</p>
          </div>

          <div>
            <img src="/arrow01.png" alt="arrow"/>
          </div>

          <div className="flex flex-col items-center">
            <img src="/step-2.png" alt="step02" className="inline-block pb-16"/>
            <span className="uppercase text-[1.8rem]">Step 02</span>
            <p className="text-[2.2rem] font-semibold text-center">We <span className="text-red-500">pick up</span> your <br />clothes</p>
          </div>

          <div>
            <img src="/arrow02.png" alt="arrow" />
          </div>

          <div className="flex flex-col items-center">
            <img src="/step-3.png" alt="step03" className="inline-block pb-16"/>
            <span className="uppercase text-[1.8rem]">Step 03</span>
            <p className="text-[2.2rem] font-semibold text-center">We <span className="text-red-500">clean your</span> <br/>clothes</p>
          </div>

          <div>
            <img src="/arrow01.png" alt="arrow" />
          </div>

          <div className="flex flex-col items-center">
            <img src="/step-4.png" alt="step04" className="inline-block pb-16"/>
            <span className="uppercase text-[1.8rem]">Step 04</span>
            <p className="text-[2.2rem] font-semibold text-center">We <span className="text-red-500">deliver</span> clean, <br/>folded clothes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
