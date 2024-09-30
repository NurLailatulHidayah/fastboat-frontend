const ContactPage = () => {
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
            <li>contact us</li>
          </ul> */}
          <h1 className="page-banner_title">Contact Us</h1>
        </div>
      </section>
      {/* End Page Banner */}

      {/* Gallery Five */}
      <section className="destination-content-one content-page">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <h3 className="section-title text-black font-size-xs-28 font-weight-bold mb-0">
                Contact gilitransfers.com!
              </h3>
              <p className="mt-3 justify-text">
                If you have bussiness inquiries or other questions, please fill
                out the following form. We will do our best to respond to all
                emails within 24 hours. Most questions are answered on our How
                to Book and FAQ (frequently asked questions) page. Fast boat
                schedules, departure port and boat specifications can be found
                at Fast Boat, Destinations and Articles Articles page.
              </p>
            </div>
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <div>
                <h3 className="section-title text-black font-size-xs-28 font-weight-bold mb-0">
                  Find us at the office
                </h3>
                <p className="destination-block_one-location">
                  Jl. Sunset Road No. 28, Kel. Seminyak, Kec. Kuta, Kab. Badung,
                  Kuta Selatan, Bali, Indonesia.
                </p>
              </div>
              <div>
                <h3 className="section-title text-black font-size-xs-28 font-weight-bold mb-0">
                  Contact Us
                </h3>
                <p className="mt-3">+62-81353304990</p>

                <p className="menu-items">reservation@gilitransfers.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Gallery Five */}

      {/* Gallery Five */}
      <section className="booking-one">
        <div className="container">
          <div className="row clearfix">
            {/* Contact Column */}
            <div className="contact-column col-lg-8 col-md-7 col-sm-12">
              <div className="title-box">
                <h4>Send Us a Massage</h4>
              </div>
              {/* Contact Form */}
              <div className="booking-form">
                <form
                  method="post"
                  action="https://wpthemebooster.com/demo/themeforest/html/vacasky/contact.html"
                >
                  <div className="row ">
                    <div className="col-lg-6 ">
                      {/* Form Group */}
                      <div className="form-group">
                        {/* <label className="form-label">Name</label> */}
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      {/* Form Group */}
                      <div className="form-group">
                        {/* <label className="form-label">Email Address</label> */}
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      {/* Form Group */}
                      <div className="form-group">
                        {/* <label className="form-label">Phone Number</label> */}
                        <input
                          type="number"
                          name="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      {/* Form Group */}
                      <div className="form-group">
                        {/* <label className="form-label">Subjek</label> */}
                        <input
                          type="text"
                          name="name"
                          placeholder="Subjek"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      {/* Form Group */}
                      <div className="form-group">
                        {/* <label className="form-label">Enter Text</label> */}
                        <textarea
                          name="text"
                          placeholder="Enter Text"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn-style-two theme-btn">
                        <span className="btn-wrap">
                          <span className="text-one">Send Message</span>
                          <span className="text-two">Send Message</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Gallery Five */}
    </div>
  );
};

export default ContactPage;
