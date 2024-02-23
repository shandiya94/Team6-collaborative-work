import { useContext } from 'react';
import { foodContext } from '../hooks/foodContext';
import { Link } from 'react-router-dom';

const CardItem = () => {
  const { food } = useContext(foodContext);

  if (!food || food.length === 0) {
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
    <div className='m-80'>
      <div className='card-container justify-content-center d-flex flex-wrap '>
        {food.map((item) => (
          <Link to={`/recipe/${item.idMeal}`} key={item.idMeal}>
            <div className='card m-2' style={{ maxWidth: '14rem' }}>
              <img src={item.strMealThumb} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>{item.strMeal}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardItem;
