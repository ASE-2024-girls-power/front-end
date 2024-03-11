import React, { Component } from "react";
import "./Navbar.css";
import { NavLink, Outlet } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="root-layout">
        <div className="nav-center">
          <div className="nav-header">
            {/* <div className="img-container">
              <NavLink to="/">
                <img src={logo} alt="logo" />
              </NavLink>
            </div> */}
            <div className="img-container">
              <NavLink to="/">StoryTeller Market</NavLink>
            </div>
            <div className="btn-container">
              <button
                type="button"
                className="nav-btn"
                onClick={this.handleToggle}>
                <CiMenuKebab className="nav-icon" />
              </button>
              <button type="button" className="nav-btn">
                <CiShoppingCart className="nav-icon" />
              </button>
            </div>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <NavLink to="/stories">Stories</NavLink>
            </li>
            <li>
              <NavLink to="/registration">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/signin">Sign in</NavLink>
            </li>
          </ul>
        </div>
        <main>
          <Outlet />
        </main>
      </nav>
    );
  }
}
