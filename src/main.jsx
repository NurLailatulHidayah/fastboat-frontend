import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import "air-datepicker/dist/css/datepicker.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/owl.carousel.js";
import "owl.carousel/dist/owl.carousel.min.js";
import "./dist/css/style.css";
import "./dist/css/custom.css";
import "./dist/css/responsive.css";
import "./dist/js/jquery.js";
import "./dist/js/popper.min.js";
import "./dist/js/bootstrap.min.js";
import "./dist/js/magnific-popup.min.js";
import "./dist/js/appear.js";
import "./dist/js/parallax.min.js";
import "./dist/js/tilt.jquery.min.js";
// import "./dist/js/owl.js";
import "./dist/js/odometer.js";
import "./dist/js/jquery.marquee.min.js";
import "./dist/js/parallax-scroll.js";
import "./dist/js/nav-tool.js";
import "./dist/js/swiper.min.js";
import "./dist/js/mixitup.js";
import "./dist/js/swiper.min.js";
import "./dist/js/jquery-ui.js";
import "./dist/js/select2.min.js";
import "./dist/js/flatpickr.min.js";
import "./dist/js/price-range.js";
import "./dist/js/script.js";

//import BrowserRouter dari react router
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
