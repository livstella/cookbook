import React, { useState, useEffect } from "react";
import "./styles.css";
import RecipeStyle from "./Recipestyle";
//import axios from "axios";

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
  //hooks/state variables have to be added inside the component (not outside)
  const recipeURL = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const [recipes, setRecipes] = useState();

  console.log(recipes);
  useEffect(() => {
    fetchData(recipeURL, setRecipes);
  }, []);
  //here, the code only runs once (with the useEffect hook, which is a lifecycle method)
  //if we reload the component, the useEffect will be called again, UNLESS we use the brackets
  //we want to reupdate the data when the fetch is complete, that's why we use state variables
  /*
  const fetchData = async () => {
    const response = await axios.get(recipeURL);

    setRecipes(response.data);
    setError(console.log("Couldn't fetch data!"));
  };
*/
  const recipeItems = recipes
    ? recipes.categories.map((element, index) => {
        return (
          <div key={index}>
            <RecipeStyle
              title={element.idCategory}
              imgSrc={element.strCategoryThumb}
              ingredient={element.strCategory}
              description={element.strCategoryDescription}
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
      {/*when you take in parameters you have to declare an anonymous function*/}
      <div>{recipeItems}</div>
    </div>
  );
}
