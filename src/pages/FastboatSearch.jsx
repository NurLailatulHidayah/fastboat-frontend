import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../api"; // Pastikan import axios instance
import FormFastboatComponent from "../components/FormFastboatComponent";
import { Modal } from "react-bootstrap";
import { useLocation } from "react-router-dom"; // Import useLocation to get the query parameters
import { useNavigate } from "react-router-dom";

const FastboatSearch = () => {
  const [availabilitys, setAvailabilitys] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation(); // Untuk mendapatkan query string dari URL

  // Fungsi untuk menghitung durasi perjalanan
  const calculateDuration = (departureTime, arrivalTime) => {
    const [depHours, depMinutes] = departureTime.split(":").map(Number);
    const [arrHours, arrMinutes] = arrivalTime.split(":").map(Number);

    let totalMinutes = (arrHours - depHours) * 60 + (arrMinutes - depMinutes);

    // Jika waktu kedatangan kurang dari waktu keberangkatan, maka perjalanan melewati tengah malam
    if (totalMinutes < 0) {
      totalMinutes += 24 * 60;
    }

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}h ${minutes}m`;
  };

  // Fetching data fastboat dengan query string
  const fetchDataAvailable = async () => {
    const query = location.search; // Ambil query dari URL
    try {
      const response = await api.get(`/api/availability/search${query}`);
      console.log("API Response:", response.data);

      if (response.data && response.data.success && response.data.data) {
        let tripsWithDuration = [];

        // Jika direction adalah one_way
        if (response.data.data.one_trip) {
          tripsWithDuration = response.data.data.one_trip.map((trip) => ({
            ...trip,
            trip_duration: calculateDuration(
              trip.fba_dept_time,
              trip.fba_arrival_time
            ),
          }));
        }

        // Jika direction adalah round_trip
        if (
          response.data.data.departure_trip &&
          response.data.data.return_trip
        ) {
          const departureTrips = response.data.data.departure_trip.map(
            (trip) => ({
              ...trip,
              trip_duration: calculateDuration(
                trip.fba_dept_time,
                trip.fba_arrival_time
              ),
            })
          );

          const returnTrips = response.data.data.return_trip.map((trip) => ({
            ...trip,
            trip_duration: calculateDuration(
              trip.fba_dept_time,
              trip.fba_arrival_time
            ),
          }));

          // Menggabungkan departure dan return trip
          tripsWithDuration = [...departureTrips, ...returnTrips];
        }

        if (tripsWithDuration.length > 0) {
          setAvailabilitys(tripsWithDuration);
        } else {
          setAvailabilitys([]);
          throw new Error("Data tidak ditemukan.");
        }
      } else {
        setAvailabilitys([]);
        throw new Error("Data tidak ditemukan.");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      if (error.response) {
        if (error.response.status === 404) {
          setError("Data tidak ditemukan.");
        } else {
          setError("Terjadi kesalahan pada server.");
        }
      } else {
        setError("Tidak dapat terhubung ke server.");
      }
    }
  };

  useEffect(() => {
    console.log("Fetching data with query:", location.search); // Log query string untuk debugging
    fetchDataAvailable();
  }, [location.search]); // Re-fetch data setiap kali query di URL berubah

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

  const toggleFastboats = () => setShowFastboats(!showFastboats);
  const togglePrivate = () => setShowPrivate(!showPrivate);
  const toggleArrival = () => setShowArrival(!showArrival);

  const [selectedSort, setSelectedSort] = useState("Recommendation");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

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
  };

  const navigate = useNavigate();
  const handleBookingClick = (trip) => {
    // Pastikan mengirim data penumpang dari trip atau sumber lain yang sesuai
    const adult = trip.adults || 1; // Default 1 adult jika tidak ada data
    const child = trip.children || 0;
    const infant = trip.infants || 0;

    // Data penumpang dikirim saat navigasi ke halaman booking
    navigate("/booking", { state: { adult, child, infant } });
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
                bottom: "20px",
                right: "20px",
                zIndex: 1000,
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
                  <div className="sort-dropdown" ref={dropdownRef}>
                    <button
                      className="border rounded"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      Sort By : <span>{selectedSort}</span>
                    </button>
                    {dropdownOpen && (
                      <div className="dropdown-menu">
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

                  {/* Render Results */}
                  <h4 className="option-best mb-2 mt-2">Best Options</h4>
                  {error && <p>{error}</p>}
                  <div>
                    {availabilitys.length > 0 ? (
                      availabilitys
                        .filter((trip) => trip.fbt_recom === 1)
                        .map((trip, index) => (
                          <div
                            className="fastboat-search border rounded-3"
                            key={index}
                          >
                            <div className="row col p-3 mb-4">
                              <div
                                onClick={() =>
                                  (window.location.href = "/fast-boat")
                                }
                                className="full-card-link d-flex align-items-start"
                                style={{
                                  cursor: "pointer",
                                  position: "relative",
                                }}
                                // className="d-flex align-items-start"
                                // style={{ position: "relative" }}
                              >
                                {trip.fbt_recom === 1 && (
                                  <div
                                    className="mb-2 bg-primary-subtle text-primary-emphasis rounded-4 px-3 py-1"
                                    style={{
                                      fontSize: "14px",
                                    }}
                                  >
                                    Recommendation
                                  </div>
                                )}
                              </div>

                              <div className="col-lg-4 comfort-section">
                                <ul className="image-carousel owl-carousel owl-theme">
                                  <li>
                                    <div className="d-flex align-items-center">
                                      <img
                                        src={trip.fb_image1}
                                        alt="Fastboat"
                                        className="rounded-2 mt-2 "
                                      />
                                    </div>
                                  </li>
                                </ul>
                              </div>

                              <div className="col-lg-5 fastboat-search-content d-flex px-2">
                                <div className="vertical-line-container">
                                  <div className="circle"></div>
                                  <div className="line"></div>
                                  <div className="circle"></div>
                                </div>
                                <div className=" mt-2 d-flex flex-column">
                                  <div className="time">
                                    <b>{trip.fba_dept_time.slice(0, 5)}</b>{" "}
                                    {trip.dept_port}
                                  </div>
                                  <div className="route mt-3 d-flex align-items-center">
                                    <img
                                      src={trip.cpn_logo}
                                      alt="Eka Jaya"
                                      className="me-2"
                                      style={{ width: "40px" }}
                                    />
                                    <span>
                                      <b>{trip.cpn_name}</b>{" "}
                                      {trip.trip_duration}
                                    </span>
                                  </div>
                                  <div className="time mt-3">
                                    <b>{trip.fba_arrival_time.slice(0, 5)}</b>{" "}
                                    {trip.arrival_port}
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-2 price-box px-5">
                                <div className="price">
                                  <div>
                                    IDR {trip.fba_adult_publish} / Adult
                                  </div>
                                  <div>
                                    IDR {trip.fba_child_publish} / Child
                                  </div>
                                </div>
                                {/* <a
                                  className="btn-style-two theme-btn"
                                  href="/booking"
                                >
                                  <div className="btn-wrap">
                                    <span className="text-one">Book Now</span>
                                    <span className="text-two">Book Now</span>
                                  </div>
                                </a> */}
                                <button
                                  className="btn-style-two theme-btn"
                                  onClick={() => handleBookingClick(trip)} // Kirim trip sebagai parameter
                                >
                                  <div className="btn-wrap">
                                    <span className="text-one">Book Now</span>
                                    <span className="text-two">Book Now</span>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 200"
                      >
                        <radialGradient
                          id="a11"
                          cx=".66"
                          fx=".66"
                          cy=".3125"
                          fy=".3125"
                          gradientTransform="scale(1.5)"
                        >
                          <stop offset={0} stopColor="#8CB2FF" />
                          <stop
                            offset=".3"
                            stopColor="#8CB2FF"
                            stopOpacity=".9"
                          />
                          <stop
                            offset=".6"
                            stopColor="#8CB2FF"
                            stopOpacity=".6"
                          />
                          <stop
                            offset=".8"
                            stopColor="#8CB2FF"
                            stopOpacity=".3"
                          />
                          <stop
                            offset={1}
                            stopColor="#8CB2FF"
                            stopOpacity={0}
                          />
                        </radialGradient>
                        <circle
                          transform-origin="center"
                          fill="none"
                          stroke="url(#a11)"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeDasharray="200 1000"
                          strokeDashoffset={0}
                          cx={100}
                          cy={100}
                          r={5}
                        >
                          <animateTransform
                            type="rotate"
                            attributeName="transform"
                            calcMode="spline"
                            dur="1.4"
                            values="360;0"
                            keyTimes="0;1"
                            keySplines="0 0 1 1"
                            repeatCount="indefinite"
                          />
                        </circle>
                        <circle
                          transform-origin="center"
                          fill="none"
                          opacity=".2"
                          stroke="#8CB2FF"
                          strokeWidth={2}
                          strokeLinecap="round"
                          cx={100}
                          cy={100}
                          r={5}
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Menu */}
            {/* <div className="col-lg-3 col-md-4 col-sm-12">
              <aside className="sidebar">
                <div className="form-group search-menu text-center">
                  <div className="search-button" onClick={toggleArrival}>
                    Search By Destination
                  </div>
                  <div className="search-button mt-3" onClick={toggleFastboats}>
                    Show All Fastboats
                  </div>
                  <div className="search-button mt-3" onClick={togglePrivate}>
                    Book Private Fastboat
                  </div>
                </div>
              </aside>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FastboatSearch;
