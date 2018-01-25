import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Profile.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: this.props.authID,
      recipe: []
    };
    this.destroyFavorite = this.destroyFavorite.bind(this);
  }
  destroyFavorite(id) {
    axios
      .delete("/api/favorites/" + id)
      .then(response => {
        this.setState({ recipe: response.data });
      })
      .catch(console.log);
  }

  componentDidMount() {
    axios
      .get(`/api/favorites`)
      .then(res => {
        console.log(res.data);
        this.setState({ recipe: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2 className="profile-title">Favorited Recipes:</h2>
        <Link to="/addrecipes">
          <button className="addRecipe">Add Recipe!</button>
        </Link>
        <div className="profile-flex">
          {this.state.recipe.map((x, i) => {
            console.log(x);
            return (
              <h3>
                <div className="recipe-border">
                  <Link
                    to={
                      x.recipe_id
                        ? `/recipes/${x.recipe_id}`
                        : `/userRecipes/${x.id}`
                    }>
                    <div className="recipe-name">{x.recipe_name}</div>
                    <img
                      className="profile-img"
                      src={x.img}
                    />
                  </Link>
                </div>
                <button 
                  className="delete-button"
                  onClick={() => this.destroyFavorite(x.id)}
                >
                    Delete
                  </button>
              </h3>
            );
          })}
        </div>
      </div>
    );
  }
}
