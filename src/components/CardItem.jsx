import React, { useContext } from 'react';
import { foodContext } from '../hooks/foodContext';

const MainContent = () => {
  const { food } = useContext(foodContext);

  if (!food || !Array.isArray(food)) {
    return (
      <div
        className='d-flex justify-content-center align-items-center text-xxl bg-white'
        style={{ height: '100vh' }}
      >
        <h2>No meals found.</h2>
      </div>
    );
  }

  return (
    <div>
      <div
        id='myCarousel'
        className='carousel slide mb-6'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          {food.map((item, index) => (
            <button
              key={item.idMeal}
              type='button'
              data-bs-target='#myCarousel'
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className='carousel-inner'>
          {food.map((item, index) => (
            <div
              key={item.idMeal}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={item.strMealThumb}
                className='d-block w-100'
                alt={item.strMeal}
                style={{ maxWidth: '33.33%', height: 'auto', margin: '0 auto' }}
              />
              <div className='container'>
                <div className='carousel-caption'>
                  <h1>{item.strMeal}</h1>
                  {/* Additional content like descriptions can go here */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue inside the return statement of MainContent */}

        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#myCarousel'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#myCarousel'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>{' '}
      {/* End of the carousel */}
      {/* Start of the marketing section */}
      <div className='container marketing'>
        {/* Placeholder for the three columns of text below the carousel */}
        {/* This will be replaced with dynamic content in the next part */}
        {/* Inside the <div className="container marketing"> */}

        <div className='row'>
          {food.slice(0, 3).map(
            (
              item // Assuming you want to show only the first 3 items
            ) => (
              <div key={item.idMeal} className='col-lg-4'>
                <img
                  src={item.strMealThumb}
                  className='bd-placeholder-img rounded-circle'
                  width='140'
                  height='140'
                  alt={item.strMeal}
                />
                <h2 className='fw-normal'>{item.strMeal}</h2>
                <p>
                  Discover the taste of {item.strArea} cuisine with our{' '}
                  {item.strCategory} recipe, {item.strMeal}. Perfect for any
                  occasion!
                </p>
                <p>
                  <a className='btn btn-secondary' href='#'>
                    View details »
                  </a>
                </p>
              </div>
            )
          )}
        </div>

        {/* Placeholder for START THE FEATURETTES section */}
        {/* This will be dynamically generated in the next part */}
        {/* Continue inside the <div className="container marketing"> */}

        <hr class='featurette-divider' />

        {food.slice(0, 3).map(
          (
            item,
            index // Show featurettes for the first 3 items
          ) => (
            <div
              key={item.idMeal}
              className={`row featurette ${
                index % 2 === 0 ? '' : 'flex-row-reverse'
              }`}
            >
              <div className='col-md-7'>
                <h2 className='featurette-heading'>
                  {item.strMeal}{' '}
                  <span className='text-muted'>{item.strArea} Cuisine.</span>
                </h2>
                <p className='lead'>
                  Enjoy the delicious flavors of {item.strArea} with our{' '}
                  {item.strCategory} recipe, {item.strMeal}. Perfect for family
                  dinners or special occasions.
                </p>
              </div>
              <div className='col-md-5'>
                <img
                  src={item.strMealThumb}
                  className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto'
                  width='500'
                  height='500'
                  alt={item.strMeal}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          )
        )}

        <hr class='featurette-divider' />
      </div>{' '}
      {/* End of the marketing section */}
    </div>
  );
};

export default MainContent;
