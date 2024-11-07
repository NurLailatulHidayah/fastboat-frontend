import React, { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currency, setCurrency] = useState({ cy_code: "IDR" });

  const updateCurrency = (cy_code) => {
    setCurrency({ cy_code });

    // Update URL dengan currency baru
    // const urlParams = new URLSearchParams(window.location.search);
    // urlParams.set('currency', cy_code);
    // navigate(`?${urlParams.toString()}`);

    // Update the currency in the URL
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('currency', cy_code);
    navigate(`${location.pathname}?${urlParams.toString()}`);
  };

  return (
    <CurrencyContext.Provider value={{ currency, updateCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
