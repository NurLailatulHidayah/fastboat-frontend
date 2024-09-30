import React, { useState, useEffect } from 'react';

const ScrollTopButtonComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk menggulir ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Fungsi untuk memantau posisi scroll
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='button-scroll-top'
        >
          <i className='fa fa-arrow-alt-to-top arrow'></i>
        </button>
      )}
    </div>
  );
}

export default ScrollTopButtonComponent;
