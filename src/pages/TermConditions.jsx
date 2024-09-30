import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollTopButtonComponent from "../components/ScrollTopButtonComponent";

const TermConditions = () => {
  const [activeMenu, setActiveMenu] = useState("Scope of Our Services");

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
          <h1 className="page-banner_title fade-in-top">Term and Conditions</h1>
          <div className="destination-content-one_text mt-4 fade-in-top">
            <p>
            Follow our guide for a quick and easy booking process.
            </p>
          </div>
          {/* <FormFastboatComponent /> */}
        </div>
      </section>
      {/* End Page Banner */}

      <section className="term-condition-page">
        <div className="row clearfix col-lg-12 col-md-12 ">
          {/* Menu Page */}

          <div className="term-condition-page_menu col-lg-3 ">
            <h3 className="mb-2 mt-3">Navigation</h3>
            <h4
              className={
                activeMenu === "Scope of Our Services" ? "active-menu" : ""
              }
              onClick={() => handleMenuClick("Scope of Our Services")}
            >
              <span></span>
              Scope of Our Services
            </h4>
            <h4
              className={activeMenu === "Applicability" ? "active-menu" : ""}
              onClick={() => handleMenuClick("Applicability")}
            >
              Applicability
            </h4>
            <h4
              className={activeMenu === "Use of The Site" ? "active-menu" : ""}
              onClick={() => handleMenuClick("Use of The Site")}
            >
              Use of The Site
            </h4>
            <h4
              className={activeMenu === "Site Content" ? "active-menu" : ""}
              onClick={() => handleMenuClick("Site Content")}
            >
              Site Content
            </h4>
            <h4
              className={activeMenu === "Privacy" ? "active-menu" : ""}
              onClick={() => handleMenuClick("Privacy")}
            >
              Privacy
            </h4>
            <h4
              className={activeMenu === "Fares" ? "active-menu" : ""}
              onClick={() => handleMenuClick("Fares")}
            >
              Fares
            </h4>
            <h4
              className={
                activeMenu === "Payment and Currency" ? "active-menu" : ""
              }
              onClick={() => handleMenuClick("Payment and Currency")}
            >
              Payment and Currency
            </h4>
            <h4
              className={
                activeMenu === "Tikets/Voucher/Proof of Payment"
                  ? "active-menu"
                  : ""
              }
              onClick={() => handleMenuClick("Tikets/Voucher/Proof of Payment")}
            >
              Tikets/ Voucher/ Proof of Payment
            </h4>
            <h4
              className={
                activeMenu === "Booking Conditions, Special Needs"
                  ? "active-menu"
                  : ""
              }
              onClick={() =>
                handleMenuClick("Booking Conditions, Special Needs")
              }
            >
              Booking Conditions, Special Needs
            </h4>
            <h4
              className={
                activeMenu === "Schedules, Cancellation" ? "active-menu" : ""
              }
              onClick={() => handleMenuClick("Schedules, Cancellation")}
            >
              Schedules, Cancellation
            </h4>
            <h4
              className={activeMenu === "Insurance" ? "active-menu" : ""}
              onClick={() => handleMenuClick("Insurance")}
            >
              Insurance
            </h4>
            <h4
              className={
                activeMenu === "Further Correspondence" ? "active-menu" : ""
              }
              onClick={() => handleMenuClick("Further Correspondence")}
            >
              Further Correspondence
            </h4>
            <h4
              className={
                activeMenu === "Legislation and Courts of Jurisdiction"
                  ? "active-menu"
                  : ""
              }
              onClick={() =>
                handleMenuClick("Legislation and Courts of Jurisdiction")
              }
            >
              Legislation and Courts of Jurisdiction
            </h4>
            <h4
              className={
                activeMenu === "Modification and Waiver" ? "active-menu" : ""
              }
              onClick={() => handleMenuClick("Modification and Waiver")}
            >
              Modification and Waiver
            </h4>
          </div>
          {/* End Menu Page */}

          {/* Page Scope of Our Services */}
          <div
            className={`term-condition-page_text ${
              activeMenu === "Scope of Our Services" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Scope of Our Services</h4>
            <ul className="custom-list_term">
              <li className="mb-3">
                Through this website we (GiliTransfers.com) provide an online
                platform through which visitors to the website can make
                reservation for fast boats tickets, hotels, private
                transportations, and activities within Bali, Lombok, Gili
                Islands, Nusa Lembongan, and Nusa Penida. From the point at
                which you make your reservation, we act solely as an
                intermediatery between you and the transportation / service
                provider, transmitting the details of your reservation to the
                relevant provider and sending you a confirmation email for and
                behalf of the provider.
              </li>
              <li>
                <b>Limitation of Liability:</b> We act as an intermediatery only
                in respect of all reservations made on this site. We have
                entered into contracts with the service providers mentioned in
                this website. These contracts ensure that the service providers
                will responsible in the best possible way towards our customers.
                This means that in case there is a problem with customer’s
                reservations, e.g. overbooking, mechanical problem, force
                majeure, or delay, the service provider will seek to resolve the
                situation to meet customer’s satisfaction, e.g. arranging
                another transportation / service from other provider to meet the
                need of the passengers.
                <p className="mt-3">
                  We shall have no responsibility for, and not liable for, the
                  misrepresentations, breaches of contracts, breaches of
                  statutory duty of any providers whose product and services are
                  sold through us, unless otherwise specified. We shall not
                  responsible for any unlikely cases due to providers fault or
                  failure (including their employee or agents), e.g. suffering
                  personal injury, illness, or death. Although we will use
                  reasonable skill and care in performing the information on
                  this website based on the information provided to us by the
                  transportation / accommodation providers, we are not conducted
                  any quality or other checks on the transportation /
                  accommodation providers. Any claims or complaints related to
                  the trip and service should be made directly with the
                  transportation / accommodation provider.In the event of any
                  claims or complaints please also contact us. This is very
                  important to us to find any possibility of case solving
                  improve our services in future.
                </p>
                <p>
                  We will not verify if, and cannot guarantee that, all
                  information is accurate, complete or correct compared with the
                  actual service, nor we can be held responsible for any errors
                  and interruptions (whether due to any (temporary and / or
                  partial) breakdown, repair, upgrade, or maintenance of our
                  website), inaccurate, or misleading.
                </p>
                <p>
                  Whether you, or any of the people that you are booking on
                  behalf of, are in breach of any of the provisions of these
                  Terms or contravention of any laws or rights of a third party,
                  we reserve the right to cancel your reservation without refund
                  or compensation in any way.
                </p>
              </li>
            </ul>
          </div>
          {/* End Page Scope of Our Services */}

          {/* Page Applicability */}
          <div
            className={`term-condition-page_text ${
              activeMenu === "Applicability" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Applicability</h4>
            <ul className="custom-list_term">
              <li>
                <b>General:</b> These Terms and Conditions apply to the
                reservations through this website to any liability we may have
                in relation.
              </li>
              <li className="mt-3">
                <b>Terms and Conditions Prevail:</b> Except as provided in these
                Terms and Conditions, in the event of inconsistency between
                these Terms and Conditions and our Conditions of Contract or any
                other regulations we may have dealing with particular subjects,
                these Terms and Conditions shall prevail.
              </li>
              <li className="mt-3">
                <b>Language:</b> The language of these Terms and Conditions is
                English and even though there may be translations of these and
                Conditions in other languages, English shall be the sole
                language used in the interpretation of these Terms and
                Conditions.
              </li>
            </ul>
          </div>
          {/* End Page Applicability */}

          {/* Page Use of The Site */}
          <div
            className={`term-condition-page_text ${
              activeMenu === "Use of The Site" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Use of The Site</h4>
            <p className="lh-base">
              You may only use the Site (GiliTransfers.com) to make legitimate
              enquiries or bookings and you hereby undertake not to make any
              speculative, false or fraudulent bookings or any reservations in
              anticipation of demand. You undertake that the payment details you
              provide us with in making a reservation are fully correct. You
              also undertake to provide correct and accurate email, postal
              and/or other contact details to us and acknowledge that we may use
              these details to contact you in the event that this should prove
              necessary.
            </p>
          </div>
          {/* End Page Use of The Site */}

          {/* Page Site Content */}
          <div
            className={`term-condition-page_text ${
              activeMenu === "Site Content" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Site Content</h4>
            <p className="lh-base">
              We reserve the right, in its sole discretion, to modify, suspend,
              or terminate the Site and/or any portion of thereof, including any
              service or product available through the Site, and/or your use of
              the Site, or any portion thereof, at any time for any reason with
              or without notice to you.
            </p>
          </div>
          {/* End Page Site Content */}

          {/* Page Privacy */}
          <div
            className={`term-condition-page_text ${
              activeMenu === "Privacy" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Privacy</h4>
            <p className="lh-base">
              GiliTransfers privacy policy is available for your review at here.
              You consent to the information practices and disclosures set forth
              in that policy, and agree that those practices are reasonable.
            </p>
          </div>
          {/* End Page Privacy */}

          {/* Page Fares */}
          <div
            className={`term-condition-page_text ${
              activeMenu === "Fares" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Fares</h4>
            <ul className="custom-list_term">
              <li>
                <b>Applicable Fares:</b> Applicable fares are those published by
                us or on our behalf, whether electronically or by way of other
                medium. Fares include administration fees, service charges and
                other charges unless otherwise specifically stated by us.
              </li>
              <li className="mt-3">
                <b>Additional Charges:</b> Please note that all prices on the
                site are for the mentioned services with mentioned limitations.
                If an additional charge due should be applied, we will inform
                you in advance and ask for your agreement before we set a valid
                reservation.
              </li>
            </ul>
          </div>
          {/* End Page Fares */}

          {/* Page Payment and Currency */}
          <div
            className={`term-condition-page_text ${
              activeMenu === "Payment and Currency" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Payment and Currency</h4>
            <ul className="custom-list_term">
              <li>
                <b>Purchaser Conditions</b>: In order to make a booking you must
                be over 18 years old and have the full legal capacity to make
                the transaction (or have the authorization from your legal
                guardian). You undertake that the credit or debit card you are
                using is your own and that there are sufficient funds to cover
                the cost of the transaction. You accept financial responsibility
                for all transactions made under your name or account. We reserve
                the right not to accept certain credit cards. We may add or
                remove other payment methods at its discretion.
              </li>
              <li className="mt-3">
                <b>Currency Conversion:</b> All transactions are based on
                Indonesian Rupiah (IDR). For convenience purpose, we provide
                currency converter on our reservation form system. The currency
                conversion rate is determined by us. Your bank may impose
                additional fees on the transaction, over which we have no
                control. Please note that exchange rates fluctuate daily.
              </li>
              <li className="mt-3">
                <b>Payment:</b> Unless otherwise specified, fares must be paid
                in full when a booking is made. In the event that the fare has
                not been paid in full for any reason whatsoever, we reserve the
                right to cancel the booking prior to check-in and/or to disallow
                you to board the boat.
              </li>
            </ul>
          </div>
          {/* End Page Payment and Currency */}

          {/* Page Tikets/Voucher/Proof of Payment */}
          <div
            className={`term-condition-page_text ${
              activeMenu === "Tikets/Voucher/Proof of Payment" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Tikets/ Voucher/ Proof of Payment</h4>
            <ul className="custom-list_term">
              <li>
                <b>Evidence Of Contract:</b> The Itinerary / Voucher is primary
                evidence of the contract for service between passenger and us.
                The Itinerary / voucher, these Terms and Conditions and our
                Conditions of Contract (including applicable Tariffs) together
                constitute the terms and conditions of the contract of service
                between you and us.
              </li>
              <li className="mt-3">
                <b>Transferability:</b> The contract for carriage is only
                transferable as provided in these Terms and Conditions and our
                Conditions of Contract.
              </li>
              <li className="mt-3">
                <b>Validity:</b> The Itinerary / Voucher is only valid for the
                Passenger named and the trip specified therein.
              </li>
              <li className="mt-3">
                <b>Identity:</b> Unless otherwise specified, the service
                providers may only provide carriage only to the Passenger named
                in the Itinerary or Electronic Ticket. You will be required to
                produce appropriate identification at check-in.
              </li>
            </ul>
          </div>
          {/* End Page Tikets/Voucher/Proof of Payment */}

          {/* Page Booking Conditions, Special Needs */}
          <div
            className={`term-condition-page_text ${
              activeMenu === "Booking Conditions, Special Needs" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Booking Conditions, Special Needs</h4>
            <ul className="custom-list_term">
              <li>
                By making a reservation on our Site, you accept and agree to the
                relevant transportation booking conditions, including
                cancellation and no-show policies applicable to that booking,
                and to any additional (delivery) terms and conditions of the
                transport providers that may apply to your reservation or during
                your trip, including for services rendered and/or products
                offered by the providers. The link to general Terms of Carriage
                of each fast boat provider is made available on the Site at the
                page related to the provider.
              </li>
              <li className="mt-3">
                <b>Special Needs:</b> Please inform us / our staff before you
                make reservation related to the passengers with reduced mobility
                or have problem with medical condition. Pregnant women or people
                with heart or back problems are restricted for this trip. If on
                departure time we have judgment that the passenger is not fit
                for the trip, we will cancel the reservation without any refund,
                unless otherwise is specified.
              </li>
            </ul>
          </div>
          {/* End Page Booking Conditions, Special Needs */}

          {/* Page Schedules, Cancellation */}
          <div
            className={`term-condition-page_text ${
              activeMenu === "Schedules, Cancellation" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Schedules, Cancellation</h4>
            <ul className="custom-list_term">
              <li>
                <b>Cancellation, Changes of Schedules From Us:</b> At any time
                after a booking has been made we may change our schedules and/or
                cancel, terminate, divert, postpone reschedule or delay any trip
                where we reasonably consider this to be justified by
                circumstances beyond our control or for reasons of safety or
                commercial reasons. In the event of such trip cancellation, we
                shall at our option, either:
                <ul className="mt-3 m-3">
                  <li>
                  Carry you at the other opportunity on another of scheduled
                  services of same transport provider on which space is
                  available without additional charge; or
                  </li>
                  <li className="mt-3">
                  Carry you at the boat of other provider with adjusted
                  charge; or
                  </li>
                  <li className="mt-3">
                  You may choose to travel at another time with our service
                  without additional charge, or
                  </li>
                  <li className="mt-3">
                  You may request for the refund without no charge except all
                  fees required to make refund
                  </li>
                </ul>
                {/* <p className="">
                  - Carry you at the other opportunity on another of scheduled
                  services of same transport provider on which space is
                  available without additional charge; or
                </p>
                <p className=" ">
                  - Carry you at the boat of other provider with adjusted
                  charge; or
                </p>
                <p className=" ">
                  - You may choose to travel at another time with our service
                  without additional charge, or
                </p>
                <p className="">
                  - You may request for the refund without no charge except all
                  fees required to make refund
                </p> */}
              </li>
              <li className="mt-3">
                <b>Fast Boat / Land Shuttle Cancellation by Passenger</b>: The
                cancellation terms may different for each service provider. We
                will endeavor to make best result on the customer side in case
                of cancellation. All fees required to make refund (if any)
                should be passenger’s mandatory.
              </li>
              <li className="mt-3">
                <b>Hotel Cancellation by Passenger:</b> You may refer to each
                hotel’s cancellation terms. These terms may be stated at hotel’s
                website or the voucher.
              </li>
              <h5 className="mb-3 mt-3">Note :</h5>
              <p>
                - The cancellation until 2 weeks prior to departure will no
                charge.
              </p>
              <p>
                - Between 2 weeks and 1 week prior to departure, 50% of the
                ticket amount will be charged.
              </p>
              <p>
                - Between 1 week to 48 hours prior to departure, 75% of the
                ticket amount will be charged.
              </p>
              <p>
                - 48 hours prior to departure or no show full amount charge.
              </p>
              {/* <ul className="custom-list_term">
                <li>
                - The cancellation until 2 weeks prior to departure will no charge.
                </li>
                <li className="mt-3">
                  <b>Fast Boat / Land Shuttle Cancellation by Passenger</b>: The
                  cancellation terms may different for each service provider. We
                  will endeavor to make best result on the customer side in case
                  of cancellation. All fees required to make refund (if any)
                  should be passenger’s mandatory.
                </li>
                <li className="mt-3">
                  <b>Hotel Cancellation by Passenger:</b> You may refer to each
                  hotel’s cancellation terms. These terms may be stated at
                  hotel’s website or the voucher.
                </li>
              </ul> */}
            </ul>
          </div>
          {/* End Page Schedules, Cancellation */}

          {/* Page Insurance */}
          <div
            className={`term-condition-page_text ${
              activeMenu === "Insurance" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Insurance</h4>
            <p className="lh-base">
              Insurance Policy: We do not provide any insurance for our
              customers who made reservation through us. Some service providers
              may provide limited insurance for passengers.
            </p>
          </div>
          {/* End Page Insurance */}

          {/* Page Further Correspondence */}
          <div
            className={`term-condition-page_text ${
              activeMenu === "Further Correspondence" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Further Correspondence</h4>
            <p className="lh-base">
              By completing a booking, you agree to receive an email which we
              may send you shortly prior to your arrival date, giving you
              information relevant to your booking. Other than the email
              correspondence confirming your booking, relevant booking
              modifications or cancellation emails, including reminder emails in
              instances where you have not finalized a booking, communications
              initiated from us or the transport providers regarding your
              booking, guest review invitations, and the emails for which you
              may have actively opted in, we shall not send you any further
              (solicited or unsolicited) notices, emails or correspondence,
              unless you specifically agree otherwise.
            </p>
          </div>
          {/* End Page Further Correspondence */}

          {/* Page Legislation and Courts of Jurisdiction */}
          <div
            className={`term-condition-page_text ${
              activeMenu === "Legislation and Courts of Jurisdiction"
                ? "active"
                : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Legislation and Courts of Jurisdiction</h4>
            <p className="lh-base">
              This agreement will be governed by law of Republik Indonesia and
              any disputes will be dealt with by the courts in Republik
              Indonesia.
            </p>
          </div>
          {/* End Page Legislation and Courts of Jurisdiction */}

          {/* Page Modification and Waiver */}
          <div
            className={`term-condition-page_text ${
              activeMenu === "Modification and Waiver" ? "active" : ""
            } col-lg-9 border-start mb-4`}
          >
            <h4 className="mb-3">Modification and Waiver</h4>
            <p className="lh-base">
              None of our agents, employees nor representatives has authority to
              alter, modify or waive any provisions of these Terms and
              Conditions.
            </p>
          </div>
          {/* End Page Modification and Waiver */}
        </div>
        {/* Scroll Button */}
        <ScrollTopButtonComponent />
        {/* End Scroll Button */}
      </section>
    </div>
  );
};

export default TermConditions;
