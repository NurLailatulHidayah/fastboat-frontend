import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormFastboatComponent from "../components/FormFastboatComponent";

const BlogsPage = () => {
  return (
    <div>
      {/* Page Banner */}
      <section
        className="page-banner_blogs"
        style={{ backgroundImage: "url(/image/background/adventure.jpg)" }}
      >
        <div className="auto-container">
          <h2>Enjoy the Best Sea Journey with Our Fastboat</h2>
          <h6>
            Book your tickets now and start an exciting adventure with us!
          </h6>

          {/* Form fastboat */}
          <FormFastboatComponent />
          {/* End Form fastboat */}
        </div>
      </section>
      {/* End Page Banner */}

      {/* Content Blogs */}
      <section className="blogs">
        <div className="auto-container">
          <div>
            {/* Sidebar Page Container */}
            <div className="sidebar-page-container left-sidebar">
              <div className="auto-container">
                <div className="row clearfix thick-border-bottom col-lg-8">
                  <h4 className="blogs ">Featured Posts</h4>
                </div>
                <div className="row clearfix  col-12">
                  {/* Post Widget */}
                  <div className="d-flex mt-3 ">
                    {/* Post Widget Block */}
                    <div className="col-8">
                      <div className="post-widget_block pb-4 mb-4 border-bottom col">
                        <div className="row clearfix mb-3">
                          <div className="post-widget_block-image col-lg-4 mt-3">
                            <a href="/blogs-details">
                              <img
                                src="image/blogs/blog-the-serene-adventure-from-ubud-to-gili-trawangan.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="content col-lg">
                            <div className="title">destination</div>
                            <h5 className="post-widget_heading">
                              <a href="/blogs-details">
                                The Serene Adventure: From Ubud to Gili
                                Trawangan!
                              </a>
                              <p>
                                The journey from Ubud to Gili Trawangan, from
                                the cultural heartland of Bali to the tranquil
                                oasis of the Gili Islands. One stop service with
                                Gilitransfers
                              </p>
                            </h5>
                            <div className="post-widget_date">
                              April 3, 2025
                              <span>By.Gilitransfers</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-widget_block pb-4 mb-4 border-bottom col">
                        <div className="row clearfix mb-3">
                          <div className="post-widget_block-image col-lg-4 mt-3">
                            <a href="#">
                              <img
                                src="image/blogs/blog-fast-boat-transfer-from-bali-to-gili-islands.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="content col-lg">
                            <div className="title">destination</div>
                            <h5 className="post-widget_heading">
                              <a href="blog-details.html">
                                The Serene Adventure: From Ubud to Gili
                                Trawangan!
                              </a>
                              <p>
                                The journey from Ubud to Gili Trawangan, from
                                the cultural heartland of Bali to the tranquil
                                oasis of the Gili Islands. One stop service with
                                Gilitransfers
                              </p>
                            </h5>
                            <div className="post-widget_date">
                              April 3, 2025
                              <span>By.Gilitransfers</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-widget_block pb-4 mb-4 border-bottom col">
                        <div className="row clearfix mb-3">
                          <div className="post-widget_block-image col-lg-4 mt-3">
                            <a href="#">
                              <img
                                src="image/blogs/blog-fast-boat-bali-to-gili-islands.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="content col-lg">
                            <div className="title">routes fastboat</div>
                            <h5 className="post-widget_heading">
                              <a href="blog-details.html">
                                Fast Boat Bali to Gili Islands
                              </a>
                              <p>
                                Fast Boat from Bali to Gili Islands with a daily
                                fast boat schedule. Provide a private car and
                                shuttle bus to reach the harbor in Bali. Best
                                service, fast confirmation, easy payment
                              </p>
                            </h5>
                            <div className="post-widget_date">
                              April 10, 2023
                              <span>By.Rinda</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-widget_block pb-4 mb-4 border-bottom col">
                        <div className="row clearfix mb-3">
                          <div className="post-widget_block-image col-lg-4 mt-3">
                            <a href="#">
                              <img
                                src="image/blogs/blog-bali-to-gili,-heres-what-you-need-to-know.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="content col-lg">
                            <div className="title">destination</div>
                            <h5 className="post-widget_heading">
                              <a href="blog-details.html">
                                Bali to Gili, Here's What You Need To Know
                              </a>
                              <p>
                                Another destination around Bali that attracts
                                tourists is the Gili Islands. Interested in the
                                Gili Islands? Take a look at the following
                                articles
                              </p>
                            </h5>
                            <div className="post-widget_date">
                              March 2, 2023
                              <span>By.Rinda</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-widget_block pb-4 mb-4 border-bottom col">
                        <div className="row clearfix mb-3">
                          <div className="post-widget_block-image col-lg-4 mt-3">
                            <a href="#">
                              <img
                                src="image/blogs/blog-bali-travel-destinations.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="content col-lg">
                            <div className="title">destination</div>
                            <h5 className="post-widget_heading">
                              <a href="blog-details.html">
                                Bali Travel Destinations
                              </a>
                              <p>
                                Do you want to spend your vacation in Bali but
                                don't have much money? No worries. You can have
                                a comfortable and enjoyable vacation. Here are
                                some things to consider when vacationing in
                                Bali.
                              </p>
                            </h5>
                            <div className="post-widget_date">
                              March 2, 2023
                              <span>By.Rinda</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-widget_block pb-4 mb-4 border-bottom col">
                        <div className="row clearfix mb-3">
                          <div className="post-widget_block-image col-lg-4 mt-3">
                            <a href="#">
                              <img
                                src="image/blogs/blog-bali-to-gili-meno-a791dc10ef.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="content col-lg">
                            <div className="title">Routes Fastboat</div>
                            <h5 className="post-widget_heading">
                              <a href="blog-details.html">Bali to Gili Meno</a>
                              <p>
                                Fast Boat from Bali to Gili Meno with direct and
                                indirect route and daily schedule from all
                                harbor in Bali. Find the suitable and cheapest
                                fast boat price with gilitransfers.com
                              </p>
                            </h5>
                            <div className="post-widget_date">
                              Nov 30, 2023
                              <span>By.Rinda</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-widget_block pb-4 mb-4 border-bottom col">
                        <div className="row clearfix mb-3">
                          <div className="post-widget_block-image col-lg-4 mt-3">
                            <a href="#">
                              <img
                                src="image/blogs/blog-bali-to-gili-air-6553533ab0.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="content col-lg">
                            <div className="title">Routes Fastboat</div>
                            <h5 className="post-widget_heading">
                              <a href="blog-details.html">Bali to Gili Air</a>
                              <p>
                                Bali to Gili Air with ease of transport. Find
                                the suitable boats with the best price only on
                                Gilitransfers.com
                              </p>
                            </h5>
                            <div className="post-widget_date">
                              Nov 30, 2022
                              <span>By.Rinda</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-widget_block pb-4 mb-4 border-bottom col">
                        <div className="row clearfix mb-3">
                          <div className="post-widget_block-image col-lg-4 mt-3">
                            <a href="#">
                              <img
                                src="image/blogs/blog-bali-to-gili-trawangan-ccfa1f1b17.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="content col-lg">
                            <div className="title">Routes fastboat</div>
                            <h5 className="post-widget_heading">
                              <a href="blog-details.html">
                                Bali to Gili Trawangan
                              </a>
                              <p>
                                Transfer from Bali to Gili Trawangan with a
                                daily fast boat schedule or use private transfer
                                from Lombok airport to Gili Trawangan with
                                gilitransfers.com
                              </p>
                            </h5>
                            <div className="post-widget_date">
                              Nov 30, 2022
                              <span>By.Rinda</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-widget_block pb-4 mb-4 border-bottom col">
                        <div className="row clearfix mb-3">
                          <div className="post-widget_block-image col-lg-4 mt-3">
                            <a href="#">
                              <img
                                src="image/blogs/blog-bali-to-lombok-f2f7caf0e0.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="content col-lg">
                            <div className="title">Routes Fastboat</div>
                            <h5 className="post-widget_heading">
                              <a href="blog-details.html">Bali to Lombok</a>
                              <p>
                                Various fast boats from Bali to Lombok are ready
                                to make your trip enjoyable and unforgettable.
                                Get the best price of Fast Boat from Bali to
                                Lombok with gilitransfers.com
                              </p>
                            </h5>

                            <div className="post-widget_date">
                              Nov 30, 2022
                              <span>By.Rinda</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-widget_block pb-4 mb-4 border-bottom col">
                        <div className="row clearfix mb-3">
                          <div className="post-widget_block-image col-lg-4 mt-3">
                            <a href="#">
                              <img
                                src="image/blogs/blog-fast-boat-bali-to-nusa-lembongan-f3b8ba7e19.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="content col-lg">
                            <div className="title">Routes Fastboat</div>
                            <h5 className="post-widget_heading">
                              <a href="blog-details.html">
                                Fast Boat Bali to Nusa Lembongan
                              </a>
                              <p>
                                Take the fast boat transfer from Bali to Nusa
                                Lembongan with a daily schedule from Sanur and
                                Kusamba. Get the best price with
                                Gilitransfers.com
                              </p>
                            </h5>
                            <div className="post-widget_date">
                              Nov 30, 2022
                              <span>By.Rinda</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-widget_block pb-4 mb-4 border-bottom col">
                        <div className="row clearfix mb-3">
                          <div className="post-widget_block-image col-lg-4 mt-3">
                            <a href="#">
                              <img
                                src="image/blogs/blog-gili-inter-island-trip-fd73587e74.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="content col-lg">
                            <div className="title">Routes Fastboat</div>
                            <h5 className="post-widget_heading">
                              <a href="blog-details.html">
                                Gili Inter Island Trip
                              </a>
                              <p>
                                Boat transfers from Lombok to Gili Trawangan,
                                Gili Air and Gili Meno and vice versa from
                                Bangsal Ports.
                              </p>
                            </h5>
                            <div className="post-widget_date">
                              Nov 30, 2022
                              <span>By.Rinda</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-widget_block pb-4 mb-4 border-bottom col">
                        <div className="row clearfix mb-3">
                          <div className="post-widget_block-image col-lg-4 mt-3">
                            <a href="#">
                              <img
                                src="image/blogs/blog-bali-to-nusa-penida-2516add8e8.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="content col-lg">
                            <div className="title">Routes Fastboat</div>
                            <h5 className="post-widget_heading">
                              <a href="blog-details.html">
                                Bali to Nusa Penida
                              </a>
                              <p>
                                Bali to Nusa Penida by fast boat transfer from
                                Sanur, Kusamba and Padangbai only 30 minutes
                                transfer time. Get the best ticket prices with
                                Gilitransfers.
                              </p>
                            </h5>
                            <div className="post-widget_date">
                              Nov 30, 2022
                              <span>By.Rinda</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card  text-center mx-5 col-4 rounded-3 "
                      style={{
                        width: "20rem",
                        height: "50rem",
                        backgroundColor: "#297cbb",
                      }}
                    >
                      <div className="card-body  text-white rounded-3 ">
                        <h5
                          className="mb-3 fw-bolder m-2"
                          style={{
                            fontFamily: "Poppins",
                            fontSize: "18px",
                          }}
                        >
                          Why Book With Gilitransfers.com ?
                        </h5>
                        <div className="mb-4">
                          <div className="benefit-block_two-icon flaticon-clock mb-3" />
                          <h5
                            className="fw-bolder"
                            style={{
                              fontFamily: "Poppins",
                              fontSize: "18px",
                            }}
                          >
                            Saving Your Time
                          </h5>
                          <p
                            className="card-text p-2"
                            style={{ fontSize: "14px" }}
                          >
                            Our booking engines are developed to make visitors
                            easier to complete the reservations in minutes.
                          </p>
                        </div>
                        <div className="mb-4">
                          <div className="benefit-block_two-icon flaticon-phone-call mb-3" />
                          <h5
                            className="fw-bolder"
                            style={{
                              fontFamily: "Poppins",
                              fontSize: "18px",
                            }}
                          >
                            Real Time Customer Service
                          </h5>
                          <p
                            className="card-text p-2"
                            style={{ fontSize: "14px" }}
                          >
                            Live chat is online in our site from 9 AM to 7 PM
                            (Bali time, GMT+8). Phone , Whatsapp, and Email are
                            available from 6 am to 10 pm (Bali time, GMT+8).
                          </p>
                        </div>
                        <div className="mb-3">
                          <div className="benefit-block_two-icon flaticon-money-bag mb-3" />

                          <h5
                            className="fw-bolder"
                            style={{
                              fontFamily: "Poppins",
                              fontSize: "18px",
                            }}
                          >
                            Saving Your Money
                          </h5>
                          <p
                            className="card-text p-2"
                            style={{ fontSize: "14px" }}
                          >
                            We provide multiple currencies for the payment. By
                            purchasing the ticket/voucher in your own currency,
                            you may cut the currency conversion rate and
                            organize your travel budget at ease.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Content Blogs */}
    </div>
  );
};

export default BlogsPage;
