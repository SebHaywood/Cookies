// src/components/CookiePreferences.jsx
import React, { useContext, useState } from 'react';
import CookieContext from '../contexts/CookieContext';

const CookiePreferences = () => {
  const { preferences, setPreferences, removeCookie } = useContext(CookieContext);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSave = () => {
    setPreferences({ ...preferences });
    setIsVisible(false);
  };

  const handleRemoveCookies = () => {
    removeCookie('userPreferences');
    setPreferences({});
    setIsVisible(false);
  };

  return (
    <div>
      <button onClick={toggleVisibility} className="preferences-button">Cookie Preferences</button>
      {isVisible && (
        <div className="cookie-preferences-modal">
          <h2>Cookie Preferences</h2>
          <label>
            <input
              type="checkbox"
              checked={preferences.accepted || false}
              onChange={(e) => setPreferences({ ...preferences, accepted: e.target.checked })}
            />
            Accept Cookies
          </label>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleRemoveCookies}>Remove Cookies</button>
        </div>
      )}
    </div>
  );
};

export default CookiePreferences;
