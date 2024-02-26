import React from 'react';
import MetaTags from '../components/MetaTags';

const AboutUsPage = () => {
  return (
    <div className='container my-5 py-5' style={{ height: '55vh' }}>
      <MetaTags
        title='About Us - Hungry Chef'
        description='Learn more about Hungry Chef, our passion for global cuisine, and our mission to bring people together through the joy of cooking.'
      />
      <h1 className='text-muted'>About Hungry Chef</h1>
      <p className='text-muted'>
        Welcome to Hungry Chef, your ultimate destination for discovering
        delicious and easy-to-follow recipes from around the globe. Whether
        you're a seasoned chef or a kitchen novice, our platform is designed to
        inspire your culinary journey.
      </p>
      <p className='text-muted'>
        Founded in 2024, Hungry Chef has grown into a vibrant community of food
        lovers. Our mission is to empower individuals to explore the world of
        cooking with confidence and joy. We believe that cooking should be
        accessible to everyone, and our diverse recipe collection reflects this
        belief.
      </p>
      <p className='text-muted'>
        From traditional dishes to modern cuisine, Hungry Chef is your partner
        in the kitchen. Let's cook something amazing together!
      </p>
    </div>
  );
};

export default AboutUsPage;
