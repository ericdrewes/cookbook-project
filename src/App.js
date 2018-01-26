import React, { Component } from "react";

import "./App.css";

import Header from "./components/Header/Header";

import routes from "./routes";


export default class sideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      recipe: []
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* React.Fragment - A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM */}
        <Header/>
        {routes}
  
      </React.Fragment>
    );
  }
}
