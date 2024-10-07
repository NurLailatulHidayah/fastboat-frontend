import React, { useState, useEffect } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import FormFastboatComponent from "../components/FormFastboatComponent";
import { Link, useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const PortDetailPage = () => {
  let { slug } = useParams();
  const [portDetail, setPortDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false); // For lightbox
  const [lightboxIndex, setLightboxIndex] = useState(0); // Current index for lightbox

  const fetchDataPortDetail = async () => {
    if (!slug) {
      setError("Slug tidak terdefinisi.");
      setLoading(false);
      return;
    }

    try {
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

  // Generate image array for lightbox
  const images = [
    { src: `http://localhost:8000/storage/${portDetail?.prt_image1}` },
    { src: `http://localhost:8000/storage/${portDetail?.prt_image2}` },
    { src: `http://localhost:8000/storage/${portDetail?.prt_image3}` },
    { src: `http://localhost:8000/storage/${portDetail?.prt_image4}` },
    { src: `http://localhost:8000/storage/${portDetail?.prt_image5}` },
    { src: `http://localhost:8000/storage/${portDetail?.prt_image6}` },
  ];

  // Display only first 4 images
  const displayedImages = images.slice(0, 4);

  return (
    <div>
      {/* Page Banner */}
      <section
        className="page-banner"
        style={{ backgroundImage: "url(/image/background/adventure.jpg)" }}
      >
        <div className="auto-container">
          <div className="row clearfix">
            <h4 className="col-lg-11 text-center">
              Ports {portDetail ? portDetail.prt_name_en : " "}
            </h4>
            <ul className="page-breadbrumbs">
              <li>
                <Link to="/ports">Ports</Link>
              </li>
              <li>{portDetail ? portDetail.prt_name_en : " "}</li>
            </ul>
          </div>
          <FormFastboatComponent />
        </div>
      </section>

      <section className="" style={{ zIndex: -1 }}>
        <div className="auto-container">
          {error ? (
            <div className="alert alert-danger mb-0">{error}</div>
          ) : loading ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
              {/* Loading Spinner */}
            </svg>
          ) : (
            <>
              <div className="row clearfix mt-3">
                {/* Display first 4 Image Thumbnails */}
                {displayedImages.map((image, index) => (
                  <div className="col-lg-3 col-md-3 col-sm-12 mb-3" key={index}>
                    <div className="image">
                      <img
                        src={image.src}
                        alt={portDetail?.prt_name_en}
                        onClick={() => {
                          setLightboxIndex(index);
                          setLightboxOpen(true);
                        }}
                        style={{ cursor: "pointer", width: "100%" }}
                      />
                    </div>
                  </div>
                ))}

                {/* Show more button if more than 4 images */}
                {images.length > 4 && (
                  <div className="col-lg-3 col-md-3 col-sm-12 mb-3">
                    {/* <button
                      className="btn btn-primary w-100 h-100"
                      onClick={() => {
                        setLightboxIndex(0); 
                        setLightboxOpen(true);
                      }}
                    >
                      View All Images
                    </button> */}
                  </div>
                )}
              </div>

              {/* Lightbox */}
              {lightboxOpen && (
                <Lightbox
                  open={lightboxOpen}
                  close={() => setLightboxOpen(false)}
                  slides={images} // Show all images in lightbox
                  index={lightboxIndex}
                  onIndexChange={setLightboxIndex}
                  plugins={[Fullscreen, Thumbnails, Zoom]} // Enable plugins
                />
              )}
            </>
          )}
        </div>
      </section>

      {/* Peta dan Detail */}
      <section className="fastboat-detail_gallery">
        <div className="auto-container">
          {error ? (
            <div className="alert alert-danger mb-0">{error}</div>
          ) : (
            <>
              <div className="row clearfix ">
                <div className="col-lg-9">
                  <h3>Description</h3>
                  <p>{portDetail?.prt_description_en}</p>
                </div>
                <div className="col-lg-3">
                  {portDetail && portDetail.prt_map && (
                    <>
                      <MapContainer
                        center={portDetail.prt_map.split(",").map(Number)}
                        zoom={13}
                        style={{ height: "300px", width: "100%" }}
                        attributionControl={false}
                      >
                        <TileLayer
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          attribution=""
                        />
                        <Marker
                          position={portDetail.prt_map.split(",").map(Number)}
                        >
                          <Popup>{portDetail.prt_name_en}</Popup>
                        </Marker>
                      </MapContainer>

                      {/* Google Maps Link */}
                      <div className="mt-3 mb-4 text-end">
                        <a
                          href={`https://www.google.com/maps?q=${portDetail.prt_map}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-block"
                        >
                          Show
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
