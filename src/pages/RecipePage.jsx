import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { foodContext } from '../hooks/foodContext';

const RecipePage = () => {
  const { id } = useParams();
  const { getFoodById } = useContext(foodContext);

  const selectedRecipe = getFoodById(id);

  if (!selectedRecipe) {
    return <div className='text-center'>Recipe not found.</div>;
  }

  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strInstructions,
    strYoutube,
  } = selectedRecipe;

  // Extract ingredients and their measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = selectedRecipe[`strIngredient${i}`];
    const measure = selectedRecipe[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className='d-flex justify-content-center'>
      <div className='card mb-3' style={{ maxWidth: '840px', width: '100%' }}>
        <div className='row g-0'>
          <div className='col-md-6'>
            <img
              src={strMealThumb}
              className='img-fluid rounded-start'
              alt={strMeal}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '400px',
              }} // Adjust maxHeight as needed
            />
          </div>
          <div className='col-md-6'>
            <div className='card-body'>
              <h5 className='card-title'>{strMeal}</h5>
              <p className='card-text'>
                <strong>Category:</strong> {strCategory}
              </p>
              <p className='card-text'>
                <strong>Area:</strong> {strArea}
              </p>
              <div className='card-text'>
                <strong>Ingredients:</strong>
                <ul>
                  {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              {strYoutube && (
                <p className='card-text'>
                  <a
                    href={strYoutube}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Watch on YouTube
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className='card-body'>
          <p className='card-text'>
            <strong>Instructions:</strong>
            <br />
            {strInstructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
