import React from 'react';

const FooterComponent = () => {
  return (
    <div>
      <footer className="footer bg-light text-dark py-4 ">
        <div className="container">
          <div className="row">
            <div className="footer-address col-lg-3 col-md-6 mb-4">
              <div className="logo">
                <a href="/" className="navbar-brand">
                  <img
                    src="navbar-logo.png"
                    alt="Logo"
                    className="img-fluid"
                    style={{ width: "225px", height: "auto" }}
                  />
                </a>
              </div>
              <p>
                Online booking for fast boats, yacht charters, day tours, and
                private transfers among Bali – Lombok – Gili Air – Gili Meno –
                Gili Trawangan – Nusa Lembongan – Nusa Penida.
              </p>
              <h5 className="mb-3">Office</h5>
              <p>
                Jl. Sunset Road No. 28, Kel. Seminyak, Kec. Kuta, Kab. Badung,
                Kuta Selatan, Bali, Indonesia.
              </p>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mt-3">
              <h5 className="mb-3">Information</h5>
              <ul className="menu-items list-unstyled">
                <li className="mb-2">
                  <a href="/about">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="/how-to-book">How To Book</a>
                </li>
                <li className="mb-2">
                  <a href="/term-and-conditions">Terms and Conditions</a>
                </li>
                <li className="mb-2">
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li className="mb-2">
                  <a href="/departing-arriving">Departing and Arriving</a>
                </li>
                <li className="mb-2">
                  <a href="/frequently-asked-questions">Faq</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mt-3">
              <h5 className="mb-3">Islands</h5>
              <ul className="menu-items list-unstyled">
                <li className="mb-2">
                  <a href="#">Bali</a>
                </li>
                <li className="mb-2">
                  <a href="#">Gili Air</a>
                </li>
                <li className="mb-2">
                  <a href="#">Gili Meno</a>
                </li>
                <li className="mb-2">
                  <a href="#">Gili Trawangan</a>
                </li>
                <li className="mb-2">
                  <a href="#">Java Island</a>
                </li>
                <li className="mb-2">
                  <a href="#">Lombok</a>
                </li>
                <li className="mb-2">
                  <a href="#">Nusa Lembongan</a>
                </li>
                <li className="mb-2">
                  <a href="#">Nusa Penida</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mt-3">
              <h5 className="mb-3">Contact Us</h5>
              <p>+62-81353304990</p>
              <p className="menu-items">
                <a href="mailto:reservation@gilitransfers.com">
                  reservation@gilitransfers.com
                </a>
              </p>
              <div className="footer-social_box">
                <a
                  href="https://www.facebook.com/Gilitransferscom"
                  className="fab fa-facebook fa-fw"
                ></a>
                <a
                  href="https://twitter.com/Gilitransfers1/"
                  className="fab fa-twitter-square fa-fw"
                ></a>
                <a
                  href="https://www.instagram.com/gilitransfers_ofc/"
                  className="fab fa-instagram fa-fw"
                ></a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mt-3">
              <h5 className="mb-3">Payment Method</h5>
              <div className="payment-methods" >
                <img
                  src="image/payment/paypal-logo-svgrepo-com.svg"
                  alt="Paypal"
                  className="payment-logo"
                  style={{width:"40px"}}
                />
                <img
                  src="image/payment/american-express-svgrepo-com.svg"
                  alt="American"
                  className="payment-logo"
                  style={{width:"40px"}}
                />
                <img
                  src="image/payment/visa-logo-svgrepo-com.svg"
                  alt="Visa"
                  className="payment-logo"
                  style={{width:"40px"}}
                />
                <img
                  src="image/payment/mastercard-4-logo-svgrepo-com.svg"
                  alt="Mastercard"
                  className="payment-logo"
                  style={{width:"40px"}}
                />
                <img
                  src="image/payment/jcb-card-icon.svg"
                  alt="JCB"
                  className="payment-logo"
                  style={{width:"40px"}}
                />
                <img
                  src="image/payment/bca-bank-central-asia-logo-svgrepo-com.svg"
                  alt="BCA"
                  className="payment-logo"
                />
                <img
                  src="image/payment/bank-negara-indonesia.svg"
                  alt="BNI"
                  className="payment-logo"
                  style={{width:"40px"}}
                />
                {/* <img
                  src="image/payment/bank-syariah-indonesia-seeklogo.svg"
                  alt="BSI"
                  className="payment-logo"
                  style={{width:"40px"}}
                /> */}
                <img
                  src="image/payment/bri-logo.svg"
                  alt="BRI"
                  className="payment-logo"
                  style={{width:"40px"}}
                />
                <img
                  src="image/payment/Bank-Mandiri-01.svg"
                  alt="MAndiri"
                  className="payment-logo"
                  style={{width:"40px"}}
                />
                {/* <img
                  src="image/payment/2425815_bank_indonesia_permata_permatabank_syariah_icon.svg"
                  alt="Permata"
                  className="payment-logo"
                  style={{width:"40px"}}
                />
                <img
                  src="image/payment/2425811_bank_banten_bjb_indonesian_jabar_icon.svg"
                  alt="BJB"
                  className="payment-logo"
                  style={{width:"40px"}}
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="auto-container">
          <div className="inner-container">
            <div className="upper-box">
              <div className="d-flex align-items-center justify-content-center footer-copyright">
                <p className="text-muted mb-3 mb-lg-0 text-gray-1">
                  © 2024 Gilitransfers. All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
