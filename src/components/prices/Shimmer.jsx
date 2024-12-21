import "./shimmer.css";

const Shimmer = () => {
  return (
    <section className="section-space">
      <div className="container container-x">
        <div className="px-28 py-32 border border-gray-200 rounded-[2rem]">
          <div className="flex justify-between pb-28">
            <div className="basis-1/2 bg-gray-200 rounded-md h-24 shimmer"></div>
            <div className="w-80 bg-gray-200 rounded-full h-24 shimmer"></div>
          </div>
          <div className="flex justify-between items-start gap-24 flex-wrap">
            {Array.from({ length: 4 }, (_, index) => (
              <div
                key={index}
                className="basis-[34rem] border border-gray-200 rounded-3xl px-20 py-24 flex flex-col items-start gap-16"
              >
                <span className="inline-block w-48 h-24 rounded-full bg-gray-200 animate-pulse"></span>
                <div className="self-stretch h-20 bg-gray-200 rounded-md shimmer"></div>
                <ul className="self-stretch flex flex-col gap-8">
                  <li className="flex justify-between gap-4">
                    <span className="inline-block h-10 w-10 bg-gray-200 rounded-md"></span>
                    <div className="grow bg-gray-200 rounded-md shimmer"></div>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="inline-block h-10 w-10 bg-gray-200 rounded-md"></span>
                    <div className="grow bg-gray-200 rounded-md shimmer"></div>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="inline-block h-10 w-10 bg-gray-200 rounded-md"></span>
                    <div className="grow bg-gray-200 rounded-md shimmer"></div>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="inline-block h-10 w-10 bg-gray-200 rounded-md"></span>
                    <div className="grow bg-gray-200 rounded-md shimmer"></div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shimmer;
