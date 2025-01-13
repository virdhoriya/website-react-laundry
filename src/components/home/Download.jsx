import { FaApple, FaGooglePlay } from "react-icons/fa";

const Download = () => {
  return (
    <section className="space-xl">
      <div className="secondary-container">
        <div className="download">
          <div className="basis-1/2 text-center relative mb-l:basis-full">
            <span className="mobile-img-container">
              <img src="/mobile.png" alt="Mobile" className="mobile" />
            </span>
          </div>
          <div className="basis-1/2 tab-s:pr-6 tab:pr-0 tab:order-1 mb-l:basis-full mb-l:p-4">
            <div className="w-[73%] laptop-l:w-[80%] laptop-m:w-[90%] space-y-10 laptop-md:space-y-8 tab-l:w-[95%] tab-s:w-full tab-s:space-y-4 tab:text-center tab:pb-8 tab-l:space-y-6">
              <h2>Download Our laundry App</h2>
              <p className="tab:inline-block tab:max-w-[32rem] tab:text-center">
                Lorem ipsum dolor sit amet consectetur adipiscing elit in
                consequat sollicitudin adipiscing facilisi sit et hendrerit
                diam.
              </p>
              <div className="text-white flex items-center tab-s:gap-4 tab-s:flex-wrap gap-12 laptop-md:gap-10 tab:justify-center tab-l:gap-8">
                <a
                  href="https://play.google.com/store/apps/details?id=OUR_APP_PACKAGE_NAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black px-4 py-3 flex items-center justify-center gap-4 rounded-xl laptop-s:px-3 laptop-s:py-2 laptop-s:rounded-lg tab-m:gap-3 tab-s:gap-2"
                >
                  <FaGooglePlay className="h-16 w-16 laptop-l:h-14 laptop-l:w-14 laptop-md:h-12 laptop-md:w-12 laptop-s:h-10 laptop-s:w-10 tab-m:h-8 tab-m:w-8 tab-s:h-6 tab-s:w-6" />
                  <div className="flex flex-col items-start laptop-m:gap-1">
                    <span className="text-[1.8rem] font-medium laptop-l:text-[1.6rem] laptop-md:text-[1.5rem] laptop-s:text-[1.4rem] tab-m:text-[1.2rem] tab-s:text-[1rem]">
                      GET IT ON
                    </span>
                    <span className="text-[2.8rem] font-medium leading-none laptop-l:text-[2.4rem] laptop-md:text-[2.2rem] laptop-s:text-[2rem] tab-m:text-[1.8rem] tab-s:text-[1.4rem]">
                      Google Play
                    </span>
                  </div>
                </a>
                <a
                  href="https://apps.apple.com/app/idAPP_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black px-4 py-3 flex items-center justify-center gap-4 rounded-xl laptop-s:px-3 laptop-s:py-2 laptop-s:rounded-lg tab-m:gap-3 tab-s:gap-2"
                >
                  <FaApple className="h-20 w-20 laptop-l:h-16 laptop-l:w-16 laptop-md:h-14 laptop-md:14 laptop-s:h-12 laptop-s:w-12 tab-m:h-10 tab-m:w-10 tab-s:h-8 tab-s:w-8" />
                  <div className="flex flex-col items-start laptop-m:gap-1">
                    <span className="text-[1.8rem] font-medium laptop-l:text-[1.6rem] laptop-md:text-[1.5rem] laptop-s:text-[1.4rem] tab-m:text-[1.2rem] tab-s:text-[1rem]">
                      Download on the
                    </span>
                    <span className="text-[2.8rem] font-medium leading-none laptop-l:text-[2.4rem] laptop-md:text-[2.2rem] laptop-s:text-[2rem] tab-m:text-[1.8rem] tab-s:text-[1.4rem]">
                      App Store
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
