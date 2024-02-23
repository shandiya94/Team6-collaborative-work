import { useEffect, useContext, lazy, Suspense } from 'react';
// import CardItem from '../components/CardItem';
import { foodContext } from '../hooks/foodContext';

const CardItem = lazy(() => import('../components/CardItem'));

const RecipeIndexPage = () => {
  const { fetchProduct } = useContext(foodContext);

  useEffect(() => {
    // Fetch all data when the component mounts
    fetchProduct();
  }, [fetchProduct]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CardItem />
    </Suspense>
  );
};

export default RecipeIndexPage;
