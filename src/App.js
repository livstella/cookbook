import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Desserts from "./recipe_components/Desserts.js";
import Lunch from "./recipe_components/Lunch.js";
import Breakfast from "./recipe_components/Breakfast.js";
import Categories from "./recipe_components/Categories";
import "./styles.css";
import "./menu-style.css";

export default function App() {
  return (
    <div className="App">
      <div className="my-navbar"> 
      <form class="form-inline my-2 my-lg-0" id="search-field">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
      </div>
      <div className="layout-wrapper">
        <div className="my-menu">
          <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            <Link className="link" to="/">
              Recipes
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
                <Link className="link" to="/Categories">
                  Categories
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
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}
