import React, { useState, useEffect } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.min.css";
import FormFastboatComponent from "../components/FormFastboatComponent";
import { Link, useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const FastboatDetailPage = () => {
  let { slug } = useParams();
  const [fastboatDetail, setFastboatDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // State untuk lightbox
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const fetchDataFastboatDetail = async () => {
    if (!slug) {
      setError("Slug tidak terdefinisi.");
      setLoading(false);
      return;
    }

    try {
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

  // Mengonversi gambar menjadi array untuk digunakan dalam Lightbox
  const images = fastboatDetail
    ? [
        { src: `http://localhost:8000/storage/${fastboatDetail.fb_image1}` },
        { src: `http://localhost:8000/storage/${fastboatDetail.fb_image2}` },
        { src: `http://localhost:8000/storage/${fastboatDetail.fb_image3}` },
        { src: `http://localhost:8000/storage/${fastboatDetail.fb_image4}` },
        { src: `http://localhost:8000/storage/${fastboatDetail.fb_image5}` },
        { src: `http://localhost:8000/storage/${fastboatDetail.fb_image6}` },
      ]
    : [];

  // Menampilkan hanya 4 gambar pertama
  const displayedImages = images.slice(0, 4);

  return (
    <div>
      <section
        className="page-banner"
        style={{ backgroundImage: "url(/image/main-slider/1.jpg)" }}
      >
        <div className="auto-container">
          <div className="">
            <h4 className="text-center">
              Fastboat {fastboatDetail ? fastboatDetail.fb_name : " "}
            </h4>
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
              {/* SVG animasi loading */}
            </svg>
          ) : (
            <>
              <div className="row clearfix mt-3">
                {displayedImages.map((image, index) => (
                  <div className="col-lg-3 col-md-3 col-sm-12 mt-3" key={index}>
                    <div className="image">
                      <a
                        href="#"
                        onClick={() => {
                          setIsLightboxOpen(true);
                          setLightboxIndex(index);
                        }}
                      >
                        <img
                          src={image.src}
                          alt={fastboatDetail.fb_name}
                          style={{ width: "100%", cursor: "pointer" }}
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tombol untuk melihat semua gambar */}
              {images.length > 4 && (
                <div className="text-center mt-3">
                  {/* <button
                    className="btn btn-primary"
                    onClick={() => {
                      setIsLightboxOpen(true);
                      setLightboxIndex(0); // Buka dari gambar pertama
                    }}
                  >
                    View All Images
                  </button> */}
                </div>
              )}

              {/* Lightbox */}
              {isLightboxOpen && (
                <Lightbox
                  open={isLightboxOpen}
                  close={() => setIsLightboxOpen(false)}
                  slides={images} // Semua gambar tersedia di Lightbox
                  index={lightboxIndex}
                  onIndexChange={setLightboxIndex}
                  plugins={[Fullscreen, Thumbnails, Zoom]} // Plugins tambahan
                />
              )}

              <div className="col border-bottom">
                <h3 style={{ fontFamily: "Poppins", font: "16px" }}>
                  Description
                </h3>
                <p className="mt-3 justify-text opacity-75">
                  {fastboatDetail.fb_description_en}
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="fastboat-detail_gallery ">
        <div className="auto-container">
          {/* <div className="col border-bottom">
            <h3 style={{ fontFamily: "Poppins", font: "16px" }}>Description</h3>
            <p className="mt-3 justify-text opacity-75">
              {fastboatDetail.fb_description_en}
            </p>
          </div> */}
          <div className="col-lg-12 ">
            <h3>Schedule</h3>
            <table className="table table-hover mt-3 mb-5 text-center">
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
                  <tr className="schedule">
                    <td>No schedule available</td>
                  </tr>
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
