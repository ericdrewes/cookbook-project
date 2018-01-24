import React, { Component } from "react";
import axios from "axios";

export default class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeID: this.props.recipeID,
      recipeName: this.props.recipeName,
      recipeImg: this.props.recipeImg
    };
  }

  render() {
    const { name, img, id } = this.props;
    console.log(this.props);
    return (
      <button
        onClick={() => {
          axios
            .post("/api/favorites", {
              id,
              img,
              name
            })
            .then(res => {
              console.log(res.data);
              this.setState({ recipe: res.data });
            })
            .catch(err => alert("Must Be Logged In"));
        }}
      >
        FAVORITE
      </button>
    );
  }
}
