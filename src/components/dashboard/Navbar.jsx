import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const routeMap = {
    "/dashboard/home": "Dashboard",
    "/dashboard/profile": "Pofile",
    "/dashboard/price-list": "Price List View",
    "/dashboard/write-review": "Write a Review",
    "/dashboard/saved-addresses": "Saved Addresses",
    "/dashboard/view-order": "View Order",
  };
  let cartItem = 1;
  let profile_image = useSelector((state) => state.user.user.image);
  if (!profile_image) {
    profile_image = "./default_avatar.png";
  }
  return (
    <div className="flex">
      <img src="/dash-logo.png" alt="Logo" className="dash-logo" />
      <div className="bg-[var(--primary)] grow flex justify-between items-center px-8">
        <p className="text-[2rem] leading-[2.4rem] font-semibold text-white tracking-wide">
          {routeMap[pathname]}
        </p>
        <div className="flex items-center justify-center gap-6">
          <Link
            to="/cart"
            className="relative inline-block h-[4.6rem] w-[4.6rem] border border-white/30 rounded-full"
          >
            <LuShoppingCart
              className="inline-block h-full w-full stroke-white p-4"
              aria-label="Shopping Cart"
            />
            <div className="cart-item">
              <span>{cartItem}</span>
            </div>
          </Link>
          <span className="inline-block h-[4.6rem] w-[4.6rem] border border-white/30 rounded-full">
            <img
              src={profile_image}
              alt="Avatar"
              className="h-full w-full rounded-full bg-white"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
