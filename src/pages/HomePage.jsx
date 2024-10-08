import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BenefitComponent from "../components/BenefitComponent";
import FormFastboatComponent from "../components/FormFastboatComponent";
import GaleryFasboatComponent from "../components/GaleryFasboatComponent";
import ScrollTopButtonComponent from "../components/ScrollTopButtonComponent";
import GaleryTourComponent from "../components/GaleryTourComponent";
import GaleryIslandComponent from "../components/GaleryIslandComponent";

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
              <span className="text-one">See more fast boat</span>
              <span className="text-two">See more fast boat</span>
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
            <div className="title mb-3">Fast Boat Routes</div>
            <div className="mt-5 opacity-75" style={{ fontSize: "20px" }}>
              Bali, Gili Island, Nusa Penida, Nusa Lembongan and Lombok
            </div>
            <div
              className=" text-center mt-5 opacity-75"
              style={{ fontSize: "16px", textDecoration: "line" }}
            >
              <div className="row clearfix">
                <div className="col-4">
                  <div>
                    <a className="mb-2 pe-auto text-black hover-primary">
                      Bali to Gili Meno
                    </a>
                  </div>
                  <div>
                    <a className="mb-2 ">Bali to Gili Air</a>
                  </div>
                  <div>
                    <a className="mb-2">Bali to Gili Trawangan</a>
                  </div>
                  <div>
                    <a className="mb-2">Bali to Lombok</a>
                  </div>
                  <div>
                    <a>Bali to Nusa Lembongan</a>
                  </div>
                </div>
                <div className="col-4">
                  <div className="mb-2">Bali to Nusa Penida</div>
                  <div className="mb-2">Nusa Penida to Lombok</div>
                  <div className="mb-2">Nusa Lembongan to Lombok</div>
                  <div className="mb-2">Nusa Penida to Gili Air</div>
                  <div>Nusa Penida to Gili Trawangan</div>
                </div>
                <div className="col-4">
                  <div className="mb-2">Nusa Lembongan to Gili Air</div>
                  <div className="mb-2">Lembongan to Gili Trawangan</div>
                  <div className="mb-2">Bali to Gili Gede</div>
                  <div className="mb-2">Nusa penida to Gili Gede</div>
                  <div>Amed to Gili Island and Lombok</div>
                </div>
              </div>
            </div>
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
            <div className="filter-list ">
              {/* Galery Tour */}
              <GaleryTourComponent />
              {/* End Galery Tour */}

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
            </div>
            {/* Button Box */}
            <div className="button-box text-center">
              <a className="btn-style-three theme-btn" href="/fastboat">
                <div className="btn-wrap">
                  <span className="text-one">See more Tour and Activities</span>
                  <span className="text-two">See more Tour and Activities</span>
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
            <div className="filter-list mt-4 mb-3">
              {/* Galery Island */}
              <GaleryIslandComponent />
              {/* End Galery Island */}
            </div>
            {/* Button Box */}
            <div className="button-box text-center">
              <a className="btn-style-three theme-btn" href="/fastboat">
                <div className="btn-wrap">
                  <span className="text-one">See more island</span>
                  <span className="text-two">See more island</span>
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
