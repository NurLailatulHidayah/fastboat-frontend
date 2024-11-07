import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom"; // Mengimpor hook untuk mendapatkan lokasi saat ini dari React Router.

const PaymentComponent = () => {
  const location = useLocation();
  const [selectedMethod, setSelectedMethod] = useState(""); // State untuk menyimpan metode pembayaran yang dipilih.
  const [selectedLogo, setSelectedLogo] = useState(""); // State untuk menyimpan logo pembayaran yang dipilih.
  const modalRef = useRef(null); // Referensi untuk elemen modal.

  // Objek untuk menyimpan logo pembayaran berdasarkan metode.
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
    const savedMethod = localStorage.getItem("selectedMethod"); // Mengambil metode yang disimpan di localStorage.
    const savedLogo = localStorage.getItem("selectedLogo"); // Mengambil logo yang disimpan di localStorage.

    // Jika metode dan logo ada, set ke state.
    if (savedMethod && savedLogo) {
      setSelectedMethod(savedMethod);
      setSelectedLogo(savedLogo);
    }

    // Fungsi untuk menangani perubahan storage.
    const handleStorageChange = () => {
      const updatedMethod = localStorage.getItem("selectedMethod"); // Mengambil metode yang diperbarui.
      const updatedLogo = localStorage.getItem("selectedLogo"); // Mengambil logo yang diperbarui.

      // Jika metode dan logo ada, set ke state.
      if (updatedMethod && updatedLogo) {
        setSelectedMethod(updatedMethod);
        setSelectedLogo(updatedLogo);
      }
    };

    window.addEventListener("storage", handleStorageChange); // Menambahkan event listener untuk perubahan storage.

    // Cleanup function untuk menghapus listener saat komponen di-unmount.
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [location.pathname]); // Dependensi untuk menjalankan useEffect saat pathname berubah.

  // Fungsi untuk menangani pemilihan metode pembayaran.
  const handlePaymentSelect = (method) => {
    setSelectedMethod(method); // Set metode pembayaran yang dipilih.
    setSelectedLogo(paymentLogos[method]); // Set logo pembayaran yang dipilih berdasarkan metode.
    localStorage.setItem("selectedMethod", method); // Simpan metode yang dipilih di localStorage.
    localStorage.setItem("selectedLogo", paymentLogos[method]); // Simpan logo yang dipilih di localStorage.

    const modalElement = modalRef.current; // Mendapatkan elemen modal.
    const modal = window.bootstrap.Modal.getInstance(modalElement); // Mendapatkan instance modal dari Bootstrap.
    if (modal) { // Jika modal ada, sembunyikan modal.
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
        {selectedLogo ? ( // Menampilkan logo yang dipilih atau teks "Select" jika belum ada.
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
              {/* Metode Pembayaran Paypal */}
              <div
                className="mb-3"
                onClick={() => handlePaymentSelect("Paypal")}
                style={{
                  backgroundColor:
                    selectedMethod === "Paypal" ? "#e0f7fa" : "white",
                  cursor: "pointer",
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
                      style={{ pointerEvents: "none" }}
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

              {/* Metode Pembayaran Credit Card */}
              <div
                className="mb-3"
                onClick={() => handlePaymentSelect("Credit Card")}
                style={{
                  backgroundColor:
                    selectedMethod === "Credit Card" ? "#e0f7fa" : "white",
                  cursor: "pointer",
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
                      style={{ pointerEvents: "none" }}
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

              {/* Metode Pembayaran Bank BCA */}
              <div
                className="mb-3"
                onClick={() => handlePaymentSelect("Bank BCA")}
                style={{
                  backgroundColor:
                    selectedMethod === "Bank BCA" ? "#e0f7fa" : "white",
                  cursor: "pointer",
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
                      style={{ pointerEvents: "none" }}
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
              {/* Metode Pembayaran Bank BNI */}
              <div
                className="mb-3"
                onClick={() => handlePaymentSelect("Bank BNI")}
                style={{
                  backgroundColor:
                    selectedMethod === "Bank BNI" ? "#e0f7fa" : "white",
                  cursor: "pointer",
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
                      style={{ pointerEvents: "none" }}
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
              {/* Metode Pembayaran Bank BSI */}
              {/* <div
                className="mb-3"
                onClick={() => handlePaymentSelect("Bank BSI")}
                style={{
                  backgroundColor:
                    selectedMethod === "Bank BSI" ? "#e0f7fa" : "white",
                  cursor: "pointer",
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
                      style={{ pointerEvents: "none" }}
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
              </div> */}
              {/* Metode Pembayaran Bank BRI */}
              <div
                className="mb-3"
                onClick={() => handlePaymentSelect("Bank BRI")}
                style={{
                  backgroundColor:
                    selectedMethod === "Bank BRI" ? "#e0f7fa" : "white",
                  cursor: "pointer",
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
                      style={{ pointerEvents: "none" }}
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
              {/* Metode Pembayaran Bank Mandiri */}
              <div
                className="mb-3"
                onClick={() => handlePaymentSelect("Bank Mandiri")}
                style={{
                  backgroundColor:
                    selectedMethod === "Bank Mandiri" ? "#e0f7fa" : "white",
                  cursor: "pointer",
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
                      style={{ pointerEvents: "none" }}
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
              {/* Metode Pembayaran Bank Permata */}
              {/* <div
                className="mb-3"
                onClick={() => handlePaymentSelect("Bank Permata")}
                style={{
                  backgroundColor:
                    selectedMethod === "Bank Permata" ? "#e0f7fa" : "white",
                  cursor: "pointer",
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
                      style={{ pointerEvents: "none" }}
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
              </div> */}
              {/* Metode Pembayaran Bank BJB */}
              {/* <div
                className="mb-3"
                onClick={() => handlePaymentSelect("Bank BJB")}
                style={{
                  backgroundColor:
                    selectedMethod === "Bank BJB" ? "#e0f7fa" : "white",
                  cursor: "pointer",
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
                      style={{ pointerEvents: "none" }}
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentComponent;
