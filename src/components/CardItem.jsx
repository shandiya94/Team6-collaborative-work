import React, { useContext, useState } from 'react';
import { foodContext } from '../hooks/foodContext';

const CardItem = () => {
  const { food } = useContext(foodContext);
  const [selectedCard, setSelectedCard] = useState(null);
  if (!food || !Array.isArray(food)) {
    return (
      <div
        className=' justify-content-center d-flex text-xxl bg-white align-items-center text-secondary'
        style={{ height: '100vh' }}
      >
        <h2 className='text-center'>Sorry! No meals found.</h2>
      </div>
    );
  }

  return (
    <div className='container mt-3'>
      {food.map((item) => (
        <div key={item.idMeal} className='row justify-content-center mb-5 g-0'>
          <div className='col-md-5'>
            <img
              src={item.strMealThumb}
              className='img-fluid'
              alt={item.strMeal}
              style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
            />
          </div>
          <div className='col-md-7 d-flex align-items-center'>
            <div className='ms-3'>
              <h3 className='card-title'>{item.strMeal}</h3>
              <p className='card-text lh-lg'>
                Category: {item.strCategory}
                <br />
                Cuisine: {item.strArea}
                <br />
                This is a delicious {item.strCategory} meal from {item.strArea}{' '}
                cuisine you'll definitely enjoy. Explore the flavors and enjoy
                your cooking!
                <br />
                <a href='#' className='stretched-link'>
                  Click to view recipe
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItem;
