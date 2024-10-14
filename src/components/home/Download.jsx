import { FaApple, FaGooglePlay } from "react-icons/fa";

const Download = () => {
  return (
    <section className="section-space">
      <div className="secondary-container">
        <div className="bg-download download">
          <div className="flex-[0_0_50%] text-center relative">
            <img src="/mobile.png" alt="Mobile" className="mobile"/>
            <img src="/back-mobile.png" alt="Back mobile" className="mobile-bg"/>
          </div>
          <div className="flex-[0_0_50%] py-40 px-20">
            <div className="w-[72%]">
              <h2>Download Our laundry App</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit in
                consequat sollicitudin adipiscing facilisi sit et hendrerit
                diam.
              </p>
              <div className="text-white flex gap-12">
                <button className="bg-black px-4 py-3 flex items-center justify-center gap-4 rounded-xl">
                  <FaGooglePlay className="h-16 w-16 fill-white" />
                  <div className="flex flex-col items-start">
                    <span className="text-[1.8rem] font-medium">GET IT ON</span>
                    <span className="text-[2.8rem] font-medium leading-none">Google Play</span>
                  </div>
                </button>
                <button className="bg-black px-4 py-3 flex items-center justify-center gap-4 rounded-xl">
                  <FaApple className="h-20 w-20 fill-white" />
                  <div className="flex flex-col items-start">
                    <span className="text-[1.8rem] font-medium">Download on the</span>
                    <span className="text-[2.8rem] font-medium leading-none">App Store</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
