import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

import "./Header.css";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      isLoggedIn: false
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  handleLogin() {
    this.setState({ isLoggedIn: true });
  }

  handleLogout() {
    this.setState({ isLoggedIn: false });
  }

  componentDidMount() {
    axios
      .get(`/api/checkAuth`)
      .then(res => {
        console.log(res.data);
        this.setState({ user: res.data, isLoggedIn: true });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div className="header">
        <span className="nostyle">
          <img
            className="hamburger"
            src={"http://www.lakewoodcollege.edu/images/hamburger.png"}
            onClick={this.handleToggle}
          />
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

          {!isLoggedIn ? (
            <a href="http://localhost:3001/login">
              <MenuItem onClick={this.handleClose}> Login </MenuItem>
            </a>
          ) : (
            <MenuItem
              onClick={(req, res) => {
                this.handleClose();
                this.setState({ isLoggedIn: false });
                axios.get("/logout").then(() => {
                  this.props.history.push('/')
                });
              }}
            >
              {" "}
              Logout{" "}
            </MenuItem>
          )}
        </Drawer>

        <Link to="/">
          <h1 className="main-header">Rad Recipes</h1>
          <h2 className="header-quote">A Free Online Recipe Database</h2>
        </Link>
      </div>
    );
  }
}
 
export default withRouter(Header);
