import { FaFacebookF } from "react-icons/fa";
import { FiClock, FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";

const Headline = () => {
  return (
    <div className="bg-light-blue">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center justify-center gap-4">
              <span className="block py-[1.6rem]">
                <MdOutlineEmail className="block h-[2.4rem] w-[2.4rem]" />
              </span>
              <p>sikkacleaners@gmail.com</p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="block py-[1.6rem]">
                <FiClock className="block h-[2.4rem] w-[2.4rem]" />
              </span>
              <p>Mon to Sat: 9.00am - 9.00pm, Sun: 9.00am - 12.00pm</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center gap-4">
              <a href="#" className="px-2">
                <FaFacebookF className="block h-[2.4rem] w-[2.4rem]" />
              </a>
              <a href="#" className="px-2">
                <PiInstagramLogoFill className="block h-[2.8rem] w-[2.8rem]" />
              </a>
            </div>
            <div className="flex items-center justify-center gap-4">
              <FiPhoneCall className="block h-[2.2rem] w-[2.2rem]" />
              <p>9879400838</p>
              <span className="block ">|</span>
              <p>9825600838</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headline;
