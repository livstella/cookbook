import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Tasty_Salad from "./Tasty_Salad.js";
import Delicious_Burger from "./Delicious_Burger.js";

export default function Desserts() {
  return (
    <div>
      <Link className="link" to="/Tasty_Salad">
        <Tasty_Salad />
      </Link>
      <div>
        <Switch>
          <Route path="/Tasty_Salad" />
        </Switch>
      </div>
      <Link className="link" to="/Delicious_Burger">
        <Delicious_Burger />
      </Link>
      <div>
        <Switch>
          <Route path="/Delicious_Burger" />
        </Switch>
      </div>
    </div>
  );
}
