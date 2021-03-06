import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Desserts from "./recipe_components/Desserts.js";
import Lunch from "./recipe_components/Lunch.js";
import Vegan from "./recipe_components/Vegan.js";
import Breakfast from "./recipe_components/Breakfast.js";
import Categories from "./recipe_components/Categories";
import RecipeByCategory from "./recipe_components/RecipeByCategory";
import SearchBar from "./recipe_components/SearchBar";
import Konami from "react-konami-code";
// import SearchResults from "./recipe_components/SearchResults";
import "./styles.css";
import "./menu-style.css";
import FrontPage from "./FrontPage.js";
import Rickroll from "./recipe_components/Rickroll.js";

export default function App() {
  return (
    <div className="App">
      <div className="my-navbar">
        <Link className="link" to="/categories">
          <h3 id="category-link">Categories</h3>
        </Link>
        <SearchBar />
      </div>
      <div className="layout-wrapper">
        <div className="my-menu">
          <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            <Link className="link" to="/">
              <h3>Recipes</h3>
            </Link>
          </label>
          <div className="menu-content">
            <ul>
              <li>
                <Link className="link" to="/Desserts">
                  Desserts
                </Link>
              </li>
              <li>
                <Link className="link" to="/Lunch">
                  Lunch
                </Link>
              </li>
              <li>
                <Link className="link" to="/Breakfast">
                  Breakfast
                </Link>
              </li>
              <li>
                <Link className="link" to="/Vegan">
                  Vegan
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="recipeWrapper">
          <Konami code={[82, 73, 67, 75]} >
            <Rickroll />
          </Konami>
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
              <Route path="/Vegan">
                <Vegan />
              </Route>
              <Route exact path="/">
                <FrontPage />
              </Route>
              <Route exact path="/categories/">
                <Categories />
              </Route>
              <Route exact path="/categories/:category" children={<RecipeByCategory />} >
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};
