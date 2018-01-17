import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      
      <div className="header">
        <Link to='/'><span className="navbar">Home</span></Link>
        <Link to='/search'><span className="navbar">Search</span></Link>
        <Link to='/profile'><span className="navbar">Profile</span></Link>
        
        <a href="http://localhost:3001/login"><span className="login">Login</span></a>

       
      </div>
    );
  }
}
