import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Favorites from "../Favorites/Favorites";

import "./userRecipes.css";

export default class UserRecipes extends Component {
  //     // const {id, recipeName, ingredients, smallImageUrls} = recipe

  constructor(props) {
    super(props);

    this.state = {
      recipe_name: " ",
      recipe: {},
      description: " ",
      img: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    axios.get(`/api/readspecific/${this.props.match.params.id}`).then(res => {
      console.log(res.data);
      let { name, images } = res.data;
 
      this.setState({ recipe: res.data[0], name, images });
    });
  }
  render() {
    const {recipe, id} =this.state.recipe;
   console.log(this.state.recipe)
    return (
      <div>
        <h1>User Recipe:</h1>
        <div className="details">
          <h3 className="details-name">
            {this.state.recipe.recipe_name}
          </h3>
          <div className="recipe-image">
            <img className="user-img" 
            style={{width: 500, height: 300}}
            src={this.state.recipe.img} />
            <p className="user-details">
              {this.state.recipe.description}
            </p>
          </div>
          <Link to="/" className="back-to-home">
            <button>
              <p> Return to Home Page</p>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
