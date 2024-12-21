const AddressShimmer = () => {
  return (
    <div className="p-14 border border-gray-200 bg-white rounded-2xl">
      <div className="grid grid-cols-2 gap-x-12 gap-y-16 items-start">
        <div className="col-span-full justify-self-end h-20 w-1/5 bg-gray-200 rounded-full shimmer"></div>
        <div className="border border-[#b9bccf4d] rounded-xl">
          <div className="flex flex-col items-start gap-3 px-6 py-8 border-b border-[#b9bccf4d]">
            <span className="bg-gray-200 w-24 h-12 rounded-md shimmer-2"></span>
            <div className="flex items-center justify-start gap-6">
              <div className="h-10 w-48 bg-gray-200 rounded-md shimmer"></div>
              <div className="h-10 w-48 bg-gray-200 rounded-md shimmer"></div>
            </div>
            <div className="h-10 w-full bg-gray-200 rounded-md shimmer"></div>
            <div className="h-10 w-full bg-gray-200 rounded-md shimmer"></div>
          </div>
          <div className="py-3 flex justify-center items-center gap-8">
            <div className="basis-[45%] h-20 bg-gray-200 rounded-md shimmer"></div>
            <div className="basis-[45%] h-20 bg-gray-200 rounded-md shimmer"></div>
          </div>
        </div>
        <div className="border border-[#b9bccf4d] rounded-xl">
          <div className="flex flex-col items-start gap-3 px-6 py-8 border-b border-[#b9bccf4d]">
            <span className="bg-gray-200 w-24 h-12 rounded-md shimmer-2"></span>
            <div className="flex items-center justify-start gap-6">
              <div className="h-10 w-48 bg-gray-200 rounded-md shimmer"></div>
              <div className="h-10 w-48 bg-gray-200 rounded-md shimmer"></div>
            </div>
            <div className="h-10 w-full bg-gray-200 rounded-md shimmer"></div>
            <div className="h-10 w-full bg-gray-200 rounded-md shimmer"></div>
          </div>
          <div className="py-3 flex justify-center items-center gap-8">
            <div className="basis-[45%] h-20 bg-gray-200 rounded-md shimmer"></div>
            <div className="basis-[45%] h-20 bg-gray-200 rounded-md shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressShimmer;
