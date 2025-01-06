import React, { useEffect, useState } from "react";
import api from "../api"; // Pastikan import axios instance
import "bootstrap/dist/css/bootstrap.min.css";
import PaymentComponent from "../components/PaymentComponent";
import DekstopPaymentComponent from "../components/DekstopPaymentComponent";
import { useParams, useLocation } from "react-router-dom";

const PaymentPage = (bookingData) => {
  const { orderId } = useParams(); // Mengambil fbo_order_id dari URL
  const [bookingInfo, setBookingInfo] = useState([]);
  const [passengerDetails, setPassengerDetails] = useState([]);
  // const [type, setType] = useState("");
  const location = useLocation();

  // Tambahkan state untuk negara
  const [nationalitys, setNationalitys] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Indonesia"); // Inisialisasi dengan nilai default
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [selectedPayment, setSelectedPayment] = useState(null);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false); // State untuk checkout loading

  // Pastikan `orderId` tersedia sebelum memuat data
  // useEffect(() => {

  //   if (orderId) {
  //     fetchPaymentData(orderId);
  //   } else {
  //     console.error("Order ID tidak ditemukan.");
  //   }
  // }, [orderId]);

  // const fetchPaymentData = async () => {
  //   try {
  //     const response = await api.get(`/api/payment`);
  //     setPaymentData(response.data);
  //     console.log("data payment :", response.data);
  //   } catch (error) {
  //     console.error("Gagal memuat data pembayaran:", error.response.data);
  //   }
  // };
  //   useEffect(() => {

  //     if (!contactId) {
  //       console.error("contactId tidak ditemukan!");
  //       return;
  //     }

  //   const fetchPaymentData = async () => {
  //     try {
  //       const response = await api.get(`/api/payment`, {params: {contactId},});
  //       setPaymentData(response.data);
  //       setLoading(false);
  //       console.log("data payment :", response.data);
  //     } catch (err) {
  //       setError(err.response?.data?.message || "Terjadi kesalahan.");
  //       setLoading(false);
  //     }
  //   };

  //   fetchPaymentData();
  // }, [contactId]);

  // if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error}</p>;

  const fetchDataPayment = async () => {
    try {
      const response = await api.get(`/api/payment?orderId=${orderId}`);
      setBookingInfo(response.data);
      setPassengerDetails(response.data.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching booking data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataPayment();
  }, [orderId]);
  

  // if (loading) { 
  //   return <div>Loading...</div>;
  // }

  // if (!bookingData) {
  //   return <div>Data booking tidak ditemukan.</div>;
  // }

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  // Ambil data pembayaran
  // const fetchPaymentData = async () => {
  //   try {
  //     const response = await api.get("/api/payment?contactId=${id}");
  //     const paymentData = response.data.data || [];
  //     setPaymentData(paymentData);
  //     console.log("data payment :", response.data.data);
  //     // setPaymentData(response.data.data || []);
  //   } catch (err) {
  //     console.error("Error fetching payments:", err);
  //     setError("Terjadi kesalahan saat memuat data pembayaran.");
  //   }
  // };

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
      // if (indonesia) {
      //   setSelectedCountry(indonesia.nas_id);

      // }
      if (indonesia) {
        setSelectedCountry(indonesia.nas_id);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError("Terjadi kesalahan saat memuat data. Coba lagi nanti.");
    }
  };

  useEffect(() => {
    fetchDataNationalitys();
  }, []);

  const nationalityOptions = nationalitys.map((nationality) => ({
    value: nationality.nas_id,
    label: nationality.nas_country,
  }));

  const [isModal, setIsModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  // Function untuk handle klik tombol pembayaran
  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  const renderPaymentComponent = () => {
    if (isModal) {
      return <PaymentComponent onSelect={handlePaymentSelect} />;
    } else {
      return <DekstopPaymentComponent onSelect={handlePaymentSelect} />;
    }
  };

  // Function untuk cek ukuran layar
  const checkScreenSize = () => {
    setIsModal(window.innerWidth <= 1000);
  };

  useEffect(() => {
    checkScreenSize(); // Cek ukuran layar saat komponen dimount
    window.addEventListener("resize", checkScreenSize); // Tambahkan event listener

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Cleanup event listener
    };
  }, []);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 999);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 999);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


   // Fungsi untuk menangani Checkout
   const handleCheckout = async () => {
    const paymentData = {
      contactId: bookingInfo.ctc_id, // Mengambil contactId dari bookingInfo
      payment_method: "Bank Transfer", // Menggunakan metode pembayaran yang diinginkan
    };

    try {
      const response = await api.post('/api/payment/xendit', paymentData);
      const invoiceUrl = response.data.invoice_url; // Mengambil URL invoice dari respons
      window.location.href = invoiceUrl; // Mengarahkan pengguna ke URL invoice
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Terjadi kesalahan saat melakukan pembayaran. Silakan coba lagi.");
    }
  };


  // const { bookingDepart } = bookingData;

  return (
    <section className="row clearfix m-3 px-3">
      <div
        className="col-lg-8 accordion accordion-flush "
        id="accordionFlushExample"
      >
        {/* Itinerary */}
        <div className="accordion-item border border-black rounded">
          <h2 className="accordion-header  ">
            <button
              className="accordion-button collapsed fw-bolder "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              style={{ fontSize: "20px", background: "white", color: "black" }}
            >
              Itinerary
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body opacity-100 m-2">
              {" "}
              
              <div className="row clearfix mt-3 border border-dark rounded-1 align-items-center p-2">
                <div
                  className="col-lg-4 d-flex flex-column "
                  style={{ fontSize: "14px" }}
                >
                  <div className="m-1">
                    Depart Trip : {bookingInfo?.data?.bookingDepart?.fbo_trip_date}
                  </div>
                  <div className="m-1">
                    Booking ID : <b>{bookingInfo?.data?.bookingDepart?.fbo_booking_id}</b>
                  </div>
                  <div className="m-1">
                    Status :{" "}
                    <button type="button" className="btn btn-danger btn-sm">
                    {bookingInfo?.data?.bookingDepart?.fbo_payment_status}
                    </button>
                  </div>
                </div>

                <div className="col-lg-3 d-flex justify-content-center mt-3 px-0">
                  <div className="comfort-section">
                    <img
                      src={bookingInfo?.data?.bookingDepart?.fb_image1}
                      alt="Fastboat"
                      className="rounded-2"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="col-lg-5 px-3 d-flex flex-column  justify-content-center ">
                  <div className="d-flex fastboat-search-content align-items-center  ">
                    <div className="vertical-line-container m-1">
                      <div className="circle"></div>
                      <div className="line"></div>
                      <div className="circle"></div>
                    </div>
                    <div className="schedule m-1 px-0 align-items-center mt-3">
                      <div className="time">
                        <b>{bookingInfo?.data?.bookingDepart?.fba_dept_time}</b> {bookingInfo?.data?.bookingDepart?.fbo_departure_port},
                        
                      </div>
                      <div className="route  d-flex">
                        <img
                          src={bookingInfo?.data?.bookingDepart?.cpn_logo}
                          alt="Eka Jaya"
                          className="me-2"
                          style={{ width: "40px" }}
                        />
                        <span>
                          <b>{bookingInfo?.data?.bookingDepart?.cpn_name}</b> 1H 30m
                        </span>
                      </div>
                      <div className="time ">
                        <b>{bookingInfo?.data?.bookingDepart?.fba_arrival_time}</b> 
                        {bookingInfo?.data?.bookingDepart?.fbo_arrival_port}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix mt-3 border border-dark rounded-1 align-items-center p-2">
                <div
                  className="col-lg-4 d-flex flex-column "
                  style={{ fontSize: "14px" }}
                >
                  <div className="m-1">Return Trip : {bookingInfo?.data?.bookingReturn?.fbo_trip_date}</div>
                  <div className="m-1">
                    Booking ID : <b>{bookingInfo?.data?.bookingReturn?.fbo_booking_id}</b>
                  </div>
                  <div className="m-1">
                    Status :{" "}
                    <button type="button" className="btn btn-danger btn-sm">
                    {bookingInfo?.data?.bookingReturn?.fbo_payment_status}
                    </button>
                  </div>
                </div>

                <div className="col-lg-3 d-flex justify-content-center mt-3 px-0">
                  <div className="comfort-section">
                    <img
                      src={bookingInfo?.data?.bookingReturn?.fb_image1}
                      alt="Fastboat"
                      className="rounded-2"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="col-lg-5 px-3 d-flex flex-column  justify-content-center ">
                  <div className="d-flex fastboat-search-content align-items-center  ">
                    {/* <div className=" "> */}
                    <div className="vertical-line-container m-1">
                      <div className="circle"></div>
                      <div className="line"></div>
                      <div className="circle"></div>
                    </div>
                    <div className="schedule m-1 px-0 align-items-center mt-3">
                      <div className="time">
                        <b>{bookingInfo?.data?.bookingReturn?.fba_dept_time}</b> {bookingInfo?.data?.bookingReturn?.fbo_departure_port}
                      </div>
                      <div className="route  d-flex">
                        <img
                          src={bookingInfo?.data?.bookingReturn?.cpn_logo}
                          alt="Eka Jaya"
                          className="me-2"
                          style={{ width: "40px" }}
                        />
                        <span>
                          <b>{bookingInfo?.data?.bookingReturn?.cpn_name}</b> 1H 30m
                        </span>
                      </div>
                      <div className="time ">
                        <b>{bookingInfo?.data?.bookingReturn?.fba_arrival_time}</b> {bookingInfo?.data?.bookingReturn?.fbo_arrival_port}
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="card border border-black">
          {/* Header Card */}
          <div className="card-header d-flex justify-content-between align-items-center px-3 py-3">
            {/* Text Contact  */}
            <div
              className="fw-bolder p-2"
              style={{
                fontSize: "20px",
                fontFamily: "Poppins",
                textAlign: "left",
                color: "black",
              }}
            >
              Contact
            </div>

            {/* Icon Edit */}
            <button
              type="button"
              className="btn btn-link p-0"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
              style={{ textAlign: "right", color: "black" }}
            >
              <i className="fas fa-edit" style={{ fontSize: "20px" }}></i>
            </button>
          </div>

          {/* Contact */}
          <div className="card-body table-responsive">
            <table className="table">
              <thead style={{ background: "#297cbb", color: "white" }}>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Nationality</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">laila</td>
                  <td>laila@gmail.com</td>
                  <td>+6281984530213</td>
                  <td>Indonesia</td>
                </tr>
              </tbody>
            </table>
            <div className="opacity-75">
              Note: please double check the contact data for ticket delivery
            </div>
          </div>

          {/* Modal Edit Contact */}
          <div
            className="modal fade"
            id="editModal"
            tabIndex="-1"
            aria-labelledby="editModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title fw-"
                    id="editModalLabel"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Edit Contact
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {/* Form untuk mengedit data */}
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        autoComplete="name"
                        defaultValue="laila"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        autoComplete="email"
                        defaultValue="laila@gmail.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        autoComplete="phone"
                        defaultValue="+6281984530213"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="nationality" className="form-label">
                        Negara
                      </label>
                      <select
                        className="form-select py-2 opacity-75"
                        id="nationality"
                        autoComplete="nationality"
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        required
                      >
                        {/* <option value="Armenia">Armenia</option>
                        <option value="Indonesia">Indonesia</option> */}
                        {nationalitys.map((nationality) => (
                          <option
                            key={nationality.nas_id}
                            value={nationality.nas_id}
                          >
                            {nationality.nas_country}
                          </option>
                        ))}
                      </select>

                      {/* <input
                        type="text"
                        className="form-control"
                        id="country"
                        defaultValue="Indonesia"
                      /> */}
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Passenger Details */}
        <div className=" border border-black rounded">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fw-bolder"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={{ fontSize: "20px", background: "white", color: "black" }}
            >
              Passenger Details
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body opacity-100 ">
              <div className="table-responsive">
                <table className="table">
                  <thead style={{ background: "#297cbb", color: "white" }}>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Age (years)</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Nationality</th>
                    </tr>
                  </thead>
                  <tbody>
            {passengerDetails.length > 0 ? (
              passengerDetails.map((passenger, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{passenger.name}</td>
                  <td>{passenger.age}</td>
                  <td>{passenger.gender}</td>
                  <td>{passenger.nationality}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No passenger details found.
                </td>
              </tr>
            )}
          </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Booking details */}
        <div className="accordion-item border border-black rounded-2">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed fw-bolder"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapsefour"
              aria-expanded="false"
              aria-controls="flush-collapsefour"
              style={{ fontSize: "20px", background: "white", color: "black" }}
            >
              Booking Details
            </button>
          </h2>
          <div
            id="flush-collapsefour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="col-12 d-flex accordion-body opacity-100">
              <div className="col-lg-6 p-2">
                <h4
                  className="fw-bolder"
                  style={{ fontSize: "16px", fontFamily: "Poppins" }}
                >
                  Departure Trip
                </h4>
                <div className="d-flex justify-content-between">
                  <div>Adult 2x</div>
                  <div>IDR 375.000</div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>Child 0x</div>
                  <div>IDR 375.000</div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>Infant 0x</div>
                  <div>IDR 0</div>
                </div>
                <div className="d-flex justify-content-between fw-bolder mb-3">
                  <div>Subtotal</div>
                  <div>IDR 750.000</div>
                </div>
                {/* <div className="d-flex justify-content-between fw-bolder mt-2 border-top">
                  <div>Pay Amount</div>
                  <div>IDR 750.000</div>
                </div> */}
              </div>
              <div className="border-end"></div>
              <div className="col-lg-6 p-2">
                <h4
                  className="fw-bolder"
                  style={{ fontSize: "16px", fontFamily: "Poppins" }}
                >
                  Return Trip
                </h4>
                <div className="d-flex justify-content-between">
                  <div>Adult 2x</div>
                  <div>IDR 375.000</div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>Child 0x</div>
                  <div>IDR 375.000</div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>Infant 0x</div>
                  <div>IDR 0</div>
                </div>
                <div className="d-flex justify-content-between fw-bolder mb-3">
                  <div>Subtotal</div>
                  <div>IDR 750.000</div>
                </div>
                <div className="d-flex justify-content-between fw-bolder mt-2 border-top">
                  <div>Pay Amount</div>
                  <div>IDR 750.000</div>
                </div>
              </div>
            </div>
            {/* <div className="d-flex justify-content-between fw-bolder mt-2 border-top">
                <div>Pay Amount</div>
                <div>IDR 750.000</div>
              </div> */}
          </div>
        </div>
      </div>
      {/* Payment */}
      <div className="col-lg-4">
        <div className="card p-3">
          <div className="card-body">
            <div
              className="text-center fw-bolder mb-3"
              style={{ fontSize: "20px" }}
            >
              Payment
            </div>
            <div
              className="alert alert-danger text-center"
              style={{ fontSize: "16px" }}
              role="alert"
            >
              Finish this order before
            </div>

            <div>
              {/* {isDesktop ? <DekstopPaymentComponent /> : <PaymentComponent />} */}
              {renderPaymentComponent()}
            </div>

            {/* Button checkout */}
            <div className="d-flex justify-content-center mt-4 border-top">
              {/* <button
                className="btn btn-primary mt-3 fw-bolder px-3"
                type="submit"
                style={{ fontSize: "16px", background: "#297cbb" }}
              >
                Checkout
              </button> */}
              <button
                  className="btn btn-primary mt-3 fw-bolder px-3"
                  type="button" // Ganti type menjadi "button" untuk mencegah submit form
                  onClick={handleCheckout} // Panggil fungsi handleCheckout saat tombol diklik
                  style={{ fontSize: "16px", background: "#297cbb" }}
                >
                  Checkout
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
