import { useState, useEffect, useContext } from 'react';
import CardItem from '../components/CardItem';
import { foodContext } from '../hooks/foodContext';

const HomePage = () => {
  const { food } = useContext(foodContext);
  return <CardItem food={food} />;
};

export default HomePage;
