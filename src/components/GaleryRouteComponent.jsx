// import React from 'react'
import React, { useState, useEffect } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.min.css";

const GaleryRouteComponent = () => {
  const [routes, setRoutes] = useState([]);
  const [error, setError] = useState(null);

  // Fetching data fastboat
  const fetchDataRoute = async () => {
    try {
      const response = await api.get("/api/route");
      setRoutes(response.data.data || []);
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
    fetchDataRoute();
  }, []);

  return (
    <div className="container mt-5">
      {error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : (
        <div className="row clearfix">
          {routes.map((route) => (
            <div className="col-md-4 " key={route.rt_id}>
              <div
                className=" text-center opacity-75"
                style={{
                  fontSize: "16px",
                  textDecoration: "line",
                  cursor: "pointer",
                }}
              >
                <p>
                  {route.rt_dept_island} to {route.rt_arrival_island}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GaleryRouteComponent;
