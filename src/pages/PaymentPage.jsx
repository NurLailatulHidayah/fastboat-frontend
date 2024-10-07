import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PaymentComponent from "../components/PaymentComponent";
import DekstopPaymentComponent from "../components/DekstopPaymentComponent";

const PaymentPage = () => {

  // Tambahkan state untuk negara
  const [selectedCountry, setSelectedCountry] = useState("Indonesia"); // Inisialisasi dengan nilai default

  const [isModal, setIsModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null); 

  // Function untuk handle klik tombol pembayaran
  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
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

  return (
    <section className="row clearfix m-5">
      <div className="col-lg-8 accordion accordion-flush" id="accordionFlushExample">
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
            <div className="accordion-body opacity-100 m-3">
              {" "}
              <div className="row clearfix   border border-dark rounded-1">
                <div className="d-flex ">
                  <div className="col-lg-4 align-content-center align-items-start px-1">
                    <div className="m-2">Departing Trip : 24 Sep 2024</div>
                    <div className="m-2">
                      Booking ID : <b>FHWXOZ</b>
                    </div>
                    <div className="m-2">
                      Status :{" "}
                      <button type="button" className="btn btn-danger btn-sm">
                        Unpaid
                      </button>
                    </div>
                  </div>
                  <div className="row col-8 align-items-end">
                    <div className="col-lg-4 comfort-section">
                      <ul className="image-carousel owl-carousel owl-theme p-3 align-content-center">
                        <li>
                          <div>
                            <img
                              src="image/fastboat/karunia-jaya.jpg"
                              alt="Fastboat"
                              className="rounded-2 "
                            />
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-6 fastboat-search-content d-flex px-0 align-content-center">
                      <div className="vertical-line-container">
                        <div className="circle"></div>
                        <div className="line"></div>
                        <div className="circle"></div>
                      </div>
                      <div className="schedule mb-3">
                        <div className="time">
                          <b>15:25</b> Padangbai Harbor, Bali
                        </div>
                        <div className="route mt-2 d-flex align-items-center">
                          <img
                            src="/image/clients/logo-Eka_Jaya.jpg"
                            alt="Eka Jaya"
                            className="me-2"
                            style={{ width: "40px" }}
                          />
                          <span>
                            <b>Eka Jaya</b> 1H 30m
                          </span>
                        </div>
                        <div className="time mt-3">
                          <b>16:00</b> Gili Trawangan Port, Gili Trawangan
                        </div>
                      </div>
                    </div>
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
              style={{ textAlign: "right" }}
            >
              <i className="fas fa-edit" style={{ fontSize: "20px" }}></i>
            </button>
          </div>

          {/* Contact */}
          <div className="card-body table-responsive">
            <table className="table">
              <thead className="table-dark text-white">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Negara</th>
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
                        <option value="Armenia">Armenia</option>
                        <option value="Indonesia">Indonesia</option>
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
                  <thead className="table-dark text-white">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Age (years)</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Nationality</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>laila</td>
                      <td>20</td>
                      <td>female</td>
                      <td>Indonesia</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>lili</td>
                      <td>18</td>
                      <td>female</td>
                      <td>Indonesia</td>
                    </tr>
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
                <div className="d-flex justify-content-between fw-bolder mt-2 border-top">
                  <div>Pay Amount</div>
                  <div>IDR 750.000</div>
                </div>
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
              {isDesktop ? <DekstopPaymentComponent /> : <PaymentComponent />}
            </div>

            {/* Button checkout */}
            <div className="d-flex justify-content-center mt-4 border-top">
              <button
                className="btn btn-primary mt-3 fw-bolder px-3"
                type="submit"
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
