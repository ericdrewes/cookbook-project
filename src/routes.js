import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


import Home from "./components/Home/Home";
import addRecipes from "./components/addRecipes/addRecipes";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Recipes from "./components/Recipes/Recipes";
import Search from "./components/Search/Search";
import UserRecipes from "./components/userRecipes/userRecipes";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/addrecipes" component={addRecipes}  />
    <Route path="/login" component={Login} />
    <Route path="/profile" component={Profile} />
    <Route path="/userrecipes/:id" component={UserRecipes} />
    <Route path="/recipes/:id" component={Recipes} />
    <Route path="/search" component={Search} />
  </Switch>
);
