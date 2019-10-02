import React, { Component } from "react";
import "./Navbar.css";

/* Import Components */
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "../sidedrawer/DrawerToggleButton";
import Resume from "../../pages/resume/LillyDaheeKwonResume.pdf";

class Navbar extends Component {
  render() {
    const burger =
      this.props.scrolled === true ? (
        <div className="toolbar-toggle-button">
          <DrawerToggleButton
            drawerOpen={this.props.drawerOpen}
            click={this.props.drawerClickHandler}
          />
        </div>
      ) : null;
    const navigation =
      this.props.scrolled === false ? (
        <div className="toolbar-nav-items">
          <div>
            <NavLink
              /*className="underbar"*/ activeClassName="color"
              to="dahee-website/"
            >
              HOME
            </NavLink>
          </div>
          <div>
            <NavLink
              /*className="underbar"*/
              activeClassName="color"
              to="dahee-website/projects"
            >
              PROJECTS
            </NavLink>
          </div>
          {/*}
          <div>
            <NavLink
              className="underbar" activeClassName="color"
              to="/artwork"
            >
              ARTWORK
            </NavLink>
          </div>
           */}
          <div>
            <NavLink
              /*className="underbar"*/
              activeClassName="color"
              to={Resume}
              target="_blank"
            >
              RESUME
            </NavLink>
          </div>
          {/*
          <div>
            <NavLink
              /*className="underbar" activeClassName="color"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>*/}
        </div>
      ) : null;

    return (
      <header className="toolbar">
        <nav className="toolbar-nav">
          {burger}
          {navigation}
        </nav>
      </header>
    );
  }
}

export default Navbar;
