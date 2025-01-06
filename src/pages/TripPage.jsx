import React from 'react'

const TripPage = () => {
  return (
    <div>TripPage</div>
  )
}

export default TripPage
// import React, { useState, useEffect } from "react";
// import api from "../api";
// import "bootstrap/dist/css/bootstrap.min.css";
// import FormFastboatComponent from "../components/FormFastboatComponent";
// import { useParams } from "react-router-dom";
// // import { Link } from "react-router-dom";

// const FastboatDetailPage = () => {
//   let { slug } = useParams();
//   console.log("Slug:", slug);

//   const [fastboatdetails, setFastboatdetail] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchDataFastboatdetail = async () => {
//     if (!slug) {
//       setError("Slug tidak terdefinisi.");
//       return;
//     }

//     try {
//       const response = await api.get("/api/fast-boat/{fb_slug_en}");
//       setFastboatdetail(response.data.data || []);
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//       if (error.response) {
//         if (error.response.status === 404) {
//           setError(
//             "Data tidak ditemukan. Coba periksa URL atau ID yang Anda gunakan."
//           );
//         } else if (error.response.status === 500) {
//           setError("Terjadi kesalahan pada server. Silakan coba lagi nanti.");
//         } else {
//           setError("Terjadi kesalahan saat memuat data. Coba lagi nanti.");
//         }
//       } else {
//         setError(
//           "Tidak dapat terhubung ke server. Coba periksa koneksi internet Anda."
//         );
//       }
//     }
//   };

//   useEffect(() => {
//     fetchDataFastboatdetail();
//   }, [slug]);
//   console.log("Slug:", fastboatdetails);

  
//   return (
//     <div>
//       {/* Page Banner */}
//       <section
//         className="page-banner"
//         style={{ backgroundImage: "url(/image/background/35.jpg)" }}
//       >
//         <div className="auto-container">
//           <ul className="page-breadbrumbs">
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/fast-boat">Fast Boat</a>
//             </li>
//             <li>{fastboatdetails[0]?.fb_name}</li>
//           </ul>
//           <FormFastboatComponent />
//         </div>
//       </section>
//       {/* End Page Banner */}

//       {/* Fastboat Detail */}
//       <section className="fastboat-detail_gallery" style={{ zIndex: -1 }}>
//         <div className="auto-container">
//           {error ? (
//             <div className="alert alert-danger mb-0">{error}</div>
//           ) : fastboatdetails.length > 0 ? (
//             fastboatdetails.map((fastboatdetail, index) => (
//               <React.Fragment key={index}>
//                 <div className="row clearfix border-bottom">
//                   <span className="col-lg-1">
//                     <img
//                       src="/image/clients/logo-Wanderlust_Fast_Boat.png"
//                       alt="logo-Wanderlust_Fast_Boat"
//                       className="border rounded-3 p-1"
//                     />
//                   </span>
//                   <h4 className="fastboat-detail_gallery col-lg-6">
//                     Wanderlust Cruise
//                   </h4>
//                 </div>

//                 <div className="row clearfix mt-3">
//                   <div className="col-lg-3 col-md-3 col-sm-12">
//                     <div className="image">
//                       <a
//                         className="lightbox-image"
//                         href={http://localhost:8000/storage/${fastboatdetail.fb_image1}}
//                       >
//                         <img
//                           src={http://localhost:8000/storage/${fastboatdetail.fb_image1}}
//                           alt="wanderlust-cruise"
//                         />
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-md-3 col-sm-12">
//                     <div className="image">
//                       <a
//                         className="lightbox-image"
//                         href="/image/fastboat/wanderlust/image2wanderlust-cruise.jpg"
//                       >
//                         <img
//                           src={http://localhost:8000/storage/${fastboatdetail.fb_image2}}
//                           alt="image2wanderlust-cruise"
//                         />
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-md-3 col-sm-12">
//                     <div className="image">
//                       <a
//                         className="lightbox-image"
//                         href="/image/fastboat/wanderlust/image3-wanderlust-cruise.jpg"
//                       >
//                         <img
//                           src={http://localhost:8000/storage/${fastboatdetail.fb_image3}}
//                           alt="image3-wanderlust-cruise"
//                         />
//                       </a>
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-md-3 col-sm-12">
//                     <div className="image">
//                       <img
//                         src={http://localhost:8000/storage/${fastboatdetail.fb_image4}}
//                         alt="image4-wanderlust-cruise"
//                       />
//                       <div className="overlay-box">
//                         <div className="overlay-inner">
//                           <a
//                             className="lightbox-image"
//                             href={http://localhost:8000/storage/${fastboatdetail.fb_image4}}
//                           >
//                             See All Photos
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col border-bottom">
//                   <h3>Description</h3>
//                   <p className="mt-3 justify-text">
//                     {fastboatdetail.fb_description_en}
//                     {/* Wanderlust Cruise, a high-speed vessel that serves transfer
//                     from Bali to Gili Island/Lombok and Penida to Gili
//                     Island/Lombok with a direct route. Suitable for those of you
//                     who want to reach Gili Island and Lombok early. */}
//                   </p>
//                   {/* <p>
//                     Wanderlust speedboats are equipped with all the necessary
//                     safety equipment and take great care for the comfort and
//                     convenience of the passengers. Within two hours, you will be
//                     transferred from Bali to Gili Island aboard the Wanderlust
//                     cruise. Enjoy the beautiful panoramic during your trip with
//                     this comfortable boat.
//                   </p> */}
//                 </div>
//                 <div className="col border-bottom">
//                   <h3>Port</h3>
//                   <div className="mt-3 mb-3">
//                     <div className="col-lg d-flex align-items-center">
//                       <i className="fa fa-anchor icon mr-2"></i>
//                       <p className="mb-0">Sanur Port</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-lg ">
//                   <h3>Schedule</h3>
//                   <table className="table table-hover mt-3">
//                     <thead>
//                       <tr>
//                         <th scope="col " className="text">
//                           Departing Form
//                         </th>
//                         <th scope="col " className="text">
//                           Destination
//                         </th>
//                         <th scope="col " className="text">
//                           Departure Time
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr className="schedule">
//                         <td>
//                           Sanur Port (Bali){" "}
//                           <div className="fa fa-arrow-right" />{" "}
//                         </td>
//                         <td>Gili Trawangan Port (Gili Trawangan)</td>
//                         <td>09:00:00 - 12:30:00</td>
//                       </tr>
//                       <tr>
//                         <td>
//                           Sanur Port (Bali){" "}
//                           <div className="fa fa-arrow-right" />{" "}
//                         </td>
//                         <td>Gili Air Port (Gili Air)</td>
//                         <td>09:00:00 - 13:00:00</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </React.Fragment>
//             ))
//           ) : (
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
//               <radialGradient
//                 id="a11"
//                 cx=".66"
//                 fx=".66"
//                 cy=".3125"
//                 fy=".3125"
//                 gradientTransform="scale(1.5)"
//               >
//                 <stop offset={0} stopColor="#8CB2FF" />
//                 <stop offset=".3" stopColor="#8CB2FF" stopOpacity=".9" />
//                 <stop offset=".6" stopColor="#8CB2FF" stopOpacity=".6" />
//                 <stop offset=".8" stopColor="#8CB2FF" stopOpacity=".3" />
//                 <stop offset={1} stopColor="#8CB2FF" stopOpacity={0} />
//               </radialGradient>
//               <circle
//                 transform-origin="center"
//                 fill="none"
//                 stroke="url(#a11)"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//                 strokeDasharray="200 1000"
//                 strokeDashoffset={0}
//                 cx={100}
//                 cy={100}
//                 r={5}
//               >
//                 <animateTransform
//                   type="rotate"
//                   attributeName="transform"
//                   calcMode="spline"
//                   dur="1.4"
//                   values="360;0"
//                   keyTimes="0;1"
//                   keySplines="0 0 1 1"
//                   repeatCount="indefinite"
//                 />
//               </circle>
//               <circle
//                 transform-origin="center"
//                 fill="none"
//                 opacity=".2"
//                 stroke="#8CB2FF"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//                 cx={100}
//                 cy={100}
//                 r={5}
//               />
//             </svg>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FastboatDetailPage;


