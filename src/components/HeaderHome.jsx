import React from "react";
import "./HeaderHome.css";
import logo from "../assets/Hungry chef (3).png";
import { Link } from "react-router-dom";
function HeaderHome() {
  return (
    <>
      <div className="homeHeaderContainer">
        <img className="logo" src={logo} alt="Hungry Chef Logo" />
        <Link to="/RecipeIndex">
          <button className="recipeIndex">Recipe Index</button>
        </Link>
        <Link>
          <button className="favourites">Favourite recipes</button>
        </Link>
        <Link>
          <button className="aboutUs">About</button>
        </Link>
        <Link>
          <button className="aboutUs">Sign in</button>
        </Link>
      </div>
    </>
  );
}

export default HeaderHome;
