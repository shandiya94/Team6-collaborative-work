import { useState, useEffect, useContext } from 'react';
import MainContent from '../components/MainContent';
import { foodContext } from '../hooks/foodContext';

const RecipeIndexPage = () => {
  const { food, fetchProduct } = useContext(foodContext);

  useEffect(() => {
    // Fetch all data when the component mounts
    fetchProduct('', '');
  }, [fetchProduct]);

  return <MainContent food={food} />;
};

export default RecipeIndexPage;
