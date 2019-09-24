import React, { Component } from "react";
import "./Navbar.css";

/* Import Components */
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "../sidedrawer/DrawerToggleButton";

class Navbar extends Component {
  render() {
    const burger =
      this.props.scrolled === false ? (
        <div className="toolbar-toggle-button">
          <DrawerToggleButton
            drawerOpen={this.props.drawerOpen}
            click={this.props.drawerClickHandler}
          />
        </div>
      ) : null;
    return (
      <header className="toolbar">
        <nav className="toolbar-nav">
          {burger}
          <div className="toolbar-nav-items">
            <div>
              <NavLink className="underbar" activeClassName="color" to="/">
                HOME
              </NavLink>
            </div>
            <div>
              <NavLink
                className="underbar"
                activeClassName="color"
                to="/projects"
              >
                PROJECTS
              </NavLink>
            </div>
            <div>
              <NavLink
                className="underbar"
                activeClassName="color"
                to="/artwork"
              >
                ARTWORK
              </NavLink>
            </div>
            <div>
              <NavLink
                className="underbar"
                activeClassName="color"
                to="/resume"
              >
                RESUME
              </NavLink>
            </div>
            <div>
              <NavLink
                className="underbar"
                activeClassName="color"
                to="/contact"
              >
                CONTACT
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
