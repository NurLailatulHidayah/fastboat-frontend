import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PaymentComponent from "../components/PaymentComponent";

const BookingPage = () => {
  // Tambahkan state untuk negara
  const [selectedCountry, setSelectedCountry] = useState("Indonesia"); // Inisialisasi dengan nilai default
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  useEffect(() => {
    // Menghapus metode pembayaran dari localStorage saat halaman booking dimuat ulang
    localStorage.removeItem("selectedMethod");
    localStorage.removeItem("selectedLogo");
  }, []);

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
                    <p className="fw-bolder opacity-75">
                      <span>
                        <img
                          src="/image/icons/yatch-svgrepo-com.svg"
                          alt="Departure"
                          style={{ width: "30px" }}
                        />
                      </span>{" "}
                      Departure : 09:00
                    </p>
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
                    <p className="fw-bolder ">
                      <span>
                        <img
                          src="/image/icons/big-anchor-svgrepo-com.svg"
                          alt="arrival"
                          style={{ width: "20px" }}
                        />
                      </span>{" "}
                      Arrival : 10:30
                    </p>
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
                      <img
                        src="/image/icons/eye-svgrepo-com.svg"
                        alt=""
                        style={{ width: "20px" }}
                      />
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
                    <option value="Armenia">Armenia</option>
                    <option value="Indonesia">Indonesia</option>
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
                    fontWeight: "bold",
                  }}
                >
                  Adult-1
                </h4>
                <div className="col-md-6">
                  <label htmlFor="adult1Name" className="form-label">
                    Adult-1 Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    id="adult1Name"
                    placeholder="Adult-1 name"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Please provide a valid phone name.
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="adult1Age" className="form-label">
                    Adult-1 Age (years) <span>*</span>
                  </label>
                  <select
                    className="form-select py-2 opacity-75"
                    id="adult1Age"
                    required
                    defaultValue="option1"
                  >
                    <option value="option1">13</option>
                    <option value="option2">14</option>
                    <option value="option3">15</option>
                    <option value="option4">16</option>
                    <option value="option5">17</option>
                    <option value="option5">18</option>
                    <option value="option5">19</option>
                    <option value="option5">20</option>
                    <option value="option5">21</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid nationality.
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="adult1gender" className="form-label">
                    Adult-1 Gender <span>*</span>
                  </label>
                  <select
                    className="form-select py-2 opacity-75"
                    id="adult1gender"
                    required
                    defaultValue="option1"
                  >
                    <option value="option1">Male</option>
                    <option value="option2">Female</option>
                    <option value="option3">Other</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid nationality.
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="adult1Nationality" className="form-label">
                    Adult-1 Nationality <span>*</span>
                  </label>
                  <select
                    className="form-select py-2 opacity-75"
                    id="adult1Nationality"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    required
                  >
                    <option value="Armenia">Armenia</option>
                    <option value="Indonesia">Indonesia</option>
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
                  <label htmlFor="adult2Name" className="form-label">
                    Adult-2 Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    id="adult2Name"
                    placeholder="Adult-2 name"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Please provide a valid phone name.
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="adult2age" className="form-label">
                    Adult-2 Age (years) <span>*</span>
                  </label>
                  <select
                    className="form-select py-2 opacity-75"
                    id="adult2age"
                    required
                    defaultValue="option1"
                  >
                    <option value="option1">13</option>
                    <option value="option2">14</option>
                    <option value="option3">15</option>
                    <option value="option4">16</option>
                    <option value="option5">17</option>
                    <option value="option5">18</option>
                    <option value="option5">19</option>
                    <option value="option5">20</option>
                    <option value="option5">21</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid nationality.
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="adult2gender" className="form-label">
                    Adult-2 Gender <span>*</span>
                  </label>
                  <select
                    className="form-select py-2 opacity-75"
                    id="adult2gender"
                    required
                    defaultValue="option1"
                  >
                    <option value="option1">Male</option>
                    <option value="option2">Female</option>
                    <option value="option3">Other</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid nationality.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="adult2nationality" className="form-label">
                    Adult-2 Nationality <span>*</span>
                  </label>
                  <select
                    className="form-select py-2 opacity-75"
                    id="adult2nationality"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    required
                  >
                    <option value="Armenia">Armenia</option>
                    <option value="Indonesia">Indonesia</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid nationality.
                  </div>
                </div>
              </div>
              <div className="row g-4  mt-2 ">
                <div className="mb-3 border-top">
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
