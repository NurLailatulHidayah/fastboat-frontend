const FaqComponent = () => {
  return (
    <div>
      {/* Faq Two */}
      <section
        className="faq-two"
        style={{ backgroundImage: "url(images/background/20.jpg)" }}
      >
        <div className="auto-container">
          <div className="faq-two_inner-container">
            <div
              className="faq-two_pattern"
              style={{ backgroundImage: "url(images/icons/pattern-2.png)" }}
            />
            <div className="row clearfix">
              {/* Accordian Column */}
              <div className="faq-two_accordian-column col-lg-8 col-md-12 col-sm-12">
                {/* Accordion Box */}
                <ul className="accordion-box">
                  {/* Block */}
                  <li className="accordion block active-block">
                    <div className="acc-btn active">
                      <div className="icon-outer">
                        <span className="icon fa-solid fa-angle-down fa-fw" />
                      </div>
                      What type of travel packages does Vacasky offer?
                    </div>
                    <div className="acc-content current">
                      <div className="content">
                        <p>
                          Vacasky offers a wide range of travel packages to
                          destinations around the world, including customized
                          tours, group tours, luxury travel, adventure travel,
                          and more. Our travel specialists work with you to
                          create an itinerary that meets your specific needs and
                          preferences.
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon fa-solid fa-angle-down fa-fw" />
                      </div>
                      How do I book a trip with Vacasky?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <p>
                          Vacasky offers a wide range of travel packages to
                          destinations around the world, including customized
                          tours, group tours, luxury travel, adventure travel,
                          and more. Our travel specialists work with you to
                          create an itinerary that meets your specific needs and
                          preferences.
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon fa-solid fa-angle-down fa-fw" />
                      </div>
                      What is the payment process for Vacasky?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <p>
                          Vacasky offers a wide range of travel packages to
                          destinations around the world, including customized
                          tours, group tours, luxury travel, adventure travel,
                          and more. Our travel specialists work with you to
                          create an itinerary that meets your specific needs and
                          preferences.
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Block */}
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon fa-solid fa-angle-down fa-fw" />
                      </div>
                      How to cancel my booking in Vacasky?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <p>
                          Vacasky offers a wide range of travel packages to
                          destinations around the world, including customized
                          tours, group tours, luxury travel, adventure travel,
                          and more. Our travel specialists work with you to
                          create an itinerary that meets your specific needs and
                          preferences.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Title Column */}
              <div className="faq-two_title-column col-lg-4 col-md-12 col-sm-12">
                <div className="faq-two_title-inner">
                  <h2 className="faq-two_title">Frequently Asked Questions</h2>
                  <div className="faq-two_text">
                    What our clients usually asked about our services and tours.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Faq Two */}
    </div>
  );
};

export default FaqComponent;
