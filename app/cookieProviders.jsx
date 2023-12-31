'use client';
import React, { createContext, useContext, useState } from 'react';
export const cookieContext = createContext({});

export const CookieProviders = ({ children }) => {
  const [cookie, setCookie] = useState(null);

  return (
    <cookieContext.Provider value={{ cookie, setCookie }}>
      {children}
    </cookieContext.Provider>
  );
};
