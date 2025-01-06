import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../api"; 
import { useLocation, useNavigate } from "react-router-dom"; 
import FormFastboatComponent from "../components/FormFastboatComponent";
import { CurrencyProvider, useCurrency } from "../context/CurrencyContext";

const FastboatSearch = () => {
  // State untuk trip departure
  const [departureTrips, setDepartureTrips] = useState([]); 
  // State untuk trip return
  const [returnTrips, setReturnTrips] = useState([]); 
  const { currency } = useCurrency();
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedDeparture, setSelectedDeparture] = useState(null);
  const [selectedReturn, setSelectedReturn] = useState(null);
  // Cek apakah ada return trip
  const [hasReturnTrip, setHasReturnTrip] = useState(false); 
  const [direction, setDirection] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // State untuk jumlah penumpang
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);

  // Mengambil query parameter dari URL
  const getQueryParams = (param) => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(param);
  };

  useEffect(() => {
    const depDate = getQueryParams("departure_date");
    const retDate = getQueryParams("return_date");

    // Mengambil direction (one_way / round_trip)
    const dir = getQueryParams("direction");

    // Ambil data jumlah penumpang dari query parameters
    const adultCount = parseInt(getQueryParams("adult"), 10) || 0;
    const childCount = parseInt(getQueryParams("child"), 10) || 0;
    const infantCount = parseInt(getQueryParams("infant"), 10) || 0;

    setDepartureDate(depDate);
    setReturnDate(retDate);
    // Menyimpan direction ke state
    setDirection(dir);
    setAdult(adultCount);
    setChild(childCount);
    setInfant(infantCount);

    // Fetch data fastboat berdasarkan query dari URL
    // fetchDataAvailable(dir);
  }, [location.search]);

  // Fungsi untuk menghitung durasi perjalanan
  const calculateDuration = (departureTime, arrivalTime) => {
    const [depHours, depMinutes] = departureTime.split(":").map(Number);
    const [arrHours, arrMinutes] = arrivalTime.split(":").map(Number);

    let totalMinutes = (arrHours - depHours) * 60 + (arrMinutes - depMinutes);

    if (totalMinutes < 0) {
      totalMinutes += 24 * 60;
    }

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}h ${minutes}m`;
  };

  useEffect(() => {
    // Update URL dengan currency setiap kali currency berubah
    const updateURLWithCurrency = () => {
      const searchParams = new URLSearchParams(location.search);
      // Update currency di URL
      searchParams.set("currency", currency.cy_code); 
      navigate(`${location.pathname}?${searchParams.toString()}`, {
        replace: true,
      });
    };

    // Fetch data dari API sesuai currency dan arah trip
    const fetchDataAvailable = async () => {
      const query = new URLSearchParams(location.search);
      try {
        const response = await api.get(
          `/api/availability/search?${query.toString()}`
        );
        console.log(response.data);
        if (response.data && response.data.success && response.data.data) {
          if (direction === "one_way") {
            const { one_trip } = response.data.data;
            setDepartureTrips(one_trip || []);
          } else if (direction === "round_trip") {
            const { departure_trip, return_trip } = response.data.data;
            setDepartureTrips(departure_trip || []);
            setReturnTrips(return_trip || []);
            setHasReturnTrip(return_trip && return_trip.length > 0);
          }
        } else {
          setError("Data tidak ditemukan.");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError("Tidak dapat terhubung ke server.");
      }
    };

    updateURLWithCurrency();
    // Ambil data sesuai currency dan arah trip
    fetchDataAvailable(); 
  }, [currency, direction, location.search, navigate]);

  const handleBookingClick = (trip) => {
    const currencyCode = currency.cy_code;
    // Log semua data yang akan dikirim ke halaman booking
    console.log("Data yang dikirim ke halaman booking:", {
      direction,
      adult,
      child,
      infant,
      departureDate,
      returnDate,
      currencyCode,
      selectedDeparture: trip,
      selectedReturn: trip,
      // fbo_pickups: trip.fbo_pickups, 
      // fbo_dropoffs: trip.fbo_dropoffs, 
    });
    if (direction === "one_way") {
      console.log("Sending departureDate:", departureDate, currencyCode);
      // Untuk one_way, navigasi ke halaman booking dengan trip departure
      navigate(
        `/booking?departure_date=${encodeURIComponent(
          departureDate
        )}&return_date=${encodeURIComponent(
          returnDate || ""
        )}&adult=${adult}&child=${child}&infant=${infant}&currency=${encodeURIComponent(
          currencyCode
        )}`,
        {
          state: {
            direction,
            adult,
            child,
            infant, 
            departureDate,
            selectedDeparture: trip, 
            currencyCode,
            // fbo_pickups: trip.fbo_pickups, 
            // fbo_dropoffs: trip.fbo_dropoffs, 
          },
        }
      );

    } else if (direction === "round_trip") {
      // Jika round_trip, cek apakah trip departure sudah dipilih
      if (!selectedDeparture) {
        // Set trip departure yang dipilih
        setSelectedDeparture(trip); 
      } else if (selectedDeparture && hasReturnTrip) {
        // Set trip return yang dipilih
        setSelectedReturn(trip); 
        navigate(
          `/booking?departure_date=${encodeURIComponent(
            departureDate
          )}&return_date=${encodeURIComponent(
            returnDate || ""
          )}&adult=${adult}&child=${child}&infant=${infant}&currency=${encodeURIComponent(
            currencyCode
          )}`,
          {
            state: {
              direction,
              adult,
              child,
              infant, 
              selectedDeparture, 
              selectedReturn: trip,
              departureDate,
              returnDate,
              currencyCode,
              // fbo_pickups: trip.fbo_pickups,
              // fbo_dropoffs: trip.fbo_dropoffs, 
            },
          }
        );
      }
    }
    // console.log(direction.data);
  };

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

  return (
    <div>
      {/* Page Banner */}
      <section
        className="page-banner"
        style={{ backgroundImage: "url(/image/main-slider/bg1.jpg)" }}
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
            <div className="row col-lg-12 ">
              {!selectedDeparture && departureDate && (
                <div className="card mb-3 rounded-pill p-2">
                  <h4 className="text-center fw-bolder fs-3 ">
                    Selected Trip For (Departure):{" "}
                    {new Date(departureDate).toLocaleDateString("en-US", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </h4>
                </div>
              )}

              {selectedDeparture && returnDate && hasReturnTrip && (
                <div className="card mb-3 rounded-pill p-2">
                  <h4 className="text-center fw-bolder">
                    Selected Trip For (Return):{" "}
                    {new Date(returnDate).toLocaleDateString("en-US", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </h4>
                </div>
              )}

              <div className="col-lg-3 col-md-4 d-none d-md-block mb-5">
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
              </div>

              <div className="col-lg-9 col-md-8 col-sm-12">
                <div className="mixitup-gallery">
                  <div className="filter-list">
                    {/* Render Departure Trips */}
                    {!selectedDeparture &&
                      departureTrips.length > 0 &&
                      departureTrips
                      // Filter trip yang direcommendasikan.
                        .filter((trip) => trip.fbt_recom === 1) 
                        .map((trip, index) => (
                          <div
                            className="fastboat-search border rounded-3"
                            key={index}
                            // onClick={() => (window.location.href = "/fast-boat")}
                            // style={{
                            //   cursor: "pointer",
                            //   position: "relative",
                            // }}
                          >
                            <div className="row col p-3 mb-4">
                              <div
                                className="full-card-link d-flex align-items-start"
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
                              <div className="col-lg-3 ">
                                <ul className="">
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
                                      {calculateDuration(
                                        trip.fba_dept_time,
                                        trip.fba_arrival_time
                                      )}
                                    </span>
                                  </div>
                                  <div className="time mt-3">
                                    <b>{trip.fba_arrival_time.slice(0, 5)}</b>{" "}
                                    {trip.arrival_port}
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-2 price-box px-4">
                                <div className="price">
                                  <div>
                                    {currency.cy_code} {trip.fba_adult_publish}{" "}
                                    / Adult
                                  </div>
                                  <div>
                                    {currency.cy_code} {trip.fba_child_publish}{" "}
                                    / Child
                                  </div>
                                </div>

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
                        ))}

                    {/* Render Return Trips */}
                    {selectedDeparture &&
                      hasReturnTrip &&
                      returnTrips.length > 0 &&
                      returnTrips
                        .filter((trip) => trip.fbt_recom === 1)
                        .map((trip, index) => (
                          <div
                            className="fastboat-search border rounded-3"
                            key={index}
                            // onClick={() => (window.location.href = "/fast-boat")}
                            // style={{
                            //   cursor: "pointer",
                            //   position: "relative",
                            // }}
                          >
                            <div className="row col p-3 mb-4">
                              <div className="full-card-link d-flex align-items-start">
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
                              <div className="col-lg-3 ">
                                <ul className="">
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
                                      {calculateDuration(
                                        trip.fba_dept_time,
                                        trip.fba_arrival_time
                                      )}
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
                                    {currency.cy_code} {trip.fba_adult_publish}{" "}
                                    / Adult
                                  </div>
                                  <div>
                                    {currency.cy_code} {trip.fba_child_publish}{" "}
                                    / Child
                                  </div>
                                </div>

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
                        ))}
                  </div>
                </div>
              </div>
              {error && <p>{error}</p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FastboatSearch;
