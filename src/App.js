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
  const recipeURL = "https://api.spoonacular.com/recipes/random?apiKey=7bd8808bacc941f5b6d18386bdfb02ad&number=3&number=3&tag=vegan";
  const [recipes, setRecipes] = useState();

  function deleteFunction(index) {
    setRecipes(recipes.recipes.filter((element, filterIndex) => filterIndex !== index));
  }

    

  useEffect(() => {
    fetchData(recipeURL, setRecipes);
  }, []);

  const recipeItems = recipes
    ? recipes.recipes.map((element, index) => {
        return (

          <div>
            <RecipeStyle 
            key={index}
            title={element.title}
            recipeURL={element.sourceUrl}
            imgSrc={element.image}
            deletR={() => deleteFunction(index)}
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
        <button class="btn btn-outline-success my-2 my-sm-0" onClick={() => fetchData(recipeURL, setRecipes)}>Fetch Data</button>
      </nav>
  
      <br />{" "}
      <div class="recipeWrapper">{recipeItems}</div>

    </div>
  );
}
/*setRecipes((recipes.recipes = ""))
() => console.log(recipes.recipes[index])

*/

