const WelcomeTo = () => {
  return (
    <section className="section-welcometo">
      <div className="secondary-container">
        <h2 className="mb-16">Welcome to Sikka Cleaners</h2>

        <div className="flex flex-wrap items-center gap-32">
          <div className="flex-[0_0_calc(50%-4rem)]">
            <img src="/shirt.png" alt="Shirt Collection Image" />
          </div>
          <div className="flex-[0_0_calc(50%-4rem)]">
            <p className="text-[2.28rem] font-normal text-[var(--grey)] leading-[3.2rem] pb-10">
              We are professionals in the laundry and dry cleaning business,
              which means we always stay updated on the latest technologies,
              cleaning methods, and solutions for dealing with stains or
              delicate fabrics. Plus, we maintain the highest business integrity
              standards by following local and national regulations and
              environmental safety rules. We are passionate about changing the
              way you think about laundry!
            </p>
            <p className="text-[2.28rem] font-normal text-[var(--grey)] leading-[3.2rem]">
              We also provide DryCleaning, Laundry & Pressing service to
              businesses like hotels, institutions etc. Sikka Cleaners delivers
              you top quality service, combining the newest in technology and
              environmentally-friendly equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeTo;
