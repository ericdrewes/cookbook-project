import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



import './Profile.css'

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
      
        <h2>Favorited Recipes:</h2>
        <Link to="/addrecipes">
          <button>Add Recipe!</button>
        </Link>
        <div className="profile-flex">
          {this.state.recipe.map((x, i) => {
            console.log(x);
            return (
              
              <h3>
                <div className="recipe_border">
                  <Link to={x.recipe_id ? `/recipes/${x.recipe_id}` : `/userRecipes/${x.id}`}>
                    <div>{x.recipe_name}</div>
                    <img
                      className="profile-img"
                      style={{ width: 400, height: 250 }}
                      src={x.img}
                    />
                  </Link>
                </div>
              </h3>
            
            );
          })}
        </div>
      </div>
    );
  }
}
