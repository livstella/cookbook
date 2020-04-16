import React from "react";
import "./styles.css";
import RecipesData from "./RecipeData";
import RecipeStyle from "./Recipestyle";

import "./menu-style.css";

/*-const fetchData = (recipeURL, setRecipes) => {
  fetch(recipeURL)
    .then(result => result.json())
    .then(finalResult => setRecipes(finalResult))
    .catch(error => alert("Error", error));
};

export default function App() {

  const recipeURL = "https://api.spoonacular.com/recipes/random?apiKey=96c75f90d9c9441286b0d206d58551c0&number=3&number=3&tag=vegan";
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
    : []; */

export default function App() {
  const recipeItems = RecipesData.map(element => {
    return (
      <div>
        <RecipeStyle
          key={element.id}
          title={element.title}
          imgSrc={element.image}
          description={element.description}
          recipeUrl={element.sourceUrl}
        />
      </div>
    );
  });

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light" id="navbar">
        <span className="navbar-brand mb-0 h1">Recipe List</span>
      </nav>
      <div className="my-menu">
        <input type="checkbox" id="menu" />
        <label for="menu" />
        <div className="menu-content">
          <ul>
            <li>
              <a href="https://devhumor.com/">Desserts</a>
            </li>
            <li>
              <a href="https://devhumor.com/">Lunch</a>
            </li>
            <li>
              <a href="https://devhumor.com/">Breakfast</a>
            </li>
          </ul>
        </div>
      </div>
      <br /> <div className="recipeWrapper">{recipeItems}</div>
    </div>
  );
}
