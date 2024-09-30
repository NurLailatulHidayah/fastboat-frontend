import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import FastboatPage from "./pages/FastboatPage";
// import TripPage from "./pages/TripPage";
import BlogsPage from "./pages/BlogsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import PrivacypolicyPage from "./pages/PrivacypolicyPage";
import FaqPage from "./pages/FaqPage";
import FastboatDetailPage from "./pages/FastboatDetailPage";
import BlogsDetailPage from "./pages/BlogsDetailPage";
import PortPage from "./pages/PortPage";
import PortDetailPage from "./pages/PortDetailPage";
import DepartingArrivingPage from "./pages/DepartingArrivingPage";
import TermConditions from "./pages/TermConditions";
import HowToBookPage from "./pages/HowToBookPage";
import FastboatSearch from "./pages/FastboatSearch";
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
// import Privacypolicy from "./pages/home/Privacypolicy";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        {/* route menu */}
        <Route path="/" Component={HomePage} />
        {/* <Route path="/trip" Component={TripPage} /> */}
        <Route path="/blogs" Component={BlogsPage} />
        <Route path="/contact" Component={ContactPage} />

        {/* route fastboat */}
        <Route path="/fast-boat" Component={FastboatPage} />
        <Route path="/fast-boat/fast-boat-details/:slug" Component={FastboatDetailPage}/>
        <Route path="/fast-boat-search" Component={FastboatSearch}/>
        <Route path="/booking" Component={BookingPage}/>
        <Route path="/payment" Component={PaymentPage}/>

        {/* route blogs */}
        <Route path="/blogs-details" Component={BlogsDetailPage}/>

        {/* route port */}
        <Route path="/ports" Component={PortPage}/>
        <Route path="/ports/:slug" Component={PortDetailPage}/>

        {/* route footer */}
        <Route path="/about" Component={AboutUsPage} />
        <Route path="/how-to-book" Component={HowToBookPage} />
        <Route path="/term-and-conditions" Component={TermConditions} />
        <Route path="/privacy-policy" Component={PrivacypolicyPage} />
        <Route path="/departing-arriving" Component={DepartingArrivingPage} />
        <Route path="/frequently-asked-questions" Component={FaqPage} />

      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
