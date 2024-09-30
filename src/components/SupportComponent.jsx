const SupportComponent = () => {
  return (
    <div>
      {" "}
      {/* Progress One */}
      <section
        className="progress-one"
        style={{ backgroundImage: 'url("/image/background/15.jpg")' }}
      >
        <div className="auto-container">
          {/* Sec Title Two */}
          <div className="sec-title_two light">
            {/* <div className="bid-title">BENEFIT</div> */}
            <div className="title">Why Book With Gilitransfers.com ?</div>
          </div>
          <div className="inner-container">
            <div className="row clearfix">
              {/* Process Block One */}
              <div className="process-block_one col-lg-4 col-md-6 col-sm-12">
                <div
                  className="process-block_one-inner wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="process-block_one-icon flaticon-clock" />
                  <h5 className="process-block_one-title">Saving Your Time</h5>
                  <div className="process-block_one-text">
                    Our booking engines are developed to make visitors easier to
                    complete the reservations in minutes.
                  </div>
                </div>
              </div>
              {/* Process Block One */}
              <div className="process-block_one col-lg-4 col-md-6 col-sm-12">
                <div
                  className="process-block_one-inner wow fadeInLeft"
                  data-wow-delay="150ms"
                  data-wow-duration="1500ms"
                >
                  <div className="process-block_one-icon flaticon-phone-call" />
                  <h5 className="process-block_one-title">
                    Real Time Customer Service
                  </h5>
                  <div className="process-block_one-text">
                    Live chat is online in our site from 9 AM to 7 PM (Bali
                    time, GMT+8). Phone , Whatsapp, and Email are available from
                    6 am to 10 pm (Bali time, GMT+8).
                  </div>
                </div>
              </div>
              {/* Process Block One */}
              <div className="process-block_one col-lg-4 col-md-6 col-sm-12">
                <div
                  className="process-block_one-inner wow fadeInLeft"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="process-block_one-icon flaticon-money-bag" />
                  <h5 className="process-block_one-title">Saving Your Money</h5>
                  <div className="process-block_one-text">
                    We provide multiple currencies for the payment. By
                    purchasing the ticket/voucher in your own currency, you may
                    cut the currency conversion rate and organize your travel
                    budget at ease.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Progress One */}
    </div>
  );
};

export default SupportComponent;
