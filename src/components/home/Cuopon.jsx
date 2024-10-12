const Cupon = () => {
  return (
    <section className="section-space">
      <div className="secondary-container">
        <div className="p-16 bg-[url('./cupon-bg.png')] bg-cover bg-center">
          <div className="border-4 border-white flex items-center">
            <div className="flex-[0_0_50%]">
                <img src="/shocked-girl.png" alt="shocked girl"/>
            </div>
            <div className="flex-[0_0_50%] text-white p-20">
              <p className="text-[2.4rem] pb-6">5 SAREE ROLL PRESS</p>
              <p className="text-[3.4rem] font-bold pb-16">@ RS. 200/- ONLY</p>
              <div className="inline-block border border-white rounded-md font-medium text-[2rem] mb-8">
                <a href="#" className="p-8 inline-block">STEAL DEAL</a>
                <a href="#" className="p-8 inline-block text-[#0092C8] bg-white">COPY CODE</a>
              </div>
              <br />
              <span>Valid till: 20 Mar 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cupon;
