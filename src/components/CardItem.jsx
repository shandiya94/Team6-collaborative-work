import React, { useContext, useState } from 'react';
import { foodContext } from '../Hooks/foodContext';
import { Link } from 'react-router-dom';

const CardItem = () => {
  const { food } = useContext(foodContext);

  return (
    <div className='card-container justify-content-center d-flex flex-wrap'>
      {food.map((item) => (
        <Link to={`/RecipePage/${item.idMeal}`} key={item.idMeal}>
          <div className='card m-2' style={{ maxWidth: '14rem' }}>
            <img src={item.strMealThumb} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>{item.strMeal}</h5>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardItem;