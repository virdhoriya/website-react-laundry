import { Link, useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const onLogoutClick = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="py-4 bg-transparent laptop-l:py-3 laptop-m:py-2 laptop:py-2">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img
              src="/logo.png"
              alt="logo"
              className="h-16 w-96 laptop-l:h-14 laptop-l:w-80 laptop-m:h-12 laptop-m:w-72 laptop:h-10 laptop:w-64"
            />
          </div>

          <div className="z-10">
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

          <div className="flex justify-center items-center gap-8 z-10 laptop-l:gap-4">
            <span className="inline-block bg-red-500 h-[4.6rem] w-[4.6rem] rounded-full p-4 laptop-l:h-[4.2rem] laptop-l:w-[4.2rem] laptop:h-[4rem] laptop:w-[4rem]">
              <LuShoppingCart
                className="h-full w-full stroke-[var(--black)]"
                aria-label="Shopping Cart"
              />
            </span>
            {isLoggedIn ? (
              <span className="inline-block h-[4.6rem] w-[4.6rem] relative group">
                <img
                  src="/avatar.jpeg"
                  alt="Avatar"
                  className="h-full w-full rounded-full border-[1.5px] border-black/45"
                />
                <div className="hidden group-hover:inline-block">
                  <div className="logout-container" onClick={onLogoutClick}>
                    <FiLogOut className="h-[2rem] w-[2rem] stroke-[#676788]" />
                    <span className="logout">logout</span>
                  </div>
                </div>
              </span>
            ) : (
              <Link to="/login" className="login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
