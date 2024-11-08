import { useState } from "react";
import { FaStar } from "react-icons/fa6";

const WriteReview = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className="border border-[#b9bccf4d] rounded-xl bg-white px-14 py-16 flex flex-col gap-12">
      <div className="rating-star-container flex gap-2">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <FaStar
              key={index}
              onClick={() => handleClick(index + 1)}
              className={`star cursor-pointer text-3xl ${
                index < rating ? "fill-[#FF2E17]" : "fill-[#B9BCCF]"
              }`}
            />
          ))}
      </div>
      <div className="flex flex-col gap-6">
        <label
          htmlFor="message"
          className="text-[1.4rem] leading-[2rem] text-[#687182]"
        >
          Write a Review
        </label>
        <textarea
          id="message"
          rows={4}
          className="text-[1.4rem] leading-[2.4rem] text-[#687182] border-[1.5px] border-indigo-200 focus:border-indigo-500 focus:outline-none rounded-2xl px-8 py-6"
        ></textarea>
      </div>

      <div>
        <button className="submit-review">submit</button>
      </div>
    </div>
  );
};

export default WriteReview;
