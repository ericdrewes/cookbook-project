import React, { Component } from "react";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <span className="navbar">Recipes</span>
        <span className="navbar">Profile</span>
        <span className="navbar">About</span>
        <span className="navbar">Contact</span>

        <span className="login">Login</span>

        <img
          className="hide"
          src="http://www.lakewoodcollege.edu/images/hamburger.png"
        />
      </div>
    );
  }
}
