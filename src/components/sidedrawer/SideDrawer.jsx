import React, { Component } from "react";
import "./SideDrawer.css";

import DrawerToggleButton from "./DrawerToggleButton";
import { NavLink } from "react-router-dom";
import Resume from "../../pages/resume/LillyDaheeKwonResume.pdf";

class SideDrawer extends Component {
  state = {};
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <nav className={drawerClasses}>
        <div className="drawer-toggle-button">
          <DrawerToggleButton
            drawerOpen={this.props.drawerOpen}
            click={this.props.drawerClickHandler}
          />
        </div>
        <ul>
          <li>
            <NavLink className="linktext" to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className="linktext" to="/projects">
              PROJECTS
            </NavLink>
          </li>
          {/*
          <li>
            <NavLink className="linktext" to="/artwork">
              ARTWORK
            </NavLink>
          </li>*/}
          <li>
            <NavLink className="linktext" to={Resume} target="_blank">
              RESUME
            </NavLink>
          </li>
          {/*
          <li>
            <NavLink className="linktext" to="/contact">
              CONTACT
            </NavLink>
          </li>*/}
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
