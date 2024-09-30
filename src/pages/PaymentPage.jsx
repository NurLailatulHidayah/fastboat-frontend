import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentPage = () => {
  // State untuk menyimpan metode pembayaran yang dipilih
  // const [selectedPayment, setSelectedPayment] = useState("");

  // const handlePaymentSelect = (method) => {
  //   setSelectedPayment(method);
  // };

  const [isModal, setIsModal] = useState(false); // State untuk cek modal
  const [selectedPayment, setSelectedPayment] = useState(null); // State untuk payment method

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

  return (
    <section className="m-5">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {/* Accordion Item 1 */}
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
              {/* Opacity fixed */}
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

        {/* Accordion Item 2 */}
        <div className="card border border-black">
          {/* Header Card */}
          <div className="card-header d-flex justify-content-between align-items-center px-3 py-3">
            {/* Text Contact di Ujung Kiri */}
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

            {/* Icon Edit di Ujung Kanan */}
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

          {/* Body Card (Tabel Kontak) */}
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

          {/* Modal untuk mengedit data */}
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
                  <h5 className="modal-title" id="editModalLabel">
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
                        defaultValue="+6281984530213"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="country" className="form-label">
                        Negara
                      </label>
                      <select
                        className="form-select py-2 opacity-75"
                        id="validationCustom04"
                        required
                      >
                        <option selected value>
                          Armenia
                        </option>
                        <option>Indonesia</option>
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

        {/* Accordion Item 3 */}
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

        {/* Accordion Item 4 */}
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
              <div className="border-end">

              </div>
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

      <div>
        <div className="card p-4">
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

            {/* Menampilkan tombol di modal jika ukuran layar kurang dari atau sama dengan 1000 */}
            {isModal ? (
              <>
                {/* Button trigger modal */}
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className=" btn btn-white border border-dark mb-3 "
                    data-bs-toggle="modal"
                    data-bs-target="#paymentModal"
                  >
                    Payment Method:{" "}
                    {selectedPayment ? selectedPayment : "Select"}
                  </button>
                </div>

                {/* Modal */}
                <div
                  className="modal fade"
                  id="paymentModal"
                  tabIndex="-1"
                  aria-labelledby="paymentModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="paymentModalLabel">
                          Pilih Metode Pembayaran
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        {/* Metode Pembayaran */}
                        <div className="mb-3">
                          <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input me-2"
                                type="radio"
                                id="paymentModal1"
                                name="paymentMethodModal"
                                onClick={() => handlePaymentSelect("Paypal")}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="paymentModal1"
                              >
                                Paypal
                              </label>
                            </div>
                            <img
                              src="/image/payment/paypal-logo-svgrepo-com.svg"
                              alt="PayPal Logo"
                              className="ms-auto"
                              style={{ width: "50px", height: "50px" }}
                            />
                          </div>
                        </div>
                        {/* Metode Pembayaran */}
                        <div className="mb-3">
                          <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input me-2"
                                type="radio"
                                id="paymentModal1"
                                name="paymentMethodModal"
                                onClick={() =>
                                  handlePaymentSelect("Credit Card")
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="paymentModal1"
                              >
                                Credit Card
                              </label>
                            </div>
                            {/* <img
                            src="/image/payment/paypal-logo-svgrepo-com.svg"
                            alt="PayPal Logo"
                            className="ms-auto"
                            style={{ width: "50px", height: "50px" }}
                          /> */}
                            <div className="d-flex ">
                              <img
                                src="/image/payment/jcb-card-icon.svg"
                                alt="PayPal Logo"
                                className="ms-0 p-1"
                                style={{ width: "50px", height: "50px" }}
                              />
                              <img
                                src="/image/payment/american-express-svgrepo-com.svg"
                                alt="PayPal Logo"
                                className="ms-0 p-1"
                                style={{ width: "50px", height: "50px" }}
                              />
                              <img
                                src="/image/payment/visa-logo-svgrepo-com.svg"
                                alt="PayPal Logo"
                                className="m-0 p-1"
                                style={{ width: "50px", height: "50px" }}
                              />
                              <img
                                src="/image/payment/mastercard-2-logo-svgrepo-com.svg"
                                alt="PayPal Logo"
                                className="m-0 p-1"
                                style={{ width: "50px", height: "50px" }}
                              />
                            </div>
                          </div>
                        </div>
                        {/* Metode Pembayaran */}
                        <div className="mb-3">
                          <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input me-2"
                                type="radio"
                                id="paymentModal1"
                                name="paymentMethodModal"
                                onClick={() => handlePaymentSelect("Bank BCA")}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="paymentModal1"
                              >
                                Bank BCA
                              </label>
                            </div>
                            <img
                              src="/image/payment/bca-bank-central-asia-logo-svgrepo-com.svg"
                              alt="PayPal Logo"
                              className="ms-auto"
                              style={{ width: "50px", height: "50px" }}
                            />
                          </div>
                        </div>
                        {/* Metode Pembayaran */}
                        <div className="mb-3">
                          <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input me-2"
                                type="radio"
                                id="paymentModal1"
                                name="paymentMethodModal"
                                onClick={() =>
                                  handlePaymentSelect("Bank Mandiri")
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="paymentModal1"
                              >
                                Bank Mandiri
                              </label>
                            </div>
                            <img
                              src="/image/payment/Bank-Mandiri-01.svg"
                              alt="PayPal Logo"
                              className="ms-auto"
                              style={{ width: "50px", height: "50px" }}
                            />
                          </div>
                        </div>
                        {/* Metode Pembayaran */}
                        <div className="mb-3">
                          <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input me-2"
                                type="radio"
                                id="paymentModal1"
                                name="paymentMethodModal"
                                onClick={() => handlePaymentSelect("Bank BRI")}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="paymentModal1"
                              >
                                Bank BRI
                              </label>
                            </div>
                            <img
                              src="/image/payment/bri-logo.svg"
                              alt="PayPal Logo"
                              className="ms-auto"
                              style={{ width: "50px", height: "50px" }}
                            />
                          </div>
                        </div>
                        {/* Metode Pembayaran */}
                        <div className="mb-3">
                          <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input me-2"
                                type="radio"
                                id="paymentModal1"
                                name="paymentMethodModal"
                                onClick={() => handlePaymentSelect("Bank BNI")}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="paymentModal1"
                              >
                                Bank BNI
                              </label>
                            </div>
                            <img
                              src="/image/payment/bank-negara-indonesia.svg"
                              alt="PayPal Logo"
                              className="ms-auto"
                              style={{ width: "50px", height: "50px" }}
                            />
                          </div>
                        </div>
                        {/* Metode Pembayaran */}
                        <div className="mb-3">
                          <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input me-2"
                                type="radio"
                                id="paymentModal1"
                                name="paymentMethodModal"
                                onClick={() =>
                                  handlePaymentSelect("Bank Permata")
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="paymentModal1"
                              >
                                Bank Permata
                              </label>
                            </div>
                            <img
                              src="/image/payment/2425815_bank_indonesia_permata_permatabank_syariah_icon.svg"
                              alt="PayPal Logo"
                              className="ms-auto"
                              style={{ width: "50px", height: "50px" }}
                            />
                          </div>
                        </div>
                        {/* Metode Pembayaran */}
                        <div className="mb-3">
                          <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input me-2"
                                type="radio"
                                id="paymentModal1"
                                name="paymentMethodModal"
                                onClick={() => handlePaymentSelect("Bank BJB")}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="paymentModal1"
                              >
                                Bank BJB
                              </label>
                            </div>
                            <img
                              src="/image/payment/2425811_bank_banten_bjb_indonesian_jabar_icon.svg"
                              alt="PayPal Logo"
                              className="ms-auto"
                              style={{ width: "50px", height: "50px" }}
                            />
                          </div>
                        </div>
                        {/* Metode Pembayaran */}
                        <div className="mb-3">
                          <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input me-2"
                                type="radio"
                                id="paymentModal1"
                                name="paymentMethodModal"
                                onClick={() => handlePaymentSelect("Bank BSI")}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="paymentModal1"
                              >
                                Bank BSI
                              </label>
                            </div>
                            <img
                              src="/image/payment/bank-syariah-indonesia-seeklogo.svg"
                              alt="PayPal Logo"
                              className="ms-auto"
                              style={{ width: "50px", height: "50px" }}
                            />
                          </div>
                        </div>
                      </div>
                      {/* <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                      </button>
                    </div> */}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // Menampilkan opsi pembayaran langsung jika ukuran layar lebih dari 1000
              <div>
                <div className="d-flex justify-content-between text-center gap-3">
                  {/* Metode Pembayaran 1 */}
                  <div
                    className="mb-3"
                    style={{
                      backgroundColor: "white",
                      flex: 1,
                      marginRight: "10px",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                      <div className="d-flex align-items-center">
                        <input
                          className="form-check-input me-2"
                          type="radio"
                          id="payment1"
                          name="paymentMethod"
                          onClick={() => handlePaymentSelect("Paypal")}
                        />
                        <label className="form-check-label" htmlFor="payment1">
                          Paypal
                        </label>
                      </div>
                      <img
                        src="/image/payment/paypal-logo-svgrepo-com.svg"
                        alt="Bank Mandiri Logo"
                        className="ms-auto"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  </div>
                  {/* Metode Pembayaran 2 */}
                  <div
                    className="mb-3"
                    style={{
                      backgroundColor: "white",
                      flex: 1,
                      marginRight: "10px",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                      <div className="d-flex align-items-center">
                        <input
                          className="form-check-input me-2"
                          type="radio"
                          id="payment2"
                          name="paymentMethod"
                          onClick={() => handlePaymentSelect("Credit Card")}
                        />
                        <label className="form-check-label" htmlFor="payment2">
                          Credit Card
                        </label>
                      </div>
                      <div className="d-flex ">
                        <img
                          src="/image/payment/jcb-card-icon.svg"
                          alt="PayPal Logo"
                          className="ms-0 p-1"
                          style={{ width: "50px", height: "50px" }}
                        />
                        <img
                          src="/image/payment/american-express-svgrepo-com.svg"
                          alt="PayPal Logo"
                          className="ms-0 p-1"
                          style={{ width: "50px", height: "50px" }}
                        />
                        <img
                          src="/image/payment/visa-logo-svgrepo-com.svg"
                          alt="PayPal Logo"
                          className="m-0 p-1"
                          style={{ width: "50px", height: "50px" }}
                        />
                        <img
                          src="/image/payment/mastercard-2-logo-svgrepo-com.svg"
                          alt="PayPal Logo"
                          className="m-0 p-1"
                          style={{ width: "50px", height: "50px" }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Metode Pembayaran 3 */}
                  <div
                    className="mb-3"
                    style={{ backgroundColor: "white", flex: 1 }}
                  >
                    <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                      <div className="d-flex align-items-center">
                        <input
                          className="form-check-input me-2"
                          type="radio"
                          id="payment3"
                          name="paymentMethod"
                          onClick={() => handlePaymentSelect("Bank BCA")}
                        />
                        <label className="form-check-label" htmlFor="payment3">
                          Bank BCA
                        </label>
                      </div>
                      <img
                        src="/image/payment/bca-bank-central-asia-logo-svgrepo-com.svg"
                        alt="Bank BCA Logo"
                        className="ms-auto"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between text-center gap-3">
                  {/* Metode Pembayaran 1 */}
                  <div
                    className="mb-3"
                    style={{
                      backgroundColor: "white",
                      flex: 1,
                      marginRight: "10px",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                      <div className="d-flex align-items-center">
                        <input
                          className="form-check-input me-2"
                          type="radio"
                          id="payment1"
                          name="paymentMethod"
                          onClick={() => handlePaymentSelect("Bank Mandiri")}
                        />
                        <label className="form-check-label" htmlFor="payment1">
                          Bank Mandiri
                        </label>
                      </div>
                      <img
                        src="/image/payment/Bank-Mandiri-01.svg"
                        alt="Bank Mandiri Logo"
                        className="ms-auto"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  </div>
                  {/* Metode Pembayaran 2 */}
                  <div
                    className="mb-3"
                    style={{
                      backgroundColor: "white",
                      flex: 1,
                      marginRight: "10px",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                      <div className="d-flex align-items-center">
                        <input
                          className="form-check-input me-2"
                          type="radio"
                          id="payment2"
                          name="paymentMethod"
                          onClick={() => handlePaymentSelect("Bank BRI")}
                        />
                        <label className="form-check-label" htmlFor="payment2">
                          Bank BRI
                        </label>
                      </div>
                      <img
                        src="/image/payment/bri-logo.svg"
                        alt="Bank BRI Logo"
                        className="ms-auto"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  </div>
                  {/* Metode Pembayaran 3 */}
                  <div
                    className="mb-3"
                    style={{ backgroundColor: "white", flex: 1 }}
                  >
                    <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                      <div className="d-flex align-items-center">
                        <input
                          className="form-check-input me-2"
                          type="radio"
                          id="payment3"
                          name="paymentMethod"
                          onClick={() => handlePaymentSelect("Bank BNI")}
                        />
                        <label className="form-check-label" htmlFor="payment3">
                          Bank BNI
                        </label>
                      </div>
                      <img
                        src="/image/payment/bank-negara-indonesia.svg"
                        alt="Bank BNI Logo"
                        className="ms-auto"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between text-center gap-3">
                  {/* Metode Pembayaran 1 */}
                  <div
                    className="mb-3"
                    style={{
                      backgroundColor: "white",
                      flex: 1,
                      marginRight: "10px",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                      <div className="d-flex align-items-center">
                        <input
                          className="form-check-input me-2"
                          type="radio"
                          id="payment1"
                          name="paymentMethod"
                          onClick={() => handlePaymentSelect("Bank Permata")}
                        />
                        <label className="form-check-label" htmlFor="payment1">
                          Bank Permata
                        </label>
                      </div>
                      <img
                        src="/image/payment/2425815_bank_indonesia_permata_permatabank_syariah_icon.svg"
                        alt="Bank Permata Logo"
                        className="ms-auto"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  </div>
                  {/* Metode Pembayaran 2 */}
                  <div
                    className="mb-3"
                    style={{
                      backgroundColor: "white",
                      flex: 1,
                      marginRight: "10px",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                      <div className="d-flex align-items-center">
                        <input
                          className="form-check-input me-2"
                          type="radio"
                          id="payment2"
                          name="paymentMethod"
                          onClick={() => handlePaymentSelect("Bank BJB")}
                        />
                        <label className="form-check-label" htmlFor="payment2">
                          Bank BJB
                        </label>
                      </div>
                      <img
                        src="/image/payment/2425811_bank_banten_bjb_indonesian_jabar_icon.svg"
                        alt="Bank BJB Logo"
                        className="ms-auto"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  </div>
                  {/* Metode Pembayaran 3 */}
                  <div
                    className="mb-3"
                    style={{ backgroundColor: "white", flex: 1 }}
                  >
                    <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                      <div className="d-flex align-items-center">
                        <input
                          className="form-check-input me-2"
                          type="radio"
                          id="payment3"
                          name="paymentMethod"
                          onClick={() => handlePaymentSelect("Bank BSI")}
                        />
                        <label className="form-check-label" htmlFor="payment3">
                          Bank BSI
                        </label>
                      </div>
                      <img
                        src="/image/payment/bank-syariah-indonesia-seeklogo.svg"
                        alt="Bank BSI Logo"
                        className="ms-auto"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

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
