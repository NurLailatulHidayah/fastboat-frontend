import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollTopButtonComponent from "../components/ScrollTopButtonComponent";
// import AccordionComponent from "../components/AccordionComponent";

const FaqPage = () => {
  const [activeMenu, setActiveMenu] = useState("Transfer by Fast Boat");

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
          <h1 className="page-banner_title fade-in-top">
            frequently asked questions
          </h1>
          <div className="destination-content-one_text mt-4 fade-in-top">
            <p>
              Get answers to the most frequently asked questions about our
              services.
            </p>
          </div>
        </div>
      </section>

      {/* End Page Banner */}

      <section className="faq-page">
        <div className="row clearfix col-lg-12 col-md-12 ">
          {/* Menu Page */}

          <div className="faq-page_menu col-lg-3 ">
            <h3 className="mb-2 mt-3">FAQ Topics</h3>
            <h4
              className={
                activeMenu === "Transfer by Fast Boat" ? "active-menu" : ""
              }
              onClick={() => handleMenuClick("Transfer by Fast Boat")}
            >
              <span></span>
              Transfer by Fast Boat
            </h4>
            <h4
              className={
                activeMenu === "Fast Boat Booking, Confirmation, Cancellation"
                  ? "active-menu"
                  : ""
              }
              onClick={() =>
                handleMenuClick("Fast Boat Booking, Confirmation, Cancellation")
              }
            >
              Fast Boat Booking, Confirmation, Cancellation
            </h4>
            <h4
              className={
                activeMenu === "Who run this website?" ? "active-menu" : ""
              }
              onClick={() => handleMenuClick("Who run this website?")}
            >
              Who run this website?
            </h4>
            <h4
              className={
                activeMenu === "What do you do with my personal information?"
                  ? "active-menu"
                  : ""
              }
              onClick={() =>
                handleMenuClick("What do you do with my personal information?")
              }
            >
              What do you do with my personal information?
            </h4>
            <h4
              className={
                activeMenu === "Transfer by Flight" ? "active-menu" : ""
              }
              onClick={() => handleMenuClick("Transfer by Flight")}
            >
              Transfer by Flight
            </h4>
            <h4
              className={activeMenu === "Room Booking" ? "active-menu" : ""}
              onClick={() => handleMenuClick("Room Booking")}
            >
              Room Booking
            </h4>
            <h4
              className={activeMenu === "Payment and Fees" ? "active-menu" : ""}
              onClick={() => handleMenuClick("Payment and Fees")}
            >
              Payment and Fees
            </h4>
            <h4
              className={
                activeMenu === "Why should I book with GiliTransfers.com?"
                  ? "active-menu"
                  : ""
              }
              onClick={() =>
                handleMenuClick("Why should I book with GiliTransfers.com?")
              }
            >
              Why should I book with GiliTransfers.com?
            </h4>
            <h4
              className={
                activeMenu === "How do I know the payment is secure?"
                  ? "active-menu"
                  : ""
              }
              onClick={() =>
                handleMenuClick("How do I know the payment is secure?")
              }
            >
              How do I know the payment is secure?
            </h4>
            <h4
              className={
                activeMenu === "Booking a transfer by flight"
                  ? "active-menu"
                  : ""
              }
              onClick={() => handleMenuClick("Booking a transfer by flight")}
            >
              Booking a transfer by flight
            </h4>
          </div>
          {/* End Menu Page */}

          {/* Page Transfer by Fast Boat */}
          <div
            className={`faq-page_text ${
              activeMenu === "Transfer by Fast Boat" ? "active" : ""
            } col-lg-8 border-start mb-4`}
          >
            <h4 className="mb-3">Transfer by Fast Boat</h4>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item border rounded">
                <h2 className="accordion-header " id="flush-heading01">
                  <button
                    className="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse01"
                    aria-expanded="false"
                    aria-controls="flush-collapse01"
                  >
                    What is fast boat?
                  </button>
                </h2>
                <div
                  id="flush-collapse01"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading01"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Fast boat in this area refers to a medium size, fiber made
                    vessel with capacity of 30 to 200 seats, powered by 800 –
                    2000 HP engines. There is also upper deck where people can
                    sit while enjoying the outdoor scenes and wind instead of
                    sitting on the cushion at lower deck, and also a toilet.Fast
                    boat runs at about 30 knots, giving the transfer time
                    between Bali and Gili/Lombok around 1 hour 30 minutes (fast
                    run, normal condition, via Padangbai harbor) or 2 hours
                    (fast run, normal condition, via Sanur or Serangan harbor).
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading02">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse02"
                    aria-expanded="false"
                    aria-controls="flush-collapse02"
                  >
                    Which boats go to Gili Meno?
                  </button>
                </h2>
                <div
                  id="flush-collapse02"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading02"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Eka Jaya is the only boat which stop at Gili Meno. Almost
                    all fast boats stop at Gili Trawangan, Gili Air, and Lombok.
                    This is because the beach on Gili Meno is a bit shallow that
                    fast boat cannot landed there, and due to lack of visitor
                    amount to Gili Meno. To reach Gili Meno by fast boat,
                    passengers should be transferred by a small hopping boat
                    (either public boat or charter boat) once the fast boat
                    landed and there is an additional price IDR 35.000 for this
                    small hopping boat and pay directly at Gili Meno.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading03">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse03"
                    aria-expanded="false"
                    aria-controls="flush-collapse03"
                  >
                    Which are the most suitable boat and harbor for me?
                  </button>
                </h2>
                <div
                  id="flush-collapse03"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading03"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    It depends on where your hotel location in Bali is and what
                    is your trip preference. If you are staying in South or West
                    Bali then Serangan harbor (Bluewater Express) or Sanur
                    harbor ( Scoot Fast Boat) are the closest land distance, but
                    longer sea trip (about 2 hours 30 minutes). If you are
                    staying in Ubud or South East Bali then departing from
                    Padangbai ( Wahana Gili Ocean, Eka Jaya, Seatech Fast Boat)
                    has closer overland distance and also shorter sea trip
                    (about 1 hour 30 minutes). If you stay in Amed you the most
                    suitable is departing from Amed beach (Freebird Express). If
                    you want to go to Nusa Lembongan and Nusa Penida then you
                    can choose between Sanur, Mertasari, Kusamba, Pemelisan or
                    Tanjung Benoa as your departure port.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading04">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse04"
                    aria-expanded="false"
                    aria-controls="flush-collapse04"
                  >
                    How to get to the harbor from my hotel?
                  </button>
                </h2>
                <div
                  id="flush-collapse04"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading04"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    We provide shuttle service to transfer you between the hotel
                    and the harbor. This shuttle is free for certain areas, or
                    with additional charge if out of coverage areas.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading05">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse05"
                    aria-expanded="false"
                    aria-controls="flush-collapse05"
                  >
                    Do you offer airport transfer?
                  </button>
                </h2>
                <div
                  id="flush-collapse05"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading05"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    We offer the transfer between the airport and fast boat
                    harbor. The airport transfer may free or require additional
                    fee based on the arrival / departure schedule. We will
                    inform you immediately if there any additional fees.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Page Transfer by Fast Boat */}

          {/* Page Fast Boat Booking, Confirmation, Cancellation */}
          <div
            className={`faq-page_text ${
              activeMenu === "Fast Boat Booking, Confirmation, Cancellation"
                ? "active"
                : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Features</h4>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading06">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse06"
                    aria-expanded="false"
                    aria-controls="flush-collapse06"
                  >
                    Which currency is most widely accepted on this tour?
                  </button>
                </h2>
                <div
                  id="flush-collapse06"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading06"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header " id="flush-heading07">
                  <button
                    className="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse07"
                    aria-expanded="false"
                    aria-controls="flush-collapse07"
                  >
                    I'm a solo mytravel, is there a single supplement?
                  </button>
                </h2>
                <div
                  id="flush-collapse07"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading07"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading08">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse08"
                    aria-expanded="false"
                    aria-controls="flush-collapse08"
                  >
                    How do I edit my calendar?
                  </button>
                </h2>
                <div
                  id="flush-collapse08"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading08"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading09">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse09"
                    aria-expanded="false"
                    aria-controls="flush-collapse09"
                  >
                    Should I book pre/post tour accommodation?
                  </button>
                </h2>
                <div
                  id="flush-collapse09"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading09"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading10">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse10"
                    aria-expanded="false"
                    aria-controls="flush-collapse10"
                  >
                    Why was my listing deactivated?
                  </button>
                </h2>
                <div
                  id="flush-collapse10"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading10"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading11">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse11"
                    aria-expanded="false"
                    aria-controls="flush-collapse11"
                  >
                    How do I turn off or delete my listing?
                  </button>
                </h2>
                <div
                  id="flush-collapse11"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading11"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Page Fast Boat Booking, Confirmation, Cancellation */}

          {/* Page Who run this website? */}
          <div
            className={`faq-page_text ${
              activeMenu === "Who run this website?" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Sliders</h4>
            {/* <AccordionComponent /> */}
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading12">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse12"
                    aria-expanded="false"
                    aria-controls="flush-collapse12"
                  >
                    I'm a solo mytravel, is there a single supplement?
                  </button>
                </h2>
                <div
                  id="flush-collapse12"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading12"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header " id="flush-heading13">
                  <button
                    className="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse13"
                    aria-expanded="false"
                    aria-controls="flush-collapse13"
                  >
                    Which currency is most widely accepted on this tour?
                  </button>
                </h2>
                <div
                  id="flush-collapse13"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading13"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading14">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse14"
                    aria-expanded="false"
                    aria-controls="flush-collapse14"
                  >
                    Should I book pre/post tour accommodation?
                  </button>
                </h2>
                <div
                  id="flush-collapse14"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading14"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading15">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse15"
                    aria-expanded="false"
                    aria-controls="flush-collapse15"
                  >
                    How do I edit my calendar?
                  </button>
                </h2>
                <div
                  id="flush-collapse15"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading15"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading16">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse16"
                    aria-expanded="false"
                    aria-controls="flush-collapse16"
                  >
                    Why was my listing deactivated?
                  </button>
                </h2>
                <div
                  id="flush-collapse16"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading16"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading17">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse17"
                    aria-expanded="false"
                    aria-controls="flush-collapse17"
                  >
                    How do I turn off or delete my listing?
                  </button>
                </h2>
                <div
                  id="flush-collapse17"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading17"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Page Who run this website? */}

          {/* Page What do you do with my personal information? */}
          <div
            className={`faq-page_text ${
              activeMenu === "What do you do with my personal information?"
                ? "active"
                : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Manage Listings</h4>
            {/* <AccordionComponent /> */}
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item border rounded">
                <h2 className="accordion-header " id="flush-heading18">
                  <button
                    className="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse18"
                    aria-expanded="false"
                    aria-controls="flush-collapse18"
                  >
                    I'm a solo mytravel, is there a single supplement?
                  </button>
                </h2>
                <div
                  id="flush-collapse18"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading18"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading19">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse19"
                    aria-expanded="false"
                    aria-controls="flush-collapse19"
                  >
                    Which currency is most widely accepted on this tour?
                  </button>
                </h2>
                <div
                  id="flush-collapse19"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading19"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading20">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse20"
                    aria-expanded="false"
                    aria-controls="flush-collapse20"
                  >
                    Should I book pre/post tour accommodation?
                  </button>
                </h2>
                <div
                  id="flush-collapse20"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading20"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading21">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse21"
                    aria-expanded="false"
                    aria-controls="flush-collapse21"
                  >
                    How do I edit my calendar?
                  </button>
                </h2>
                <div
                  id="flush-collapse21"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading21"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading22">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse22"
                    aria-expanded="false"
                    aria-controls="flush-collapse22"
                  >
                    Why was my listing deactivated?
                  </button>
                </h2>
                <div
                  id="flush-collapse22"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading22"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading23">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse23"
                    aria-expanded="false"
                    aria-controls="flush-collapse23"
                  >
                    How do I turn off or delete my listing?
                  </button>
                </h2>
                <div
                  id="flush-collapse23"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading23"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Page What do you do with my personal information? */}

          {/* Page Transfer by Flight */}
          <div
            className={`faq-page_text ${
              activeMenu === "Transfer by Flight" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Address & Map</h4>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item border rounded">
                <h2 className="accordion-header " id="flush-heading24">
                  <button
                    className="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse24"
                    aria-expanded="false"
                    aria-controls="flush-collapse24"
                  >
                    I'm a solo mytravel, is there a single supplement?
                  </button>
                </h2>
                <div
                  id="flush-collapse24"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading24"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading25">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse25"
                    aria-expanded="false"
                    aria-controls="flush-collapse25"
                  >
                    Which currency is most widely accepted on this tour?
                  </button>
                </h2>
                <div
                  id="flush-collapse25"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading25"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading26">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse26"
                    aria-expanded="false"
                    aria-controls="flush-collapse26"
                  >
                    Should I book pre/post tour accommodation?
                  </button>
                </h2>
                <div
                  id="flush-collapse26"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading26"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading27">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse27"
                    aria-expanded="false"
                    aria-controls="flush-collapse27"
                  >
                    How do I edit my calendar?
                  </button>
                </h2>
                <div
                  id="flush-collapse27"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading27"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading28">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse28"
                    aria-expanded="false"
                    aria-controls="flush-collapse28"
                  >
                    Why was my listing deactivated?
                  </button>
                </h2>
                <div
                  id="flush-collapse28"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading28"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading29">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse29"
                    aria-expanded="false"
                    aria-controls="flush-collapse29"
                  >
                    How do I turn off or delete my listing?
                  </button>
                </h2>
                <div
                  id="flush-collapse29"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading29"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Page Transfer by Flight */}

          {/* Page Room Booking */}
          <div
            className={`faq-page_text ${
              activeMenu === "Room Booking" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Reservation Requests</h4>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item border rounded">
                <h2 className="accordion-header " id="flush-heading30">
                  <button
                    className="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse30"
                    aria-expanded="false"
                    aria-controls="flush-collapse30"
                  >
                    I'm a solo mytravel, is there a single supplement?
                  </button>
                </h2>
                <div
                  id="flush-collapse30"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading30"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading31">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse31"
                    aria-expanded="false"
                    aria-controls="flush-collapse31"
                  >
                    Which currency is most widely accepted on this tour?
                  </button>
                </h2>
                <div
                  id="flush-collapse31"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading31"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading32">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse32"
                    aria-expanded="false"
                    aria-controls="flush-collapse32"
                  >
                    Should I book pre/post tour accommodation?
                  </button>
                </h2>
                <div
                  id="flush-collapse32"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading32"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading33">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse33"
                    aria-expanded="false"
                    aria-controls="flush-collapse33"
                  >
                    How do I edit my calendar?
                  </button>
                </h2>
                <div
                  id="flush-collapse33"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading33"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading34">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse34"
                    aria-expanded="false"
                    aria-controls="flush-collapse34"
                  >
                    Why was my listing deactivated?
                  </button>
                </h2>
                <div
                  id="flush-collapse34"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading34"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading35">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse35"
                    aria-expanded="false"
                    aria-controls="flush-collapse35"
                  >
                    How do I turn off or delete my listing?
                  </button>
                </h2>
                <div
                  id="flush-collapse35"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading35"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Page Room Booking */}

          {/* Page Payment and Fees */}
          <div
            className={`faq-page_text ${
              activeMenu === "Payment and Fees" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Your Reservations</h4>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item border rounded">
                <h2 className="accordion-header " id="flush-heading36">
                  <button
                    className="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse36"
                    aria-expanded="false"
                    aria-controls="flush-collapse36"
                  >
                    I'm a solo mytravel, is there a single supplement?
                  </button>
                </h2>
                <div
                  id="flush-collapse36"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading36"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading37">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse37"
                    aria-expanded="false"
                    aria-controls="flush-collapse37"
                  >
                    Which currency is most widely accepted on this tour?
                  </button>
                </h2>
                <div
                  id="flush-collapse37"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading37"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading38">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse38"
                    aria-expanded="false"
                    aria-controls="flush-collapse38"
                  >
                    Should I book pre/post tour accommodation?
                  </button>
                </h2>
                <div
                  id="flush-collapse38"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading38"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading39">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse39"
                    aria-expanded="false"
                    aria-controls="flush-collapse39"
                  >
                    How do I edit my calendar?
                  </button>
                </h2>
                <div
                  id="flush-collapse39"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading39"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading40">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse40"
                    aria-expanded="false"
                    aria-controls="flush-collapse40"
                  >
                    Why was my listing deactivated?
                  </button>
                </h2>
                <div
                  id="flush-collapse40"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading40"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading41">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse41"
                    aria-expanded="false"
                    aria-controls="flush-collapse41"
                  >
                    How do I turn off or delete my listing?
                  </button>
                </h2>
                <div
                  id="flush-collapse41"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading41"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Page Payment and Fees */}

          {/* Page Why should I book with GiliTransfers.com? */}
          <div
            className={`faq-page_text ${
              activeMenu === "Why should I book with GiliTransfers.com?"
                ? "active"
                : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Search Results</h4>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item border rounded">
                <h2 className="accordion-header " id="flush-heading42">
                  <button
                    className="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse42"
                    aria-expanded="false"
                    aria-controls="flush-collapse42"
                  >
                    I'm a solo mytravel, is there a single supplement?
                  </button>
                </h2>
                <div
                  id="flush-collapse42"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading42"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading43">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse43"
                    aria-expanded="false"
                    aria-controls="flush-collapse43"
                  >
                    Which currency is most widely accepted on this tour?
                  </button>
                </h2>
                <div
                  id="flush-collapse43"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading43"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading44">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse44"
                    aria-expanded="false"
                    aria-controls="flush-collapse44"
                  >
                    Should I book pre/post tour accommodation?
                  </button>
                </h2>
                <div
                  id="flush-collapse44"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading44"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading45">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse45"
                    aria-expanded="false"
                    aria-controls="flush-collapse45"
                  >
                    How do I edit my calendar?
                  </button>
                </h2>
                <div
                  id="flush-collapse45"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading45"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading46">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse46"
                    aria-expanded="false"
                    aria-controls="flush-collapse46"
                  >
                    Why was my listing deactivated?
                  </button>
                </h2>
                <div
                  id="flush-collapse46"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading46"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading47">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse47"
                    aria-expanded="false"
                    aria-controls="flush-collapse47"
                  >
                    How do I turn off or delete my listing?
                  </button>
                </h2>
                <div
                  id="flush-collapse47"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading47"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Page Why should I book with GiliTransfers.com? */}

          {/* Page How do I know the payment is secure? */}
          <div
            className={`faq-page_text ${
              activeMenu === "How do I know the payment is secure?"
                ? "active"
                : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Color Schemes</h4>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item border rounded">
                <h2 className="accordion-header " id="flush-heading48">
                  <button
                    className="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse48"
                    aria-expanded="false"
                    aria-controls="flush-collapse48"
                  >
                    I'm a solo mytravel, is there a single supplement?
                  </button>
                </h2>
                <div
                  id="flush-collapse48"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading48"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading49">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse49"
                    aria-expanded="false"
                    aria-controls="flush-collapse49"
                  >
                    Which currency is most widely accepted on this tour?
                  </button>
                </h2>
                <div
                  id="flush-collapse49"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading49"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading50">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse50"
                    aria-expanded="false"
                    aria-controls="flush-collapse50"
                  >
                    Should I book pre/post tour accommodation?
                  </button>
                </h2>
                <div
                  id="flush-collapse50"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading50"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading51">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse51"
                    aria-expanded="false"
                    aria-controls="flush-collapse51"
                  >
                    How do I edit my calendar?
                  </button>
                </h2>
                <div
                  id="flush-collapse51"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading51"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading52">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse52"
                    aria-expanded="false"
                    aria-controls="flush-collapse52"
                  >
                    Why was my listing deactivated?
                  </button>
                </h2>
                <div
                  id="flush-collapse52"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading52"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading53">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse53"
                    aria-expanded="false"
                    aria-controls="flush-collapse53"
                  >
                    How do I turn off or delete my listing?
                  </button>
                </h2>
                <div
                  id="flush-collapse53"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading53"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Page How do I know the payment is secure? */}

          {/* Page Booking a transfer by flight */}
          <div
            className={`faq-page_text ${
              activeMenu === "Booking a transfer by flight" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Responsiveness</h4>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item border rounded">
                <h2 className="accordion-header " id="flush-heading54">
                  <button
                    className="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse54"
                    aria-expanded="false"
                    aria-controls="flush-collapse54"
                  >
                    I'm a solo mytravel, is there a single supplement?
                  </button>
                </h2>
                <div
                  id="flush-collapse54"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading54"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading55">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse55"
                    aria-expanded="false"
                    aria-controls="flush-collapse55"
                  >
                    Which currency is most widely accepted on this tour?
                  </button>
                </h2>
                <div
                  id="flush-collapse55"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading55"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading56">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse56"
                    aria-expanded="false"
                    aria-controls="flush-collapse56"
                  >
                    Should I book pre/post tour accommodation?
                  </button>
                </h2>
                <div
                  id="flush-collapse56"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading56"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading57">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse57"
                    aria-expanded="false"
                    aria-controls="flush-collapse57"
                  >
                    How do I edit my calendar?
                  </button>
                </h2>
                <div
                  id="flush-collapse57"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading57"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading58">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse58"
                    aria-expanded="false"
                    aria-controls="flush-collapse58"
                  >
                    Why was my listing deactivated?
                  </button>
                </h2>
                <div
                  id="flush-collapse58"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading58"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
              <div className="accordion-item border rounded">
                <h2 className="accordion-header" id="flush-heading59">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse59"
                    aria-expanded="false"
                    aria-controls="flush-collapse59"
                  >
                    How do I turn off or delete my listing?
                  </button>
                </h2>
                <div
                  id="flush-collapse59"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-heading59"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Page Booking a transfer by flight */}
        </div>
        {/* Scroll Button */}
        <ScrollTopButtonComponent />
        {/* End Scroll Button */}
      </section>
    </div>
  );
};

export default FaqPage;
