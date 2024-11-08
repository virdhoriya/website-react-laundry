const Coupon = () => {
  return (
    <section className="section-coupon">
      <div className="secondary-container">
        <div className="p-16 bg-[url('/cupon-bg.png')] bg-cover bg-center">
          <article className="border-4 border-white flex items-center">
            <div className="flex-[0_0_50%]">
                <img src="/shocked-girl.png" alt="A girl looking surprised"/>
            </div>
            <div className="flex-[0_0_50%] text-white p-20">
              <p className="text-[2.4rem] pb-6">5 SAREE ROLL PRESS</p>
              <p className="text-[3.4rem] font-bold pb-16">@ RS. 200/- ONLY</p>
              <div className="inline-block border border-white rounded-md font-semibold text-[2rem] mb-8">
                <button className="p-8 inline-block" title="steal deal">STEAL DEAL</button>
                <button className="p-8 inline-block text-[#0092C8] bg-white" title="copy code">COPY CODE</button>
              </div>
              <span className="block mt-4">Valid till: 20 Mar 2024</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Coupon;