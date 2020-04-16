import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Breakfast from "./Breakfast.js";
import Desserts from "./Desserts.js";
import Lunch from "./Lunch.js";
import Tasty_Salad from "./Tasty_Salad";
import Delicious_Burger from "./Delicious_Burger";
import "./styles.css";

import Recipestyle from "./Recipestyle";
import "./menu-style.css";

const fetchData = (recipeURL, setRecipes) => {
  fetch(recipeURL)
    .then(result => result.json())
    .then(finalResult => setRecipes(finalResult))
    .catch(error => alert("Error", error));
};

export default function App() {
  const recipeURL =
    "https://api.spoonacular.com/recipes/random?apiKey=96c75f90d9c9441286b0d206d58551c0&number=3&number=3&tag=vegan";
  const [recipes, setRecipes] = useState();
  // eslint-disable-next-line
  const [deleteRecipe, setDeleteRecipe] = useState();

  function deleteFunction(index) {
    setDeleteRecipe(recipes.recipes.splice(index, 1));
  }

  useEffect(() => {
    fetchData(recipeURL, setRecipes);
  }, []);

  const recipeItems = recipes
    ? recipes.recipes.map((element, index) => {
        return (
          <div>
            <Recipestyle
              key={index}
              title={element.title}
              recipeUrl={element.sourceUrl}
              imgSrc={element.image}
              deleteR={deleteFunction}
              creditsText={element.creditsText}
            />
          </div>
        );
      })
    : [];

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light" id="navbar">
        <span className="navbar-brand mb-0 h1">Recipe List</span>
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={() => fetchData(recipeURL, setRecipes)}
        >
          Fetch Data
        </button>
      </nav>
      <div className="my-menu">
        <input type="checkbox" id="menu" />
        <label for="menu" />
        <div className="menu-content">
          <div>
            <nav>
              <Link className="link" to="/Desserts">
                Desserts
              </Link>
              <Link className="link" to="/Lunch">
                Lunch
              </Link>
              <Link className="link" to="/Breakfast">
                Breakfast
              </Link>
            </nav>
            <div>
              <Switch>
                <Route path="/Desserts">
                  <Desserts />
                </Route>
                <Route path="/Lunch">
                  <Lunch />
                </Route>
                <Route path="/Breakfast">
                  <Breakfast />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
      <br /> <div className="recipeWrapper">{recipeItems}</div>
    </div>
  );
}
