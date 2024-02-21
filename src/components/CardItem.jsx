import React, { useContext, useState } from 'react';
import { foodContext } from '../hooks/foodContext';

const CardItem = () => {
  const { food } = useContext(foodContext);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className='card-container justify-content-center d-flex flex-wrap'>
      {food.map((item) => (
        <div
          key={item.idMeal}
          className='card m-2'
          style={{ maxWidth: '14rem' }}
        >
          <img src={item.strMealThumb} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{item.strMeal}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItem;
