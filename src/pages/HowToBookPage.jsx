import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import FormFastboatComponent from "../components/FormFastboatComponent";
import ScrollTopButtonComponent from "../components/ScrollTopButtonComponent";

const HowToBookPage = () => {
  const [activeMenu, setActiveMenu] = useState("Fast Boats");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div>
      {/* Page Banner */}
      <section
        className="page-banner"
        style={{ backgroundImage: "url(/image/main-slider/1.jpg)" }}
      >
        <div className="auto-container">
          <h1 className="page-banner_title fade-in-top">How To Book</h1>
          <div className="destination-content-one_text mt-4 fade-in-top">
            <p>
            Follow our guide for a quick and easy booking process.
            </p>
          </div>
          {/* <FormFastboatComponent /> */}
        </div>
      </section>
      {/* End Page Banner */}

      {/* Scroll Button */}
      <ScrollTopButtonComponent />
      {/* End Scroll Button */}

      <section className="how-to-book-page">
        <div className="row clearfix col-lg-12 col-md-12 ">
          {/* Menu Page */}

          <div className="how-to-book-page_menu col-lg-3 p-4">
            <div className="menu-items border rounded ">
              <h3 className="mb-2 mt-3">Navigation</h3>
              <h4
                className={activeMenu === "Fast Boats" ? "active-menu" : ""}
                onClick={() => handleMenuClick("Fast Boats")}
              >
                <span></span>
                Fast Boats
              </h4>
              <h4
                className={activeMenu === "Tours" ? "active-menu" : ""}
                onClick={() => handleMenuClick("Tours")}
              >
                Tours
              </h4>
              <h4
                className={activeMenu === "Car Transfers" ? "active-menu" : ""}
                onClick={() => handleMenuClick("Car Transfers")}
              >
                Car Transfers
              </h4>
              <h4
                className={activeMenu === "Yachts" ? "active-menu" : ""}
                onClick={() => handleMenuClick("Yachts")}
              >
                Yachts
              </h4>
            </div>
            <div className="services border rounded p-2 mt-3">
              <h5 className="">Gilitransfers services include :</h5>
              <ul className="services-list">
                <li>
                  Reservation for fast boat tickets among Bali - Lombok - Gili
                  Islands - Nusa Lembongan - Nusa Penida
                </li>
                <li>
                  Reservation for tours among Bali - Lombok - Gili Islands -
                  Nusa Lembongan - Nusa Penida
                </li>
                <li>
                  Reservation for Cruise, Activities and Daily Tour to Nusa
                  Penida and Nusa Lembongan
                </li>
                <li>
                  Reservation for Private Car Transfers for Bali and Lombok area
                </li>
              </ul>
            </div>
          </div>
          {/* End Menu Page */}

          {/* Page Fast Boats */}
          <div
            className={`how-to-book-page_text ${
              activeMenu === "Fast Boats" ? "active" : ""
            } col-lg-9 border-start mb-4 mt-3`}
          >
            <h4 className="mb-3">How To Book Fast Boats Tickets</h4>
            <ol className=" list-group-numbered">
              <li className="list-group-item mb-3 ">
                <p>
                  Click the fast boat maps button if you don't know the fast
                  boat route. After that, a map of the fast boat's route will
                  appear.
                </p>
                <div className="col-lg-11 text-center">
                  <img src="/image/how-to-book/fb_1.png" alt="" />
                </div>
              </li>
              <li className="list-group-item mb-3">
                <p>
                  Choose the Fast Boats tab on the Booking form. For a one-way
                  ticket, please select ONE WAY TAB, and for a return ticket,
                  pick THE ROUND TRIP. Fill in your itinerary (Departure From,
                  Destination, Number of Passengers, Departure Date and
                  Currency).
                </p>
                <div className="col-lg-11">
                  <img src="/image/how-to-book/fb_2_revisi.png" alt="" />
                </div>
              </li>
              <li className="list-group-item mb-3">
                <p>
                  Choose the boat(s) you want to use from the boat list. If you
                  choose one way at the beginning, after selecting the boat
                  you'll be directed to the fill data page. But if you select
                  the round trip, you will be taken to the boat selection page
                  for the return trip and then directed to the fill data page.
                </p>
                <div className="col-lg-11">
                  <img src="/image/how-to-book/fb_3_revisi.png" alt="" />
                </div>
                <div className="col-lg-11 mt-4">
                  <img src="/image/how-to-book/fb_4_revisi.png" alt="" />
                </div>
              </li>
              <li className="list-group-item mb-3">
                <p>
                  Fill the detail of contact and passengers. If you use a boat
                  with shuttle service, please fill the pickup detail (your
                  hotel address). Please note : This shuttle service is shared
                  with the other passengers, not for private. Please re-check
                  your booking data before continues to payment process. If the
                  datas are correct. click continue to pay button to make
                  paymen.
                </p>
                <div className="col-lg-11">
                  <img src="/image/how-to-book/fb_5_revisi.png" alt="" />
                </div>
              </li>
              <li className="list-group-item mb-3">
                <p>
                  On the payment page, check your order data again. you can
                  continue to pay for the reservation with available payment
                  methods. If you don't have an account to make the payment with
                  available payment channels, you can contact us via email,
                  WhatsApp or online chat.
                </p>
                <div className="col-lg-11">
                  <img src="/image/how-to-book/fb_6.png" alt="" />
                </div>
              </li>
              <li className="list-group-item">
                <p>
                  After the payment is complete, a ticket and payment receipt
                  will be sent to your email. Please check your spam inbox or
                  folder. You may not be asked for the printed ticket version at
                  check-in, but we recommend that you bring the printed ticket
                  version just in case.
                </p>
              </li>
            </ol>
            
          </div>
          {/* End Page Fast Boats */}

          {/* Page Tours */}
          <div
            className={`how-to-book-page_text ${
              activeMenu === "Tours" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">How To Book Tours Tickets</h4>
            <p className="lh-base">
              <a
                href="https://wa.me/6281353304990?text=May%20I%20ask%20about%20the%20tour%2Factivities%C2%A0packages%3F"
                className="font-weight-normal text-info"
                title="Contact Us"
                target="_blank"
              >
                {" "}
                Contact Us
              </a>
            </p>
          </div>
          {/* End Page Tours */}

          {/* Page Car Transfers */}
          <div
            className={`how-to-book-page_text ${
              activeMenu === "Car Transfers" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">How To Book Car Transfers Tickets</h4>
            <p className="lh-base">
              <a
                href="https://wa.me/6281353304990?text=May%20I%20ask%20about%20the%20tour%2Factivities%C2%A0packages%3F"
                className="font-weight-normal text-info"
                title="Contact Us"
                target="_blank"
              >
                {" "}
                Contact Us
              </a>
            </p>
          </div>
          {/* End Page Car Transfers */}

          {/* Page Yachts */}
          <div
            className={`how-to-book-page_text ${
              activeMenu === "Yachts" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">How To Book Yachts Tickets</h4>
            <p className="lh-base">
              <a
                href="https://wa.me/6281353304990?text=May%20I%20ask%20about%20the%20tour%2Factivities%C2%A0packages%3F"
                className="font-weight-normal text-info"
                title="Contact Us"
                target="_blank"
              >
                {" "}
                Contact Us
              </a>
            </p>
          </div>
          {/* End Page Yachts */}
        </div>
        {/* Scroll Button */}
        <ScrollTopButtonComponent />
        {/* End Scroll Button */}
      </section>
    </div>
  );
};

export default HowToBookPage;
