import { FaFacebookF } from "react-icons/fa";
import { FiClock, FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";

const Headline = () => {
  return (
    <div className="bg-[var(--bg)]">
      <div className="container">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-8">
            <address className="flex items-center justify-center gap-4 not-italic">
              <span className="block py-[1.6rem]">
                <MdOutlineEmail className="block h-[2.4rem] w-[2.4rem] fill-[var(--primary)]" aria-label="Email Icon" />
              </span>
              <a href="mailto:sikkacleaners@gmail.com" className="headline-text">sikkacleaners@gmail.com</a>
            </address>
            <div className="flex items-center justify-center gap-4">
              <span className="block py-[1.6rem]">
                <FiClock className="block h-[2.4rem] w-[2.4rem] stroke-[var(--primary)]" aria-label="Clock Icon"/>
              </span>
              <p className="headline-text">Mon to Sat: 9.00am - 9.00pm, Sun: 9.00am - 12.00pm</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center gap-4">
              <a href="https://www.facebook.com/sikkacleaners" target="_blank" rel="noopener noreferrer" aria-label="Visit Facebook" className="px-2" title="Visit Sikka Cleaners on Facebook">
                <FaFacebookF className="inline-block h-[2.4rem] w-[2.4rem] fill-[var(--black)]" />
              </a>
              <a href="https://www.instagram.com/sikka_cleaners" target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram" className="px-2" title="Visit Sikka Cleaners on Instagram">
                <PiInstagramLogoFill className="inline-block h-[2.8rem] w-[2.8rem] fill-[var(--black)]" />
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 headline-text" >
              <FiPhoneCall className="inline-block h-[2.1rem] w-[2.1rem] stroke-[var(--primary)]" aria-label="Phone Icon"/>
              <p>9879400838</p>
              <span>|</span>
              <p>9825600838</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Headline;
