import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Desserts from "./Desserts.js";
import Lunch from "./Lunch.js";
import Breakfast from "./Breakfast.js";
import "./styles.css";
import "./menu-style.css";

export default function App() {
  return (
    <div className="App">
          <div className="my-navbar"> </div>
          <div className="layout-wrapper">
          <div className="my-menu">
            <input type="checkbox" id="menu" />
            <label htmlFor="menu"> Recipes </label>
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
                </ul>
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
                  </Switch>
              </div>
            </div>
            </div>
        </div>    
  );
}
