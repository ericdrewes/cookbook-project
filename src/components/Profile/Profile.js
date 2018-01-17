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
        <h3>Profile</h3>
        <div>
          {this.state.recipe.map((x, i) => {
            return <h1> 
                    <Link to={`/recipes/${x.recipe_id}`}>         
                        <div>{x.recipe_name}</div>
                        <img src={x.img} />
                    </Link>
                   </h1>;
            })}
        </div>
      </div>
    );
  }
}