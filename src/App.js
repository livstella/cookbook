import React, { useState, useEffect } from "react";
import "./styles.css";
import RecipeStyle from "./RecipeStyle"

const fetchData = (recipeURL, setRecipes, setError) => {
  fetch(recipeURL)
    .then(result => result.json())
    .then(finalResult => setRecipes(finalResult))
    .catch(error => setError(error));

};

export default function App() {
  const recipeURL = "https://api.spoonacular.com/recipes/random?apiKey=4075a91c4cec4364a6a65681a3cac3dd&number=6&number=3&tag=vegan";
  const [recipes, setRecipes] = useState();
  const [error, setError] = useState();
    
  useEffect(() => {
    fetchData(recipeURL, setRecipes, setError);
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
          <button 
            onClick={() => console.log(recipes.recipes[index])}> 
            Delete a recipe
        </button>
          </div>
        );
      })
    : [];

  return (
    <div className="App">
      <h1>Recipe List</h1>
      <button onClick={() => fetchData(recipeURL, setRecipes, setError)}>
        Fetch Data
      </button>
      <br />{" "}
      <div>{recipeItems}</div>
      <div>{error}</div>
    </div>
  );
}
/*setRecipes((recipes.recipes = ""))}
*/