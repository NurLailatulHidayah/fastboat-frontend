import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormFastboatComponent from "../components/FormFastboatComponent";
import GaleryFasboatComponent from "../components/GaleryFasboatComponent";
import ScrollTopButtonComponent from "../components/ScrollTopButtonComponent";

const FastboatPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayLimit, setDisplayLimit] = useState(8); // Initial limit set to 8

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSeeAllClick = () => {
    setDisplayLimit((prevLimit) => prevLimit + 4); // Increase the limit by 4 on each click
  };

  return (
    <div>
      {/* Page Banner */}
      <section
        className="page-banner"
        style={{ backgroundImage: "url(/image/main-slider/1.jpg)" }}
      >
        <div className="auto-container">
          {/* <h2>Enjoy the Best Sea Journey with Our Fastboat</h2>
          <h6>
            Book your tickets now and start an exciting adventure with us!
          </h6> */}

          {/* <ul className="page-breadbrumbs">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Fast Boat</li>
          </ul> */}
          <h1 className="page-banner_title">FAST BOATS</h1>

          <FormFastboatComponent />
        </div>
      </section>
      {/* End Page Banner */}

      <section className="gallery-five heading-packages">
        <div className="auto-container">
          <div className="page-header d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap gap-2 gap-md-5">
            <div className="gallery-five_title-box">
              <h4>OUR FAST BOAT</h4>
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
          <div>
            <ScrollTopButtonComponent />
          </div>
          <div className="projects-one_filters d-flex align-items-center justify-content-between flex-wrap flex-md-nowrap gap-2 gap-md-5"></div>
          {/* Pass the displayLimit as a prop */}
          <GaleryFasboatComponent
            searchTerm={searchTerm}
            limit={displayLimit}
          />

          {/* See All Button */}
          <div className="text-center mt-4">
            <button
              className="btn border border-dark"
              onClick={handleSeeAllClick}
            >
              See More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FastboatPage;
