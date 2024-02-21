import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { foodContext } from '../Hooks/foodContext';

const RecipePage = () => {
  const { id } = useParams();
  const { getFoodById } = useContext(foodContext);

  // Find the recipe based on the ID
  const selectedRecipe = getFoodById(id);

  if (!selectedRecipe) {
    return <p>Recipe not found</p>;
  }

  const { strMeal, strMealThumb, strInstructions } = selectedRecipe;
  return (
    <div className='card text-center'>
      <div className='card-header'>{strMeal}</div>

      <div className='card-body'>
        <p className='card-text'>{strInstructions}</p>
      </div>
    </div>
  );
};

export default RecipePage;
