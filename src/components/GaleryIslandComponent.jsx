import React, { useState, useEffect } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.min.css";

const GaleryIslandComponent = ({ searchTerm, limit }) => {
  const [islands, setIslands] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetching data Island
  const fetchDataIsland = async () => {
    try {
      const response = await api.get("/api/island");
      setIslands(response.data.data || []);
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataIsland();
  }, []);

  // Pengaturan search data melalui field fb_name
  const filteredIslands = islands
    .filter(
      (island) =>
        island.isd_name &&
        island.isd_name
          .toLowerCase()
          .includes(searchTerm ? searchTerm.toLowerCase() : "")
    )
    .slice(0, limit); // Gunakan slice untuk membatasi jumlah data

  // Skeleton loader untuk pengalaman loading
  const SkeletonLoader = () => (
    <div className="col mb-3">
      <div className="location-block_one-inner border p-3">
        <div
          className="skeleton-image mb-3"
          style={{ height: "150px", backgroundColor: "#e0e0e0" }}
        />
        <div
          className="skeleton-title mb-2"
          style={{ height: "20px", width: "60%", backgroundColor: "#e0e0e0" }}
        />
        <div
          className="skeleton-content"
          style={{ height: "15px", width: "80%", backgroundColor: "#e0e0e0" }}
        />
      </div>
    </div>
  );

  return (
    <div className="mixitup-gallery-island">
      {/* <div className="filter-list mt-4 mb-3"> */}
        {/* <h2 className="text-center mb-4">Galeri Pulau</h2> */}
        {/* Konten */}
      {loading ? (
        // Render skeleton loader
        <div className="row">
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </div>
      ) : error ? (
        // Tampilkan pesan error
        <div className="alert alert-danger text-center">{error}</div>
      ) : filteredIslands.length > 0 ? (
        // Render data pulau
        <div className="row">
          {filteredIslands.map((island, index) => (
            <div
              className="Island-block_one all city nature col-lg-3 col-md-6 col-sm-6 mb-4"
              key={index}
            >
              <div className="Island-block_one-inner border">
                <div className="Island-block_one-image">
                  <a href="#">
                    <img
                      src={`http://localhost:8000/storage/${island.isd_image1}`}
                      alt={island.isd_name}
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="Island-block_one-content">
                  <h5 className="Island-block_one-heading text-center">
                    <a href="#" className="text-decoration-none">
                      {island.isd_name}
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Jika tidak ada data ditemukan
        <p className="text-center">Island tidak ditemukan.</p>
      )}
    </div>
  );
};

export default GaleryIslandComponent;
