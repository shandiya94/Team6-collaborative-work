import React, { useState, useEffect } from 'react';

const GDPRBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesEnabled = localStorage.getItem('cookiesEnabled');
    if (cookiesEnabled === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesEnabled', 'true');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookiesEnabled', 'false');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#f8f9fa',
        padding: '20px',
        textAlign: 'center',
        zIndex: 1000,
      }}
    >
      <p>
        Your privacy matters to us. We use cookies to personalize content and
        analyze our traffic. By clicking "Accept," you consent to the use of
        cookies for these purposes. You can learn more about it by reading our
        <a href='/privacy-policy'>Privacy Policy</a>, and you can change your
        preferences at any time on our{' '}
        <a href='/cookie-settings'>Cookie Settings</a> page.
      </p>
      <button onClick={handleAccept} className='btn btn-success me-2'>
        Accept
      </button>
      <button onClick={handleReject} className='btn btn-danger'>
        Reject
      </button>
    </div>
  );
};

export default GDPRBanner;
