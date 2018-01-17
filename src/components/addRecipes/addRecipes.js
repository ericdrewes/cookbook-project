import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default class addRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
        recipe_name: '',
        description: '',
        image_url: ''
    }
  }

  createRecipe(){
    axios
      .post('/api/addrecipes')
      .then(res => {
        console.log(res.data);
        this.setState({
          recipe_name: res.data,
          description: res.data,
          image_url: res.data
        })
      }).catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <h1>add Favorite</h1>
        <div className="search_container">
          <h1>Search</h1>
          <input
            type="text"
            onChange={e => this.updateSearchText(e.target.value)}
          />
          <button onClick={this.handleSearch}>Enter </button>
        </div>
      </div>
    );
  }
}
