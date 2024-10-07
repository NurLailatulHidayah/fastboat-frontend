import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const PaymentComponent = () => {
  const location = useLocation();
  const [selectedMethod, setSelectedMethod] = useState("");
  const [selectedLogo, setSelectedLogo] = useState("");
  const modalRef = useRef(null);

  const paymentLogos = {
    Paypal: "/image/payment/paypal-logo-svgrepo-com.svg",
    "Credit Card": "/image/payment/credit-card.svg",
    "Bank BCA": "/image/payment/bca-bank-central-asia-logo-svgrepo-com.svg",
    "Bank BNI": "/image/payment/bank-negara-indonesia.svg",
    "Bank BSI": "/image/payment/bank-syariah-indonesia-seeklogo.svg",
    "Bank BRI": "/image/payment/bri-logo.svg",
    "Bank Mandiri": "/image/payment/Bank-Mandiri-01.svg",
    "Bank Permata":
      "/image/payment/2425815_bank_indonesia_permata_permatabank_syariah_icon.svg",
    "Bank BJB":
      "/image/payment/2425811_bank_banten_bjb_indonesian_jabar_icon.svg",
  };

  useEffect(() => {
    const savedMethod = localStorage.getItem("selectedMethod");
    const savedLogo = localStorage.getItem("selectedLogo");

    if (savedMethod && savedLogo) {
      setSelectedMethod(savedMethod);
      setSelectedLogo(savedLogo);
    }

    const handleStorageChange = () => {
      const updatedMethod = localStorage.getItem("selectedMethod");
      const updatedLogo = localStorage.getItem("selectedLogo");

      if (updatedMethod && updatedLogo) {
        setSelectedMethod(updatedMethod);
        setSelectedLogo(updatedLogo);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [location.pathname]);

  const handlePaymentSelect = (method) => {
    setSelectedMethod(method);
    setSelectedLogo(paymentLogos[method]);
    localStorage.setItem("selectedMethod", method);
    localStorage.setItem("selectedLogo", paymentLogos[method]);

    const modalElement = modalRef.current;
    const modal = window.bootstrap.Modal.getInstance(modalElement);
    if (modal) {
      modal.hide();
    }
  };

  return (
    <div className="text-center mx-2 mt-2 mb-3">
      <button
        type="button"
        className="btn btn-white border border-dark gap-4"
        data-bs-toggle="modal"
        data-bs-target="#paymentModal"
      >
        Payment Method : {"   "}
        {selectedLogo ? (
          <img
            src={selectedLogo}
            alt="Selected Payment Logo"
            style={{ width: "50px", height: "50px" }}
          />
        ) : (
          " Select"
        )}
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="paymentModal"
        tabIndex={-1}
        aria-labelledby="paymentModal"
        aria-hidden="true"
        ref={modalRef}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 fw-bolder"
                id="paymentModal"
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
                style={{
                  backgroundColor:
                    selectedMethod === "Paypal" ? "#e0f7fa" : "white",
                }}
              >
                <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                  <div className="d-flex align-items-center">
                    <input
                      className="form-check-input me-2"
                      type="radio"
                      id="payment1"
                      name="paymentMethod"
                      checked={selectedMethod === "Paypal"}
                      onChange={() => handlePaymentSelect("Paypal")}
                    />
                    <label className="form-check-label" htmlFor="payment1">
                      Paypal
                    </label>
                  </div>
                  <img
                    src="/image/payment/paypal-logo-svgrepo-com.svg"
                    alt="Paypal Logo"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              </div>

              {/* Metode Pembayaran 2 */}
              <div
                className="mb-3"
                style={{
                  backgroundColor:
                    selectedMethod === "Credit Card" ? "#e0f7fa" : "white",
                }}
              >
                <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                  <div className="d-flex align-items-center">
                    <input
                      className="form-check-input me-2"
                      type="radio"
                      id="payment2"
                      name="paymentMethod"
                      checked={selectedMethod === "Credit Card"}
                      onChange={() => handlePaymentSelect("Credit Card")}
                    />
                    <label className="form-check-label" htmlFor="payment2">
                      Credit Card
                    </label>
                  </div>
                  <img
                    src="/image/payment/credit-card.svg"
                    alt="Credit Card Logo"
                    style={{ width: "150px", height: "50px" }}
                  />
                </div>
              </div>

              {/* Metode Pembayaran 3 */}
              <div
                className="mb-3"
                style={{
                  backgroundColor:
                    selectedMethod === "Bank BCA" ? "#e0f7fa" : "white",
                }}
              >
                <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                  <div className="d-flex align-items-center">
                    <input
                      className="form-check-input me-2"
                      type="radio"
                      id="payment3"
                      name="paymentMethod"
                      checked={selectedMethod === "Bank BCA"}
                      onChange={() => handlePaymentSelect("Bank BCA")}
                    />
                    <label className="form-check-label" htmlFor="payment3">
                      Bank BCA
                    </label>
                  </div>
                  <img
                    src="/image/payment/bca-bank-central-asia-logo-svgrepo-com.svg"
                    alt="Bank BCA Logo"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              </div>
              {/* Metode Pembayaran 4 */}
              <div
                className="mb-3"
                style={{
                  backgroundColor:
                    selectedMethod === "Bank BNI" ? "#e0f7fa" : "white",
                }}
              >
                <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                  <div className="d-flex align-items-center">
                    <input
                      className="form-check-input me-2"
                      type="radio"
                      id="payment4"
                      name="paymentMethod"
                      checked={selectedMethod === "Bank BNI"}
                      onChange={() => handlePaymentSelect("Bank BNI")}
                    />
                    <label className="form-check-label" htmlFor="payment4">
                      Bank BNI
                    </label>
                  </div>
                  <img
                    src="/image/payment/bank-negara-indonesia.svg"
                    alt="Bank BNI Logo"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              </div>
              {/* Metode Pembayaran 5 */}
              <div
                className="mb-3"
                style={{
                  backgroundColor:
                    selectedMethod === "Bank BSI" ? "#e0f7fa" : "white",
                }}
              >
                <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                  <div className="d-flex align-items-center">
                    <input
                      className="form-check-input me-2"
                      type="radio"
                      id="payment5"
                      name="paymentMethod"
                      checked={selectedMethod === "Bank BSI"}
                      onChange={() => handlePaymentSelect("Bank BSI")}
                    />
                    <label className="form-check-label" htmlFor="payment5">
                      Bank BSI
                    </label>
                  </div>
                  <img
                    src="/image/payment/bank-syariah-indonesia-seeklogo.svg"
                    alt="Bank BSI Logo"
                    style={{ width: "80px", height: "50px" }}
                  />
                </div>
              </div>
              {/* Metode Pembayaran 6 */}
              <div
                className="mb-3"
                style={{
                  backgroundColor:
                    selectedMethod === "Bank BRI" ? "#e0f7fa" : "white",
                }}
              >
                <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                  <div className="d-flex align-items-center">
                    <input
                      className="form-check-input me-2"
                      type="radio"
                      id="payment6"
                      name="paymentMethod"
                      checked={selectedMethod === "Bank BRI"}
                      onChange={() => handlePaymentSelect("Bank BRI")}
                    />
                    <label className="form-check-label" htmlFor="payment6">
                      Bank BRI
                    </label>
                  </div>
                  <img
                    src="/image/payment/bri-logo.svg"
                    alt="Bank BRI Logo"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              </div>
              {/* Metode Pembayaran 7 */}
              <div
                className="mb-3"
                style={{
                  backgroundColor:
                    selectedMethod === "Bank Mandiri" ? "#e0f7fa" : "white",
                }}
              >
                <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                  <div className="d-flex align-items-center">
                    <input
                      className="form-check-input me-2"
                      type="radio"
                      id="payment7"
                      name="paymentMethod"
                      checked={selectedMethod === "Bank Mandiri"}
                      onChange={() => handlePaymentSelect("Bank Mandiri")}
                    />
                    <label className="form-check-label" htmlFor="payment7">
                      Bank Mandiri
                    </label>
                  </div>
                  <img
                    src="/image/payment/Bank-Mandiri-01.svg"
                    alt="Bank Mandiri Logo"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              </div>
              {/* Metode Pembayaran 8 */}
              <div
                className="mb-3"
                style={{
                  backgroundColor:
                    selectedMethod === "Bank Permata" ? "#e0f7fa" : "white",
                }}
              >
                <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                  <div className="d-flex align-items-center">
                    <input
                      className="form-check-input me-2"
                      type="radio"
                      id="payment8"
                      name="paymentMethod"
                      checked={selectedMethod === "Bank Permata"}
                      onChange={() => handlePaymentSelect("Bank Permata")}
                    />
                    <label className="form-check-label" htmlFor="payment8">
                      Bank Permata
                    </label>
                  </div>
                  <img
                    src="/image/payment/2425815_bank_indonesia_permata_permatabank_syariah_icon.svg"
                    alt="Bank Permata Logo"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              </div>
              {/* Metode Pembayaran 9 */}
              <div
                className="mb-3"
                style={{
                  backgroundColor:
                    selectedMethod === "Bank BJB" ? "#e0f7fa" : "white",
                }}
              >
                <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                  <div className="d-flex align-items-center">
                    <input
                      className="form-check-input me-2"
                      type="radio"
                      id="payment9"
                      name="paymentMethod"
                      checked={selectedMethod === "Bank BJB"}
                      onChange={() => handlePaymentSelect("Bank BJB")}
                    />
                    <label className="form-check-label" htmlFor="payment9">
                      Bank BJB
                    </label>
                  </div>
                  <img
                    src="/image/payment/2425811_bank_banten_bjb_indonesian_jabar_icon.svg"
                    alt="Bank BJB Logo"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentComponent;
