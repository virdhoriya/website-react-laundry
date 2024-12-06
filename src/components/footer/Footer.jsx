import { FaFacebookF } from "react-icons/fa";
import { FiClock, FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-detail-container">
          <div className="flex justify-between gap-12 tab-s:flex-wrap tab-s:gap-20">
            <div className="basis-[22%] laptop-s:basis-[20%] flex flex-col justify-center items-start gap-12 laptop-m:gap-10 laptop:gap-8 laptop-s:gap-6 tab-s:basis-[45%]">
              <img
                src="footer-logo.png"
                alt="Logo"
                className="footer-logo"
                loading="lazy"
              />
              <div className="flex items-center gap-10 laptop:gap-8 laptop-s:gap-6">
                <a
                  href="https://www.facebook.com/sikkacleaners/"
                  target="__blank"
                  rel="noopener noreferrer"
                  className="h-[3.1rem] w-[3.1rem] p-3 border border-white/40 rounded-xl laptop-l:h-[2.6rem] laptop-l:w-[2.6rem] laptop-m:h-[2.3rem] laptop-m:w-[2.3rem] laptop:h-[1.8rem] laptop:w-[1.8rem] laptop-s:h-[1.3rem] laptop-s:w-[1.3rem]"
                >
                  <FaFacebookF className="h-full w-full" />
                </a>
                <a
                  href="https://www.instagram.com/sikka_cleaners/"
                  target="__blank"
                  className="h-[3.1rem] w-[3.1rem] p-3 border border-white/40 rounded-xl laptop-l:h-[2.6rem] laptop-l:w-[2.6rem] laptop-m:h-[2.3rem] laptop-m:w-[2.3rem] laptop:h-[1.8rem] laptop:w-[1.8rem] laptop-s:h-[1.3rem] laptop-s:w-[1.3rem]"
                  rel="noopener noreferrer"
                >
                  <RiInstagramFill className="h-full w-full" />
                </a>
              </div>
              <p className="laptop-m:text-[1.4rem] laptop-s:text-[1.2rem]">
                &copy; 2024 Sikka Cleaners All rights reserved.
              </p>
              <a
                href="http://35.154.167.170/"
                target="__blank"
                rel="noopener noreferrer"
                className="border border-[var(--secondary)] rounded-full p-[1.2rem] text-[1.4rem] font-semibold leading-[1.4rem font-semibold] laptop-m:p-4 laptop-s:p-3 laptop-s:text-[1.3rem] laptop-s:font-medium"
              >
                Admin Login
              </a>
            </div>

            <div className="tab-s:basis-[45%]">
              <h4 className="sitemap-title">Explore</h4>
              <ul className="sitemap-list">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Our Services</Link>
                </li>
                <li>
                  <Link to="/prices">Prices</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="tab-s:basis-[45%]">
              <h4 className="sitemap-title">Services</h4>
              <ul className="sitemap-list">
                <li>Laundry Services</li>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
                <li>Shipping Policy</li>
                <li>Refund Policy</li>
              </ul>
            </div>

            <div className="basis-1/4 text-[1.8rem] leading-[2.6rem] laptop-m:text-[1.6rem] laptop-m:leading-normal laptop-m:tracking-[1px] laptop-s:text-[1.4rem] laptop-s:tracking-[0.5px] tab-l:tracking-[0.1px] tab-s:basis-[45%]">
              <h4 className="sitemap-title">contact</h4>
              <div className="flex flex-col gap-8 laptop:gap-6 tab-l:gap-5">
                <div className="flex items-center gap-4">
                  <FiPhoneCall className="block h-[2.4rem] w-[2.4rem] laptop-m:h-[2rem] laptop-m:w-[2rem]" />
                  <p>9879400838</p>
                  <span className="block">|</span>
                  <p>9825600838</p>
                </div>
                <a
                  href="mailto:sikkacleaners@gmail.com"
                  className="flex items-center gap-4"
                >
                  <span className="block">
                    <MdOutlineEmail className="block h-[2.4rem] w-[2.4rem] laptop-m:h-[2rem] laptop-m:w-[2rem]" />
                  </span>
                  <p>sikkacleaners@gmail.com</p>
                </a>
                <div className="flex items-center gap-4">
                  <span className="block">
                    <FiClock className="block h-[2.4rem] w-[2.4rem] laptop-m:h-[2rem] laptop-m:w-[2rem]" />
                  </span>
                  <p>Mon to Sat: 9.00am - 9.00pm, Sun: 9.00am - 12.00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
