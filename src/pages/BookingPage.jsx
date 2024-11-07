import React, { useState, useEffect } from "react";
import api from "../api"; // Pastikan import axios instance
import "bootstrap/dist/css/bootstrap.min.css";
import PaymentComponent from "../components/PaymentComponent";
import { useLocation } from "react-router-dom"; // Import useLocation to get the query
import { CurrencyProvider, useCurrency } from "../context/CurrencyContext";

const BookingPage = () => {
  const [nationalitys, setNationalitys] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Indonesia");
  const [validated, setValidated] = useState(false);
  // const { currency } = useCurrency();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDataNationalitys = async () => {
    try {
      const response = await api.get("/api/nationality");
      // setNationalitys(response.data.data || []);
      const nationalityData = response.data.data || [];
      setNationalitys(nationalityData);

      // Cari ID untuk Indonesia dan set sebagai default jika ditemukan
      const indonesia = nationalityData.find(
        (nationality) => nationality.nas_country === "Indonesia"
      );
      if (indonesia) {
        setSelectedCountry(indonesia.nas_id);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError("Terjadi kesalahan saat memuat data. Coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataNationalitys();
  }, []);

  const nationalityOptions = nationalitys.map((nationality) => ({
    value: nationality.nas_id,
    label: nationality.nas_country,
  }));

  const location = useLocation();
  // const currency = urlParams.get("currency");
  const urlParams = new URLSearchParams(window.location.search);
  const {
    direction,
    departureDate,
    returnDate,
    selectedDeparture,
    selectedReturn,
    // currency,
  } = location.state || {};

  // Parse passenger counts as integers, default to 0 if parsing fails
  const adult = parseInt(urlParams.get("adult")) || 0;
  const child = parseInt(urlParams.get("child")) || 0;
  const infant = parseInt(urlParams.get("infant")) || 0;

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // };

  // Function to calculate duration
  const calculateDuration = (deptTime, arrivalTime) => {
    const [deptHour, deptMinute] = deptTime.split(":").map(Number);
    const [arrivalHour, arrivalMinute] = arrivalTime.split(":").map(Number);

    const durationMinutes =
      arrivalHour * 60 + arrivalMinute - (deptHour * 60 + deptMinute);

    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;

    return `${hours} hour ${minutes} minute`;
  };

  // Calculate duration for departure
  const departureDuration = selectedDeparture
    ? calculateDuration(
        selectedDeparture.fba_dept_time,
        selectedDeparture.fba_arrival_time
      )
    : "0 hour 0 minute";

  // Calculate duration for return if applicable
  const returnDuration = selectedReturn
    ? calculateDuration(
        selectedReturn.fba_dept_time,
        selectedReturn.fba_arrival_time
      )
    : "0 hour 0 minute";

  console.log("Departure Duration:", departureDuration);
  console.log("Return Duration:", returnDuration);

  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (timeString) =>
    timeString.split(":").slice(0, 2).join(":");

  const formatCurrency = (amount) => {
    const numericAmount =
      typeof amount === "string" ? parseFloat(amount) : amount;
    return numericAmount ? numericAmount.toLocaleString("id-ID") : " 0 ";
  };

  const { currency, setCurrency } = useCurrency(CurrencyProvider); // Access currency context

  useEffect(() => {
    localStorage.removeItem("selectedMethod");
    localStorage.removeItem("selectedLogo");
  }, []);

  const calculateSubtotal = (
    adults,
    children,
    infants,
    adultPrice,
    childPrice,
    infantPrice
  ) => {
    const adultTotal = adults * adultPrice;
    const childTotal = children * childPrice;
    const infantTotal = infants * infantPrice;
    return adultTotal + childTotal + infantTotal;
  };

  // Hitung subtotal untuk departure
  const departureSubtotal =
    (direction === "one_way" || direction === "round_trip") && selectedDeparture
      ? calculateSubtotal(
          adult,
          child,
          infant,
          parseFloat(selectedDeparture?.fba_adult_publish || 0),
          parseFloat(selectedDeparture?.fba_child_publish || 0),
          parseFloat(selectedDeparture?.fba_infant_publish || 0)
        )
      : 0;

  // Hitung subtotal untuk return
  const returnSubtotal =
    direction === "round_trip" && selectedReturn
      ? calculateSubtotal(
          adult,
          child,
          infant,
          parseFloat(selectedReturn?.fba_adult_publish || 0),
          parseFloat(selectedReturn?.fba_child_publish || 0),
          parseFloat(selectedReturn?.fba_infant_publish || 0)
        )
      : 0;

  const total = departureSubtotal + returnSubtotal;

  // Generate form for each passenger type
  const renderPassengerForms = (count, type) => {
    return Array.from({ length: count }).map((_, index) => (
      <div
        key={`${type}-${index}`}
        className="row g-4 needs-validation mt-3 mb-3"
        noValidate
      >
        <h4
          className="opacity-75 mt-2"
          style={{
            fontFamily: "Poppins",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}-{index + 1}
        </h4>
        <div className="col-md-6">
          <label htmlFor={`${type}${index + 1}Name`} className="form-label">
            {type.charAt(0).toUpperCase() + type.slice(1)}-{index + 1} Name{" "}
            <span>*</span>
          </label>
          <input
            type="text"
            className="form-control py-2"
            id={`${type}${index + 1}Name`}
            placeholder={`${type.charAt(0).toUpperCase() + type.slice(1)}-${
              index + 1
            } name`}
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please provide a valid name.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor={`${type}${index + 1}Age`} className="form-label">
            {type.charAt(0).toUpperCase() + type.slice(1)}-{index + 1} Age
            (years) <span>*</span>
          </label>
          <select
            className="form-select py-2"
            id={`${type}${index + 1}Age`}
            required
          >
            {type === "adult" && (
              // Adult age range (13 to 65+)
              <>
                {[...Array(53)].map((_, i) => (
                  <option key={i} value={i + 13}>
                    {i + 13}
                  </option>
                ))}
                <option value="65+">65+</option>
              </>
            )}
            {type === "child" &&
              // Child age range (3 to 12)
              [...Array(10)].map((_, i) => (
                <option key={i} value={i + 3}>
                  {i + 3}
                </option>
              ))}
            {type === "infant" &&
              // Infant age range (0 to 2)
              [...Array(3)].map((_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
          </select>
          <div className="invalid-feedback">Please select a valid age.</div>
        </div>

        <div className="col-md-6">
          <label htmlFor={`${type}${index + 1}Gender`} className="form-label">
            {type.charAt(0).toUpperCase() + type.slice(1)}-{index + 1} Gender{" "}
            <span>*</span>
          </label>
          <select
            className="form-select py-2 opacity-75"
            id={`${type}${index + 1}Gender`}
            required
            defaultValue="option1"
          >
            <option value="option1">Male</option>
            <option value="option2">Female</option>
            <option value="option3">Other</option>
          </select>
          <div className="invalid-feedback">Please select a valid gender.</div>
        </div>
        <div className="col-md-6">
          <label
            htmlFor={`${type}${index + 1}Nationality`}
            className="form-label"
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}-{index + 1}{" "}
            Nationality <span>*</span>
          </label>
          <select
            className="form-select py-2 opacity-75"
            id={`${type}${index + 1}Nationality`}
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            required
          >
            {nationalitys.map((nationality) => (
              <option key={nationality.nas_id} value={nationality.nas_id}>
                {nationality.nas_country}
              </option>
            ))}
          </select>
          <div className="invalid-feedback">
            Please select a valid nationality.
          </div>
        </div>
      </div>
    ));
  };

  // Post data contact
  const [contact, setContact] = useState({
    ctc_name: "",
    ctc_email: "",
    ctc_phone: "",
    ctc_nationality: "",
  });

  const [tripIds, setTripIds] = useState([]);
  const [passengers, setPassengers] = useState([
    { name: "", age: "", gender: "male", nationality: "" },
  ]);

  // Fungsi untuk handle perubahan pada form contact
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  // Fungsi untuk handle perubahan pada trip IDs
  const handleTripChange = (e) => {
    setTripIds(e.target.value.split(",")); // Contoh input trip ID, pisahkan dengan koma
  };

  // Fungsi untuk handle perubahan pada data penumpang
  const handlePassengerChange = (index, field, value) => {
    const newPassengers = [...passengers];
    newPassengers[index][field] = value;
    setPassengers(newPassengers);
  };

  // Fungsi untuk menambahkan penumpang baru
  const addPassenger = () => {
    setPassengers([
      ...passengers,
      { name: "", age: "", gender: "male", nationality: "" },
    ]);
  };

  // Fungsi untuk submit data ke backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit = {
      contact,
      trip: { ids: tripIds },
      passengers,
    };

    try {
      const response = await api.post("/api/booking", dataToSubmit);
      console.log("Response:", response.data);
      alert("Data berhasil dikirim!");
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim data:", error);
      alert("Gagal mengirim data. Coba lagi.");
    }
  };

  // State untuk menentukan apakah form pickup dan dropoff harus ditampilkan secara terpisah
const [isDeparturePickupChecked, setIsDeparturePickupChecked] = useState(false);
const [isDepartureDropoffChecked, setIsDepartureDropoffChecked] = useState(false);
const [isReturnPickupChecked, setIsReturnPickupChecked] = useState(false);
const [isReturnDropoffChecked, setIsReturnDropoffChecked] = useState(false);

// Fungsi untuk meng-handle perubahan checkbox untuk departure dan return
const handleDeparturePickupChange = () => {
  setIsDeparturePickupChecked(!isDeparturePickupChecked);
};

const handleDepartureDropoffChange = () => {
  setIsDepartureDropoffChecked(!isDepartureDropoffChecked);
};

const handleReturnPickupChange = () => {
  setIsReturnPickupChecked(!isReturnPickupChecked);
};

const handleReturnDropoffChange = () => {
  setIsReturnDropoffChecked(!isReturnDropoffChecked);
};

  // State untuk menentukan apakah form pickup dan dropoff harus ditampilkan
  // const [isPickupChecked, setIsPickupChecked] = useState(false);
  // const [isDropoffChecked, setIsDropoffChecked] = useState(false);

  // Fungsi untuk meng-handle perubahan checkbox
  // const handlePickupChange = () => {
  //   setIsPickupChecked(!isPickupChecked);
  // };

  // const handleDropoffChange = () => {
  //   setIsDropoffChecked(!isDropoffChecked);
  // };

  // const [selectedPickup, setSelectedPickup] = useState(" ");
  // const [selectedDropoff, setSelectedDropoff] = useState(" ");

  // const [pickupLocation, setPickupLocation] = useState(" ");
  // const [dropoffLocation, setDropoffLocation] = useState(" ");
  // const [pickupAddress, setPickupAddress] = useState(""); 
  // const [dropoffAddress, setDropoffAddress] = useState(""); 

  // console.log("Shuttle Type:", selectedDeparture.shuttle_type);

  // const handlePickupDeptChange = (event) => {
  //   const selectedPickupId = parseInt(event.target.value); 
  //   console.log("Selected Pickup ID:", selectedPickupId);

  //   const selectedPickup = selectedDeparture.fbo_pickups.find(
  //     (pickup) => pickup.id === selectedPickupId
  //   );
  //   console.log("Pickup selected:", selectedPickup);

  //   if (selectedDeparture && selectedDeparture.fbo_pickups) {
  //     console.log("Selected Pickup:", selectedPickup);
  //     setSelectedPickup(selectedPickupId); 
  //   } else {
  //     console.log("Pickup data is not available yet.");
  //   }

  //   // Cek shuttle type dan meeting point pickup
  //   if (
  //     selectedDeparture.shuttle_type === "Sharing" &&
  //     selectedPickup?.pickup_meeting_point
  //   ) {
  //     setPickupAddress(selectedPickup.pickup_meeting_point);
  //     console.log(
  //       "Pickup Address set to:",
  //       selectedPickup.pickup_meeting_point
  //     );
  //   } else {
  //     setPickupAddress("");
  //   }
  // };

  // const handleDropoffDeptChange = (event) => {
  //   const selectedDropoffId = parseInt(event.target.value); // Pastikan nilai yang dikirim ID
  //   console.log("Selected Dropoff ID:", selectedDropoffId);

  //   const selectedDropoff = selectedDeparture.fbo_dropoffs.find(
  //     (dropoff) => dropoff.id === selectedDropoffId
  //   );
  //   console.log("Dropoff selected:", selectedDropoff);

  //   if (selectedDeparture && selectedDeparture.fbo_dropoffs) {
  //     console.log("Selected Dropoff:", selectedDropoff);
  //     setSelectedDropoff(selectedDropoffId); // Menyimpan ID, bukan nama
  //   } else {
  //     console.log("Dropoff data is not available yet.");
  //   }

  //   // Cek shuttle type dan meeting point dropoff
  //   if (
  //     selectedDeparture.shuttle_type === "Sharing" &&
  //     selectedDropoff?.dropoff_meeting_point
  //   ) {
  //     setDropoffAddress(selectedDropoff.dropoff_meeting_point);
  //     console.log(
  //       "Dropoff Address set to:",
  //       selectedDropoff.dropoff_meeting_point
  //     );
  //   } else {
  //     setDropoffAddress("");
  //   }
  // };
  // const handlePickupReturnChange = (event) => {
  //   const selectedPickupId = parseInt(event.target.value); 
  //   console.log("Selected Pickup ID:", selectedPickupId);

  //   const selectedPickup = selectedReturn.fbo_pickups.find(
  //     (pickup) => pickup.id === selectedPickupId
  //   );
  //   console.log("Pickup selected:", selectedPickup);

  //   if (selectedReturn && selectedReturn.fbo_pickups) {
  //     console.log("Selected Pickup:", selectedPickup);
  //     setSelectedPickup(selectedPickupId); 
  //   } else {
  //     console.log("Pickup data is not available yet.");
  //   }

  //   // Cek shuttle type dan meeting point pickup
  //   if (
  //     selectedReturn.shuttle_type === "Sharing" &&
  //     selectedPickup?.pickup_meeting_point
  //   ) {
  //     setPickupAddress(selectedPickup.pickup_meeting_point);
  //     console.log(
  //       "Pickup Address set to:",
  //       selectedPickup.pickup_meeting_point
  //     );
  //   } else {
  //     setPickupAddress("");
  //   }
  // };

  // const handleDropoffReturnChange = (event) => {
  //   const selectedDropoffId = parseInt(event.target.value); // Pastikan nilai yang dikirim ID
  //   console.log("Selected Dropoff ID:", selectedDropoffId);

  //   const selectedDropoff = selectedReturn.fbo_dropoffs.find(
  //     (dropoff) => dropoff.id === selectedDropoffId
  //   );
  //   console.log("Dropoff selected:", selectedDropoff);

  //   if (selectedReturn && selectedReturn.fbo_dropoffs) {
  //     console.log("Selected Dropoff:", selectedDropoff);
  //     setSelectedDropoff(selectedDropoffId); // Menyimpan ID, bukan nama
  //   } else {
  //     console.log("Dropoff data is not available yet.");
  //   }

  //   // Cek shuttle type dan meeting point dropoff
  //   if (
  //     selectedReturn.shuttle_type === "Sharing" &&
  //     selectedDropoff?.dropoff_meeting_point
  //   ) {
  //     setDropoffAddress(selectedDropoff.dropoff_meeting_point);
  //     console.log(
  //       "Dropoff Address set to:",
  //       selectedDropoff.dropoff_meeting_point
  //     );
  //   } else {
  //     setDropoffAddress("");
  //   }
  // };

  // Function to handle pickup selection
  // const handlePickupSelection = (pickup) => {
  //   if (selectedDeparture.shuttle_type === "Sharing" && pickup.pickup_meeting_point) {
  //     setAddress(pickup.pickup_meeting_point);
  //   }
  // };

//  Departure
const [departurePickup, setDeparturePickup] = useState("");
const [departurePickupAddress, setDeparturePickupAddress] = useState("");

const [departureDropoff, setDepartureDropoff] = useState("");
const [departureDropoffAddress, setDepartureDropoffAddress] = useState("");

// Handler for Departure Pickup change
const handlePickupDeptChange = (event) => {
  const departurePickupId = parseInt(event.target.value);
  const departurePickup = selectedDeparture.fbo_pickups.find(
    (pickup) => pickup.id === departurePickupId
  );

  setDeparturePickup(departurePickupId); // Update departure pickup ID
  if (selectedDeparture.shuttle_type === "Sharing" && departurePickup?.pickup_meeting_point) {
    setDeparturePickupAddress(departurePickup.pickup_meeting_point); // Update departure pickup address
  } else {
    setDeparturePickupAddress("");
  }
};

// Handler for Departure Dropoff change
const handleDropoffDeptChange = (event) => {
  const departureDropoffId = parseInt(event.target.value);
  const departureDropoff = selectedDeparture.fbo_dropoffs.find(
    (dropoff) => dropoff.id === departureDropoffId
  );

  setDepartureDropoff(departureDropoffId); // Update departure dropoff ID
  if (selectedDeparture.shuttle_type === "Sharing" && departureDropoff?.dropoff_meeting_point) {
    setDepartureDropoffAddress(departureDropoff.dropoff_meeting_point); // Update departure dropoff address
  } else {
    setDepartureDropoffAddress("");
  }
};


// Return
const [returnPickup, setReturnPickup] = useState("");
const [returnPickupAddress, setReturnPickupAddress] = useState("");

const [returnDropoff, setReturnDropoff] = useState("");
const [returnDropoffAddress, setReturnDropoffAddress] = useState("");
  
// Handler for Return Pickup change
const handlePickupReturnChange = (event) => {
  const returnPickupId = parseInt(event.target.value);
  const returnPickup = selectedReturn.fbo_pickups.find(
    (pickup) => pickup.id === returnPickupId
  );

  setReturnPickup(returnPickupId); // Update return pickup ID
  if (selectedReturn.shuttle_type === "Sharing" && returnPickup?.pickup_meeting_point) {
    setReturnPickupAddress(returnPickup.pickup_meeting_point); // Update return pickup address
  } else {
    setReturnPickupAddress("");
  }
};

// Handler for Return Dropoff change
const handleDropoffReturnChange = (event) => {
  const returnDropoffId = parseInt(event.target.value);
  const returnDropoff = selectedReturn.fbo_dropoffs.find(
    (dropoff) => dropoff.id === returnDropoffId
  );

  setReturnDropoff(returnDropoffId); // Update return dropoff ID
  if (selectedReturn.shuttle_type === "Sharing" && returnDropoff?.dropoff_meeting_point) {
    setReturnDropoffAddress(returnDropoff.dropoff_meeting_point); // Update return dropoff address
  } else {
    setReturnDropoffAddress("");
  }
};

  return (
    <div>
      <section className="">
        <form
          action="/payment"
          className={`needs-validation ${validated ? "was-validated" : ""}`}
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="d-flex mt-3 mb-3 m-5 ">
            <div className="col-lg-9 border rounded px-5 py-4">
              {selectedDeparture && (
                <div className="">
                  <h4
                    className="text-center opacity-75"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "22px",
                      paddingBottom: "10px",
                    }}
                  >
                    <b>Selected Departure Trip </b> (
                    {departureDate ? formatDate(departureDate) : " "})
                  </h4>
                  <div className="row g-3 text-center border border-dark rounded mt-3 mb-3 ">
                    <div className="col-lg-4">
                      <img
                        src={selectedDeparture.cpn_logo}
                        alt={selectedDeparture.cpn_name}
                        className="me-2"
                        style={{ width: "70px", height: "50px" }}
                      />
                      <p className="fw-bolder opacity-75">
                        <span>
                          <img
                            src="/image/icons/yatch-svgrepo-com.svg"
                            alt="Departure"
                            style={{ width: "30px" }}
                          />
                        </span>{" "}
                        Departure :{" "}
                        {selectedDeparture
                          ? formatTime(selectedDeparture.fba_dept_time)
                          : " "}
                      </p>
                      <p>
                        {" "}
                        <b className="text-primary opacity-75">
                          {selectedDeparture.dept_port}
                        </b>{" "}
                        - {selectedDeparture.dept_island}
                      </p>
                    </div>
                    <div className="col-lg-4 opacity-75 ">
                      <p className="fw-bolder mt-3">
                        {selectedDeparture.cpn_name}
                      </p>
                      <p className="fw-bolder ">
                        <span>
                          <img
                            src="/image/icons/big-anchor-svgrepo-com.svg"
                            alt="arrival"
                            style={{ width: "20px" }}
                          />
                        </span>{" "}
                        Arrival :{" "}
                        {selectedDeparture
                          ? formatTime(selectedDeparture.fba_arrival_time)
                          : " "}
                      </p>
                      <p>
                        <b className="text-primary">
                          {" "}
                          {selectedDeparture.arrival_port}
                        </b>{" "}
                        - {selectedDeparture.arrival_island}
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <p
                        className="border rounded py-1"
                        style={{
                          fontSize: "14px",
                          background: "#faca3b",
                          width: "150px",
                          margin: "0 auto",
                        }}
                      >
                        {departureDuration} {/* Displays departure duration */}
                      </p>
                      <p
                        className="opacity-75"
                        style={{ marginBottom: "5px", marginTop: "10px" }}
                      >
                        <b>
                          {currency.cy_code}{" "}
                          {selectedDeparture
                            ? formatCurrency(
                                selectedDeparture.fba_adult_publish
                              )
                            : " "}
                        </b>{" "}
                        / Adult
                      </p>
                      <p className="opacity-75" style={{ marginBottom: "5px" }}>
                        {" "}
                        <b>
                          {currency.cy_code}{" "}
                          {selectedDeparture
                            ? formatCurrency(
                                selectedDeparture.fba_child_publish
                              )
                            : " "}
                        </b>{" "}
                        / Child
                      </p>

                      {/* Price Detail Button */}
                      <button
                        type="button"
                        className="btn bg-success text-white btn-sm mb-2"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <img
                          src="/image/icons/eye-svgrepo-com.svg"
                          alt=""
                          style={{ width: "20px" }}
                        />
                        <span className="mx-1">Price Detail</span>
                      </button>

                      {/* Modal for Departure Price */}
                      <div
                        className="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabIndex={-1}
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fw-bolder"
                                id="staticBackdropLabel"
                                style={{
                                  fontFamily: "Poppins",
                                  fontSize: "28px",
                                }}
                              >
                                {selectedDeparture.cpn_name}
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body opacity-75 border-top border-bottom border-dark-subtle">
                              <h4
                                className="d-flex justify-content-start mb-2"
                                style={{
                                  fontFamily: "Poppins",
                                  fontSize: "20px",
                                }}
                              >
                                {currency.cy_code}{" "}
                                {selectedDeparture
                                  ? formatCurrency(
                                      selectedDeparture.fba_adult_publish
                                    )
                                  : " "}{" "}
                                X {adult} Adult
                              </h4>
                              <h4
                                className="d-flex justify-content-start mb-2"
                                style={{
                                  fontFamily: "Poppins",
                                  fontSize: "20px",
                                }}
                              >
                                {currency.cy_code}{" "}
                                {selectedDeparture
                                  ? formatCurrency(
                                      selectedDeparture.fba_child_publish
                                    )
                                  : " "}{" "}
                                X {child} Child
                              </h4>
                              <h4
                                className="d-flex justify-content-start"
                                style={{
                                  fontFamily: "Poppins",
                                  fontSize: "20px",
                                }}
                              >
                                {currency.cy_code}{" "}
                                {selectedDeparture.fba_infant_publish || " 0 "}X{" "}
                                {infant} Infant
                              </h4>
                            </div>
                            <div className="modal-footer d-flex justify-content-start">
                              <h4
                                className="fw-bolder"
                                style={{
                                  fontFamily: "Poppins",
                                  fontSize: "20px",
                                }}
                              >
                                {" "}
                                Price total :{" "}
                                {departureSubtotal.toLocaleString()}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          checked={isDeparturePickupChecked}
                          onChange={handleDeparturePickupChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox1"
                        >
                          Pickup Shuttle
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          checked={isDepartureDropoffChecked}
                          onChange={handleDepartureDropoffChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineCheckbox2"
                        >
                          Dropoff Shuttle
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedReturn && (
                <div className="border-bottom mt-3">
                  <h4
                    className="text-center opacity-75"
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "22px",
                      paddingBottom: "10px",
                    }}
                  >
                    <b>Selected Return Trip </b> (
                    {returnDate ? formatDate(returnDate) : " "})
                  </h4>
                  <div className="row g-3 text-center border border-dark rounded mt-3 mb-3 ">
                    <div className="col-lg-4">
                      <img
                        src={selectedReturn.cpn_logo}
                        alt={selectedReturn.cpn_name}
                        className="me-2"
                        style={{ width: "70px", height: "50px" }}
                      />
                      <p className="fw-bolder opacity-75">
                        <span>
                          <img
                            src="/image/icons/yatch-svgrepo-com.svg"
                            alt="Departure"
                            style={{ width: "30px" }}
                          />
                        </span>{" "}
                        Departure :{" "}
                        {selectedReturn
                          ? formatTime(selectedReturn.fba_dept_time)
                          : " "}
                      </p>
                      <p>
                        {" "}
                        <b className="text-primary opacity-75">
                          {selectedReturn.dept_port}
                        </b>{" "}
                        - {selectedReturn.dept_island}
                      </p>
                    </div>
                    <div className="col-lg-4 opacity-75">
                      <p className="fw-bolder mt-3">
                        {selectedReturn.cpn_name}
                      </p>
                      <p className="fw-bolder ">
                        <span>
                          <img
                            src="/image/icons/big-anchor-svgrepo-com.svg"
                            alt="arrival"
                            style={{ width: "20px" }}
                          />
                        </span>{" "}
                        Arrival :{" "}
                        {selectedReturn
                          ? formatTime(selectedReturn.fba_arrival_time)
                          : " "}
                      </p>
                      <p>
                        <b className="text-primary">
                          {selectedReturn.arrival_port}
                        </b>{" "}
                        -{selectedReturn.arrival_island}
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <p
                        className="border rounded py-1"
                        style={{
                          fontSize: "14px",
                          background: "#faca3b",
                          width: "150px",
                          margin: "0 auto",
                        }}
                      >
                        {returnDuration} {/* Displays return duration */}
                      </p>
                      <p
                        className="opacity-75"
                        style={{ marginBottom: "5px", marginTop: "10px" }}
                      >
                        <b>
                          {currency.cy_code}{" "}
                          {selectedReturn
                            ? formatCurrency(selectedReturn.fba_adult_publish)
                            : " "}
                        </b>{" "}
                        / Adult
                      </p>
                      <p className="opacity-75" style={{ marginBottom: "5px" }}>
                        <b>
                          {currency.cy_code}{" "}
                          {selectedReturn
                            ? formatCurrency(selectedReturn.fba_child_publish)
                            : " "}
                        </b>{" "}
                        / Child
                      </p>

                      {/* Price Detail Button */}
                      <button
                        type="button"
                        className="btn bg-success text-white btn-sm mb-2"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdropReturn"
                      >
                        <img
                          src="/image/icons/eye-svgrepo-com.svg"
                          alt=""
                          style={{ width: "20px" }}
                        />
                        <span className="mx-1">Price Detail</span>
                      </button>

                      {/* Modal for Return Price */}
                      <div
                        className="modal fade"
                        id="staticBackdropReturn"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabIndex={-1}
                        aria-labelledby="staticBackdropReturnLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fw-bolder"
                                id="staticBackdropReturnLabel"
                                style={{
                                  fontFamily: "Poppins",
                                  fontSize: "28px",
                                }}
                              >
                                {selectedReturn.cpn_name}
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body opacity-75 border-top border-bottom border-dark-subtle">
                              <h4
                                className="d-flex justify-content-start mb-2"
                                style={{
                                  fontFamily: "Poppins",
                                  fontSize: "20px",
                                }}
                              >
                                {currency.cy_code}{" "}
                                {selectedReturn
                                  ? formatCurrency(
                                      selectedReturn.fba_adult_publish
                                    )
                                  : " "}{" "}
                                X {adult} Adult
                              </h4>
                              <h4
                                className="d-flex justify-content-start mb-2"
                                style={{
                                  fontFamily: "Poppins",
                                  fontSize: "20px",
                                }}
                              >
                                {currency.cy_code}{" "}
                                {selectedReturn
                                  ? formatCurrency(
                                      selectedReturn.fba_child_publish
                                    )
                                  : " "}{" "}
                                X {child} Child
                              </h4>
                              <h4
                                className="d-flex justify-content-start"
                                style={{
                                  fontFamily: "Poppins",
                                  fontSize: "20px",
                                }}
                              >
                                {currency.cy_code}{" "}
                                {selectedReturn.fba_infant_publish || " 0 "} X{" "}
                                {infant} Infant
                              </h4>
                            </div>
                            <div className="modal-footer d-flex justify-content-start">
                              <h4
                                className="fw-bolder"
                                style={{
                                  fontFamily: "Poppins",
                                  fontSize: "20px",
                                }}
                              >
                                {" "}
                                Price total : {returnSubtotal.toLocaleString()}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="pickupShuttle"
                          checked={isReturnPickupChecked}
                          onChange={handleReturnPickupChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="pickupShuttle"
                        >
                          Pickup Shuttle
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="dropoffShuttle"
                          checked={isReturnDropoffChecked}
                          onChange={handleReturnDropoffChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="dropoffShuttle"
                        >
                          Dropoff Shuttle
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="row g-4 needs-validation mt-3" noValidate>
                <h4
                  className="text-center opacity-75 border-bottom"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "22px",
                    paddingBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Customer Information
                </h4>
                <h4
                  className="opacity-75 mt-2"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  Contact Info
                </h4>
                <div className="col-md-6">
                  <label htmlFor="nameContact" className="form-label">
                    Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="ctc_name"
                    value={contact.ctc_name}
                    onChange={handleContactChange}
                    className="form-control py-2"
                    id="nameContact"
                    placeholder="Name"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Please provide a valid phone name.
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationCustom02" className="form-label">
                    Email <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="ctc_email"
                    value={contact.ctc_email}
                    onChange={handleContactChange}
                    className="form-control py-2"
                    id="validationCustom02"
                    placeholder="contact@gmail.com"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>

                  <div className="invalid-feedback">
                    Please provide a valid email.
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="validationCustom03" className="form-label">
                    Phone <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="ctc_phone"
                    value={contact.ctc_phone}
                    onChange={handleContactChange}
                    className="form-control py-2"
                    id="validationCustom03"
                    placeholder="+62XXXXXXXXXXX"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid phone number.
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <label htmlFor="nationality" className="form-label">
                    Nationality <span>*</span>
                  </label>
                  <select
                    className="form-select py-2 opacity-75"
                    id="nationality"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    required
                  >
                    {/* <option value={selectedCountry}></option> */}
                    {nationalitys.map((nationality) => (
                      <option
                        key={nationality.nas_id}
                        value={nationality.nas_id}
                      >
                        {nationality.nas_country}
                      </option>
                    ))}
                  </select>
                  {/* )} */}

                  <div className="invalid-feedback">
                    Please select a valid nationality.
                  </div>
                </div>
              </div>

              <div
                className="row g-4 needs-validation border-bottom mt-2"
                noValidate
              >
                <h4
                  className="text-center opacity-75 border-bottom mt-4"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "22px",
                    paddingBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Passenger Details
                </h4>
                {renderPassengerForms(adult, "adult")}
                {renderPassengerForms(child, "child")}
                {renderPassengerForms(infant, "infant")}
              </div>

              {/* Form Pickup Shuttle Departure*/}
              {isDeparturePickupChecked && (
                <div className="row g-4 border-bottom mt-2">
                  <div className="fw-bolder" style={{ fontSize: "20px" }}>
                    Pickup Shuttle Departure
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="pickup">
                            Pickup Area
                          </label>
                          <select
                            style={{ borderColor: "lightgray" }}
                            className="form-control"
                            id="pickup"
                            value={departurePickup}
                            onChange={handlePickupDeptChange}
                          >
                            <option value="">Select Pickup Area</option>
                            {selectedDeparture?.fbo_pickups?.map((pickup) => (
                              <option key={pickup.id} value={pickup.id}>
                                {pickup.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label">Phone</label>
                          <input
                            type="text"
                            style={{ borderColor: "lightgray" }}
                            className="form-control"
                            placeholder="+62XXXXXXXXXXX"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-3">
                        <label className="form-label">Address Pickup</label>
                        <input
                          className="form-control"
                          type="text"
                          style={{ borderColor: "lightgray" }}
                          value={departurePickupAddress} // Tampilkan alamat pickup
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Dropoff Shuttle Departure */}
              {isDepartureDropoffChecked && (
                <div className="row g-4 border-bottom mt-2">
                  <div className="fw-bolder" style={{ fontSize: "20px" }}>
                    Dropoff Shuttle Departure
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="dropoff">
                            Dropoff Area
                          </label>
                          <select
                            style={{ borderColor: "lightgray" }}
                            className="form-control"
                            id="dropoff"
                            value={departureDropoff}
                            onChange={handleDropoffDeptChange}
                          >
                            <option value="">Select Dropoff Area</option>
                            {selectedDeparture?.fbo_dropoffs?.map((dropoff) => (
                              <option key={dropoff.id} value={dropoff.id}>
                                {dropoff.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label">Phone</label>
                          <input
                            type="text"
                            style={{ borderColor: "lightgray" }}
                            className="form-control"
                            placeholder="+62XXXXXXXXXXX"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-3">
                        <label className="form-label">Address Dropoff</label>
                        <input
                          className="form-control"
                          type="text"
                          style={{ borderColor: "lightgray" }}
                          value={departureDropoffAddress} // Tampilkan alamat dropoff
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Pickup Shuttle Return*/}
              {isReturnPickupChecked && (
                <div className="row g-4 border-bottom mt-2">
                  <div className="fw-bolder" style={{ fontSize: "20px" }}>
                    Pickup Shuttle Return
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="pickup">
                            Pickup Area
                          </label>
                          <select
                            style={{ borderColor: "lightgray" }}
                            className="form-control"
                            id="pickup"
                            value={returnPickup}
                            onChange={handlePickupReturnChange}
                          >
                            <option value="">Select Pickup Area</option>
                            {selectedReturn?.fbo_pickups?.map((pickup) => (
                              <option key={pickup.id} value={pickup.id}>
                                {pickup.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label">Phone</label>
                          <input
                            type="text"
                            style={{ borderColor: "lightgray" }}
                            className="form-control"
                            placeholder="+62XXXXXXXXXXX"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-3">
                        <label className="form-label">Address Pickup</label>
                        <input
                          className="form-control"
                          type="text"
                          style={{ borderColor: "lightgray" }}
                          value={returnPickupAddress} // Tampilkan alamat pickup
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Dropoff Shuttle Return*/}
              {isReturnDropoffChecked && (
                <div className="row g-4 border-bottom mt-2">
                  <div className="fw-bolder" style={{ fontSize: "20px" }}>
                    Dropoff Shuttle Return
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="dropoff">
                            Dropoff Area
                          </label>
                          <select
                            style={{ borderColor: "lightgray" }}
                            className="form-control"
                            id="dropoff"
                            value={returnDropoff}
                            onChange={handleDropoffReturnChange}
                          >
                            <option value="">Select Dropoff Area</option>
                            {selectedReturn?.fbo_dropoffs?.map((dropoff) => (
                              <option key={dropoff.id} value={dropoff.id}>
                                {dropoff.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label">Phone</label>
                          <input
                            type="text"
                            style={{ borderColor: "lightgray" }}
                            className="form-control"
                            placeholder="+62XXXXXXXXXXX"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-3">
                        <label className="form-label">Address Dropoff</label>
                        <input
                          className="form-control"
                          type="text"
                          style={{ borderColor: "lightgray" }}
                          value={returnDropoffAddress} // Tampilkan alamat dropoff
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="row g-4">
                <div className="mb-3 ">
                  <label htmlFor="additional" className="form-label  mt-3">
                    Additional Message (Opsional)
                  </label>
                  <textarea
                    className="form-control opacity-75"
                    id="additional"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 border rounded mx-3 h-50"
              style={{ backgroundColor: "white" }}
            >
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button fw-bolder opacity-75"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="true"
                      aria-controls="flush-collapseOne"
                      style={{ color: "black", background: "white" }}
                    >
                      Booking Details
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div
                      className="accordion-body"
                      style={{ color: "black", backgroundColor: "white" }}
                    >
                      <h4
                        className="fw-bolder"
                        style={{ fontSize: "16px", fontFamily: "Poppins" }}
                      >
                        Departure Trip
                      </h4>
                      <div className="d-flex justify-content-between">
                        <div>Adult {adult}x</div>
                        <div>
                          {currency.cy_code}{" "}
                          {selectedDeparture
                            ? formatCurrency(
                                selectedDeparture.fba_adult_publish
                              )
                            : " 0 "}
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>Child {child}x</div>
                        <div>
                          {currency.cy_code}{" "}
                          {selectedDeparture
                            ? formatCurrency(
                                selectedDeparture.fba_child_publish
                              )
                            : " 0 "}
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>Infant {infant}x</div>
                        <div>
                          {/* {currency.cy_code} {selectedDeparture.fba_infant_publish || " 0 "} */}
                        </div>
                      </div>
                      <div className="d-flex justify-content-between border-bottom">
                        <div>Subtotal</div>
                        <div>
                          {currency.cy_code}{" "}
                          {departureSubtotal.toLocaleString()}
                        </div>
                      </div>

                      {/* Menampilkan Return Trip hanya jika direction adalah 'round_trip' */}
                      {direction === "round_trip" && (
                        <>
                          <h4
                            className="fw-bolder"
                            style={{ fontSize: "16px", fontFamily: "Poppins" }}
                          >
                            Return Trip
                          </h4>
                          <div className="d-flex justify-content-between">
                            <div>Adult {adult}x</div>
                            <div>
                              {currency.cy_code}{" "}
                              {selectedReturn
                                ? formatCurrency(
                                    selectedReturn.fba_adult_publish
                                  )
                                : " 0 "}
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div>Child {child}x</div>
                            <div>
                              {currency.cy_code}{" "}
                              {selectedReturn
                                ? formatCurrency(
                                    selectedReturn.fba_child_publish
                                  )
                                : " 0 "}
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <div>Infant {infant}x</div>
                            <div>
                              {currency.cy_code}{" "}
                              {selectedReturn.fba_infant_publish || " 0 "}
                            </div>
                          </div>
                          <div className="d-flex justify-content-between border-bottom">
                            <div>Subtotal</div>
                            <div>
                              {currency.cy_code}{" "}
                              {returnSubtotal.toLocaleString()}
                            </div>
                          </div>
                        </>
                      )}

                      <div className="d-flex justify-content-between fw-bolder mt-2 border-bottom">
                        <div>Total</div>
                        <div>
                          {currency.cy_code} {total.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <div className="text-center mx-auto mt-2 mb-3">
                      <PaymentComponent required />
                    </div>
                  </div>
                </div>
                <div className=" mb-2 text-center mx-auto w-75">
                  <a href="/payment">
                    <button
                      className="btn btn-primary btn-lg fw-bolder"
                      type="submit"
                      style={{ fontSize: "16px", background: "#297cbb" }}
                    >
                      Continue to Pay
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default BookingPage;
