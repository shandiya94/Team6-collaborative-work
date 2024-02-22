import { useState, useEffect, useContext } from "react";
import CardItem from "../components/cardItem";
import { foodContext } from "../Hooks/foodContext";
import Header from "../components/Header";

const RecipeIndex = () => {
  const { food } = useContext(foodContext);
  return (
    <div>
      <Header />
      <CardItem food={food} />;
    </div>
  );
};

export default RecipeIndex;
