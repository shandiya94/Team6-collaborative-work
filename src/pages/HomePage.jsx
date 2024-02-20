import { useState, useEffect, useContext } from 'react';
import CardItem from '../components/cardItem';
import { foodContext } from '../Hooks/foodContext';

const HomePage = () => {
  const { food } = useContext(foodContext);
  return <CardItem food={food} />;
};

export default HomePage;