const PaymentComponent = forwardRef((props, ref) => {
  const location = useLocation();

  // State untuk menyimpan metode pembayaran yang dipilih.
  const [selectedMethod, setSelectedMethod] = useState("");

  // State untuk menyimpan logo pembayaran yang dipilih.
  const [selectedLogo, setSelectedLogo] = useState("");

  // Referensi untuk elemen modal.
  const modalRef = useRef(null);

  // Objek untuk menyimpan logo pembayaran berdasarkan metode.
  const paymentLogos = {
    // Paypal: "/image/payment/paypal-logo-svgrepo-com.svg",
    // "Credit Card": "/image/payment/credit-card.svg",
    "Bank BCA": "/image/payment/bca-bank-central-asia-logo-svgrepo-com.svg",
    "Bank BNI": "/image/payment/bank-negara-indonesia.svg",
    "Bank BRI": "/image/payment/bri-logo.svg",
    "Bank Mandiri": "/image/payment/Bank-Mandiri-01.svg",
  };

  useEffect(() => {
    // Mengambil metode yang disimpan di localStorage.
    const savedMethod = localStorage.getItem("selectedMethod");

    // Mengambil logo yang disimpan di localStorage.
    const savedLogo = localStorage.getItem("selectedLogo");

    // Jika metode dan logo ada, set ke state.
    if (savedMethod && savedLogo) {
      setSelectedMethod(savedMethod);
      setSelectedLogo(savedLogo);
    }

    // Fungsi untuk menangani perubahan storage.
    const handleStorageChange = () => {
      // Mengambil metode yang diperbarui.
      const updatedMethod = localStorage.getItem("selectedMethod");

      // Mengambil logo yang diperbarui.
      const updatedLogo = localStorage.getItem("selectedLogo");

      // Jika metode dan logo ada, set ke state.
      if (updatedMethod && updatedLogo) {
        setSelectedMethod(updatedMethod);
        setSelectedLogo(updatedLogo);
      }
    };
    // Menambahkan event listener untuk perubahan storage.
    window.addEventListener("storage", handleStorageChange);

    // Cleanup function untuk menghapus listener saat komponen di-unmount.
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [location.pathname]); // Dependensi untuk menjalankan useEffect saat pathname berubah.

  // Fungsi untuk menangani pemilihan metode pembayaran.
  const handlePaymentSelect = (method) => {
    setSelectedMethod(method);
    setSelectedLogo(paymentLogos[method]);

    localStorage.setItem("selectedMethod", method);
    localStorage.setItem("selectedLogo", paymentLogos[method]);

    // Mendapatkan instance modal dari Bootstrap.
    const modal = window.bootstrap.Modal.getInstance(modalRef.current);

    if (modal) {
      modal.hide(); // Menutup modal setelah memilih metode pembayaran.
    }
  };

  // Fungsi validasi untuk memastikan metode pembayaran telah dipilih.
  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!selectedMethod) {
        // Kembalikan false jika metode pembayaran tidak dipilih
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
          const modal = new window.bootstrap.Modal(modalRef.current); // Inisialisasi modal secara manual.
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

