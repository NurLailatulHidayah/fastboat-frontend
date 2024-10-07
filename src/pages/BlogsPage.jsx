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
          {/* <ul className="page-breadbrumbs mt-3">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Blogs</li>
          </ul> */}
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
            {/* <div className=""> */}
            {/* Sidebar Page Container */}
            <div className="sidebar-page-container left-sidebar">
              <div className="auto-container">
                {/* <ul className="page-breadbrumbs text-dark  mt-3">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Blogs</li>
                </ul> */}
                <div className="row clearfix thick-border-bottom col-lg-8">
                  <h4 className="blogs ">Featured Posts</h4>
                </div>
                <div className="row clearfix">
                  {/* Sidebar Side */}
                  <div className=" sidebar-side ">
                    <aside className="sidebar">
                      {/* <h4>POPULAR</h4> */}
                      {/* Search Box */}
                      {/* <div className="sidebar-widget">
                        <div className="search-box">
                          <form method="post" action="#">
                            <div className="form-group">
                              <input
                                type="search"
                                name="search-field"
                                defaultValue
                                placeholder="Search..."
                                required
                              />
                              <button type="submit">
                                <span className="icon fa fa-search" />
                              </button>
                            </div>
                          </form>
                        </div>
                      </div> */}
                      {/* Tags Widget */}
                      {/* <div className="sidebar-widget popular-tags">
                        <div className="widget-content">
                          <h4>tags</h4>
                          <a href="#">travel</a>
                          <a href="#">adventure</a>
                          <a href="#">food</a>
                          <a href="#">destination</a>
                          <a href="#">tips &amp; trick</a>
                          <a href="#">CULTURE &amp; HISTORY</a>
                          <a href="#">INSPIRATION</a>
                        </div>
                      </div> */}
                      {/* Post Widget */}
                      <div className="sidebar-widget post-widget mt-3 col-lg-12">
                        {/* <div className="widget-content"> */}

                        {/* Post Widget Block */}
                        {/* <div className="post-widget_block pb-4 mb-4 border-bottom col-lg-8">
                          <div className="row clearfix mb-3">
                            <div className="post-widget_block-image col-lg-5 mt-3">
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
                        <div className="post-widget_block pb-4 mb-4 border-bottom col-lg-8">
                          <div className="row clearfix mb-3">
                            <div className="post-widget_block-image col-lg-5 mt-3">
                              <a href="#">
                                <img
                                  src="image/blogs/blog-fast-boat-transfer-from-bali-to-gili-islands.jpg"
                                  alt=""
                                  // className="img-fluid rounded"
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
                        </div> */}
                        <div className="post-widget_block pb-4 mb-4 border-bottom col-lg-8">
                          <div className="row clearfix mb-3">
                            <div className="post-widget_block-image col-lg-5 mt-3">
                              <a href="#">
                                <img
                                  src="image/blogs/blog-fast-boat-bali-to-gili-islands.jpg"
                                  alt=""
                                  // className="img-fluid rounded"
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
                                  Fast Boat from Bali to Gili Islands with a
                                  daily fast boat schedule. Provide a private
                                  car and shuttle bus to reach the harbor in
                                  Bali. Best service, fast confirmation, easy
                                  payment
                                </p>
                              </h5>

                              <div className="post-widget_date">
                                April 10, 2023
                                <span>By.Rinda</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="post-widget_block pb-4 mb-4 border-bottom col-lg-8">
                          <div className="row clearfix mb-3">
                            <div className="post-widget_block-image col-lg-5 mt-3">
                              <a href="#">
                                <img
                                  src="image/blogs/blog-bali-to-gili,-heres-what-you-need-to-know.png"
                                  alt=""
                                  // className="img-fluid rounded"
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
                                  tourists is the Gili Islands. Interested in
                                  the Gili Islands? Take a look at the following
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
                        <div className="post-widget_block pb-4 mb-4 border-bottom col-lg-8">
                          <div className="row clearfix mb-3">
                            <div className="post-widget_block-image col-lg-5 mt-3">
                              <a href="#">
                                <img
                                  src="image/blogs/blog-bali-travel-destinations.png"
                                  alt=""
                                  // className="img-fluid rounded"
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
                                  don't have much money? No worries. You can
                                  have a comfortable and enjoyable vacation.
                                  Here are some things to consider when
                                  vacationing in Bali.
                                </p>
                              </h5>

                              <div className="post-widget_date">
                                March 2, 2023
                                <span>By.Rinda</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="post-widget_block pb-4 mb-4 border-bottom col-lg-8">
                          <div className="row clearfix mb-3">
                            <div className="post-widget_block-image col-lg-5 mt-3">
                              <a href="#">
                                <img
                                  src="image/blogs/blog-bali-to-gili-meno-a791dc10ef.jpg"
                                  alt=""
                                  // className="img-fluid rounded"
                                />
                              </a>
                            </div>
                            <div className="content col-lg">
                              <div className="title">Routes Fastboat</div>
                              <h5 className="post-widget_heading">
                                <a href="blog-details.html">
                                  Bali to Gili Meno
                                </a>
                                <p>
                                  Fast Boat from Bali to Gili Meno with direct
                                  and indirect route and daily schedule from all
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
                        <div className="post-widget_block pb-4 mb-4 border-bottom col-lg-8">
                          <div className="row clearfix mb-3">
                            <div className="post-widget_block-image col-lg-5 mt-3">
                              <a href="#">
                                <img
                                  src="image/blogs/blog-bali-to-gili-air-6553533ab0.jpg"
                                  alt=""
                                  // className="img-fluid rounded"
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
                        <div className="post-widget_block pb-4 mb-4 border-bottom col-lg-8">
                          <div className="row clearfix mb-3">
                            <div className="post-widget_block-image col-lg-5 mt-3">
                              <a href="#">
                                <img
                                  src="image/blogs/blog-bali-to-gili-trawangan-ccfa1f1b17.jpg"
                                  alt=""
                                  // className="img-fluid rounded"
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
                                  daily fast boat schedule or use private
                                  transfer from Lombok airport to Gili Trawangan
                                  with gilitransfers.com
                                </p>
                              </h5>

                              <div className="post-widget_date">
                                Nov 30, 2022
                                <span>By.Rinda</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="post-widget_block pb-4 mb-4 border-bottom col-lg-8">
                          <div className="row clearfix mb-3">
                            <div className="post-widget_block-image col-lg-5 mt-3">
                              <a href="#">
                                <img
                                  src="image/blogs/blog-bali-to-lombok-f2f7caf0e0.jpg"
                                  alt=""
                                  // className="img-fluid rounded"
                                />
                              </a>
                            </div>
                            <div className="content col-lg">
                              <div className="title">Routes Fastboat</div>
                              <h5 className="post-widget_heading">
                                <a href="blog-details.html">Bali to Lombok</a>
                                <p>
                                  Various fast boats from Bali to Lombok are
                                  ready to make your trip enjoyable and
                                  unforgettable. Get the best price of Fast Boat
                                  from Bali to Lombok with gilitransfers.com
                                </p>
                              </h5>

                              <div className="post-widget_date">
                                Nov 30, 2022
                                <span>By.Rinda</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="post-widget_block pb-4 mb-4 border-bottom col-lg-8">
                          <div className="row clearfix mb-3">
                            <div className="post-widget_block-image col-lg-5 mt-3">
                              <a href="#">
                                <img
                                  src="image/blogs/blog-fast-boat-bali-to-nusa-lembongan-f3b8ba7e19.jpg"
                                  alt=""
                                  // className="img-fluid rounded"
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
                        <div className="post-widget_block pb-4 mb-4 border-bottom col-lg-8">
                          <div className="row clearfix mb-3">
                            <div className="post-widget_block-image col-lg-5 mt-3">
                              <a href="#">
                                <img
                                  src="image/blogs/blog-gili-inter-island-trip-fd73587e74.jpg"
                                  alt=""
                                  // className="img-fluid rounded"
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
                        <div className="post-widget_block pb-4 mb-4 border-bottom col-lg-8">
                          <div className="row clearfix mb-3">
                            <div className="post-widget_block-image col-lg-5 mt-3">
                              <a href="#">
                                <img
                                  src="image/blogs/blog-bali-to-nusa-penida-2516add8e8.jpg"
                                  alt=""
                                  // className="img-fluid rounded"
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
                        {/* <div className="border-top"> */}
                        {/* <div className="page-pagination border rounded  col-lg-8">
                            <ul className="pagination mt-3 mb-3">
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  Previous
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  Next
                                </a>
                              </li>
                            </ul>
                          </div> */}
                        {/* </div> */}
                      </div>
                    </aside>
                  </div>

                  {/* Content Side */}
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
      {/* End Content Blogs */}
    </div>
  );
};

export default BlogsPage;
