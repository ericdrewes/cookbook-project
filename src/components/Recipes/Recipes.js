import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import './Recipes.css';

export default class Recipes extends Component {
  //     // const {id, recipeName, ingredients, smallImageUrls} = recipe

  constructor(props) {
    super(props);
    this.state = {
      recipeID: props.match.params.id,
      searchFilter: "matches",
      recipe: {}
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://api.yummly.com/v1/api/recipe/${
          this.state.recipeID
        }?_app_id=b31967e8&_app_key=aa5e272aeecc1ebff7f5a6003d03c0fb`
      )
      .then(res => {
        console.log(res.data);
        this.setState({ recipe: res.data });
      });
  }
  render() {
    console.log(this.state.recipe.name);
    return (
      <div>
        <h1>Recipes</h1>
        <div className="details">
                <h3 className="details-name">{this.state.recipe.name}</h3>
            <div className="recipe-image">
                <img src={this.state.recipe.images ? this.state.recipe.images[0].hostedLargeUrl : " "} />
                <p className="details-description">{this.state.recipe.ingredientLines}</p>
            </div>
            <Link to="/">
            <button className='back-to-home'>
              <h3 > Return to Home Page</h3>
            </button>
            </Link>
        </div>
      </div>
    );
  }
}
