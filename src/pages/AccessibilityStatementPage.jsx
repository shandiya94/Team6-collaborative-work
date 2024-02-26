import React from 'react';
import MetaTags from '../components/MetaTags';

const AccessibilityStatementPage = () => {
  return (
    <div className='container my-5 py-5' style={{ height: '55vh' }}>
      <MetaTags
        title='Accessibility Statement - Hungry Chef'
        description='Read our Accessibility Statement to learn how Hungry Chef is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.'
      />

      <h1 className='text-muted'>Accessibility Statement</h1>
      <p className='text-muted'>
        At Hungry Chef, we are committed to ensuring digital accessibility for
        people with disabilities. We are continually improving the user
        experience for everyone and applying the relevant accessibility
        standards.
      </p>
      <p className='text-muted'>Efforts to support accessibility include:</p>
      <ul>
        <li className='text-muted'>
          Using semantic HTML to provide better structure for assistive
          technologies.
        </li>
        <li className='text-muted'>
          Ensuring that all site functionality is available via keyboard
          navigation.
        </li>
        <li className='text-muted'>
          Providing alternative text descriptions for images to convey their
          purpose.
        </li>
        <li className='text-muted'>
          Continuously training our team on accessibility practices and
          guidelines.
        </li>
      </ul>
      <p className='text-muted'>
        We welcome your feedback on the accessibility of Hungry Chef. Please let
        us know if you encounter any barriers: Fed25Team6@hyperisland.se.
      </p>
    </div>
  );
};

export default AccessibilityStatementPage;
