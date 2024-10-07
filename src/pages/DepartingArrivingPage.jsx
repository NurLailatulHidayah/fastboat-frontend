import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DepartingArrivingPage = () => {
  const [activeMenu, setActiveMenu] = useState("From Bali");

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
          <h1 className="page-banner_title fade-in-top">Departing and Arriving</h1>
          <div className="destination-content-one_text mt-4 fade-in-top">
            <p>
            Follow our guide for a quick and easy booking process.
            </p>
          </div>
          {/* <FormFastboatComponent /> */}
        </div>
      </section>
      {/* End Page Banner */}
      <section className="departing-page">
        <div className="row clearfix col-lg-12 col-md-12 ">
          <div className="departing-page_menu col-lg-3">
          <h3 className="mb-2 mt-3">Navigation</h3>
            <h4
              className={activeMenu === "From Bali" ? "active-menu" : ""}
              onClick={() => handleMenuClick("From Bali")}
            >
              From Bali
            </h4>
            <h4
              className={activeMenu === "From Gili Island" ? "active-menu" : ""}
              onClick={() => handleMenuClick("From Gili Island")}
            >
              From Gili Island
            </h4>
            <h4
              className={activeMenu === "From Lombok" ? "active-menu" : ""}
              onClick={() => handleMenuClick("From Lombok")}
            >
              From Lombok
            </h4>
            <h4
              className={
                activeMenu === "From Nusa Lembongan" ? "active-menu" : ""
              }
              onClick={() => handleMenuClick("From Nusa Lembongan")}
            >
              From Nusa Lembongan
            </h4>
          </div>
          {/* Page Bali */}
          <div
            className={`departing-page_text ${
              activeMenu === "From Bali" ? "active" : ""
            } col-lg-9 border-start mb-4 `}
          >
            <h4 className=" p-2">Departing From Bali</h4>
            <p className="lh-lg p-2">
              If your ticket includes pickup service at your hotel in Bali,
              please wait for the driver at the hotel lobby. This shuttle
              service is sharing basis. The driver may leave you behind if he
              cannot find you at the hotel without any information. If you do
              not see the driver until specified time, please contact us by
              phone / text / email immediately. If you do not have any
              communication device you may ask for help to the hotel officer. If
              you do not want to use pickup service and have your own
              transportation arranged, please be on the harbor at check in time
              specified (30 minutes prior to scheduled depart time). Do check in
              at the counter. The officer will replace your electronic itinerary
              (e-ticket) with the official voucher. Keep the voucher during your
              transfer. Luggage will be loaded at the boat before passengers. If
              you have any luggage, please register it to the porters.
            </p>
            <h4 className="p-2">Arriving From Bali</h4>
            <p className="lh-lg p-2">
              Wait until the fast boat fully docked at the harbor. Leave the
              fast boat carefully. Grab the hand grip firmly and watch your
              steps. If you have any luggage, please wait until the porter
              unloaded your luggage from the boat. If you want to use the
              shuttle service provided, please follow the instruction of the
              shuttle officer. Prepare the voucher in case the officer asks for
              it. Confirm the officer before you board on the car to make sure
              the car will drop you off at your destination.
            </p>
          </div>
          {/* End Page Bali */}

          {/* Page Gili Island */}
          <div
            className={`departing-page_text ${
              activeMenu === "From Gili Island" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="p-2">Departing From Gili Island</h4>
            <p className="lh-base p-2">
              No pickup service in Gili Island. The harbor can be reached by
              walk from most hotels, or you can use Cidomo (horse cart) to reach
              the harbor. Please be on the harbor 30 - 45 minutes prior to
              depart time. Do check in at the counter. The officer will replace
              your electronic itinerary (e-ticket) with the official voucher. If
              you want to use drop off service upon arrival in Bali, please
              inform the officer in Gili about your destination. This is very
              important as the shuttle cars will be organized once the boat
              leaves the island. The voucher may contain your drop off
              destination. Keep the voucher in case you need to show it to the
              shuttle officer in Bali. Luggage will be loaded at the boat before
              passengers. If you have any luggage, please register it to the
              porters.
            </p>
            <h4 className="p-2">Arriving From Gili Island</h4>
            <p className="lh-base p-2">
              Wait until the fast boat fully docked at the harbor. Leave the
              fast boat carefully. Grab the hand grip firmly and watch your
              steps. If you have any luggage, please wait until the porter
              unloaded your luggage from the boat. This trip doesn't include
              drop off service to your hotel in Gili. Most hotels can be reached
              from the harbor by walk, or you can use Cidomo (horse cart) with
              your own expense.
            </p>
          </div>
          {/* End Page Gili Island */}

          {/* Page Lombok */}
          <div
            className={`departing-page_text ${
              activeMenu === "From Lombok" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="p-2">Departing From Lombok</h4>
            <p className="lh-base p-2">
              There is no pickup service in Lombok. Please be on the harbor
              about 30 - 45 minutes prior to depart time. Do check in at the
              counter. The officer will replace your electronic itinerary
              (e-ticket) with the official voucher. If you want to use drop off
              service upon arrival in Bali, please inform the officer in Lombok
              about your destination. This is very important as the shuttle cars
              will be organized once the boat leaves the island. The voucher may
              contain your drop off destination. Keep the voucher in case you
              need to show it to the shuttle officer in Bali. Luggage will be
              loaded at the boat before passengers. If you have any luggage,
              please register it to the porters.
            </p>
            <h4 className="p-2">Arriving From Lombok</h4>
            <p className="lh-base p-2">
              Wait until the fast boat fully docked at the harbor. Leave the
              fast boat carefully. Grab the hand grip firmly and watch your
              steps. If you have any luggage, please wait until the porter
              unloaded your luggage from the boat. If the transfer includes drop
              off service, you may follow the instruction of fast boat's
              officer, or you may find the driver waiting for you with name sign
              in hand.
            </p>
          </div>
          {/* End Page Lombok */}

          {/* Page Nusa Lembongan */}
          <div
            className={`departing-page_text ${
              activeMenu === "From Nusa Lembongan" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="p-2">Departing From Nusa Lembongan</h4>
            <p className="lh-base p-2">
              If your transfer includes pickup at your hotel in Nusa Lembongan,
              please wait for fast boat's officer at hotel lobby. If you do not
              see the officer until the time specified, please contact us
              immediately by phone / text / email. If you do not have any
              communication device, you may ask for help to the hotel officer.
              If you do not want to use the Pickup Service, Please be on the
              harbor 30 - 45 minutes prior to depart time. Do check in at the
              counter. The officer will replace your electronic itinerary
              (e-ticket) with the official voucher. If you want to use drop off
              service upon arrival in Bali, please inform the officer in Nusa
              Lembongan about your destination. This is very important as the
              shuttle cars will be organized once the boat leaves the island.
              The voucher may contain your drop off destination. Keep the
              voucher in case you need to show it to the shuttle officer in
              Bali. Luggage will be loaded at the boat before passengers. If you
              have any luggage, please register it to the porters.
            </p>
            <h4 className="p-2">Arriving From Nusa Lembongan</h4>
            <p className="lh-base p-2">
              Wait until the fast boat fully docked at the harbor. Leave the
              fast boat carefully. Grab the hand grip firmly and watch your
              steps. If you have any luggage, please wait until the porter
              unloaded your luggage from the boat.
            </p>
          </div>
          {/* End Page Nusa Lembongan */}
        </div>
      </section>
    </div>
  );
};

export default DepartingArrivingPage;
