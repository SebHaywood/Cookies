// src/contexts/CookieContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['userPreferences']);
  const [preferences, setPreferences] = useState(cookies.userPreferences || {});

  useEffect(() => {
    setCookie('userPreferences', preferences, { path: '/' });
  }, [preferences, setCookie]);

  return (
    <CookieContext.Provider value={{ preferences, setPreferences, removeCookie }}>
      {children}
    </CookieContext.Provider>
  );
};

export default CookieContext;
