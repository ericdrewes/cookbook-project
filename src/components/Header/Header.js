import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      
      <div className="header">
          <Link to='/'> 
            <h1>Rad Recipies</h1>
          </Link>
        
        <a href="http://localhost:3001/login"><span className="login">Login</span></a>

       
      </div>
    );
  }
}
