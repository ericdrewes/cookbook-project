import React, { Component } from "react";
import { Link } from "react-router-dom";

import './Footer.css'

export default class Footer extends Component {
    constructor() {
      super();
  
      this.state = {
        recipes: []
       
      };
    }

    render(){
        return(
            <a href={"https://developer.yummly.com/documentation"}>
                <h3 className="yummly"> powered by Yummly </h3>
            </a>
        )
    }
}
  