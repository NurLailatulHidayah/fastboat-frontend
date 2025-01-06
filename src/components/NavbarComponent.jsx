import React, { useState, useEffect } from "react";
import api from "../api";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { CurrencyProvider, useCurrency } from "./CurrencyContext";
import { useCurrency } from "../context/CurrencyContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const NavbarComponent = () => {
  const { pathname } = useLocation();
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

  const { currency, updateCurrency } = useCurrency();
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fungsi untuk mengambil data currency
    const fetchCurrencies = async () => {
      try {
        const response = await api.get("/api/currency");

        // Periksa apakah data ada, lalu filter currency yang aktif
        if (response.data && response.data.data) {
          const activeCurrencies = response.data.data.filter(
            (cur) => cur.cy_status === 1
          );
          setCurrencies(activeCurrencies);
        }
      } catch (error) {
        console.error("Error fetching currencies:", error);
      } finally {
        setLoading(false); // Set loading false setelah fetch selesai
      }
    };

    fetchCurrencies(); // Panggil fungsi untuk mengambil data currency
  }, []);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    updateCurrency(newCurrency); // Update globally
  };

  // if (loading) {
  //   return <div>...</div>;
  // }

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
              </div>
              <div className="mainnav d-none d-lg-block">
                <ul className={isOpen ? "mr_menu" : "main_menu"}>
                  <li className={`main_menu ${isActive("/")}`}>
                    <Link to="/">Home</Link>
                  </li>

                  <li className={`main_menu ${isActive("/blogs")}`}>
                    <Link to="/blogs">Blogs</Link>
                  </li>

                  <li className={`main_menu ${isActive("/contact")}`}>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className="main_menu">
                    {!pathname.includes("/payment") && ( // Tampilkan dropdown hanya jika bukan di halaman payment
                      <select
                        value={currency.cy_code}
                        onChange={handleCurrencyChange}
                        className="form-select"
                        required
                      >
                        {currencies.map((cur) => (
                          <option key={cur.cy_code} value={cur.cy_code}>
                            {cur.cy_code}
                          </option>
                        ))}
                      </select>
                    )}
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
        {/* OffCanvas Menu */}
        <div
          className={`offcanvas offcanvas-end ${isOpen ? "show" : ""}`}
          tabIndex="-1"
          id="offcanvasNavbar"
          style={{ visibility: isOpen ? "visible" : "hidden" }}
        >
          <div className="offcanvas-header">
          <Link to="/" className="logo_sticky">
                <img src="logo_title.png" alt="img" />
              </Link>
            {/* <h5 className="offcanvas-title">
              
            </h5> */}
            <button
              type="button"
              className="btn-close"
              onClick={toggleMenu}
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className={`main_menu ${isActive("/")}`}>
                <Link to="/" className="nav-link" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/blogs" ? "active" : ""
                }`}
              >
                <Link to="/blogs" className="nav-link" onClick={toggleMenu}>
                  Blog
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link to="/contact" className="nav-link" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </li>
              <li className="nav-item mt-2">
                <select className="form-select" required>
                  {currencies.map((cur) => (
                    <option key={cur.cy_code} value={cur.cy_code}>
                      {cur.cy_code}
                    </option>
                  ))}
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
