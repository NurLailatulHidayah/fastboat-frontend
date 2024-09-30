import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BenefitComponent from "../components/BenefitComponent";
import ScrollTopButtonComponent from "../components/ScrollTopButtonComponent";

function AboutUsPage() {
  return (
    <div>
      {/* Page Banner */}
      <section
        className="page-banner"
        style={{ backgroundImage: "url(/image/main-slider/1.jpg)" }}
      >
        <div className="auto-container">
          {/* <ul className="page-breadbrumbs">
            <li>
              <a href="/">Home</a>
            </li>
            <li>about us</li>
          </ul> */}
          <h1 className="page-banner_title fade-in-top">ABOUT US</h1>
          <div className="destination-content-one_text mt-4 fade-in-top">
            <p>
              At Gilitransfers, we keep working to make tourists easier to book
              what they need when they plan to visit miraculous islands of Bali,
              Nusa Lembongan, Nusa Ceningan, Nusa Penida,Gili Air, Gili Meno,
              Gili Trawangan and Lombok.
            </p>
          </div>
        </div>
      </section>
      {/* End Page Banner */}

      {/* Scroll Button */}
      <ScrollTopButtonComponent />
      {/* End Scroll Button */}

      {/* Gallery Five */}
      <section className="destination-content-one content-page">
        <div className="auto-container">
          <div className="row clearfix">
            {/* <div className="destination-content-one_text">
              <p>
                At Gilitransfers, we keep working to make tourists easier to
                book what they need when they plan to visit miraculous islands
                of Bali, Nusa Lembongan, Nusa Ceningan, Nusa Penida,Gili Air,
                Gili Meno, Gili Trawangan and Lombok.
              </p>
            </div> */}
            <div className="row ">
              <div className="col-md-6 mb-4">
                <h3 className="section-title text-black  mb-0">
                  Reservation for fast boats{"  "}
                </h3>
                <p className=" justify-text mt-3">
                  Fast boat is the popular way to reach Gili / Lombok /
                  Lembongan Islands from Bali. We provide a list of reputable
                  fast boat providers at competitive price with instant
                  confirmation.
                </p>
              </div>
              <div className="col-md-6 mb-4">
                <h3 className="section-title text-black mb-0">
                  Reservation for car / private transfers{" "}
                  <div>
                    <a
                      href="https://wa.me/6281353304990?text=May%20I%20ask%20about%20the%20tour%2Factivities%C2%A0packages%3F"
                      className="font-weight-normal text-info"
                      title="Contact Us"
                      target="_blank"
                    >
                      {" "}
                      (Contact Us)
                    </a>
                  </div>
                </h3>
                <p className=" justify-text mt-3">
                  Looking for the way to reach Gili Islands from Lombok airport?
                  Or looking for a transport between Gili Islands and popular
                  destinations in Lombok? Or also looking for a private transfer
                  in Bali ? You can book private transfer service from our site
                  in minutes.
                </p>
              </div>
            </div>
            <div className="row 2">
              <div className="col-md-6 mb-4">
                <h3 className="section-title text-black mb-0">
                  Reservation for tour / activities{"   "}
                  <a
                    href="https://wa.me/6281353304990?text=May%20I%20ask%20about%20the%20tour%2Factivities%C2%A0packages%3F"
                    className="font-weight-normal text-info"
                    title="Contact Us"
                    target="_blank"
                  >
                    {" "}
                    (Contact Us)
                  </a>
                </h3>
                <p className=" justify-text mt-3">
                  Daily tour package from Bali to Nusa Penida and Nusa Lembongan
                  with many attractive activities. Snorkeling, explore the
                  popular destination of the island, enjoy the sunset and
                  sunrise of the island, romantic dinner with partner or party
                  dinner with whole family on the board. Book tour to Nusa
                  Penida and Lembongan in minutes.
                </p>
              </div>
              <div className="col-md-6 mb-4">
                <h3 className="section-title text-black mb-0">
                  Reservation for yacht{" "}
                  <a
                    href="https://wa.me/6281353304990?text=May%20I%20ask%20about%20the%20tour%2Factivities%C2%A0packages%3F"
                    className="font-weight-normal text-info"
                    title="Contact Us"
                    target="_blank"
                  >
                    {" "}
                    (Contact Us)
                  </a>
                </h3>
                <p className=" justify-text mt-3">
                  Yacht is one of way to enjoy the sunset and sunrise of the
                  island, romantic dinner with partner or party dinner with
                  whole family on the board. We provide a list of reputable
                  yacht providers at competitive price with instant
                  confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Gallery Five */}

      {/* <!-- Benefits One --> */}
      <BenefitComponent />
      {/* End Benefits One */}

      {/* Site Management */}
      <section className="about-two ">
        <div className="auto-container ">
          {/* <div className="title">Site Management</div> */}
          <h3 className="text-black font-weight-bold mb-0">Site Management</h3>
          {/* <div className="about-two_icon flaticon-black-airplane" /> */}
          <div className="about-two_text ">
            {/* <p> */}
            The Gilitransfers website is managed and maintained by a team of Eka
            Wisata Buana PT. The Site Team is responsible for ensuring that the
            Gilitransfers website (gilitransfers.com) is accessible,
            user-friendly and engaging. Eka Wisata Buana PT is the owner of this
            website, this company is an Indonesian e-commerce company with
            clients in travel and tourism that will continue to develop this
            site with the additional features to provide convenience in the
            reservation process and the newest service to meet the needs of its
            customers.
            {/* </p> */}
          </div>
        </div>
      </section>
      {/* End Site Management */}
    </div>
  );
}

export default AboutUsPage;
