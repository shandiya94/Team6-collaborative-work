import { useEffect, useContext } from 'react';
import CardItem from '../components/CardItem';
import { foodContext } from '../hooks/foodContext';
import MetaTags from '../components/MetaTags';

const RecipeIndexPage = () => {
  const { fetchProduct } = useContext(foodContext);

  useEffect(() => {
    // Fetch all data when the component mounts
    fetchProduct();
  }, [fetchProduct]);

  return (
    <div>
      <MetaTags
        title='Recipe Index - Hungry Chef'
        description='Explore our comprehensive index of mouth-watering recipes from around the world. Find the perfect dish for any occasion with Hungry Chef.'
      />
      <CardItem />
    </div>
  );
};

export default RecipeIndexPage;
