import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Desserts from "./recipe_components/Desserts.js";
import Lunch from "./recipe_components/Lunch.js";
import Vegan from "./recipe_components/Vegan.js";
import Breakfast from "./recipe_components/Breakfast.js";
import Categories from "./recipe_components/Categories";
import SearchBar from "./recipe_components/SearchBar";
import SearchResults from "./recipe_components/SearchResults";
import "./styles.css";
import "./menu-style.css";

export default function App() {
  return (
    <div className="App">
      <div className="my-navbar"> 
           <Link className="link" to="/Categories">
              <h3 id="category-link">Categories</h3> 
            </Link>
           <SearchBar/>
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
                <Link className="link" to="/Vegan">
                  Vegan
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="recipeWrapper">
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
              <Route path="/Categories">
                <Categories />
              </Route>
              <Route path="/Vegan">
                <Vegan />
              </Route>
            </Switch>
          </div>
        </div>
        
      </div>
    </div>
  );
}
