import { Link, useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { setAuthStatus } from "../../redux/slices/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    localStorage.clear();
    navigate("/login");
    dispatch(setAuthStatus(false));
  };

  const onProfileClick = () => {
    navigate("/dashboard/home");
  };

  return (
    <nav className="py-4 bg-[#F7F8FD] laptop-l:py-3 laptop-m:py-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img
              src="/logo.png"
              alt="logo"
              className="h-16 w-96 laptop-l:h-14 laptop-l:w-80 laptop-m:h-12 laptop-m:w-72 laptop:h-10 laptop:w-64 laptop-s:w-56 laptop-s:h-auto"
            />
          </div>

          <div className="z-10 tab-m:hidden">
            <ul className="navbar">
              <li>
                <Link to="/" title="Home" aria-label="Home">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  title="Our Service"
                  aria-label="Our Service"
                >
                  Our Service
                </Link>
              </li>
              <li>
                <Link
                  to="/corporate-services"
                  title="Corporate Services"
                  aria-label="Corporate Services"
                >
                  Corporate Services
                </Link>
              </li>
              <li>
                <Link to="/prices" title="Price List" aria-label="Price List">
                  Price List
                </Link>
              </li>
              <li>
                <Link to="/about" title="About Us" aria-label="About Us">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" title="Contact Us" aria-label="Contact Us">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/more" title="More" aria-label="More">
                  More
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center gap-8 z-10 laptop-l:gap-6">
            <Link
              to="/cart"
              className="relative inline-block bg-white border-[1.5px] border-black/25 h-[4.6rem] w-[4.6rem] rounded-full p-4 laptop-l:h-[4.2rem] laptop-l:w-[4.2rem] laptop:h-[4rem] laptop:w-[4rem] tab-l:h-[3.8rem] tab-l:w-[3.8rem]"
            >
              <LuShoppingCart
                className="h-full w-full stroke-[var(--black)]"
                aria-label="Shopping Cart"
              />
              <div className="cart-tag">
                <span>1</span>
              </div>
            </Link>
            {isLoggedIn ? (
              <span className="inline-block h-[4.6rem] w-[4.6rem] relative group laptop-l:h-[4.2rem] laptop-l:w-[4.2rem] laptop:h-[4rem] laptop:w-[4rem] tab-l:h-[3.8rem] tab-l:w-[3.8rem]">
                <img
                  src="/avatar.jpeg"
                  alt="Avatar"
                  className="h-full w-full rounded-full border-[1.5px] border-black/45 laptop-l:border"
                />
                <div className="hidden group-hover:inline-block">
                  <div className="logout-container flex flex-col items-start gap-4">
                    <span
                      className="flex items-center justify-center gap-4 cursor-pointer"
                      onClick={onLogoutClick}
                    >
                      <FiLogOut className="h-[2rem] w-[2rem] stroke-[#676788]" />
                      <span className="logout">logout</span>
                    </span>
                    <span
                      className="flex items-center justify-center gap-4 cursor-pointer"
                      onClick={onProfileClick}
                    >
                      <CgProfile className="h-[2rem] w-[2rem] text-[#676788]" />
                      <span className="logout">Profile</span>
                    </span>
                  </div>
                </div>
              </span>
            ) : (
              <Link to="/login" className="login">
                Login
              </Link>
            )}
            <div className="h-[3.8rem] w-[3.8rem] justify-center items-center hidden tab-m:flex">
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
