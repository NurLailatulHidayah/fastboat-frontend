import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormFastboatComponent from "../components/FormFastboatComponent";
import { Modal } from "react-bootstrap";

const FastboatSearch = () => {
  // Mengelola filter fixed
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const [isSticky, setIsSticky] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    const handleScroll = () => {
      // Set posisi scroll di mana tombol akan menjadi sticky
      const scrollThreshold = 200;
      if (window.scrollY > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // State untuk menampilkan daftar fastboat lainnya atau other option
  const [showFastboats, setShowFastboats] = useState(false);
  const [showPrivate, setShowPrivate] = useState(false);
  const [showArrival, setShowArrival] = useState(false);

  // Fungsi untuk menangani klik View pada other option
  const toggleFastboats = () => setShowFastboats(!showFastboats);
  const togglePrivate = () => setShowPrivate(!showPrivate);
  const toggleArrival = () => setShowArrival(!showArrival);

  const [selectedSort, setSelectedSort] = useState("Recommendation"); // Default sort recommendation
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  // handel Tutup dropdown sort by jika klik di luar area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
    // setDropdownOpen(false); // Tutup dropdown setelah memilih
  };

  return (
    <div>
      {/* Page Banner */}
      <section
        className="page-banner"
        style={{ backgroundImage: "url(/image/main-slider/1.jpg)" }}
      >
        <div className="auto-container text-center">
          <h2>Enjoy the Best Sea Journey with Our Fastboat</h2>
          <h6>
            Book your tickets now and start an exciting adventure with us!
          </h6>
          <FormFastboatComponent />
        </div>
      </section>
      {/* End Page Banner */}

      {/* Gallery Section */}
      <section className="gallery-five style-two">
        <div className="auto-container">
          <div className="row">
            {/* Button for mobile to open the modal */}
            <button
              className={`filter-icon-btn d-block d-md-none ${
                isSticky ? "fixed-filter" : ""
              }`}
              onClick={handleModalToggle}
              style={{
                position: isSticky ? "fixed" : "absolute",
                bottom: "20px", // Posisi tombol dari bawah (saat fixed)
                right: "20px", // Posisi tombol dari kanan (saat fixed)
                zIndex: 1000, // Agar tombol berada di atas elemen lain
              }}
            >
              <i className="fas fa-filter"></i>
            </button>

            {/* Modal for sidebar on mobile */}
            <Modal show={showModal} onHide={handleModalToggle}>
              <Modal.Header closeButton>
                <Modal.Title>Filter</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="sidebar-filter">
                  {/* Recommendation Widget */}
                  <div>
                    <h6>Recommendation</h6>
                    <div className="filter-style">
                      <form method="post">
                        <div className="form-check">
                          <label htmlFor="checkbox1">
                            Fast Boat + Private Car
                          </label>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="checkbox1"
                          />
                        </div>
                        <div className="form-check">
                          <label htmlFor="checkbox2">Fast Boat + Shuttle</label>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="checkbox2"
                            defaultChecked
                          />
                        </div>
                        <div className="form-check">
                          <label htmlFor="checkbox3">Private Car</label>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="checkbox3"
                          />
                        </div>
                        <div className="form-check">
                          <label htmlFor="checkbox4">Tour Packages</label>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="checkbox4"
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Departure Widget */}
                  <div>
                    <h6>Departure</h6>
                    <div className="filter-category">
                      <form method="post">
                        <div className="form-check">
                          <label htmlFor="checkbox5">Padangbai Harbor</label>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="checkbox5"
                          />
                        </div>
                        <div className="form-check">
                          <label htmlFor="checkbox6">Sanur Port</label>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="checkbox6"
                            defaultChecked
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Operator Widget */}
                  <div>
                    <h6>Operator</h6>
                    <div className="filter-amenities">
                      <form method="post">
                        <div className="form-check">
                          <label htmlFor="checkbox7">Eka Jaya</label>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="checkbox7"
                          />
                        </div>
                        <div className="form-check">
                          <label htmlFor="checkbox8">
                            Starfish Fast Cruise
                          </label>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="checkbox8"
                            defaultChecked
                          />
                        </div>
                        <div className="form-check">
                          <label htmlFor="checkbox9">
                            Semaya one Fast Cruise
                          </label>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="checkbox9"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>

            {/* Sidebar for desktop */}
            <div className="col-lg-3 col-md-4 d-none d-md-block">
              <div
                className={`sidebar-filter px-4 py-4 border rounded-2 ${
                  isSticky ? "fixed-sidebar" : ""
                }`}
                style={{
                  top: isSticky ? "150px" : "auto",
                  backgroundColor: "white",
                  zIndex: "20",
                }}
              >
                {/* Content of the sidebar (same as in modal) */}
                <div>
                  <h6>Recommendation</h6>
                  <div className="filter-style">
                    <form method="post">
                      <div className="form-check">
                        <label htmlFor="checkbox1">
                          Fast Boat + Private Car
                        </label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="checkbox1"
                        />
                      </div>
                      <div className="form-check">
                        <label htmlFor="checkbox2">Fast Boat + Shuttle</label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="checkbox2"
                          defaultChecked
                        />
                      </div>
                      <div className="form-check">
                        <label htmlFor="checkbox3">Private Car</label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="checkbox3"
                        />
                      </div>
                      <div className="form-check">
                        <label htmlFor="checkbox4">Tour Packages</label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="checkbox4"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div>
                  <h6>Departure</h6>
                  <div className="filter-category">
                    <form method="post">
                      <div className="form-check">
                        <label htmlFor="checkbox5">Padangbai Harbor</label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="checkbox5"
                        />
                      </div>
                      <div className="form-check">
                        <label htmlFor="checkbox6">Sanur Port</label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="checkbox6"
                          defaultChecked
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div>
                  <h6>Operator</h6>
                  <div className="filter-amenities">
                    <form method="post">
                      <div className="form-check">
                        <label htmlFor="checkbox7">Eka Jaya</label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="checkbox7"
                        />
                      </div>
                      <div className="form-check">
                        <label htmlFor="checkbox8">Starfish Fast Cruise</label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="checkbox8"
                          defaultChecked
                        />
                      </div>
                      <div className="form-check">
                        <label htmlFor="checkbox9">
                          Semaya one Fast Cruise
                        </label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="checkbox9"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-lg-9 col-md-8 col-sm-12">
              {/* MixitUp Gallery */}
              <div className="mixitup-gallery">
                <div className="filter-list">
                  <div className="sort-dropdown " ref={dropdownRef}>
                    <button
                      className="border rounded"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      Sort By : <span>{selectedSort}</span>
                    </button>
                    {dropdownOpen && (
                      <div className="dropdown-menu ">
                        <h4 className="mb-2">Sort By</h4>
                        <label>
                          <input
                            type="radio"
                            name="sort"
                            value="Recommendation"
                            checked={selectedSort === "Recommendation"}
                            onChange={handleSortChange}
                          />
                          <span className="p-2">Recommendation </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="sort"
                            value="Highest Price"
                            checked={selectedSort === "Highest Price"}
                            onChange={handleSortChange}
                          />
                          <span className="p-2">Highest Price</span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="sort"
                            value="Lowest Price"
                            checked={selectedSort === "Lowest Price"}
                            onChange={handleSortChange}
                          />
                          <span className="p-2">Lowest Price</span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="sort"
                            value="A - Z"
                            checked={selectedSort === "A - Z"}
                            onChange={handleSortChange}
                          />
                          <span className="p-2">A - Z</span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="sort"
                            value="Z - A"
                            checked={selectedSort === "Z - A"}
                            onChange={handleSortChange}
                          />
                          <span className="p-2">Z - A</span>
                        </label>
                      </div>
                    )}
                  </div>

                  {/* Room Block One */}
                  <h4 className="option-best mb-2 mt-2">Best Options</h4>
                  <div className="fastboat-search border rounded-3">
                    <div className="row col p-3 mb-4">
                      {/* Jika di desktop, card ini bisa diklik seluruhnya */}
                      {!isMobile ? (
                        <div
                          onClick={() => (window.location.href = "/fast-boat")}
                          className="full-card-link"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="row">
                            <div className="col-lg-4 comfort-section">
                              <ul className="image-carousel owl-carousel owl-theme">
                                <li>
                                  <div className="mb-2 bg-primary-subtle text-primary-emphasis text-center rounded-4 w-75">
                                    Recommendation
                                  </div>
                                  <div>
                                    <img
                                      src="image/fastboat/karunia-jaya.jpg"
                                      alt="Fastboat"
                                      className="rounded-2"
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div className="col-lg-5 fastboat-search-content d-flex px-4">
                              <div className="vertical-line-container">
                                <div className="circle"></div>
                                <div className="line"></div>
                                <div className="circle"></div>
                              </div>
                              <div className="schedule">
                                <div className="time">
                                  <b>15:25</b> Padangbai Harbor, Bali
                                </div>
                                <div className="route mt-2 d-flex align-items-center">
                                  <img
                                    src="/image/clients/logo-Eka_Jaya.jpg"
                                    alt="Eka Jaya"
                                    className="me-2"
                                    style={{ width: "40px" }}
                                  />
                                  <span>
                                    <b>Eka Jaya</b> 1H 30m
                                  </span>
                                </div>
                                <div className="time mt-3">
                                  <b>16:00</b> Gili Trawangan Port, Gili
                                  Trawangan
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2 price-box px-5">
                              <div className="price">
                                <div>IDR 350.000 / Adult</div>
                                <div>IDR 350.000 / Child</div>
                              </div>
                              <a
                                className="btn-style-two theme-btn"
                                href="/booking"
                              >
                                <div className="btn-wrap">
                                  <span className="text-one">Book Now</span>
                                  <span className="text-two">Book Now</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Jika mobile, tampilkan tombol "Detail"
                        <div className="row">
                          <div className="col-lg-4 comfort-section">
                            <ul className="image-carousel owl-carousel owl-theme">
                              <li>
                                <div className="mb-2 bg-primary-subtle text-primary-emphasis text-center rounded-4 w-75">
                                  Recommendation
                                </div>
                                <div>
                                  <img
                                    src="image/fastboat/karunia-jaya.jpg"
                                    alt="Fastboat"
                                    className="rounded-2"
                                  />
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="col-lg-4 fastboat-search-content d-flex px-4">
                            <div className="vertical-line-container">
                              <div className="circle"></div>
                              <div className="line"></div>
                              <div className="circle"></div>
                            </div>
                            <div className="schedule">
                              <div className="time">
                                <b>15:25</b> Padangbai Harbor, Bali
                              </div>
                              <div className="route mt-2 d-flex align-items-center">
                                <img
                                  src="/image/clients/logo-Eka_Jaya.jpg"
                                  alt="Eka Jaya"
                                  className="me-2"
                                  style={{ width: "40px" }}
                                />
                                <span>
                                  <b>Eka Jaya</b> 1H 30m
                                </span>
                              </div>
                              <div className="time mt-3">
                                <b>16:00</b> Gili Trawangan Port, Gili Trawangan
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-3 price-box_mobile">
                            <div className="price">
                              <div>IDR 350.000 / Adult</div>
                              <div>IDR 350.000 / Child</div>
                            </div>
                            <div className="d-flex ">
                              <a
                                className="btn-style-two theme-btn mt-1"
                                href="/booking"
                              >
                                <div className="btn-wrap">
                                  <span className="text-one">Book Now</span>
                                  <span className="text-two">Book Now</span>
                                </div>
                              </a>

                              <a
                                className="detail theme-btn text-center"
                                href="/fast-boat"
                              >
                                Details
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="fastboat-search border rounded-3">
                    <div className="row col p-3 mb-4">
                      {/* Jika di desktop, card ini bisa diklik seluruhnya */}
                      {!isMobile ? (
                        <div
                          onClick={() => (window.location.href = "/fast-boat")}
                          className="full-card-link"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="row">
                            <div className="col-lg-4 comfort-section">
                              <ul className="image-carousel owl-carousel owl-theme">
                                <li>
                                  <div className="mb-2 bg-primary-subtle text-primary-emphasis text-center rounded-4 w-75">
                                    Recommendation
                                  </div>
                                  <div>
                                    <img
                                      src="image/fastboat/karunia-jaya.jpg"
                                      alt="Fastboat"
                                      className="rounded-2"
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div className="col-lg-5 fastboat-search-content d-flex px-4">
                              <div className="vertical-line-container">
                                <div className="circle"></div>
                                <div className="line"></div>
                                <div className="circle"></div>
                              </div>
                              <div className="schedule">
                                <div className="time">
                                  <b>15:25</b> Padangbai Harbor, Bali
                                </div>
                                <div className="route mt-2 d-flex align-items-center">
                                  <img
                                    src="/image/clients/logo-Eka_Jaya.jpg"
                                    alt="Eka Jaya"
                                    className="me-2"
                                    style={{ width: "40px" }}
                                  />
                                  <span>
                                    <b>Eka Jaya</b> 1H 30m
                                  </span>
                                </div>
                                <div className="time mt-3">
                                  <b>16:00</b> Gili Trawangan Port, Gili
                                  Trawangan
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2 price-box px-5">
                              <div className="price">
                                <div>IDR 350.000 / Adult</div>
                                <div>IDR 350.000 / Child</div>
                              </div>
                              <a
                                className="btn-style-two theme-btn"
                                href="/booking"
                              >
                                <div className="btn-wrap">
                                  <span className="text-one">Book Now</span>
                                  <span className="text-two">Book Now</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Jika mobile, tampilkan tombol "Detail"
                        <div className="row">
                          <div className="col-lg-4 comfort-section">
                            <ul className="image-carousel owl-carousel owl-theme">
                              <li>
                                <div className="mb-2 bg-primary-subtle text-primary-emphasis text-center rounded-4 w-75">
                                  Recommendation
                                </div>
                                <div>
                                  <img
                                    src="image/fastboat/karunia-jaya.jpg"
                                    alt="Fastboat"
                                    className="rounded-2"
                                  />
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="col-lg-4 fastboat-search-content d-flex px-4">
                            <div className="vertical-line-container">
                              <div className="circle"></div>
                              <div className="line"></div>
                              <div className="circle"></div>
                            </div>
                            <div className="schedule">
                              <div className="time">
                                <b>15:25</b> Padangbai Harbor, Bali
                              </div>
                              <div className="route mt-2 d-flex align-items-center">
                                <img
                                  src="/image/clients/logo-Eka_Jaya.jpg"
                                  alt="Eka Jaya"
                                  className="me-2"
                                  style={{ width: "40px" }}
                                />
                                <span>
                                  <b>Eka Jaya</b> 1H 30m
                                </span>
                              </div>
                              <div className="time mt-3">
                                <b>16:00</b> Gili Trawangan Port, Gili Trawangan
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-3 price-box_mobile">
                            <div className="price">
                              <div>IDR 350.000 / Adult</div>
                              <div>IDR 350.000 / Child</div>
                            </div>
                            <div className="d-flex ">
                              <a
                                className="btn-style-two theme-btn mt-1"
                                href="/booking"
                              >
                                <div className="btn-wrap">
                                  <span className="text-one">Book Now</span>
                                  <span className="text-two">Book Now</span>
                                </div>
                              </a>

                              <a
                                className="detail theme-btn text-center"
                                href="/fast-boat"
                              >
                                Details
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="fastboat-search border rounded-3">
                    <div className="row col p-3 mb-4">
                      {/* Jika di desktop, card ini bisa diklik seluruhnya */}
                      {!isMobile ? (
                        <div
                          onClick={() => (window.location.href = "/fast-boat")}
                          className="full-card-link"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="row">
                            <div className="col-lg-4 comfort-section">
                              <ul className="image-carousel owl-carousel owl-theme">
                                <li>
                                  <div className="mb-2 bg-primary-subtle text-primary-emphasis text-center rounded-4 w-75">
                                    Recommendation
                                  </div>
                                  <div>
                                    <img
                                      src="image/fastboat/karunia-jaya.jpg"
                                      alt="Fastboat"
                                      className="rounded-2"
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div className="col-lg-5 fastboat-search-content d-flex px-4">
                              <div className="vertical-line-container">
                                <div className="circle"></div>
                                <div className="line"></div>
                                <div className="circle"></div>
                              </div>
                              <div className="schedule">
                                <div className="time">
                                  <b>15:25</b> Padangbai Harbor, Bali
                                </div>
                                <div className="route mt-2 d-flex align-items-center">
                                  <img
                                    src="/image/clients/logo-Eka_Jaya.jpg"
                                    alt="Eka Jaya"
                                    className="me-2"
                                    style={{ width: "40px" }}
                                  />
                                  <span>
                                    <b>Eka Jaya</b> 1H 30m
                                  </span>
                                </div>
                                <div className="time mt-3">
                                  <b>16:00</b> Gili Trawangan Port, Gili
                                  Trawangan
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-2 price-box px-5">
                              <div className="price">
                                <div>IDR 350.000 / Adult</div>
                                <div>IDR 350.000 / Child</div>
                              </div>
                              <a
                                className="btn-style-two theme-btn"
                                href="/booking"
                              >
                                <div className="btn-wrap">
                                  <span className="text-one">Book Now</span>
                                  <span className="text-two">Book Now</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Jika mobile, tampilkan tombol "Detail"
                        <div className="row">
                          <div className="col-lg-4 comfort-section">
                            <ul className="image-carousel owl-carousel owl-theme">
                              <li>
                                <div className="mb-2 bg-primary-subtle text-primary-emphasis text-center rounded-4 w-75">
                                  Recommendation
                                </div>
                                <div>
                                  <img
                                    src="image/fastboat/karunia-jaya.jpg"
                                    alt="Fastboat"
                                    className="rounded-2"
                                  />
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="col-lg-4 fastboat-search-content d-flex px-4">
                            <div className="vertical-line-container">
                              <div className="circle"></div>
                              <div className="line"></div>
                              <div className="circle"></div>
                            </div>
                            <div className="schedule">
                              <div className="time">
                                <b>15:25</b> Padangbai Harbor, Bali
                              </div>
                              <div className="route mt-2 d-flex align-items-center">
                                <img
                                  src="/image/clients/logo-Eka_Jaya.jpg"
                                  alt="Eka Jaya"
                                  className="me-2"
                                  style={{ width: "40px" }}
                                />
                                <span>
                                  <b>Eka Jaya</b> 1H 30m
                                </span>
                              </div>
                              <div className="time mt-3">
                                <b>16:00</b> Gili Trawangan Port, Gili Trawangan
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-3 price-box_mobile">
                            <div className="price">
                              <div>IDR 350.000 / Adult</div>
                              <div>IDR 350.000 / Child</div>
                            </div>
                            <div className="d-flex ">
                              <a
                                className="btn-style-two theme-btn mt-1"
                                href="/booking"
                              >
                                <div className="btn-wrap">
                                  <span className="text-one">Book Now</span>
                                  <span className="text-two">Book Now</span>
                                </div>
                              </a>

                              <a
                                className="detail theme-btn text-center"
                                href="/fast-boat"
                              >
                                Details
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* End Room Block One */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Others Options Section */}
      <section className="d-flex justify-content-end p-4 top-0 m-2">
        <div className="option col-lg-9 col-md-8 col-sm-12">
          <h4 className="option_title mb-2">Others Options</h4>
          <div>
            <div className="card p-3">
              <div className="row">
                <div className="option-other col-lg-8">
                  <h4 className="mb-1">Fastboat (10)</h4>
                  <p>Start From 07.00 Until 16.00</p>
                </div>

                <div className="price-box col-lg-4">
                  <div className="price_min float-end">
                    <div>Start From 350.000 / Adult</div>
                  </div>
                  <div className="btn float-end">
                    {/* Tambahkan onClick handler untuk tombol View */}
                    {/* <a
                          className="btn-style-two theme-btn"
                          onClick={handleViewFastboats}
                        >
                          <div className="btn-wrap">
                            <span className="text-one">View</span>
                            <span className="text-two">View</span>
                          </div>
                        </a> */}
                    <a
                      className="btn-style-two theme-btn"
                      onClick={toggleFastboats}
                    >
                      <div className="btn-wrap">
                        <span className="text-one">
                          {showFastboats ? "Hide" : "View"}
                        </span>
                        <span className="text-two">
                          {showFastboats ? "Hide" : "View"}
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tampilkan daftar fastboat lainnya jika showOthers true */}
            {showFastboats && (
              <div className="fastboat-search border rounded-3">
              <div className="row col p-3 mb-4">
                {/* Jika di desktop, card ini bisa diklik seluruhnya */}
                {!isMobile ? (
                  <div
                    onClick={() => (window.location.href = "/fast-boat")}
                    className="full-card-link"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="row">
                      <div className="col-lg-4 comfort-section">
                        <ul className="image-carousel owl-carousel owl-theme">
                          <li>
                            {/* <div className="mb-2 bg-primary-subtle text-primary-emphasis text-center rounded-4 w-75">
                              Recommendation
                            </div> */}
                            <div>
                              <img
                                src="image/fastboat/karunia-jaya.jpg"
                                alt="Fastboat"
                                className="rounded-2 mt-4"
                              />
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-5 fastboat-search-content d-flex px-4">
                        <div className="vertical-line-container">
                          <div className="circle"></div>
                          <div className="line"></div>
                          <div className="circle"></div>
                        </div>
                        <div className="schedule">
                          <div className="time">
                            <b>15:25</b> Padangbai Harbor, Bali
                          </div>
                          <div className="route mt-2 d-flex align-items-center">
                            <img
                              src="/image/clients/logo-Eka_Jaya.jpg"
                              alt="Eka Jaya"
                              className="me-2"
                              style={{ width: "40px" }}
                            />
                            <span>
                              <b>Eka Jaya</b> 1H 30m
                            </span>
                          </div>
                          <div className="time mt-3">
                            <b>16:00</b> Gili Trawangan Port, Gili
                            Trawangan
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-2 price-box px-5">
                        <div className="price">
                          <div>IDR 350.000 / Adult</div>
                          <div>IDR 350.000 / Child</div>
                        </div>
                        <a
                          className="btn-style-two theme-btn"
                          href="/booking"
                        >
                          <div className="btn-wrap">
                            <span className="text-one">Book Now</span>
                            <span className="text-two">Book Now</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Jika mobile, tampilkan tombol "Detail"
                  <div className="row">
                    <div className="col-lg-4 comfort-section">
                      <ul className="image-carousel owl-carousel owl-theme">
                        <li>
                          <div className="mb-2 bg-primary-subtle text-primary-emphasis text-center rounded-4 w-75">
                            Recommendation
                          </div>
                          <div>
                            <img
                              src="image/fastboat/karunia-jaya.jpg"
                              alt="Fastboat"
                              className="rounded-2"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-4 fastboat-search-content d-flex px-4">
                      <div className="vertical-line-container">
                        <div className="circle"></div>
                        <div className="line"></div>
                        <div className="circle"></div>
                      </div>
                      <div className="schedule">
                        <div className="time">
                          <b>15:25</b> Padangbai Harbor, Bali
                        </div>
                        <div className="route mt-2 d-flex align-items-center">
                          <img
                            src="/image/clients/logo-Eka_Jaya.jpg"
                            alt="Eka Jaya"
                            className="me-2"
                            style={{ width: "40px" }}
                          />
                          <span>
                            <b>Eka Jaya</b> 1H 30m
                          </span>
                        </div>
                        <div className="time mt-3">
                          <b>16:00</b> Gili Trawangan Port, Gili Trawangan
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 price-box_mobile">
                      <div className="price">
                        <div>IDR 350.000 / Adult</div>
                        <div>IDR 350.000 / Child</div>
                      </div>
                      <div className="d-flex ">
                        <a
                          className="btn-style-two theme-btn mt-1"
                          href="/booking"
                        >
                          <div className="btn-wrap">
                            <span className="text-one">Book Now</span>
                            <span className="text-two">Book Now</span>
                          </div>
                        </a>

                        <a
                          className="detail theme-btn text-center"
                          href="/fast-boat"
                        >
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            )}
          </div>
          <div className="mt-3">
            <div className="card p-3">
              <div className="row">
                <div className="option-other col-lg-8">
                  <h4 className="mb-1">Fast Boat + Private Car (10)</h4>
                  <p>Start From 07.00 Until 16.00</p>
                </div>

                <div className="price-box col-lg-4">
                  <div className="price_min float-end">
                    <div>Start From 350.000 / Adult</div>
                  </div>
                  <div className="btn float-end">
                    {/* Tambahkan onClick handler untuk tombol View */}
                    {/* <a
                          className="btn-style-two theme-btn"
                          onClick={handleViewPrivate}
                        >
                          <div className="btn-wrap">
                            <span className="text-one">View</span>
                            <span className="text-two">View</span>
                          </div>
                        </a> */}
                    <a
                      className="btn-style-two theme-btn"
                      onClick={togglePrivate}
                    >
                      <div className="btn-wrap">
                        <span className="text-one">
                          {showPrivate ? "Hide" : "View"}
                        </span>
                        <span className="text-two">
                          {showPrivate ? "Hide" : "View"}
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tampilkan daftar fastboat lainnya jika showOthers true */}
            {showPrivate && (
              <div className="fastboat-search border rounded-3 mt-3">
                <div className="row col p-3">
                  <div className="col-lg-4 comfort-section">
                    <ul className="image-carousel owl-carousel owl-theme">
                      <li>
                        <div className="mt-4">
                          <img
                            src="image/fastboat/karunia-jaya.jpg"
                            alt=""
                            className="rounded-2"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Room Details */}
                  <div className="col-lg-8 fastboat-search-content d-flex">
                    <div className="vertical-line-container">
                      <div className="circle"></div>
                      <div className="line"></div>
                      <div className="circle"></div>
                    </div>
                    <div className="schedule">
                      <div className="time">
                        <b>15:25</b> Padangbai Harbor, Bali
                      </div>
                      <div className="route mt-2">
                        <img src="/image/clients/logo-Eka_Jaya.jpg" alt="" />
                        <span>
                          <b>Eka Jaya</b> 1H 30m
                        </span>
                      </div>
                      <div className="time mt-3">
                        <b>16:00</b> Gili Trawangan Port, Gili Trawangan
                      </div>
                    </div>

                    {/* Pricing and Buttons */}
                    <div className="price-box">
                      <div className="price">
                        <div>IDR 450.000 / Adult</div>
                        <div>IDR 450.000 / Child</div>
                      </div>

                      <div className="d-flex">
                        <a className="btn-style-two theme-btn" href="#">
                          <div className="btn-wrap">
                            <span className="text-one">Book Now</span>
                            <span className="text-two">Book Now</span>
                          </div>
                        </a>
                        {/* <a className="detail theme-btn" href="#">
                              Details
                            </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-3">
            <div className="card p-3">
              <div className="row">
                <div className="option-other col-lg-8">
                  <h4 className="mb-1">Activity (Arrival Island)</h4>
                  <p>Start From 07.00 Until 16.00</p>
                </div>

                <div className="price-box col-lg-4">
                  <div className="price_min float-end">
                    <div>Start From 350.000 / Adult</div>
                  </div>
                  <div className="btn float-end">
                    {/* Tambahkan onClick handler untuk tombol View */}
                    {/* <a
                          className="btn-style-two theme-btn"
                          onClick={handleViewArrival}
                        >
                          <div className="btn-wrap">
                            <span className="text-one">View</span>
                            <span className="text-two">View</span>
                          </div>
                        </a> */}
                    <a
                      className="btn-style-two theme-btn"
                      onClick={toggleArrival}
                    >
                      <div className="btn-wrap">
                        <span className="text-one">
                          {showArrival ? "Hide" : "View"}
                        </span>
                        <span className="text-two">
                          {showArrival ? "Hide" : "View"}
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tampilkan daftar fastboat lainnya jika showOthers true */}
            {showArrival && (
              <div className="fastboat-search border rounded-3 mt-3">
                <div className="row col p-3">
                  <div className="col-lg-4 comfort-section">
                    <ul className="image-carousel owl-carousel owl-theme">
                      <li>
                        <div className="mt-4">
                          <img
                            src="image/fastboat/karunia-jaya.jpg"
                            alt=""
                            className="rounded-2"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Room Details */}
                  <div className="col-lg-8 fastboat-search-content d-flex">
                    <div className="vertical-line-container">
                      <div className="circle"></div>
                      <div className="line"></div>
                      <div className="circle"></div>
                    </div>
                    <div className="schedule">
                      <div className="time">
                        <b>15:25</b> Padangbai Harbor, Bali
                      </div>
                      <div className="route mt-2">
                        <img src="/image/clients/logo-Eka_Jaya.jpg" alt="" />
                        <span>
                          <b>Eka Jaya</b> 1H 30m
                        </span>
                      </div>
                      <div className="time mt-3">
                        <b>16:00</b> Gili Trawangan Port, Gili Trawangan
                      </div>
                    </div>

                    {/* Pricing and Buttons */}
                    <div className="price-box">
                      <div className="price">
                        <div>IDR 450.000 / Adult</div>
                        <div>IDR 450.000 / Child</div>
                      </div>

                      <div className="d-flex">
                        <a className="btn-style-two theme-btn" href="#">
                          <div className="btn-wrap">
                            <span className="text-one">Book Now</span>
                            <span className="text-two">Book Now</span>
                          </div>
                        </a>
                        {/* <a className="detail theme-btn" href="#">
                              Details
                            </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* End Gallery Section */}
    </div>
  );
};

export default FastboatSearch;
