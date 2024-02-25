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
        This website uses cookies to ensure you get the best experience on our
        website.
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
