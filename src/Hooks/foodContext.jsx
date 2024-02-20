import { createContext, useEffect, useState } from 'react';
export const foodContext = createContext();

const FoodProvider = ({ children }) => {
  const [food, setFood] = useState([]);

  const fetchProduct = async (searchInput) => {
    try {
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setFood(data.meals);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProduct('', ''); // Initial fetch on component mount
  }, []);

  return (
    <foodContext.Provider value={{ food, fetchProduct }}>
      {children}
    </foodContext.Provider>
  );
};

export default FoodProvider;
