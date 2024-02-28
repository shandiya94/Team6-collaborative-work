import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../hooks/themeContext';

const GDPRBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { bgColorClass } = useContext(ThemeContext);

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
      className={bgColorClass}
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
      <p className='text-muted'>
        Your privacy matters to us. We use cookies to personalize content and
        analyze our traffic. By clicking &quot;Accept,&quot; you consent to the
        use of cookies for these purposes. You can learn more about it by
        reading our{' '}
        <a href='/privacy-policy' className='text-muted'>
          Privacy Policy
        </a>
        , and you can change your preferences at any time on our{' '}
        <a href='/cookie-settings' className='text-muted'>
          Cookie Settings
        </a>{' '}
        page.
      </p>
      <button onClick={handleAccept} className='btn btn-info me-2'>
        Accept
      </button>
      <button onClick={handleReject} className='btn btn-dark'>
        Reject
      </button>
    </div>
  );
};

export default GDPRBanner;
