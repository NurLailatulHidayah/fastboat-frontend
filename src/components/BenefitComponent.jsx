const BenefitComponent = () => {
  return (
    <div>
      <section
        className="benefits-one"
        style={{
          backgroundImage: 'url("/image/background/15.jpg")',
          zIndex: 1,
        }}
      >
        <div className="auto-container">
          {/* Sec Title Two */}
          <div className="sec-title_two light">
            <div className="bid-title">BENEFIT</div>
            <div className="title">Why Book With Gilitransfers.com ?</div>
          </div>
          <div className="inner-container">
            <div className="row clearfix">
              {/* Benefit Block One */}
              <div className="benefit-block_one col-lg-4 col-md-6 col-sm-12">
                <div
                  className="benefit-block_one-inner  "
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="benefit-block_one-icon flaticon-clock" />
                  <h5 className="benefit-block_one-title">Saving Your Time</h5>
                  <div className="benefit-block_one-text">
                    Our booking engines are developed to make visitors easier to
                    complete the reservations in minutes.
                  </div>
                </div>
              </div>
              {/* Benefit Block One */}
              <div className="benefit-block_one col-lg-4 col-md-6 col-sm-12">
                <div
                  className="benefit-block_one-inner "
                  data-wow-delay="150ms"
                  data-wow-duration="1500ms"
                >
                  <div className="benefit-block_one-icon flaticon-phone-call" />
                  <h5 className="benefit-block_one-title">
                    Real Time Customer Service
                  </h5>
                  <div className="benefit-block_one-text">
                    Live chat is online in our site from 9 AM to 7 PM (Bali
                    time, GMT+8). Phone , Whatsapp, and Email are available from
                    6 am to 10 pm (Bali time, GMT+8).
                  </div>
                </div>
              </div>
              {/* Benefit Block One */}
              <div className="benefit-block_one col-lg-4 col-md-6 col-sm-12 mt-5">
                <div
                  className="benefit-block_one-inner "
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="benefit-block_one-icon flaticon-money-bag" />
                  <h5 className="benefit-block_one-title">Saving Your Money</h5>
                  <div className="benefit-block_one-text">
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
    </div>
  );
};

export default BenefitComponent;
