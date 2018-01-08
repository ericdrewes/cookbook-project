import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import addRecipe from './components/addRecipe/addRecipe';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Recipes from './components/Recipes/Recipes';
import Search from './components/Search/Search';

export default (
    <Switch>
        <Route exact path = '/' component={Home} />
        <Route path = '/addRecipe' component={addRecipe} />
        <Route path = '/Login' component={Login} />
        <Route path = '/Profile' component={Profile} />
        <Route path = '/Recipes' component={Recipes} />
        <Route path = '/Search' component = {Search} />
    </Switch>
)