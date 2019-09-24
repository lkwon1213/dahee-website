/* Side Drawer Component
 * This component is the navigation that opens
 * from the side in mobile view.
 * Only to be activated in mobile view when
 * the Drawer Toggle Button is clicked.
 */

import React, { Component } from "react";
import "./SideDrawer.css";

import DrawerToggleButton from "../sidedrawer/DrawerToggleButton";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/careers">Careers</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
