import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import './Profile.css'

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: this.props.authID,
      recipe: []
    };
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
        <h3>Favorited Recipes:</h3>
        <Link to="/addrecipes">
          <button>Add Recipe!</button>
        </Link>
        <div>
          {this.state.recipe.map((x, i) => {
            console.log(x);
            return (
              <h1>
                <div className="recipe_border">
                  <Link to={x.recipe_id ? `/recipes/${x.recipe_id}` : `/userRecipes/${x.id}`}>
                    <div>{x.recipe_name}</div>
                    <img
                      style={{ width: 500, height: 300 }}
                      src={x.img}
                    />
                  </Link>
                </div>
              </h1>
            );
          })}
        </div>
      </div>
    );
  }
}
