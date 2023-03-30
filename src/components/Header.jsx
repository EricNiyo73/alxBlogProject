import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="main-nav">
      <div className="logo">
        <h1>EricTech</h1>
      </div>
      <div className="navbar">
        <ul className={navOpen ? "nav-open" : "nav-items"}>
          <li>Home</li>

          <li>Blogs</li>
          <li>Courses</li>

          <li>About</li>
          <li id="signup">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
