import React, { Component } from "react";

import axios from "axios";

import "./addRecipes.css";
// import { BADQUERY } from "dns";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "http://159.89.152.32:3001"
    : "http://localhost:3001";

export default class addRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe_name: "",
      description: "",
      img: "",
      alertfired: false
    };
    this.createRecipe = this.createRecipe.bind(this);
    this.updateRecipeName = this.updateRecipeName.bind(this);
    this.updateRecipeDescription = this.updateRecipeDescription.bind(this);
    this.updateRecipeImg = this.updateRecipeImg.bind(this);
  }

  updateRecipeName(val) {
    this.setState({ recipe_name: val });
  }

  updateRecipeDescription(val) {
    this.setState({ description: val });
  }

  updateRecipeImg(val) {
    this.setState({ image_url: val });
  }

  createRecipe() {
    console.log("adding");
    axios
      .post("/api/addrecipe", {
        recipe_name: this.state.recipe_name,
        description: this.state.description,
        img: this.state.image_url
      })
      .then(res => {
        console.log("res.data");

        this.setState(
          {
            recipe_name: res.data,
            description: res.data,
            img: res.data,
            alertfired: true
          },
          () => {
            this.props.history.push("/profile");
          }
        );
        console.log("Added To Profile");
        alert("Added to Profile");
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    axios
      .get("/api/checkAuth")
      .then(
        result =>
          result.data
            ? this.setState({ loggedIn: true })
            : (window.location = BASE_URL + "/login")
      );
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          <h2 className="addrecipe-title">Add New Recipe</h2>
          <div className="recipe-name">
            <h3>New Recipe:</h3>
            <textarea
              type="text"
              onChange={e => this.updateRecipeName(e.target.value)}
            />
          </div>

          <div className="recipe-description">
            <h3 className="rec-desc-title">Recipe Description:</h3>
            <textarea
              className="rec-description"
              type="text"
              onChange={e => this.updateRecipeDescription(e.target.value)}
            />
          </div>

          <div className="recipe-img">
            <h3 className="recimg">Recipe Image:</h3>
            <textarea
              type="text"
              onChange={e => this.updateRecipeImg(e.target.value)}
            />
            <button onClick={this.createRecipe}>Enter</button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
