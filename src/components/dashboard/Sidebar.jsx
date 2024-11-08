import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { IoNewspaper, IoPerson } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: <AiFillHome />, label: "Dashboard", route: "/dashboard/home" },
    { icon: <IoPerson />, label: "Profile", route: "/dashboard/profile" },
    {
      icon: <IoNewspaper />,
      label: "Price List View",
      route: "/dashboard/price-list",
    },
    {
      icon: <MdReviews />,
      label: "Write a Review",
      route: "/dashboard/write-review",
    },
    {
      icon: <FaLocationDot />,
      label: "Saved Addresses",
      route: "/dashboard/saved-addresses",
    },
  ];

  return (
    <>
      <ul className="dash-sidebar flex flex-col gap-12">
        {menuItems.map((item, index) => (
          <li key={index} onClick={() => setActiveIndex(index)}>
            <Link to={item.route} className="dash-nav-link">
              <span
                className={`dash-icons-container ${
                  index === activeIndex ? "active-icons-clr" : ""
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`${index === activeIndex ? "active-label" : ""}`}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Sidebar;
