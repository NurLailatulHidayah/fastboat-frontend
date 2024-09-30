import React, { useState, useEffect, useRef } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import id from "air-datepicker/locale/id";

const FormFastboatComponent = () => {
  // Get data Port
  const [ports, setPorts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDataPort = async () => {
    try {
      const response = await api.get("/api/port");
      setPorts(response.data.data || []);
    } catch (error) {
      console.error("Error fetching data: ", error);
      if (error.response) {
        if (error.response.status === 404) {
          setError(
            "Data tidak ditemukan. Coba periksa URL atau ID yang Anda gunakan."
          );
        } else if (error.response.status === 500) {
          setError("Terjadi kesalahan pada server. Silakan coba lagi nanti.");
        } else {
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
    fetchDataPort();
  }, []);

  const portOptions = ports.map((port) => ({
    value: port.prt_name_en,
    label: port.prt_name_en,
  }));

  // Mengelola tanggal
  const formatDate = (date) => {
    const options = { weekday: "short", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const today = formatDate(new Date());

  const [deptDate, setDeptDate] = useState(today);
  const [returnDate, setReturnDate] = useState(null);

  const handleClearReturnDate = () => {
    setReturnDate(null);
  };

  const deptDateRef = useRef(null);
  const returnDateRef = useRef(null);

  useEffect(() => {
    const deptDatePicker = new AirDatepicker(deptDateRef.current, {
      locale: id,
      dateFormat: "dd-MM-yyyy",
      minDate: new Date(),
      onSelect: ({ date }) => {
        setDeptDate(formatDate(date));
      },
    });

    const returnDatePicker = new AirDatepicker(returnDateRef.current, {
      locale: id,
      dateFormat: "dd-MM-yyyy",
      minDate: new Date(),
      onSelect: ({ date }) => {
        setReturnDate(formatDate(date));
      },
    });

    return () => {
      deptDatePicker.destroy();
      returnDatePicker.destroy();
    };
  }, []);

  // Mengelola Passenger
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

  const handleCountChange = (setter, count, change) => {
    setter(Math.max(0, count + change));
  };

  const totalPassengers = adultCount + childCount + infantCount;

  return (
    <div>
      <div className="banner-one_form-box">
        <div className="travel-form form-fastboat">
          <form className="row g-3 needs-validation" action="/fast-boat-search">
            <div className="col-md-2">
              {loading ? (
                <Select
                  id="departurePort"
                  options={portOptions}
                  placeholder=" Departure Port"
                />
              ) : error ? (
                <div className="alert alert-danger">{error}</div>
              ) : (
                <Select
                  id="departurePort"
                  options={portOptions}
                  placeholder="Departure Port"
                />
              )}
            </div>
            <div className="col-md-2">
              {loading ? (
                <Select
                  id="arrivalPort"
                  options={portOptions}
                  placeholder="Arrival Port"
                />
              ) : error ? (
                <div className="alert alert-danger">{error}</div>
              ) : (
                <Select
                  id="arrivalPort"
                  options={portOptions}
                  placeholder="Arrival Port"
                />
              )}
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-6">
                  <div className="input-group calender-group">
                    <span className="input-group-text">
                      <i className="fa fa-calendar"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="deptDate"
                      ref={deptDateRef}
                      value={deptDate}
                      readOnly
                      required
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="input-group calender-group">
                    <span className="input-group-text">
                      <i className="fa fa-calendar"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="returnDate"
                      ref={returnDateRef}
                      value={returnDate || "Return?"}
                      readOnly
                      required
                    />
                    {returnDate && (
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={handleClearReturnDate}
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="dropdown">
                <div
                  className="btn btn-white  border border-dark-subtle "
                  type="button"
                  data-bs-toggle="dropdown"
                  style={{ width: "100%" }}
                >
                  <span className="fa fa-users" style={{paddingRight:"10px"}}></span>
                  {totalPassengers} Pax
                </div>
                <ul className="dropdown-menu" style={{ width: "100%" }}>
                  <div className="d-flex justify-content-between  border-bottom border-dark p-2">
                    <div className="text">
                      Adult <br />
                      <small>Age 13+</small>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-link text-danger fa fa-minus-circle btn-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCountChange(setAdultCount, adultCount, -1);
                        }}
                        disabled={adultCount === 1}
                      ></button>
                      <span className="mx-2">{adultCount}</span>
                      <button
                        type="button"
                        className="btn btn-link text-success fa fa-plus-circle btn-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCountChange(setAdultCount, adultCount, 1);
                        }}
                      ></button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between  border-bottom border-dark p-2">
                    <div>
                      Child <br />
                      <small>Age 3-12</small>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-link text-danger fa fa-minus-circle btn-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCountChange(setChildCount, childCount, -1);
                        }}
                        disabled={childCount === 0}
                      ></button>
                      <span className="mx-2">{childCount}</span>
                      <button
                        type="button"
                        className="btn btn-link text-success fa fa-plus-circle btn-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCountChange(setChildCount, childCount, 1);
                        }}
                      ></button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between  p-2">
                    <div>
                      Infant <br />
                      <small>Age 0-2</small>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-link text-danger fa fa-minus-circle btn-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCountChange(setInfantCount, infantCount, -1);
                        }}
                        disabled={infantCount === 0}
                      ></button>
                      <span className="mx-2">{infantCount}</span>
                      <button
                        type="button"
                        className="btn btn-link text-success fa fa-plus-circle btn-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCountChange(setInfantCount, infantCount, 1);
                        }}
                      ></button>
                    </div>
                  </div>
                </ul>
              </div>
            </div>

            <div className="col-md-2 col-lg-2">
              <button
                className="btn btn-primary button-box justify-content-between"
                type="submit"
                style={{ width: "100%" }}
              >
                <span className="fa fa-search" style={{paddingRight:"5px"}}></span>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormFastboatComponent;
