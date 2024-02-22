import { useState, useEffect, useContext } from 'react';
import CardItem from '../components/cardItem';
import { foodContext } from '../Hooks/foodContext';

const RecipeIndexPage = () => {
  const { food, fetchProduct } = useContext(foodContext);

  useEffect(() => {
    // Fetch all data when the component mounts
    fetchProduct('', '');
  }, [fetchProduct]);

  return <CardItem food={food} />;
};

export default RecipeIndexPage;