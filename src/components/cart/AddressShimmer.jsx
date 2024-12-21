import "./addressShimmer.css";

const AddressShimmer = () => {
  return (
    <div className="flex items-center gap-6 p-8 border border-[#e0e0e0] rounded-xl">
      <span className="inline-block h-10 w-10 bg-gray-200 rounded-full shimmer-2"></span>
      <div className="grow flex flex-col gap-3 items-start rounded-sm relative">
        <span className="inline-block w-20 h-12 rounded-md bg-gray-200 shimmer"></span>
        <div className="flex gap-4">
          <span className="inline-block w-40 h-10 bg-gray-200 rounded-md shimmer"></span>
          <span className="inline-block w-40 h-10 bg-gray-200 rounded-md shimmer"></span>
        </div>
        <div className="w-1/2 h-10 bg-gray-200 rounded-md shimmer"></div>
      </div>
    </div>
  );
};

export default AddressShimmer;
