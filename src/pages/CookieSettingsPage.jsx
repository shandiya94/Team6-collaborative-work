import React, { useState, useEffect } from 'react';

const CookieSettingsPage = () => {
  const [cookiesEnabled, setCookiesEnabled] = useState(false);

  useEffect(() => {
    const cookiePreference = localStorage.getItem('cookiesEnabled');
    setCookiesEnabled(cookiePreference === 'true');
  }, []);

  const handleSave = (enableCookies) => {
    localStorage.setItem('cookiesEnabled', enableCookies);
    setCookiesEnabled(enableCookies);
    alert(`Cookies have been ${enableCookies ? 'enabled' : 'disabled'}.`);
  };

  return (
    <div className='container my-5'>
      <h1>Privacy & Cookie Policy</h1>

      <p>
        Thank you for visiting our website. This Privacy and Cookie Policy
        outlines how we collect, use, and protect any information you provide to
        us, as well as the use of cookies on our website.
      </p>
      <h1>Information We Collect</h1>
      <p>
        When you visit our website, we may collect certain information about
        your visit, including but not limited to your IP address, browser type,
        referring/exit pages, and the date and time of your visit. We may also
        collect personal information that you voluntarily provide to us, such as
        your name, email address, or any other contact details.
      </p>
      <h1>Use of Cookies</h1>
      <p>
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
        >
          Enable Cookies
        </button>
        <button onClick={() => handleSave(false)} className='btn btn-danger'>
          Disable Cookies
        </button>
      </div>
    </div>
  );
};

export default CookieSettingsPage;
