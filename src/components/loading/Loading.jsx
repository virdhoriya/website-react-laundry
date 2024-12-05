import "./loading.css";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[800] overflow-hidden">
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loading;
