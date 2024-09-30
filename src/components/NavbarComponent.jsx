import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // handel scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className="header header_style_two border-bottom">
      <header className={active ? "activenav" : ""}>
        <div className="middle_bar">
          <div className="auto-container">
            <div className="middle_bar_inner d-flex align-items-center justify-content-center justify-content-between gap-4 flex-wrap">
              {/* Logo */}
              <div className="logo">
                <Link to="/" className="navbar-brand">
                  <img
                    src="navbar-logo.png"
                    alt="Logo"
                    className="img-fluid"
                    style={{ width: "225px", height: "auto" }}
                  />
                </Link>
                <Link to="/" className="logo_sticky">
                  <img src="logo_title.png" alt="img" />
                </Link>
              </div>
              <div className="mainnav d-none d-lg-block">
                <ul className={isOpen ? "mr_menu" : "main_menu"}>
                  <li className={`main_menu ${isActive("/")}`}>
                    <Link to="/">Home</Link>
                  </li>
                  {/* <li className={`main_menu ${isActive("/fast-boat")}`}>
                    <Link to="/fast-boat">Fast Boat</Link>
                  </li>
                  <li className={`main_menu ${isActive("/trip")}`}>
                    <Link to="/trip">Tour</Link>
                  </li> */}
                  <li className={`main_menu ${isActive("/blogs")}`}>
                    <Link to="/blogs">Blogs</Link>
                  </li>
                  {/* <li className={`main_menu ${isActive("/about")}`}>
                    <Link to="/about">About Us</Link>
                  </li> */}
                  <li className={`main_menu ${isActive("/contact")}`}>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className="main_menu">
                    <select
                      defaultValue="4"
                      className="form-select"
                      id="currency"
                      required
                    >
                      <option value="1">AUD</option>
                      <option value="2">EUR</option>
                      <option value="3">GBP</option>
                      <option value="4">IDR</option>
                      <option value="5">SGD</option>
                      <option value="6">USD</option>
                    </select>
                  </li>
                </ul>
              </div>

              <div className="mr_menu_toggle d-lg-none" onClick={toggleMenu}>
                <span className="toggle_line"></span>
                <span className="toggle_line"></span>
                <span className="toggle_line"></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        {/* Sticky/Fixed Nav */}
        <div className="fixed_menu w-200">
          <header className="header header_style_one" />
        </div>
        {/* Mobile Responsive Menu */}
        <div className={`mr_menu d-lg-none ${isOpen ? "open" : ""}`}>
          <button type="button" className="mr_menu_close" onClick={toggleMenu}>
            <i className="fa fa-times" />
          </button>
          <div className="logo"></div>
          <div className="mr_navmenu">
            <ul>
              <li className={`main_menu ${isActive("/")}`}>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              {/* <li className={`main_menu ${isActive("/fast-boat")}`}>
                <Link to="/fast-boat" onClick={toggleMenu}>
                  Fast Boat
                </Link>
              </li>
              <li className={`main_menu ${isActive("/trip")}`}>
                <Link to="/trip" onClick={toggleMenu}>
                  Tour
                </Link>
              </li> */}
              <li className={`main_menu ${isActive("/blogs")}`}>
                <Link to="/blogs" onClick={toggleMenu}>
                  Blog
                </Link>
              </li>
              {/* <li className={`main_menu ${isActive("/about")}`}>
                <Link to="/about" onClick={toggleMenu}>
                  About Us
                </Link>
              </li> */}
              <li className={`main_menu ${isActive("/contact")}`}>
                <Link to="/contact" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </li>
              <li className="main_menu">
                <select
                  defaultValue="4"
                  className="form-select"
                  id="currency-mobile"
                  required
                >
                  <option value="1">AUD</option>
                  <option value="2">EUR</option>
                  <option value="3">GBP</option>
                  <option value="4">IDR</option>
                  <option value="5">SGD</option>
                  <option value="6">USD</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
        {/* End Main Header */}
      </div>
    </div>
  );
};

export default NavbarComponent;
