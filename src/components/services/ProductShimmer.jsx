const ProductShimmer = () => {
  return (
    <div className="p-5 flex gap-8 laptop-l:gap-6 laptop-m:gap-4 border border-gray-200 rounded-md">
      <span className="inline-block h-32 w-32 rounded-md bg-gray-200 animate-pulse"></span>
      <div className="flex-grow flex justify-between items-center">
        <div className="flex flex-col gap-6 laptop-l:gap-4">
          <span className="inline-block w-60 h-10 rounded-md bg-gray-200 animate-pulse"></span>
          <span className="inline-block w-40 h-8 rounded-md bg-gray-200 animate-pulse"></span>
        </div>
        <span className="inline-block w-36 h-16 rounded-full bg-gray-200 animate-pulse"></span>
      </div>
    </div>
  );
};

export default ProductShimmer;
