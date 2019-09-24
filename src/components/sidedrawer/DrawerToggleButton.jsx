/* Drawer Toggle Button Component
 * This component allows the opening of the side nav bar
 * when in mobile view instead of the navigation bar at
 * the top of the page in web view
 */

import React, { Component } from "react";
import "./DrawerToggleButton.css";

class drawerToggleButton extends Component {
  render() {
    let buttonClass = this.props.drawerOpen
      ? "toggle-button open"
      : "toggle-button";
    return (
      <button className={buttonClass} onClick={this.props.click}>
        <span />
        <span />
        <span />
        <span />
      </button>
    );
  }
}

export default drawerToggleButton;
