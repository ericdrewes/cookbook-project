import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Favorites from "../Favorites/Favorites";

import "./Recipes.css";

export default class Recipes extends Component {
  //     // const {id, recipeName, ingredients, smallImageUrls} = recipe

  constructor(props) {
    super(props);

    this.state = {
      recipeID: props.match.params.id,
      searchFilter: "matches",
      recipe: {},
      images: [],
      name: ""
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
        let { name, images } = res.data;
        this.setState({ recipe: res.data, name, images });
      });
  }
  render() {
    const { name, id } = this.state.recipe;
    let img = this.state.images.length
      ? this.state.images[0].hostedLargeUrl
      : " ";
    return (
      <div>
        <h1>Recipes</h1>
        <div className="details">
          <h3 className="details-name">{name}</h3>
          <div className="recipe-image">
            <img src={img} />
            <p className="details-description">
              {this.state.recipe.ingredientLines}
            </p>
          </div>
          <Favorites id={id} name={name} img={img} />
          <Link to="/">
            <button className="back-to-home">
              <p> Return to Home Page</p>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
