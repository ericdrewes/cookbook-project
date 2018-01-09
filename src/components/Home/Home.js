import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Home.css';


export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://api.yummly.com/v1/api/recipes?_app_id=b31967e8&_app_key=aa5e272aeecc1ebff7f5a6003d03c0fb"
      )
      .then(res => {
        console.log(res.data);
        this.setState({ recipes: res.data.matches });
      });
  }

  render() {
      
    const recipes = this.state.recipes.map((recipe, i) => (
        <div key={i} className='recipes'>
            <div>{recipe.sourceDisplayName}</div>
            <img src={recipe.imageUrlsBySize[90]} />
        </div>
      
    ));
    return (
        <header>
        <div className='recipe_data'>
            <h1>Popular Recipes</h1>
            <div className='recipewrap'>{recipes}</div>
        </div>
        </header>
    );
  }
}
