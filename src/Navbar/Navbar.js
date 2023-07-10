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
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Home
            </Link>
          </li>
          <li class="menu-item ">
            <Link
              className="nav__link"
              to="/about-me"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              About me
            </Link>
          </li>
          <li class="menu-item ">
            <Link
              className="nav__link"
              to="/projects"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Projects
            </Link>
          </li>
          <li class="menu-item ">
            <Link
              className="nav__link"
              to="/experience"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Experience
            </Link>
          </li>
          <li class="menu-item ">
            <Link
              className="nav__link"
              to="/certificates"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
            >
              Certificates
            </Link>
          </li>
          {/* <li class="menu-item ">
            <Link
              className="nav__link"
              to="/contact-me"
              activeClassName="active-link"
              onClick={() => closeMenu()}
              exact
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
