const BenefitComponent = () => {
  return (
    <div>
      <section
        className="benefits-one"
        style={{
          backgroundImage: 'url("/image/background/15.jpg")',
          backgroundSize: "cover",
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
            <div className="row clearfix ">
              {/* Benefit Block One */}
              <div className="benefit-block_one col-lg-4 col-md-6 col-sm-12 mb-3">
                <div
                  className="card h-100 bg-primary-subtle bg-opacity-75 benefit-block_one-inner align-items-center rounded-4 m-2 p-3"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="benefit-block_one-icon flaticon-clock " />
                  <div className="text-primary-emphasis ">
                    <h5 className="benefit-block_one-title ">
                      Saving Your Time
                    </h5>
                    <div className="benefit-block_one-text">
                      Our booking engines are developed to make visitors easier
                      to complete the reservations in minutes.
                    </div>
                  </div>
                </div>
              </div>
              {/* Benefit Block One */}
              <div className=" benefit-block_one col-lg-4 col-md-6 col-sm-12 mb-3">
                <div
                  className="card h-100 bg-primary-subtle benefit-block_one-inner rounded-4 m-2 p-3"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="benefit-block_one-icon flaticon-phone-call" />
                  <div className="text-primary-emphasis rounded-4 ">
                    <h5 className="benefit-block_one-title">
                      Real Time Customer Service
                    </h5>
                    <div className="benefit-block_one-text">
                      Live chat is online in our site from 9 AM to 7 PM (Bali
                      time, GMT+8). Phone , Whatsapp, and Email are available
                      from 6 am to 10 pm (Bali time, GMT+8).
                    </div>
                  </div>
                </div>
              </div>
              {/* Benefit Block One */}
              <div className=" benefit-block_one col-lg-4 col-md-6 col-sm-12 mb-3">
                <div
                  className="card h-100 bg-primary-subtle benefit-block_one-inner rounded-4 m-2 p-3"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="benefit-block_one-icon flaticon-money-bag" />
                  <div className=" text-primary-emphasis ">
                    <h5 className="benefit-block_one-title">
                      Saving Your Money
                    </h5>
                    <div className="benefit-block_one-text">
                      We provide multiple currencies for the payment. By
                      purchasing the ticket/voucher in your own currency, you
                      may cut the currency conversion rate and organize your
                      travel budget at ease.
                    </div>
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
