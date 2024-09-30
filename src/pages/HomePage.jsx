import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BenefitComponent from "../components/BenefitComponent";
import FormFastboatComponent from "../components/FormFastboatComponent";
import GaleryFasboatComponent from "../components/GaleryFasboatComponent";
import ScrollTopButtonComponent from "../components/ScrollTopButtonComponent";

const HomePage = () => {
  return (
    <div>
      {/* Banner One / Style Three */}
      <section className="banner-one responsive">
        <div
          className="banner-one_image-layer"
          style={{
            backgroundImage: 'url("/image/main-slider/1.jpg")',
          }}
        ></div>
        {/* Banner content */}
        <div className="container">
          <div className="banner-one_content">
            <div className="banner-one_content-inner">
              <div className="banner-one_title">
                Your Travel Partner in Bali and Beyond
              </div>
              <div className="banner-one_text">
                Fast Boat Bali Gili Island & Nusa Penida, Private Car in Bali &
                Lombok and Daily Tour
              </div>
              {/* Form Fast Boat */}
              <FormFastboatComponent />
              {/* End Form Fast Boat */}
            </div>
          </div>
        </div>
      </section>
      {/* End Banner One */}

      {/* Scroll Button */}
      <ScrollTopButtonComponent />
      {/* End Scroll Button */}

      {/* Promo fastboat */}
      <section className="mt-5">
        <div>
          <div className="space-top-1 text-center">
            <div className="container pb-5 d-md-none">
              <img
                className="w-100 shadow-5 rounded"
                src="/image/promo/promo_hp.png"
                alt="promo banner"
              />
            </div>
            <div className="container pb-5 d-none d-md-block">
              <img
                className=" shadow rounded"
                src="/image/promo/promo.png"
                alt="promo banner"
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Promo fastboat */}

      {/* Gallery Fastboat */}
      <section className="gallery-one">
        <div className="auto-container">
          {/* Sec Title Two */}
          <div className="sec-title_two ">
            <div className="bid-title">TRANSPORT</div>
            <div className="title">Fast Boat</div>
          </div>
          {/* Pass limit prop to show only 4 items */}
          <GaleryFasboatComponent limit={4} />
        </div>
        <div className="button-box text-center mt-5">
          <a className="btn-style-three theme-btn" href="/fast-boat">
            <div className="btn-wrap">
              <span className="text-one">Load More</span>
              <span className="text-two">Load More</span>
            </div>
          </a>
        </div>
      </section>
      {/* End Gallery Fastboat */}

      {/* Fastboat Routes */}
      <section className="gallery-one">
        <div className="auto-container">
          {/* Sec Title Two */}
          <div className="sec-title_two">
            <div className="bid-title">DESTINATION</div>
            <div className="title">Fast Boat Routes</div>
            {/* <div className="s-title">
              Bali, Gili Island, Nusa Penida, Nusa Lembongan and Lombok
            </div> */}
          </div>
        </div>
      </section>
      {/* End Fastboat Routes */}

      {/* Best Tour and Activities */}
      <section className="gallery-one">
        <div className="auto-container">
          {/* Sec Title Two */}
          <div className="sec-title_two">
            <div className="bid-title">TOUR</div>
            <div className="title">Best Tour and Activities</div>
            {/* <h6 className="font-size-17 mt-0 text-secondary font-weight-normal">
              Delivering unforgettable holiday experiences and ensuring every
              trip is an adventure of a lifetime.
            </h6> */}
          </div>
          {/* MixitUp Galery */}
          <div className="mixitup-gallery">
            {/* Filter */}
            <div className="projects-one_filters">
              <ul className="filter-tabs">
                {/* <li
                  className="active filter"
                  data-role="button"
                  data-filter="all"
                >
                  all
                </li>
                <li className="filter" data-role="button" data-filter=".seller">
                  Best Seller
                </li> */}
                {/* <li className="filter" data-role="button" data-filter=".nature">
                  Nature
                </li>
                <li className="filter" data-role="button" data-filter=".city">
                  City
                </li>
                <li
                  className="filter"
                  data-role="button"
                  data-filter=".seasonal"
                >
                  Seasonal
                </li> */}
              </ul>
            </div>
            <div className="filter-list row">
              {/* Location Block One */}
              <div className="location-block_one  all city nature col-lg-3 col-md-6 col-sm-6">
                <div className="location-block_one-inner">
                  <div className=" object-fit-cover">
                    <a href="#">
                      <img
                        src="/image/tour_activies/ramayana-ballet-performance-only.jpg"
                        alt="ballet"
                      />
                    </a>
                  </div>
                  <div className="location-block_one-content">
                    <h5 className="location-block_one-heading">
                      <a href="#">
                        Ramayana Ballet Purawisata - PERFORMANCE ONLY
                      </a>
                    </h5>
                    {/* <div className="location-block_one">
                      Karunia Jaya Fast Boat with early departure from Padangbai
                      and Bangsal. Get the best ticket price with
                      Gilitransfers.com
                    </div>
                    <a
                      className="location-block_one-arrow flaticon-next-2"
                      href="#"
                    /> */}
                  </div>
                </div>
              </div>
              {/* Location Block One */}
              {/* <div className="location-block_one  all nature city col-lg-3 col-md-6 col-sm-6">
                <div className="location-block_one-inner">
                  <div className="location-block_one-image">
                    <a href="#">
                      <img
                        src="/image/tour_activies/bali-atv-ride-single-tandem.jpg"
                        alt="aman dia cruise"
                      />
                    </a>
                  </div>
                  <div className="location-block_one-content">
                    <h5 className="location-block_one-heading">
                      <a href="#">
                        Kuber Bali ATV Ride Adventure - Tandem 1.5 Hours
                      </a>
                    </h5>
                    <div className="location-block_one ">
                      Complete your adventure with Wanderlust Cruise from Bali
                      to Gili Island and Penida to Gili with a direct boat. Get
                      the best tickets price with Gilitransfers
                    </div>
                    <a
                      className="location-block_one-arrow flaticon-next-2"
                      href="#"
                    />
                  </div>
                </div>
              </div> */}
              {/* Location Block One */}
              {/* <div className="location-block_one  all seasonal seller col-lg-3 col-md-6 col-sm-6">
                <div className="location-block_one-inner">
                  <div className="location-block_one-image">
                    <a href="#">
                      <img
                        src="/image/tour_activies/ramayana-ballet-performance.jpg"
                        alt="smiling express"
                      />
                    </a>
                  </div>
                  <div className="location-block_one-content">
                    <h5 className="location-block_one-heading">
                      <a href="#">Ramayana Ballet Performance with Dinner</a>
                    </h5>
                    <div className="location-block_one">
                      Embark on a journey that seamlessly connects Bali, Gili
                      Island, and Lombok with Smiling Express Fast Boat. Get the
                      best price with Gilitransfers
                    </div>
                    <a
                      className="location-block_one-arrow flaticon-next-2"
                      href="#"
                    />
                  </div>
                </div>
              </div> */}
              {/* Location Block One */}
              {/* <div className="location-block_one  all seasonal seller col-lg-3 col-md-6 col-sm-6">
                <div className="location-block_one-inner">
                  <div className="location-block_one-image">
                    <a href="#">
                      <img
                        src="/image/tour_activies/splash-waterpark-bali.jpg"
                        alt="wanderlust cruise"
                      />
                    </a>
                  </div>
                  <div className="location-block_one-content">
                    <h5 className="location-block_one-heading">
                      <a href="#">FINNS Splash Day Pass - Water Park</a>
                    </h5>
                    <div className="location-block_one">
                      Aman Dia Cruise is a new Marine Tourism Company based in
                      Denpasar will take you from Bali to Nusa Penida on a
                      comfortable luxury trip
                    </div>
                    <a
                      className="location-block_one-arrow flaticon-next-2"
                      href="#"
                    />
                  </div>
                </div>
              </div> */}
            </div>
            {/* Button Box */}
            <div className="button-box text-center">
              <a className="btn-style-three theme-btn" href="/fastboat">
                <div className="btn-wrap">
                  <span className="text-one">Load More Destinations</span>
                  <span className="text-two">Load More Destinations</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Best Tour and Activities */}

      {/* Top Island */}
      <section className="gallery-one">
        <div className="auto-container">
          {/* Sec Title Two */}
          <div className="sec-title_two">
            <div className="bid-title">TOUR</div>
            <div className="title">Top Island</div>
          </div>
          {/* MixitUp Galery */}
          <div className="mixitup-gallery">
            <div className="filter-list row">
              {/* Location Block One */}
              <div className="location-block_one  all city nature col-lg-3 col-md-6 col-sm-6">
                <div className="location-block_one-inner">
                  <div className="location-block_one-image">
                    <a href="#">
                      <img
                        src="/image/island/nusa-penida.jpg"
                        alt="nusa penida"
                      />
                    </a>
                  </div>
                  <div className="location-block_one-content">
                    <h5 className="location-block_one-heading">
                      <a href="#">Nusa Penida</a>
                    </h5>
                    {/* <div className="location-block_one">
                      Karunia Jaya Fast Boat with early departure from Padangbai
                      and Bangsal. Get the best ticket price with
                      Gilitransfers.com
                    </div> */}
                    {/* <a
                      className="location-block_one-arrow flaticon-next-2"
                      href="#"
                    /> */}
                  </div>
                </div>
              </div>
              {/* Location Block One */}
              <div className="location-block_one  all nature city col-lg-3 col-md-6 col-sm-6">
                <div className="location-block_one-inner">
                  <div className="location-block_one-image">
                    <a href="#">
                      <img
                        src="/image/island/island-nusa-lembongan.jpg"
                        alt="nusa lembongan"
                      />
                    </a>
                  </div>
                  <div className="location-block_one-content">
                    <h5 className="location-block_one-heading">
                      <a href="#">Nusa Lembongan</a>
                    </h5>
                    {/* <div className="location-block_one ">
                      Complete your adventure with Wanderlust Cruise from Bali
                      to Gili Island and Penida to Gili with a direct boat. Get
                      the best tickets price with Gilitransfers
                    </div> */}
                    {/* <a
                      className="location-block_one-arrow flaticon-next-2"
                      href="#"
                    /> */}
                  </div>
                </div>
              </div>
              {/* Location Block One */}
              <div className="location-block_one  all seasonal seller col-lg-3 col-md-6 col-sm-6">
                <div className="location-block_one-inner">
                  <div className="location-block_one-image">
                    <a href="#">
                      <img
                        src="/image/island/lombok-island.jpg"
                        alt="lombok "
                      />
                    </a>
                  </div>
                  <div className="location-block_one-content">
                    <h5 className="location-block_one-heading">
                      <a href="#">Lombok </a>
                    </h5>
                    {/* <div className="location-block_one">
                      Embark on a journey that seamlessly connects Bali, Gili
                      Island, and Lombok with Smiling Express Fast Boat. Get the
                      best price with Gilitransfers
                    </div> */}
                    {/* <a
                      className="location-block_one-arrow flaticon-next-2"
                      href="#"
                    /> */}
                  </div>
                </div>
              </div>
              {/* Location Block One */}
              <div className="location-block_one  all seasonal seller col-lg-3 col-md-6 col-sm-6">
                <div className="location-block_one-inner">
                  <div className="location-block_one-image">
                    <a href="#">
                      <img
                        src="/image/island/gili-trawangan.jpg"
                        alt="gili trawangan"
                      />
                    </a>
                  </div>
                  <div className="location-block_one-content">
                    <h5 className="location-block_one-heading">
                      <a href="#">Gili Trawangan</a>
                    </h5>
                    {/* <div className="location-block_one">
                      Aman Dia Cruise is a new Marine Tourism Company based in
                      Denpasar will take you from Bali to Nusa Penida on a
                      comfortable luxury trip
                    </div> */}
                    {/* <a
                      className="location-block_one-arrow flaticon-next-2"
                      href="#"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
            {/* Button Box */}
            <div className="button-box text-center">
              <a className="btn-style-three theme-btn" href="/fastboat">
                <div className="btn-wrap">
                  <span className="text-one">Load More Destinations</span>
                  <span className="text-two">Load More Destinations</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Top Island */}

      {/* Benefits One */}
      <BenefitComponent />
      {/* End Benefits One */}
    </div>
  );
};

export default HomePage;
