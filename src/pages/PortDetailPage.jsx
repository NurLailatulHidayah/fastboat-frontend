import React, { useState, useEffect } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css"; 
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import FormFastboatComponent from "../components/FormFastboatComponent";
import { Link, useParams } from "react-router-dom";

const PortDetailPage = () => {
  // Mendapatkan slug dari URL
  let { slug } = useParams();
  const [portDetail, setPortDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDataPortDetail = async () => {
    if (!slug) {
      setError("Slug tidak terdefinisi.");
      setLoading(false);
      return;
    }

    try {
      // Fetch data ports menggunakan slug dari URL
      const response = await api.get(`/api/port/en/${slug}`);
      setPortDetail(response.data || null);
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
    fetchDataPortDetail();
  }, [slug]);


  // Fungsi untuk menghasilkan URL Google Maps berdasarkan koordinat
  const getGoogleMapsLink = (coordinates) => {
    return `https://www.google.com/maps?q=${coordinates}`;
  };

  return (
    <div>
      {/* Page Banner */}
      <section
        className="page-banner"
        style={{ backgroundImage: "url(/image/ports/3.jpg)" }}
      >
        <div className="auto-container">
          {/* <h1 className="page-banner_title">Ports slug</h1> */}
          <div className="row clearfix">
            <h4 className=" col-lg-11 text-center">
              Ports {portDetail ? portDetail.prt_name_en : " "}
            </h4>
            <ul className="page-breadbrumbs">
              <li>
                <a href="/ports">Ports</a>
              </li>
              <li>{portDetail ? portDetail.prt_name_en : " "}</li>
            </ul>
          </div>
          <FormFastboatComponent />
        </div>
      </section>
      {/* End Page Banner */}

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

              <div className="row clearfix mt-3 ">
                <div className=" col-lg-3 col-md-3 col-sm-12">
                  <div className="">
                    <a
                      className="image"
                      href={`http://localhost:8000/storage/${portDetail.prt_image1}`}
                    >
                      <img
                        src={`http://localhost:8000/storage/${portDetail.prt_image1}`}
                        alt={portDetail.prt_name_en}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="image">
                    <a
                      className="lightbox-image"
                      href={`http://localhost:8000/storage/${portDetail.prt_image2}`}
                    >
                      <img
                        src={`http://localhost:8000/storage/${portDetail.prt_image2}`}
                        alt={portDetail.prt_name_en}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="image">
                    <a
                      className="lightbox-image"
                      href={`http://localhost:8000/storage/${portDetail.prt_image3}`}
                    >
                      <img
                        src={`http://localhost:8000/storage/${portDetail.prt_image3}`}
                        alt={portDetail.prt_name_en}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="image">
                    <a
                      className="lightbox-image"
                      href={`http://localhost:8000/storage/${portDetail.prt_image4}`}
                    >
                      <img
                        src={`http://localhost:8000/storage/${portDetail.prt_image4}`}
                        alt={portDetail.prt_name_en}
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

              <div className="row clearfix">
                <div className="col-lg-9 border-bottom border mt-4 mb-5 rounded">
                  <h3 className="p-3">Description</h3>
                  <p className="justify-text p-3">
                    {portDetail.prt_description_en}
                  </p>
                </div>
                <div className="col-lg-3">
                   {/* Menampilkan Peta */}
                  {portDetail && portDetail.prt_map && (
                    <>
                      <MapContainer
                        center={portDetail.prt_map.split(",").map(Number)}
                        zoom={13}
                        style={{ height: "300px", width: "100%" }}
                      >
                        <TileLayer
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={portDetail.prt_map.split(",").map(Number)}>
                          <Popup>{portDetail.prt_name_en}</Popup>
                        </Marker>
                      </MapContainer>

                      {/* Tautan ke Google Maps */}
                      <div className="mt-3">
                        <a
                          href={getGoogleMapsLink(portDetail.prt_map)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-block"
                        >
                          Lihat di Google Maps
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default PortDetailPage;
