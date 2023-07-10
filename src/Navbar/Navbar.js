import { Link } from "react-router-dom";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

import "./Navbar.scss";

function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <header>
      <nav className="navBar">
        <button onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose
              className="invisible-xl"
              style={{ color: "#6c7a86", width: "40px", height: "40px" }}
            />
          ) : (
            <FiMenu
              className="invisible-xl"
              style={{ color: "#6c7a86", width: "40px", height: "40px" }}
            />
          )}
        </button>
        <div className={navbarOpen ? " arrow-up invisible-xl" : ""}></div>
        <ul className={`menuNav ${navbarOpen ? " showMenu xl xs" : ""}`}>
          <li className="menu-item current-menu-item">
            <Link
              className="nav__link"
              to="/"
              activeclassname="active-link"
              onClick={() => closeMenu()}
              exact="true"
            >
              Home
            </Link>
          </li>
          <li className="menu-item ">
            <Link
              className="nav__link"
              to="/about-me"
              activeclassname="active-link"
              onClick={() => closeMenu()}
              exact="true"
            >
              About me
            </Link>
          </li>
          <li className="menu-item ">
            <Link
              className="nav__link"
              to="/projects"
              activeclassname="active-link"
              onClick={() => closeMenu()}
              exact="true"
            >
              Projects
            </Link>
          </li>
          <li className="menu-item ">
            <Link
              className="nav__link"
              to="/experience"
              activeclassname="active-link"
              onClick={() => closeMenu()}
              exact="true"
            >
              Experience
            </Link>
          </li>
          <li className="menu-item ">
            <Link
              className="nav__link"
              to="/certificates"
              activeclassname="active-link"
              onClick={() => closeMenu()}
              exact="true"
            >
              Certificates
            </Link>
          </li>
          {/* <li className="menu-item ">
            <Link
              className="nav__link"
              to="/contact-me"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact="true"
            >
              Contact me
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
