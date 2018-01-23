import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Header from "./components/Header/Header";
import routes from "./routes";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";

export default class sideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      recipe: []
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <React.Fragment>
        {/* React.Fragment - A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM */}
        <Header />
        <span className="nostyle">
          <RaisedButton label="Nav Bar" onClick={this.handleToggle} />
        </span>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <Link to="/">
            <MenuItem onClick={this.handleClose}> Home </MenuItem>
          </Link>
          <Link to="/search">
            <MenuItem onClick={this.handleClose}> Search </MenuItem>
          </Link>
          <Link to="/profile">
            <MenuItem onClick={this.handleClose}> Profile </MenuItem>
          </Link>
        </Drawer>
        {routes}
      </React.Fragment>
    );
  }
}
