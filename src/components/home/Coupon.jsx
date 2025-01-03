import { useSelector } from "react-redux";

const Coupon = () => {
  let coupon = useSelector(
    (state) => state?.setting?.settings?.home_promotion_banner_website
  );

  if (!coupon) {
    return null;
  }

  coupon = JSON.parse(coupon);

  return (
    <section className="space-xl">
      <div className="secondary-container">
        {coupon ? (
          <div className="p-16 bg-[url('/cupon-bg.png')] bg-cover bg-center laptop-m:p-14 laptop-s:p-12 tab-l:p-10 tab-m:p-10 tab-s:p-8 tab:p-5">
            <article className="border-4 border-white flex items-center laptop-s:border-[3px] tab-m:border-2">
              <div className="basis-[50%] text-center">
                <img
                  src={coupon?.image_url || "/shocked-girl.png"}
                  alt="Surprised girl representing an exciting coupon offer"
                  loading="lazy"
                  className="inline-block w-full max-w-[75%] h-auto"
                />
              </div>
              <div className="basis-[50%] text-white p-20  flex flex-col items-start gap-10 laptop-l:p-16 laptop-m:p-12 laptop-m:gap-8 laptop:gap-6 laptop-s:p-8 tab-l:p-4 tab-l:gap-4 tab-s:p-2 tab:gap-2">
                <p className="uppercase text-[2.4rem] laptop-l:text-[2rem] laptop-m:text-[1.8rem] laptop-s:text-[1.6rem] tab:text-[1.3rem]">
                  {coupon?.title}
                </p>
                <p className="text-[3.4rem] laptop-l:text-[2.8rem] font-bold laptop-m:text-[2.4rem] laptop-s:text-[2rem] tab:text-[1.8rem]">
                  @ RS. {coupon?.price}/- ONLY
                </p>
                <div className="inline-block border border-white rounded-md font-semibold text-[2rem] laptop-l:text-[1.8rem] laptop-m:text-[1.6rem] laptop-s:text-[1.4rem] tab:text-[1.2rem]">
                  <button
                    className="p-8 laptop-l:p-6 laptop-m:p-5 laptop-s:p-4 inline-block uppercase tab:p-2"
                    title="steal deal"
                    aria-label="Click to avail the steal deal"
                  >
                    STEAL DEAL
                  </button>
                  <button
                    className="p-8 laptop-l:p-6 laptop-m:p-5 laptop-s:p-4 inline-block text-[#0092C8] bg-white uppercase tab:p-2"
                    title="copy code"
                    aria-label="copy the code"
                  >
                    COPY CODE
                  </button>
                </div>
                <span className="laptop:text-[1.4rem] tab:text-[1rem]">
                  Valid till: {coupon?.offer_validity}
                </span>
              </div>
            </article>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Coupon;
