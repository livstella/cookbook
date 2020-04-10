import React, { useState, useEffect } from "react";
import "./styles.css";
import RecipeStyle from "./RecipeStyle"

const fetchData = (recipeURL, setRecipes) => {
  fetch(recipeURL)
    .then(result => result.json())
    .then(finalResult => setRecipes(finalResult))
    .catch(error => console.log(error));

};

export default function App() {
  const recipeURL = "https://api.spoonacular.com/recipes/random?apiKey=4075a91c4cec4364a6a65681a3cac3dd&number=3&number=3&tag=vegan";
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
            deletR={deleteFunction}
          />
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
      <div class="recipeWrapper">{recipeItems}</div>

    </div>
  );
}
/*setRecipes((recipes.recipes = ""))
() => console.log(recipes.recipes[index])

*/