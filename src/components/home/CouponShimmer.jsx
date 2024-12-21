import "./couponShimmer.css";

const CouponShimmer = () => {
  return (
    <div className="p-16 border border-gray-200 rounded-lg">
      <article className="border-gray-200/50 flex items-center rounded-md">
        <div className="basis-[50%]">
          <div
            className="
            bg-gray-200 h-[40rem] w-[75%] mx-auto rounded-md shimmer"
          ></div>
        </div>
        <div className="basis-[50%] p-16 flex flex-col items-start gap-12">
          <p className="w-3/4 h-16 bg-gray-200 rounded-md shimmer"></p>
          <p className="w-3/4 h-24 bg-gray-200 rounded-md shimmer"></p>
          <div className="flex gap-8 items-center">
            <span className="inline-block h-28 w-[20rem] bg-gray-200 rounded-md shimmer"></span>
            <span className="inline-block h-28 w-[20rem] bg-gray-200 rounded-md shimmer"></span>
          </div>
          <span className="inline-block h-14 w-3/4 bg-gray-200 rounded-md shimmer"></span>
        </div>
      </article>
    </div>
  );
};

export default CouponShimmer;
