import React from "react";
import "./HomePage.css";
import HeaderHome from "../components/HeaderHome";

const HomePage = () => {
  return (
    <div>
      {/* Render HeaderHome only on the home page */}
      <HeaderHome />
      <div className="backgroundImage">
        <div className="mainContainer">
          <div className="bodyText">
            Welcome to Hungry Chef, your ultimate destination for easy and
            delicious recipes from around the globe! Whether you're a seasoned
            chef or a novice in the kitchen, our app is your go-to resource for
            satisfying your culinary cravings. <br />
            <br />
            <div className="bold">Check out our new recipes!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
