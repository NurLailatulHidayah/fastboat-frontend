import React, { useState, useEffect } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.min.css";
import FormFastboatComponent from "../components/FormFastboatComponent";
import { Link } from "react-router-dom";
import ScrollTopButtonComponent from "../components/ScrollTopButtonComponent";

const PortPage = () => {
  const [ports, setPorts] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [displayLimit, setDisplayLimit] = useState(8); // Untuk menampilkan 8 item / content ports

  // Fetching data port
  const fetchDataPort = async () => {
    try {
      const response = await api.get("/api/port");
      setPorts(response.data.data || []);
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
    fetchDataPort();
  }, []);

  // Filter ports based on searchTerm
  const filteredPorts = ports.filter((port) =>
    port.prt_name_en.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSeeAllClick = () => {
    setDisplayLimit((prevLimit) => prevLimit + 4); // untuk menghandle limit 4 item setiap kali tombol See More diklik
  };

  // Menentukan apakah tombol "See More" perlu ditampilkan
  const isAllDisplayed = displayLimit >= filteredPorts.length;

  return (
    <div>
      {/* Page Banner */}
      <section
        className="page-banner"
        style={{ backgroundImage: "url(/image/background/adventure.jpg)" }}
      >
        <div className="auto-container">
          <h1 className="page-banner_title fade-in-top">PORTS</h1>
          <div className="destination-content-one_text mt-4 fade-in-top">
            <p>Explore Our Network of Ports for Your Journey</p>
          </div>
          <FormFastboatComponent />
        </div>
      </section>
      {/* End Page Banner */}

      {/* Scroll Button */}
      <ScrollTopButtonComponent />
      {/* End Scroll Button */}

      {/* Content Port */}
      <section>
        <div className="sidebar-widget post-widget col-lg-12 col-mb-12 col-md-12 p-5">
          <div className="page-header d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap gap-2 gap-md-5">
            <div className="gallery-five_title-box">
              <h4>OUR PORTS</h4>
            </div>
            <div className="gallery-search_box">
              <div className="search-box">
                <form method="post" action="#">
                  <div className="form-group">
                    <input
                      type="search"
                      name="search-field"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      required
                    />
                    <button type="submit">
                      <span className="icon fa fa-search" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row clearfix widget-content">
            {error ? (
              <div className="alert alert-danger mb-0">{error}</div>
            ) : filteredPorts.length > 0 ? (
              filteredPorts.slice(0, displayLimit).map((port, index) => (
                <div key={index} className="post-widget_block col-lg-3 ">
                  <div className="port-widget_block-image ">
                    <Link to={`/ports/${port.prt_slug_en}`}>
                    <img
                        src={`http://localhost:8000/storage/${port.prt_image1}`}
                        alt={port.prt_slug_en}
                        className="port-image"
                      />
                    </Link>
                    {/* <a href="#">
                      <img
                        src={`http://localhost:8000/storage/${port.prt_image1}`}
                        alt={port.prt_slug_en}
                        className="port-image"
                      />
                    </a> */}
                  </div>
                  <div className="content p-2">
                    <h5 className="post-widget_heading">
                      <Link to={`/ports/${port.prt_slug_en}`}>
                        {port.prt_name_en}
                      </Link>
                    </h5>
                    <div className="post-widget_date">
                      {port.prt_content_en}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <radialGradient
                  id="a11"
                  cx=".66"
                  fx=".66"
                  cy=".3125"
                  fy=".3125"
                  gradientTransform="scale(1.5)"
                >
                  <stop offset={0} stopColor="#8CB2FF" />
                  <stop offset=".3" stopColor="#8CB2FF" stopOpacity=".9" />
                  <stop offset=".6" stopColor="#8CB2FF" stopOpacity=".6" />
                  <stop offset=".8" stopColor="#8CB2FF" stopOpacity=".3" />
                  <stop offset={1} stopColor="#8CB2FF" stopOpacity={0} />
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
          {/* See All Button */}
          {!isAllDisplayed && (
            <div className="text-center mt-4">
              <button
                className="btn border border-dark"
                onClick={handleSeeAllClick}
              >
                See More
              </button>
            </div>
          )}
        </div>
      </section>
      {/* End Content Port */}
    </div>
  );
};

export default PortPage;
