// src/components/CookieConsent.jsx
import React, { useContext, useState } from 'react';
import CookieContext from '../contexts/CookieContext';

const CookieConsent = () => {
  const { preferences, setPreferences } = useContext(CookieContext);
  const [isVisible, setIsVisible] = useState(!preferences.accepted);

  const handleAccept = () => {
    setPreferences({ ...preferences, accepted: true });
    setIsVisible(false);
  };

  const handleDecline = () => {
    setPreferences({ ...preferences, accepted: false });
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="cookie-consent">
        <p>We use cookies to enhance your experience. Do you accept?</p>
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDecline}>Decline</button>
      </div>
    )
  );
};

export default CookieConsent;
