import React, { useState, useEffect } from "react";
import "./styles.css";

import RecipeStyle from "./RecipeStyle"

const fetchData = (recipeURL, setRecipes) => {
  fetch(recipeURL)
    .then(result => result.json())
    .then(finalResult => setRecipes(finalResult))

    .catch(error => alert("Error", error));
  //move to a separate "helpers" file (keep functions out of the APP component)?
  //a promise is an js object, that works with asynchronous code
  //which may be pending, successfully fetched (you get the result) or it can fail (which error catches account for)

};

export default function App() {
  const recipeURL = "https://api.spoonacular.com/recipes/random?apiKey=4075a91c4cec4364a6a65681a3cac3dd&number=6&number=3&tag=vegan";
  const [recipes, setRecipes] = useState();

  const [error, setError] = useState();
    

  useEffect(() => {
    fetchData(recipeURL, setRecipes);
  }, []);

  const recipeItems = recipes
    ? recipes.recipes.map((element, index) => {
        return (

          <div>
            <RecipeStyle 
            title={element.title}
            recipeURL={element.sourceUrl}
            imgSrc={element.image}
          />
            <button onClick={() => setRecipes((recipes.categories = ""))}>
              {console.log(recipes.categories[index])}
              Delete a recipe
            </button>

          </div>
        );
      })
    : [];

  return (
    <div className="App">
      <h1>Recipe List</h1>
      <button onClick={() => fetchData(recipeURL, setRecipes)}>
        Fetch Data
      </button>
      <br />{" "}
      <div>{recipeItems}</div>
    </div>
  );
}
