import React, { useState, useEffect, useRef } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Select from "react-select";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import id from "air-datepicker/locale/id";
import { useNavigate, useLocation } from "react-router-dom";
import { CurrencyProvider, useCurrency } from '../context/CurrencyContext';

const FormFastboatComponent = () => {
  const [ports, setPorts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const fetchDataPort = async () => {
    try {
      const response = await api.get("/api/port");
      setPorts(response.data.data || []);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError("Terjadi kesalahan saat memuat data. Coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataPort();

    const searchParams = new URLSearchParams(location.search);
    const deptPort = searchParams.get("port_name_departure");
    const arrPort = searchParams.get("port_name_arrival");
    const deptDate = searchParams.get("departure_date");
    const returnDate = searchParams.get("return_date");
    const adult = searchParams.get("adult");
    const child = searchParams.get("child");
    const infant = searchParams.get("infant");

    if (deptPort && arrPort && deptDate) {
      setDeparturePort(deptPort);
      setArrivalPort(arrPort);
      setDeptDate(deptDate);
      setReturnDate(returnDate);
      setAdultCount(adult ? parseInt(adult) : 1);
      setChildCount(child ? parseInt(child) : 0);
      setInfantCount(infant ? parseInt(infant) : 0);
      setIsFormSubmitted(true);
    }
  }, [location.search]);

  const portOptions = ports.map((port) => ({
    value: port.prt_name_en,
    label: port.prt_name_en,
  }));

  const formatDateToYMD = (date) => {
    if (!date) return null;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const today = formatDateToYMD(new Date());

  const [deptDate, setDeptDate] = useState(today);
  const [returnDate, setReturnDate] = useState(null);
  const [departurePort, setDeparturePort] = useState(null);
  const [arrivalPort, setArrivalPort] = useState(null);

  const handleClearReturnDate = () => {
    setReturnDate(null);
  };

  const deptDateRef = useRef(null);
  const returnDateRef = useRef(null);

  useEffect(() => {
    const deptDatePicker = new AirDatepicker(deptDateRef.current, {
      locale: id,
      dateFormat: "yyyy-MM-dd",
      minDate: new Date(),
      onSelect: ({ date }) => {
        if (date) {
          setDeptDate(formatDateToYMD(date));
        }
      },
    });

    const returnDatePicker = new AirDatepicker(returnDateRef.current, {
      locale: id,
      dateFormat: "yyyy-MM-dd",
      minDate: new Date(),
      onSelect: ({ date }) => {
        if (date) {
          setReturnDate(formatDateToYMD(date));
        }
      },
    });

    return () => {
      deptDatePicker.destroy();
      returnDatePicker.destroy();
    };
  }, []);

  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const { currency } = useCurrency();

  const handleCountChange = (setter, count, change) => {
    setter(Math.max(0, count + change));
  };

  const totalPassengers = adultCount + childCount + infantCount;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!departurePort || !arrivalPort || !deptDate) {
      alert("Semua field wajib diisi kecuali Return Date.");
      return;
    }

    const direction = returnDate ? "round_trip" : "one_way";

    const searchParams = new URLSearchParams({
      direction,
      port_name_departure: departurePort,
      port_name_arrival: arrivalPort,
      departure_date: deptDate,
      return_date: returnDate || "",
      adult: adultCount,
      child: childCount,
      infant: infantCount,
      currency,
    }).toString();

    // Navigasi ke halaman pencarian dengan parameter yang terupdate
    navigate(`/fast-boat-search?${searchParams}`);
    setIsFormSubmitted(true);
  };

  return (
    <div>
      <div className="banner-one_form-box">
        <div className="travel-form form-fastboat">
          <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
            <div className="col-md-2">
              <Select
                id="departurePort"
                options={portOptions}
                placeholder="Departure Port"
                onChange={(selected) => setDeparturePort(selected.value)}
                value={departurePort ? { value: departurePort, label: departurePort } : null}
                isDisabled={loading}
                required
              />
            </div>
            <div className="col-md-2">
              <Select
                id="arrivalPort"
                options={portOptions}
                placeholder="Arrival Port"
                onChange={(selected) => setArrivalPort(selected.value)}
                value={arrivalPort ? { value: arrivalPort, label: arrivalPort } : null}
                isDisabled={loading}
                required
              />
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
                  className="btn btn-white border border-dark-subtle"
                  type="button"
                  data-bs-toggle="dropdown"
                  style={{ width: "100%" }}
                >
                  <span className="fa fa-users" style={{ paddingRight: "10px" }}></span>
                  {totalPassengers} Pax
                </div>
                <ul className="dropdown-menu" style={{ width: "100%" }}>
                  <div className="d-flex justify-content-between border-bottom border-dark p-2">
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

                  <div className="d-flex justify-content-between border-bottom border-dark p-2">
                    <div className="text">
                      Child <br />
                      <small>Age 2-12</small>
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

                  <div className="d-flex justify-content-between p-2">
                    <div className="text">
                      Infant <br />
                      <small>Under 2</small>
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

            <div className="col-md-2">
              <button
                type="submit"
                className="btn  "
                style={{ width: "100%", backgroundColor: isFormSubmitted ? "#f7c862" : "#297cbb", // Ubah warna berdasarkan state
                  color: isFormSubmitted ? "black" : "white", }}
              >
                {isFormSubmitted ? "Update" : "Search"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormFastboatComponent;
