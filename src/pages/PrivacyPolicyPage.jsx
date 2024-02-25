// PrivacyPolicyPage.jsx

import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className='container my-5'>
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy outlines how OurWebsiteName ("we", "our", or "us")
        collects, uses, and protects your information when you visit our website
        [YourWebsiteURL].
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect personal information that you voluntarily provide to us,
        including but not limited to your name, email address, and contact
        details. We also collect non-personal information such as your browser
        type, IP address, and pages you visit.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        We use the information collected to provide and improve our services,
        communicate with you, and ensure the security of our website.
      </p>

      <h2>Cookie Policy</h2>
      <p>
        Our website uses cookies to enhance your browsing experience. You can
        change your cookie settings at any time on our{' '}
        <a href='/cookie-settings'>Cookie Settings page</a>.
      </p>

      <h2>Your Rights</h2>
      <p>
        Under the GDPR, you have the right to access, correct, delete, and
        restrict the processing of your personal data. If you wish to exercise
        any of these rights, please contact us at [YourContactInformation].
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </p>

      <p>Last updated: [LastUpdatedDate]</p>
    </div>
  );
};

export default PrivacyPolicyPage;
