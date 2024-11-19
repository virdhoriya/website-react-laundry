const WelcomeTo = () => {
  return (
    <section className="space-xl">
      <div className="secondary-container">
        <h2 className="mb-16 laptop-m:mb-14 laptop-s:mb-10 tab-l:mb-8">Welcome to Sikka Cleaners</h2>

        <div className="flex flex-wrap items-center justify-between tab-s:flex-col tab-s:gap-8">
          <div className="self-stretch basis-[47.5%] laptop-l:basis-[48%] tab-m:basis-[40%] tab-s:text-center">
            <img src="/shirt.png" alt="Shirt Collection Image" className="inline-block h-full w-auto tab-s:w-[50%] tab:w-full"/>
          </div>
          <div className="text-[2rem] font-normal basis-[47.5%] laptop-l:basis-[48%] tab-m:basis-[57%] text-[var(--grey)] leading-[3.2rem] laptop-l:text-[1.8rem] laptop-l:leading-[2.8rem] laptop-m:text-[1.6rem] laptop-m:leading-[2.4rem] laptop-s:text-[1.4rem] laptop-s:leading-[1.9rem] tab-m:leading-normal">
            <p className="pb-10 laptop-l:pb-8 laptop-s:pb-6 tab-m:pb-4">
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
