import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BookingPage = () => {
  // State untuk menyimpan metode pembayaran yang dipilih
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  return (
    <div>
      <section className="">
        <div className="d-flex mt-3 mb-3 m-5 ">
          <div className="col-lg-9 border rounded px-5 py-4">
            <div className="border-bottom">
              <h4
                className="text-center opacity-75"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "22px",
                  paddingBottom: "10px",
                }}
              >
                <b>Selected Departure Trip </b> (Friday 20 Sep 2024)
              </h4>
              <div className="row g-3 text-center border border-dark rounded mt-3 mb-3 ">
                <div className="col-lg-4">
                  <img
                    src="/image/clients/logo-Eka_Jaya.jpg"
                    alt="Eka Jaya"
                    className="me-2"
                    style={{ width: "100px" }}
                  />
                  <p className="fw-bolder opacity-75">Departure : 09:00</p>
                  <p>
                    {" "}
                    <b className="text-primary opacity-75">
                      Padangbai Harbor
                    </b>{" "}
                    - Bali
                  </p>
                </div>
                <div className="col-lg-4 opacity-75">
                  <p className="fw-bolder">Bali Eka Jaya</p>
                  <p className="fw-bolder">Arrival : 10:30</p>
                  <p>
                    <b className="text-primary">Gili Trawangan Port</b> - Gili
                    Trawangan
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
                    1 hours 30 minute
                  </p>
                  <p
                    className="opacity-75"
                    style={{ marginBottom: "5px", marginTop: "10px" }}
                  >
                    <b>IDR 375.000</b> / Adult
                  </p>
                  <p className="opacity-75" style={{ marginBottom: "5px" }}>
                    {" "}
                    <b>IDR 375.000</b> / Child
                  </p>

                  <button
                    type="button"
                    className="btn bg-success text-white btn-sm mb-2"
                  >
                    {/* <svg
                      fill="#d9e8e1"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="25px"
                      height="25px"
                      viewBox="0 0 442.04 442.04"
                      xml:space="preserve"
                      stroke="#d9e8e1"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203 c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219 c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367 c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021 c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212 c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071 c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"></path>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188 c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993 c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5 s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"></path>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg> */}
                    <span className="mx-1">Price Detail</span>
                  </button>
                </div>
              </div>
            </div>

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
                  // paddingBottom: "5px",
                  fontWeight: "bold",
                }}
              >
                Contact Info
              </h4>
              <div className="col-md-6">
                <label htmlFor="validationCustom01" className="form-label">
                  Name <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control py-2"
                  id="validationCustom01"
                  placeholder="Name"
                  // defaultValue="Mark"
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
                  className="form-control py-2"
                  id="validationCustom02"
                  placeholder="contact@gmail.com"
                  // defaultValue="Otto"
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
                  className="form-control py-2"
                  id="validationCustom03"
                  placeholder="+6285082117439"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid phone number.
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <label htmlFor="validationCustom04" className="form-label">
                  Nationality <span>*</span>
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
              <h4
                className="opacity-75 mt-2"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "22px",
                  // paddingBottom: "5px",
                  fontWeight: "bold",
                }}
              >
                Adult-1
              </h4>
              <div className="col-md-6">
                <label htmlFor="validationCustom01" className="form-label">
                  Adult-1 Name <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control py-2"
                  id="validationCustom01"
                  placeholder="Adult-1 name"
                  // defaultValue="Mark"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please provide a valid phone name.
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="validationCustom04" className="form-label">
                  Adult-1 Age (years) <span>*</span>
                </label>
                <select
                  className="form-select py-2 opacity-75"
                  id="validationCustom04"
                  required
                >
                  <option selected value>
                    13
                  </option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid nationality.
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="validationCustom04" className="form-label">
                  Adult-1 Gender <span>*</span>
                </label>
                <select
                  className="form-select py-2 opacity-75"
                  id="validationCustom04"
                  required
                >
                  <option selected value>
                    Male
                  </option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid nationality.
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom04" className="form-label">
                  Adult-1 Nationality <span>*</span>
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
                <div className="invalid-feedback">
                  Please select a valid nationality.
                </div>
              </div>
              <h4
                className="opacity-75 mt-2"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "22px",
                  paddingTop: "15px",
                  fontWeight: "bold",
                }}
              >
                Adult-2
              </h4>
              <div className="col-md-6">
                <label htmlFor="validationCustom01" className="form-label">
                  Adult-2 Name <span>*</span>
                </label>
                <input
                  type="text"
                  className="form-control py-2"
                  id="validationCustom01"
                  placeholder="Adult-2 name"
                  // defaultValue="Mark"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please provide a valid phone name.
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="validationCustom04" className="form-label">
                  Adult-2 Age (years) <span>*</span>
                </label>

                <select
                  className="form-select py-2 opacity-75"
                  id="validationCustom04"
                  required
                >
                  <option selected value>
                    13
                  </option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid nationality.
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="validationCustom04" className="form-label">
                  Adult-2 Gender <span>*</span>
                </label>
                <select
                  className="form-select py-2 opacity-75"
                  id="validationCustom04"
                  required
                >
                  <option selected value>
                    Male
                  </option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid nationality.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="validationCustom04" className="form-label">
                  Adult-2 Nationality <span>*</span>
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
                <div className="invalid-feedback">
                  Please select a valid nationality.
                </div>
              </div>

              {/* <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div> */}
            </div>
            <form className="row g-4 needs-validation mt-2 " noValidate>
              <div className="mb-3 border-top">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label  mt-3"
                >
                  Additional Message (Opsional)
                </label>
                <textarea
                  className="form-control opacity-75"
                  id="exampleFormControlTextarea1"
                  rows={5}
                  defaultValue={""}
                />
              </div>
            </form>
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
                    className="accordion-button collapsed fw-bolder opacity-75"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                    style={{ color: "black", background: "white" }}
                  >
                    Booking Details
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
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
                    <div className="d-flex justify-content-between border-bottom">
                      <div>Subtotal</div>
                      <div>IDR 750.000</div>
                    </div>
                    <div className="d-flex justify-content-between fw-bolder mt-2 border-bottom">
                      <div>Total</div>
                      <div>IDR 750.000</div>
                    </div>
                  </div>
                  
                  <div className="text-center mx-auto mt-2 mb-3">
                    {/* Button trigger modal */}
                    <button
                      type="button"
                      className="btn btn-white border border-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Payment Method :{" "}
                      {selectedPayment ? selectedPayment : " Select"}
                    </button>

                    {/* Modal */}
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
                              className="modal-title fs-5 fw-bolder"
                              id="staticBackdropLabel"
                              style={{
                                fontFamily: "Poppins",
                                fontSize: "20px",
                              }}
                            >
                              Pilih Metode Pembayaran
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>

                          <div className="modal-body">
                            {/* Metode Pembayaran 1 */}
                            <div
                              className="mb-3"
                              style={{ backgroundColor: "white" }}
                            >
                              <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                                <div className="d-flex align-items-center">
                                  <input
                                    className="form-check-input me-2"
                                    type="radio"
                                    id="payment1"
                                    name="paymentMethod"
                                    onClick={() =>
                                      handlePaymentSelect("Bank Mandiri")
                                    }
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="payment1"
                                  >
                                    Bank Mandiri
                                  </label>
                                </div>
                                <img
                                  src="/image/payment/Bank-Mandiri-01.svg"
                                  alt="Bank Mandiri Logo"
                                  className="ms-auto"
                                  style={{ width: "50px", height: "50px" }}
                                  // onClick={() => handlePaymentSelect(src="/image/payment/Bank-Mandiri-01.svg")}
                                />
                              </div>
                            </div>

                            {/* Metode Pembayaran 2 */}
                            <div
                              className="mb-3"
                              style={{ backgroundColor: "white" }}
                            >
                              <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                                <div className="d-flex align-items-center">
                                  <input
                                    className="form-check-input me-2"
                                    type="radio"
                                    id="payment2"
                                    name="paymentMethod"
                                    onClick={() =>
                                      handlePaymentSelect("PayPal")
                                    }
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="payment2"
                                  >
                                    PayPal
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

                            {/* Metode Pembayaran 3 */}
                            <div
                              className="mb-3"
                              style={{ backgroundColor: "white" }}
                            >
                              <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                                <div className="d-flex align-items-center">
                                  <input
                                    className="form-check-input me-2"
                                    type="radio"
                                    id="payment3"
                                    name="paymentMethod"
                                    onClick={() =>
                                      handlePaymentSelect("Bank BCA")
                                    }
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="payment3"
                                  >
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

                          {/* <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mb-2 text-center mx-auto w-75">
                <a href="/payment">
                  <button
                    className="btn btn-primary btn-lg fw-bolder"
                    type="button"
                    style={{ fontSize: "16px", background: "#297cbb" }}
                  >
                    Continue to Pay
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
