import React, { Component } from "react";
import "./Navigation.css";

import DrawerToggleButton from "./DrawerToggleButton";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  state = {};

  constructor(props) {
    super(props);
    // Set up the basic object property requirements.
    this.initialised = false; // Whether the navigation is already initialised
    this.navItems = []; // This will contain the generic nav item objects
    this.app = null; // The PIXI application
    this.container = null; // The PIXI container element that will contain the nav elements
    this.screenFilter = null; // The screen filter to be appliced to the container
    this.navWidth = null; // The full width of the navigation
    this.background = null; // The container for the background graphic
    this.pointerdown = false; // Indicates whether the user's pointer is currently down on the page
    this.dragging = false; // Indicates whether the nav is currently being dragged. This is here to allow for both the dragging of the nav and the tapping of elements.

    // Bind the listener methods to the class instance
    this.onPointerMove = this.onPointerMove.bind(this);
    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerUp = this.onPointerUp.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  init = () => {
    //
  };

  makeNavItems = () => {
    //initializes nav item elments, canvas renditions, pixi sprites and interactivity
  };

  makeNavItem = title => {
    //initializes nav item as a canvas element
    //takes string and renders it to canvas
  };

  setupWebGLContext = () => {
    //init pixi app and append to nav element
  };

  focusNavItemByIndex = index => {
    //given numeric index, calc the pos of the associated nav elemnt and simulates mouse move to pos
  };

  deInit = () => {
    //remove all event listeners and association, prep for garbage collection
  };

  setupBackground = mousepos_px => {
    //redraws the background graphic and container
  };

  fixMousePos = () => {
    //coerces mouse pos as vector w units in 0-1 range
  };

  onResize = e => {
    //responds to window resize event
  };

  onPointerMove = e => {
    //responds to pointer move event, update app
  };

  onPointerDown = e => {
    //on pointer down, create timeout and after a short period of time, drag event
  };

  onPointerUp = e => {
    //responds to window pointer vent up
  };
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
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/projects">PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to="/artwork">ARTWORK</NavLink>
          </li>
          <li>
            <NavLink to="/resume">RESUME</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
