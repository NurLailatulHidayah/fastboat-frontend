import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormFastboatComponent from "../components/FormFastboatComponent";
import ScrollTopButtonComponent from "../components/ScrollTopButtonComponent";

const BlogsDetailPage = () => {
  return (
    <div>
      {/* Page Banner */}
      <section
        className="page-banner_blogs"
        style={{ backgroundImage: "url(/image/background/adventure.jpg)" }}
      >
        <div className="auto-container">
          <h2>Enjoy the Best Sea Journey with Our Fastboat</h2>
          <h4>
            Book your tickets now and start an exciting adventure with us!
          </h4>
          <ul className="page-breadbrumbs mt-3">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>Slug</li>
          </ul>
          {/* Form fastboat */}
          <FormFastboatComponent />
          {/* End Form fastboat */}
        </div>
      </section>
      {/* End Page Banner */}

      {/* Scroll Button */}
      <ScrollTopButtonComponent />
      {/* End Scroll Button */}

      {/* Content Blogs Details */}
      <section className="blogs">
        <div className="auto-container">
          <div>
            {/* Sidebar Page Container */}
            <div className="sidebar-page-container left-sidebar">
              <div className="auto-container">
                <div className="row clearfix">
                  {/* Sidebar Side */}
                  <div className=" sidebar-side ">
                    <aside className="sidebar">
                      {/* Post Widget */}
                      <div className="sidebar-widget post-widget mt-3 col-lg-12">
                        {/* Post Widget Block */}
                        <div className="post-widget_block pb-4 mb-4  col-lg-9">
                          <div className="row clearfix mb-3">
                            <h3>
                              The Serene Adventure : From Ubud to Gili
                              Trawangan!
                            </h3>
                            <div className="post-widget_block-image col-lg-12 mt-3">
                              <a href="/blogs-details">
                                <img
                                  src="image/blogs/blog-the-serene-adventure-from-ubud-to-gili-trawangan.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="content col-lg">
                              <h5 className="post-widget_heading_details">
                                {/* <a href="/blogs-details">
                                  The Serene Adventure: From Ubud to Gili
                                  Trawangan!
                                </a> */}
                                <p>
                                  Nestled in the heart of Bali, Ubud stands as a
                                  sanctuary for those seeking tranquility amidst
                                  the island's vibrant culture and lush
                                  landscapes. With its emerald rice terraces,
                                  spiritual ambiance, and artistic allure, Ubud
                                  captures travelers from around the globe.
                                </p>
                                <p>
                                  {" "}
                                  However, just a short journey away lies
                                  another gem of Indonesia's archipelago – Gili
                                  Trawangan, a paradisiacal island offering
                                  pristine beaches and crystal-clear waters.
                                  Embarking on a journey from Ubud to Gili
                                  Trawangan presents an enchanting transition
                                  from Bali's cultural heartland to the serene
                                  oasis of the Gili Islands.
                                </p>
                              </h5>

                              <div className="post-widget_date_details">
                                April 3, 2025
                                <span>By.Gilitransfers</span>
                              </div>

                              <div>
                                <p className="text-title ">
                                  Ubud The Curtural : Haven
                                </p>
                                <img className="col-lg-8 rounded" src="image/blogs/summernote.jpg" alt="" />
                                <h5 className="post-widget_heading_details mt-4">
                                  {/* <a href="/blogs-details">
                                  The Serene Adventure: From Ubud to Gili
                                  Trawangan!
                                </a> */}
                                  <p>
                                    Ubud's allure lies in its rich and
                                    harmonious blend of culture and nature.
                                    Surrounded by terraced rice paddies and
                                    verdant forests, this inland town invites
                                    visitors to explore its spiritual sites,
                                    artisan workshops, and vibrant markets.
                                  </p>
                                  <p>
                                    {" "}
                                    The Ubud Monkey Forest, with its ancient
                                    temples and mischievous inhabitants, offers
                                    a glimpse into Bali's mystical heritage.
                                    Meanwhile, the Ubud Art Market showcases the
                                    island's artistic prowess with a myriad of
                                    traditional crafts, from intricate wood
                                    carvings to vibrant batik textiles.
                                  </p>
                                  <p>
                                    {" "}
                                    Beyond its tangible attractions, Ubud exudes
                                    positive vibes that connect with guests.
                                    Yoga studios and wellness retreats dot the
                                    landscape, providing sanctuaries for
                                    self-reflection and rejuvenation. The town's
                                    spiritual ambiance is further amplified by
                                    its numerous temples and celebratory
                                    ceremonies where offerings of flowers and
                                    incense adorn sacred shrines.
                                  </p>
                                </h5>
                              </div>
                              <div>
                                <p className="text-title ">
                                  Gili Trawangan : A Tropical Playground
                                </p>
                                <img className="col-lg-8 rounded" src="image/blogs/summernote1.jpg" alt="" />
                                <h5 className="post-widget_heading_details mt-4">
                                  {/* <a href="/blogs-details">
                                  The Serene Adventure: From Ubud to Gili
                                  Trawangan!
                                </a> */}
                                  <p>
                                    Gili Trawangan beckons travelers with its
                                    array of water-based activities, from
                                    snorkeling amidst vibrant coral reefs to
                                    diving alongside majestic sea turtles. The
                                    island's underwater world teems with marine
                                    life, offering unparalleled opportunities
                                    for exploration and discovery.{" "}
                                  </p>
                                  <p>
                                    Sunset cruises and glass-bottom boat tours
                                    offer captivating views of the island's
                                    coastline, while beachfront bars provide the
                                    perfect setting to relax with a refreshing
                                    cocktail as the sun sets below the horizon.
                                  </p>
                                  <p>
                                    For those seeking a peaceful getaway, Gili
                                    Trawangan welcomes you with a variety of
                                    beachfront resorts and charming boutique
                                    accommodations. Imagine hammocks gently
                                    swaying in the ocean breeze and palm trees
                                    creating beautiful shade on the pristine
                                    sands. Yoga classes and spa treatments cater
                                    to the island's wellness-oriented visitors,
                                    providing holistic experiences that nurture
                                    the mind, body, and spirit.
                                  </p>
                                </h5>
                              </div>
                              <div>
                                <p className="text-title ">
                                  Journey from to Gili Trawangan: A Tropical
                                  Escape
                                </p>
                                <h5 className="post-widget_heading_details mt-4">
                                  <p>
                                    Leaving behind the lush scenery of Ubud,
                                    travelers embark on a picturesque journey
                                    with our private car or shuttle bus. A
                                    combination of road and sea travel, the
                                    transition from Bali's mainland to the
                                    serene island life of Gili Trawangan is as
                                    enchanting as the destination itself.
                                  </p>
                                </h5>
                                <img className="col-lg-8 rounded" src="image/blogs/summernote2.jpg" alt="" />
                                <h5 className="post-widget_heading_details mt-4">
                                  <p>
                                    A comfortable car with air-conditioning and
                                    a friendly driver. The transfer is secure
                                    and straightforward. The ferry journey is
                                    seamless, lasting around two hours. The
                                    scenic views are stunning and add value to
                                    the overall experience.
                                  </p>
                                  <p>
                                    Upon arrival, visitors are greeted by
                                    powdery white sands and azure waters
                                    stretching to the horizon. Gili Trawangan's
                                    charm lies in its laid-back atmosphere and
                                    pristine natural beauty. As the sun sets on
                                    another day in paradise, the transition from
                                    one idyllic destination to the next remains
                                    seamless, leaving indelible memories that
                                    linger long after the journey's end.
                                  </p>
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </aside>
                  </div>

                  {/* Content Side */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Content Blogs Details */}
    </div>
  );
};

export default BlogsDetailPage;
