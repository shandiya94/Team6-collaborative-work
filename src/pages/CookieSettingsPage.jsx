import { useState, useEffect } from 'react';
import MetaTags from '../components/MetaTags';

const CookieSettingsPage = () => {
  const [cookiesEnabled, setCookiesEnabled] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  useEffect(() => {
    const cookiePreference = localStorage.getItem('cookiesEnabled');
    setCookiesEnabled(cookiePreference === 'true');
  }, []);

  const handleSave = (enableCookies) => {
    localStorage.setItem('cookiesEnabled', enableCookies);
    setCookiesEnabled(enableCookies);
    const message = `Cookies have been ${
      enableCookies ? 'enabled' : 'disabled'
    }.`;
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (

    <div className='container my-5 py-5'>
      <MetaTags
        title='Cookie Settings - Hungry Chef'
        description='Manage your cookie settings on Hungry Chef. Choose how you want us to use cookies to personalize your experience and respect your privacy.'
      />
      <h1 className='text-muted'>Privacy & Cookie Policy</h1>

      <p className='text-muted'>

        Thank you for visiting our website. This Privacy and Cookie Policy
        outlines how we collect, use, and protect any information you provide to
        us, as well as the use of cookies on our website.
      </p>

      <h1 className='text-muted'>Information We Collect</h1>
      <p className='text-muted'>

        When you visit our website, we may collect certain information about
        your visit, including but not limited to your IP address, browser type,
        referring/exit pages, and the date and time of your visit. We may also
        collect personal information that you voluntarily provide to us, such as
        your name, email address, or any other contact details.
      </p>

      <h1 className='text-muted'>Use of Cookies</h1>
      <p className='text-muted'>

        Our website uses cookies to enhance your browsing experience and provide
        personalized content. Cookies are small text files that are stored on
        your computer or mobile device when you visit a website. We use cookies
        for various purposes, including analyzing traffic, improving website
        performance, and providing targeted advertising. By using our website,
        you consent to the use of cookies in accordance with this policy.
      </p>
      <div>
        <button
          onClick={() => handleSave(true)}
          className='btn btn-success me-2'
          aria-label='Enable Cookies'
        >
          Enable Cookies
        </button>
        <button 
        onClick={() => handleSave(false)} 
        className='btn btn-danger'
        aria-label='Disable Cookies'
        >
          Disable Cookies
        </button>
      </div>

      {showNotification && (
        <div
          className='position-fixed p-3'
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'lightgreen',
          }}
        >
          {notificationMessage}
        </div>
      )}

    </div>
  );
};

export default CookieSettingsPage;
