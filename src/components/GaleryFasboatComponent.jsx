import React, { useState, useEffect } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const GaleryFasboatComponent = ({ searchTerm, limit }) => {
  const [fastboats, setFastboats] = useState([]);
  const [error, setError] = useState(null);

  // Fetching data fastboat
  const fetchDataFastboat = async () => {
    try {
      const response = await api.get("/api/fast-boat");
      setFastboats(response.data.data || []);
    } catch (error) {
      console.error("Error fetching data: ", error);
      if (error.response) {
        if (error.response.status === 404) {
          setError("Data tidak ditemukan.");
        } else {
          setError("Terjadi kesalahan pada server.");
        }
      } else {
        setError("Tidak dapat terhubung ke server.");
      }
    }
  };

  useEffect(() => {
    fetchDataFastboat();
  }, []);

  // Pengaturan search data melalui field fb_name
  const filteredFastboats = fastboats
    .filter(
      (fastboat) =>
        fastboat.fb_name &&
        fastboat.fb_name
          .toLowerCase()
          .includes(searchTerm ? searchTerm.toLowerCase() : "")
    )
    .slice(0, limit); // Gunakan slice untuk membatasi jumlah data

  return (
    <div className="mixitup-gallery">
      <div className="filter-list row row-cols-1 row-cols-md-4 g-4 mt-3">
        {error ? (
          <div className="alert alert-danger mb-0">{error}</div>
        ) : filteredFastboats.length > 0 ? (
          filteredFastboats.map((fastboat, index) => (
            <div
              key={index}
              className=" col"
              // location-block_one all city nature
            >
              <div className="location-block_one-inner border">
                <div className="location-block_one-image">
                  <Link
                    to={`/fast-boat/fast-boat-details/${fastboat.fb_slug_en}`}
                  >
                    <img
                      src={`http://localhost:8000/storage/${fastboat.fb_image1}`}
                      alt={fastboat.fb_name}
                      className="fastboat-image"
                    />
                  </Link>
                </div>
                <div className="location-block_one-content">
                  <h5 className="location-block_one-heading">
                    <Link
                      to={`/fast-boat/fast-boat-details/${fastboat.fb_slug_en}`}
                    >
                      {fastboat.fb_name}
                    </Link>
                  </h5>
                  <div className="location-block_one">
                    {fastboat.fb_content_en}
                  </div>
                  <Link
                    to={`/fast-boat/fast-boat-details/${fastboat.fb_slug_en}`}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default GaleryFasboatComponent;
