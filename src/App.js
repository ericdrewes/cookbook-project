import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import routes from "./routes";

import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";

export default class sideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <React.Fragment>
        <Header />
        <span className="nostyle">
          <RaisedButton label="Nav Bar" onClick={this.handleToggle} />
        </span>
        <Drawer open={this.state.open}>
          <Link to="/">
            <MenuItem> Home </MenuItem>
          </Link>
          <Link to="/search">
            <MenuItem> Search </MenuItem>
          </Link>
          <Link to="/profile">
            <MenuItem> Profile </MenuItem>
          </Link>
        </Drawer>
        {routes}
      </React.Fragment>
    );
  }
}
