import React, { useState, useEffect } from "react";
import "./styles.css";

import Recipestyle from "./Recipestyle";

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
  const [deleteRecipe, setDeleteRecipe] = useState();

  const deleteFunction = index => {
    setDeleteRecipe(recipes.recipes.splice(index, 1));
  };

  useEffect(() => {
    fetchData(recipeURL, setRecipes);
  }, []);

  const recipeItems = recipes
    ? recipes.recipes.map((element, index) => {
        return (
          <div>
            <Recipestyle
              index={index}
              title={element.title}
              recipeURL={element.sourceUrl}
              imgSrc={element.image}
              deleter={deleteFunction}
              creditsText={element.creditsText}
            />
          </div>
        );
      })
    : [];

  return (
    <div className="App">
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Recipe List</span>
        <button
          class="btn btn-outline-success my-2 my-sm-0"
          onClick={() => fetchData(recipeURL, setRecipes)}
        >
          Fetch Data
        </button>
      </nav>
      <br /> <div class="recipeWrapper">{recipeItems}</div>
    </div>
  );
}
