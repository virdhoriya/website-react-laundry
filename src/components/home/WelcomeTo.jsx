const WelcomeTo = () => {
  return (
    <section className="section-space">
      <div className="secondary-container">
        <h2 className="mb-16">Welcome to Sikka Cleaners</h2>

        <div className="flex flex-wrap items-center gap-32">
          <div className="flex-[0_0_calc(50%-4rem)]">
            <img src="/shirt.png" alt="shirt image" />
          </div>
          <div className="flex-[0_0_calc(50%-4rem)] text-[2rem]">
            <p className="pb-8">
              We are professionals in the laundry and dry cleaning business,
              which means we always stay updated on the latest technologies,
              cleaning methods, and solutions for dealing with stains or
              delicate fabrics. Plus, we maintain the highest business integrity
              standards by following local and national regulations and
              environmental safety rules. We are passionate about changing the
              way you think about laundry!
            </p>
            <p>
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
