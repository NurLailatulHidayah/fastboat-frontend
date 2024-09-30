import React, { useState, useEffect } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.min.css";
import FormFastboatComponent from "../components/FormFastboatComponent";
import { Link, useParams } from "react-router-dom";

const FastboatDetailPage = () => {
  // Mendapatkan slug dari URL
  let { slug } = useParams();
  const [fastboatDetail, setFastboatDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDataFastboatDetail = async () => {
    if (!slug) {
      setError("Slug tidak terdefinisi.");
      setLoading(false);
      return;
    }

    try {
      // Fetch data fastboat menggunakan slug dari URL
      const response = await api.get(`/api/fast-boat/en/${slug}`);
      setFastboatDetail(response.data || null);
    } catch (error) {
      console.error("Error fetching data: ", error);
      if (error.response) {
        switch (error.response.status) {
          case 404:
            setError(
              "Data tidak ditemukan. Coba periksa URL atau ID yang Anda gunakan."
            );
            break;
          case 500:
            setError("Terjadi kesalahan pada server. Silakan coba lagi nanti.");
            break;
          default:
            setError("Terjadi kesalahan saat memuat data. Coba lagi nanti.");
        }
      } else {
        setError(
          "Tidak dapat terhubung ke server. Coba periksa koneksi internet Anda."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFastboatDetail();
  }, [slug]);

  const uniquePorts = () => {
    const ports = new Set();
    if (fastboatDetail && fastboatDetail.schedule_trips) {
      fastboatDetail.schedule_trips.forEach((trip) => {
        ports.add(trip.departure_port);
        ports.add(trip.arrival_port);
      });
    }
    return Array.from(ports);
  };

  // console.log(trip.departure_port_slug, trip.arrival_port_slug);

  return (
    <div>
      <section
        className="page-banner"
        style={{ backgroundImage: "url(/image/main-slider/1.jpg)" }}
      >
        <div className="auto-container">
          <div className="row clearfix">
            <h4 className=" col-lg">
              {/* {fastboatDetail.fb_name} */}
              Fastboat {fastboatDetail ? fastboatDetail.fb_name : " "}
            </h4>
          </div>
          {/* <ul className="page-breadbrumbs">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/fast-boat">Fast Boat</a>
            </li>
            <li>{fastboatDetail ? fastboatDetail.fb_name : ""}</li>
          </ul> */}
          <FormFastboatComponent />
        </div>
      </section>

      <section className="fastboat-detail_gallery" style={{ zIndex: -1 }}>
        <div className="auto-container">
          {error ? (
            <div className="alert alert-danger mb-0">{error}</div>
          ) : loading ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
              <radialGradient
                id="a11"
                cx=".66"
                fx=".66"
                cy=".3125"
                fy=".3125"
                gradientTransform="scale(1.5)"
              >
                <stop offset={0} stopColor="#8CB2FF" />
                <stop offset=".3" stopColor="#8CB2FF" stopOpacity=".9" />
                <stop offset=".6" stopColor="#8CB2FF" stopOpacity=".6" />
                <stop offset=".8" stopColor="#8CB2FF" stopOpacity=".3" />
                <stop offset={1} stopColor="#8CB2FF" stopOpacity={0} />
              </radialGradient>
              <circle
                transform-origin="center"
                fill="none"
                stroke="url(#a11)"
                strokeWidth={2}
                strokeLinecap="round"
                strokeDasharray="200 1000"
                strokeDashoffset={0}
                cx={100}
                cy={100}
                r={5}
              >
                <animateTransform
                  type="rotate"
                  attributeName="transform"
                  calcMode="spline"
                  dur="1.4"
                  values="360;0"
                  keyTimes="0;1"
                  keySplines="0 0 1 1"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                transform-origin="center"
                fill="none"
                opacity=".2"
                stroke="#8CB2FF"
                strokeWidth={2}
                strokeLinecap="round"
                cx={100}
                cy={100}
                r={5}
              />
            </svg>
          ) : (
            <>
              {/* <div className="row clearfix border-bottom">
                <h4 className="fastboat-detail_gallery col-lg-3">
                  {fastboatDetail.fb_name}
                </h4>
              </div> */}

              <div className="row clearfix mt-3">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="image">
                    <a
                      className="lightbox-image"
                      href={`http://localhost:8000/storage/${fastboatDetail.fb_image1}`}
                    >
                      <img
                        src={`http://localhost:8000/storage/${fastboatDetail.fb_image1}`}
                        alt={fastboatDetail.fb_name}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="image">
                    <a
                      className="lightbox-image"
                      href={`http://localhost:8000/storage/${fastboatDetail.fb_image2}`}
                    >
                      <img
                        src={`http://localhost:8000/storage/${fastboatDetail.fb_image2}`}
                        alt={fastboatDetail.fb_name}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="image">
                    <a
                      className="lightbox-image"
                      href={`http://localhost:8000/storage/${fastboatDetail.fb_image3}`}
                    >
                      <img
                        src={`http://localhost:8000/storage/${fastboatDetail.fb_image3}`}
                        alt={fastboatDetail.fb_name}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="image">
                    <a
                      className="lightbox-image"
                      href={`http://localhost:8000/storage/${fastboatDetail.fb_image4}`}
                    >
                      <img
                        src={`http://localhost:8000/storage/${fastboatDetail.fb_image4}`}
                        alt={fastboatDetail.fb_name}
                      />
                    </a>
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <a
                          className="lightbox-image"
                          href="images/gallery/51.jpg"
                        >
                          See All Photos
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col border-bottom">
                <h3>Description</h3>
                <p className="mt-3 justify-text">
                  {fastboatDetail.fb_description_en}
                </p>
              </div>

              {/* <div className="col border-bottom">
                <h3>Port</h3>
                <div className="mt-3 mb-3">
                  {uniquePorts().map((port, index) => (
                    <div
                      key={index}
                      className="col-lg d-flex align-items-center mb-2"
                    >
                      <i className="fa fa-anchor icon mr-2"></i>
                      <a href="/ports/ports-details/${fastboatDetail.departure_port_slug}">
                        <p className="mb-0">{port}</p>
                      </a>
                    </div>
                  ))}
                </div>
              </div> */}
            </>
          )}
        </div>
      </section>

      <section className="fastboat-detail_gallery">
        <div className="auto-container">
          <div className="col-lg-12 ">
            <h3>Schedule</h3>
            <table className="table table-hover mt-3 mb-5">
              <thead>
                <tr>
                  <th scope="col" className="text">
                    Departing From
                  </th>
                  <th scope="col" className="text">
                    Destination
                  </th>
                  <th scope="col" className="text">
                    Departure Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {fastboatDetail?.schedule_trips?.length > 0 ? (
                  fastboatDetail.schedule_trips.map((trip, index) => (
                    <tr key={index} className="schedule">
                      <td>
                        <Link
                          className="port-items"
                          to={`/ports/${trip.departure_port_slug}`}
                        >
                          {trip.departure_port}
                        </Link>
                      </td>
                      <td>
                        <Link
                          className="port-items"
                          to={`/ports/${trip.arrival_port_slug}`}
                        >
                          {trip.arrival_port}
                        </Link>
                      </td>
                      <td>
                        {trip.departure_time} - {trip.arrival_time}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">No schedule available</td>
                  </tr>
                  // <td colSpan="3">No schedule available</td>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FastboatDetailPage;
