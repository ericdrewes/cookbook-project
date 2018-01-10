import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to='/'><span className="navbar">Home</span></Link>
        <span className="navbar">Profile</span>
        <span className="navbar">About</span>
        <Link to='/search'><span className="navbar">Search</span></Link>

        <span className="login">Login</span>

        <img
          className="hide"
          src="http://www.lakewoodcollege.edu/images/hamburger.png"
        />
      </div>
    );
  }
}
