import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiClock, FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  const admin = import.meta.env.VITE_BASE_URL.replace(":3000", "/dashboard");
  return (
    <footer className="footer">
      <div className="footer-space">
        <div className="secondary-container">
          <div className="flex justify-between tab-s:grid tab-s:grid-cols-2 tab-s:grid-rows-2 tab-s:gap-x-10 gap-y-20 tab:gap-x-8 tab:gap-y-16 mb-l:grid-cols-1 mb-l:gap-12 mb-l:justify-center mobile-footer">
            <div className="basis-[22%] flex flex-col justify-center items-start gap-12 laptop-l:basis-1/5 laptop-l:gap-10 laptop-m:gap-8 laptop-s:gap-6 tab-s:px-10 tab:px-0">
              <img
                src="footer-logo.png"
                alt="Logo"
                className="footer-logo"
                loading="lazy"
              />
              <div className="flex items-center gap-10 laptop-l:gap-8 laptop-m:gap-6 laptop-s:gap-4">
                <a
                  href="https://www.facebook.com/sikkacleaners/"
                  target="__blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaFacebookF className="social-icon" />
                </a>
                <a
                  href="https://www.instagram.com/sikka_cleaners/"
                  target="__blank"
                  className="social-link"
                  rel="noopener noreferrer"
                >
                  <RiInstagramFill className="social-icon" />
                </a>
              </div>
              <p className="text-[1.6rem] leading-[1.25] laptop-l:text-[1.4rem] laptop-m:text-[1.3rem] laptop-s:text-lg">
                &copy; 2024 Sikka Cleaners All rights reserved.
              </p>
              <a
                href={admin}
                target="__blank"
                rel="noopener noreferrer"
                title="admin login"
                aria-label="admin login"
                className="border border-[var(--secondary)] rounded-full p-[1.2rem] text-[1.4rem] font-semibold leading-[1.4] laptop-l:p-4 laptop-l:font-medium laptop-m:text-[1.2rem] laptop-s:p-3 laptop:text-lg"
              >
                Admin Login
              </a>
            </div>

            <div className="tab-s:px-10 tab:px-0">
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
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="tab-s:px-10 tab:px-0">
              <h4 className="sitemap-title">Services</h4>
              <ul className="sitemap-list">
                <li>
                  <Link to="services">Laundry Services</Link>
                </li>
                <li>
                  <Link to="/terms-condition">Terms & Condition</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="hidden">
                  <Link to="/">Shipping Policy</Link>
                </li>
                <li>
                  <Link to="/refund-policy">Refund Policy</Link>
                </li>
              </ul>
            </div>

            <div className="basis-[30%] text-[1.8rem] leading-[2.6rem] laptop-l:basis-1/4 laptop-m:text-[1.6rem] laptop-m:leading-normal laptop-m:tracking-[1px] tab-s:px-10 tab:px-0">
              <h4 className="sitemap-title">contact</h4>
              <div className="contact flex flex-col gap-8 laptop-m:gap-6">
                <div className="flex items-center gap-4 laptop-l:text-[1.6rem] laptop-m:text-[1.4rem] laptop-m:gap-3 laptop-s:text-[1.25rem] laptop-s:gap-2">
                  <FiPhoneCall className="block h-[2.4rem] w-[2.4rem] laptop-l:h-[2rem] laptop-l:w-[2rem] laptop-m:h-[1.8rem] laptop-m:w-[1.8rem] laptop-s:h-6 laptop-s:w-6" />
                  <a
                    href="tel:9879400838"
                    className="border-b border-white laptop-m:border-b-[0.5px] laptop-m:tracking-normal"
                  >
                    9879400838
                  </a>
                  <span className="block">|</span>
                  <a
                    href="tel:9825600838"
                    className="border-b border-white laptop-m:border-b-[0.5px] laptop-m:tracking-normal"
                  >
                    9825600838
                  </a>
                </div>
                <a className="flex items-center justify-start gap-4 laptop-l:text-[1.6rem] laptop-m:text-[1.4rem] laptop-m:tracking-normal laptop-m:gap-3 laptop-s:text-[1.25rem]">
                  <span className="block">
                    <MdOutlineEmail className="block h-[2.4rem] w-[2.4rem] laptop-l:h-[2.2rem] laptop-l:w-[2.2rem] laptop-m:h-8 laptop-m:w-8 laptop-s:h-6 laptop-s:w-6" />
                  </span>
                  <a href="mailto:sikkacleaners@gmail.com">
                    sikkacleaners@gmail.com
                  </a>
                </a>

                <div className="flex items-center gap-4 laptop-l:text-[1.6rem] laptop-m:text-[1.4rem] laptop-m:tracking-normal laptop-s:text-[1.25rem]">
                  <span className="block">
                    <FiClock className="block h-[2.4rem] w-[2.4rem] laptop-l:h-[2rem] laptop-l:w-[2rem] laptop-m:h-[1.8rem] laptop-m:w-[1.8rem] laptop-s:h-6 laptop-s:w-6" />
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
