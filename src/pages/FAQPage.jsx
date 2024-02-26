import React from 'react';
import MetaTags from '../components/MetaTags';

const FAQPage = () => {
  return (
    <div className='container my-5 py-5'>
      <MetaTags
        title='FAQ - Hungry Chef'
        description='Find answers to frequently asked questions about Hungry Chef, including tips on cooking, recipe selection, and how to use our website.'
      />

      <h1 className='text-muted'>Frequently Asked Questions</h1>
      <div className='text-muted'>
        <h2>How can I find a recipe?</h2>
        <p className='text-muted'>
          Use our search feature at the top of the page or browse recipes by
          category. You can also explore our latest and most popular recipes on
          the homepage.
        </p>
      </div>
      <div>
        <h2 className='text-muted'>Do I need an account to save recipes?</h2>
        <p className='text-muted'>
          Yes, creating an account allows you to save your favorite recipes,
          create shopping lists, and more. Registration is free and easy.
        </p>
      </div>
      <div>
        <h2 className='text-muted'>Can I submit my own recipes?</h2>
        <p className='text-muted'>
          Yes, we love to see your culinary creations! Please sign in to your
          account and visit the "Submit a Recipe" section. Follow the
          instructions to share your recipe with the Hungry Chef community.
        </p>
      </div>
    </div>
  );
};

export default FAQPage;
