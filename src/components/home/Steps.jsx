const Steps = () => {
  return (
    <section className="space-xl">
      <div className="secondary-container">
        <p className="section-title">How We Works</p>
        <h2 className="mb-16 laptop-m:mb-14 laptop-s:mb-12 tab-l:mb-10">Follow 4 Easy Steps</h2>

        <div className="flex justify-between items-center text-[1.8rem] gap-8 laptop-l:text-[1.6rem] laptop-s:text-[1.4rem] tab-s:text-[1rem] tab:gap-4">
          <div className="steps-container">
            <img src="/step-1.png" alt="step01" className="steps-image"/>
            <span className="uppercase">Step 01</span>
            <p className="steps-title"><span>Bag up</span> all your dirty clothes</p>
          </div>

          <div>
            <img src="/arrow01.png" alt="arrow" className="arrow-image"/>
          </div>

          <div className="steps-container">
            <img src="/step-2.png" alt="step02" className="steps-image"/>
            <span className="uppercase">Step 02</span>
            <p className="steps-title">We <span>pick up</span> your clothes</p>
          </div>

          <div>
            <img src="/arrow02.png" alt="arrow" className="arrow-image"/>
          </div>

          <div className="steps-container">
            <img src="/step-3.png" alt="step03" className="steps-image"/>
            <span className="uppercase">Step 03</span>
            <p className="steps-title">We <span>clean your</span> clothes</p>
          </div>

          <div>
            <img src="/arrow01.png" alt="arrow" className="arrow-image"/>
          </div>

          <div className="steps-container">
            <img src="/step-4.png" alt="step04" className="steps-image"/>
            <span className="uppercase">Step 04</span>
            <p className="steps-title">We <span>deliver</span> clean, folded clothes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
