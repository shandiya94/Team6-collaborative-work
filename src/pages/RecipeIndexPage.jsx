import { useEffect, useContext } from 'react';
import CardItem from '../components/cardItem';
import { foodContext } from '../hooks/foodContext';

const RecipeIndexPage = () => {
  const { fetchProduct } = useContext(foodContext);

  useEffect(() => {
    // Fetch all data when the component mounts
    fetchProduct();
  }, [fetchProduct]);

  return <CardItem />;
};

export default RecipeIndexPage;
