import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-6">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src="/logo.png" alt="logo" className="h-16 w-96" />
          </div>
          <div className="z-10">
            <nav>
              <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Our Service</Link></li>
                <li><Link to="/corporate-services">Corporate Services</Link></li>
                <li><Link to="/prices">Price List</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/more">More</Link></li>
              </ul>
            </nav>
          </div>
          <div className="flex justify-center items-center gap-8 z-10">
            <span className="inline-block bg-white h-[4.6rem] w-[4.6rem] rounded-full p-4">
              <LuShoppingCart className="fill-white h-full w-full" />
            </span>
            <a href="#" className="login">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
