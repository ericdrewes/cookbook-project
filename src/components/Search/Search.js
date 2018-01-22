import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Search.css";

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchText: "",
      searchFilter: "matches",
      recipes: []
    };
    this.updateSearchText = this.updateSearchText.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  updateSearchText(val) {
    this.setState({ searchText: val });
  }

  handleSearch() {
    axios
      .get(
        `http://api.yummly.com/v1/api/recipes?_app_id=b31967e8&_app_key=aa5e272aeecc1ebff7f5a6003d03c0fb&q=${
          this.state.searchText
        }`
      )
      .then(res => {
        console.log(res.data);
        this.setState({ recipes: res.data.matches });
      });
  }

  render() {
    console.log(this.state.recipes);
    return (
      <div>
        <div className="search_container">
          <h1>Search</h1>
          <input
            type="text"
            onChange={e => this.updateSearchText(e.target.value)}
          />
          <button onClick={this.handleSearch}>Enter </button>
        </div>

        <h3>Popular Recipes</h3>
        <div className="recipe_container">
          {this.state.recipes.map((recipe, i) => {
            return (
              <div key={i} className="recipes">
                <Link to={`/recipes/${recipe.id}`}>
                  <div>{recipe.sourceDisplayName}</div>
                  <img src={recipe.imageUrlsBySize[90]} />{" "}
                </Link>
              </div>
            );
          })}
          
        </div>
        <div>powered by Yummly</div>
      </div>
    );
  }
}
