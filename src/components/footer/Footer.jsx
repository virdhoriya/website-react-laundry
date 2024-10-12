import { FaFacebookF } from "react-icons/fa";
import { FiClock, FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="footer-container">
        <div className="flex justify-between">
          <div className="flex flex-col justify-start gap-12">
            <img src="footer-logo.png" alt="Logo" className="inline-block" />
            <div className="flex gap-12">
              <a
                href="https://www.facebook.com/sikkacleaners/"
                target="__blank"
                className="h-[4.6rem] w-[4.6rem] p-2 border-[0.5px] border-white rounded-xl"
              >
                <FaFacebookF className="h-full w-full" />
              </a>
              <a href="https://www.instagram.com/sikka_cleaners/" target="__blank" className="h-[4.6rem] w-[4.6rem] p-2 border-[0.5px] border-white rounded-xl">
                <RiInstagramFill className="h-full w-full" />
              </a>
            </div>
            <p>&copy; 2024 Sikka Cleaners All rights reserved.</p>
            <button className="border border-red-500 rounded-full p-[1.6rem] self-start text-[1.4] leading-[1.4rem font-semibold]">
              Admin Login
            </button>
          </div>

          <div>
            <h4 className="sitemap-title">Explore</h4>
            <ul className="sitemap-list">
              <li><a href="#">About</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Prices</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="sitemap-title">Services</h4>
            <ul className="sitemap-list">
              <li>Laundry Services</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>

          <div className="text-[2rem] leading-[2rem]">
            <h4 className="sitemap-title">contact</h4>
            <div className="flex flex-col">
              <div className="flex items-center gap-4 py-[1.6rem]">
                <FiPhoneCall className="block h-[2.6rem] w-[2.6rem]" />
                <p>9879400838</p>
                <span className="block ">|</span>
                <p>9825600838</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="block py-[1.6rem]">
                  <MdOutlineEmail className="block h-[2.4rem] w-[2.4rem]" />
                </span>
                <p>sikkacleaners@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="block py-[1.6rem]">
                  <FiClock className="block h-[2.4rem] w-[2.4rem]" />
                </span>
                <p>Mon to Sat: 9.00am - 9.00pm, Sun: 9.00am - 12.00pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
