const express = require('express');
const {json} = require('body-parser');


const recipe_controller = require('./recipe_controller');


app.post('/api/test', recipe_controller.create)
app.get('/api/test', recipe_controller.getRecipes)

