import React, { useContext, useMemo } from 'react';
import { foodContext } from '../hooks/foodContext';
import { Link } from 'react-router-dom';

const CarouselItem = React.memo(({ item, index }) => (
  <div
    className={`carousel-item ${index === 0 ? 'active' : ''}`}
    key={item.idMeal}
  >
    <div className='container d-flex justify-content-between align-items-center'>
      <img
        src={item.strMealThumb}
        className='d-block shadow-lg'
        alt={item.strMeal}
        style={{
          maxHeight: '450px',
          maxWidth: '100%',
          objectFit: 'cover',
        }}
        loading='lazy'
      />
      <div className='ms-5' style={{ width: '50%' }}>
        <h1 className='display-4 fst-italic'>{item.strMeal}</h1>
        <p className='text-muted' style={{ fontSize: '1.5rem' }}>
          <strong>Feast on the Flavors:</strong> Dive into the heart of{' '}
          {item.strCategory} cuisine, a culinary journey that promises to
          delight your taste buds.
        </p>
        <p className='text-muted' style={{ fontSize: '1.5rem' }}>
          <strong>Discover the Origin:</strong> Savor the authentic tastes
          originating from {item.strArea}, where tradition meets taste.
        </p>
        <Link to={`/recipe/${item.idMeal}`}>View Recipe</Link>
      </div>
    </div>
  </div>
));

const MainContent = () => {
  const { food } = useContext(foodContext);

  const uniqueFood = useMemo(() => {
    if (!food) return [];
    return Array.from(new Set(food?.map((item) => item.idMeal))).map((idMeal) =>
      food.find((item) => item.idMeal === idMeal)
    );
  }, [food]);

  if (!uniqueFood || uniqueFood.length === 0) {
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
      <hr
        className='featurette-divider'
        style={{ borderColor: '#666666', borderWidth: '0.2rem' }}
      />
      <div
        id='myCarousel'
        className='carousel slide mb-6 my-5'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          {uniqueFood.map((_, index) => (
            <button
              key={index}
              type='button'
              data-bs-target='#myCarousel'
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className='carousel-inner'>
          {uniqueFood.map((item, index) => (
            <CarouselItem key={item.idMeal} item={item} index={index} />
          ))}
        </div>
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
      </div>
      <hr
        className='featurette-divider'
        style={{ borderColor: '#666666', borderWidth: '0.2rem' }}
      />
      <div className='container marketing'>
        {/* ... rest of your component */}
      </div>
    </div>
  );
};

export default MainContent;
