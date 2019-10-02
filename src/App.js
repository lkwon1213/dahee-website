import React, { Component } from "react";
import "./App.css";

import Cloud from "./components/cloud/Cloud";
import Navbar from "./components/navbar/Navbar";
import SideDrawer from "./components/sidedrawer/SideDrawer";
import Backdrop from "./components/backdrop/Backdrop";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Artwork from "./pages/artwork/Artwork";
import Contact from "./pages/contact/Contact";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    particlesOpen: false,
    scrolled: false
  };

  /* Scrolling Controller */
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    if (window.pageYOffset !== 0) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false, particlesOpen: false });
  };

  render() {
    let backdrop = this.state.sideDrawerOpen ? (
      <Backdrop backdropClick={this.backdropClickHandler} />
    ) : null;

    const routes = [
      { path: "dahee-website/", Component: Home },
      { path: "dahee-website/projects", Component: Projects },
      { path: "dahee-website/artwork", Component: Artwork },
      { path: "dahee-website/contact", Component: Contact }
    ];

    return (
      <div className="App">
        <Router>
          <Navbar
            scrolled={this.state.scrolled}
            drawerClickHandler={this.drawerToggleClickHandler}
            drawerOpen={this.state.sideDrawerOpen}
            style={{ zIndex: 100 }}
          />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            drawerClickHandler={this.drawerToggleClickHandler}
            drawerOpen={this.state.sideDrawerOpen}
          />
          {backdrop}
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path} component={Component}>
              {/*<Component />*/}
            </Route>
          ))}
        </Router>
      </div>
    );
  }
}

export default App;
