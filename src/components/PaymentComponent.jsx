import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { useLocation } from "react-router-dom";
import * as bootstrap from 'bootstrap'; // Impor bootstrap secara eksplisit

const PaymentComponent = forwardRef((props, ref) => {
  const location = useLocation();

  // State untuk menyimpan metode pembayaran yang dipilih.
  const [selectedMethod, setSelectedMethod] = useState("");
  const [selectedLogo, setSelectedLogo] = useState("");

  // Referensi untuk elemen modal.
  const modalRef = useRef(null);

  // Objek untuk menyimpan logo pembayaran berdasarkan metode.
  const paymentLogos = {
    "Bank BCA": "/image/payment/bca-bank-central-asia-logo-svgrepo-com.svg",
    "Bank BNI": "/image/payment/bank-negara-indonesia.svg",
    "Bank BRI": "/image/payment/bri-logo.svg",
    "Bank Mandiri": "/image/payment/Bank-Mandiri-01.svg",
  };

  useEffect(() => {
    // Mengambil metode yang disimpan di localStorage.
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

  // Fungsi untuk menangani pemilihan metode pembayaran.
  const handlePaymentSelect = (method) => {
    setSelectedMethod(method);
    setSelectedLogo(paymentLogos[method]);

    localStorage.setItem("selectedMethod", method);
    localStorage.setItem("selectedLogo", paymentLogos[method]);

    // Mendapatkan instance modal dari Bootstrap.
    const modal = bootstrap.Modal.getInstance(modalRef.current);

    if (modal) {
      modal.hide(); // Menutup modal setelah memilih metode pembayaran.
    }
  };

  // Fungsi validasi untuk memastikan metode pembayaran telah dipilih.
  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!selectedMethod) {
        return false;
      }
      return true;
    },
  }));

  return (
    <div className="text-center mx-2 mt-2 mb-3">
      <button
        type="button"
        className="btn btn-white border border-dark gap-4"
        onClick={() => {
          const modal = new bootstrap.Modal(modalRef.current); // Inisialisasi modal secara manual.
          modal.show(); // Menampilkan modal secara manual.
        }}
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

      {/* Modal Payment*/}
      <div
        className="modal fade"
        id="paymentModal"
        tabIndex={-1}
        aria-hidden="true"
        ref={modalRef} // Referensi untuk mengontrol modal
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 fw-bolder"
                id="paymentModalLabel"
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
              {Object.entries(paymentLogos).map(([method, logo], index) => (
                <div
                  key={index}
                  className="mb-3"
                  role="button"
                  onClick={() => handlePaymentSelect(method)}
                  style={{
                    backgroundColor:
                      selectedMethod === method ? "#e0f7fa" : "white",
                    cursor: "pointer",
                  }}
                  aria-label={method}
                >
                  <div className="d-flex align-items-center justify-content-between border border-secondary rounded px-2">
                    <div className="d-flex align-items-center">
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        id={`payment${index}`}
                        name="paymentMethod"
                        checked={selectedMethod === method}
                        readOnly
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`payment${index}`}
                      >
                        {method}
                      </label>
                    </div>
                    <img
                      src={logo}
                      alt={`${method} Logo`}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PaymentComponent;
