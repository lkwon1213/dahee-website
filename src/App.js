import React, { Component } from "react";
import "./App.css";

import Cloud from "./components/cloud/Cloud";
import Navbar from "./components/navbar/Navbar";
import SideDrawer from "./components/sidedrawer/SideDrawer";
import Backdrop from "./components/backdrop/Backdrop";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
      <Cloud />
      */}
        <div className="section1">
          <img src="https://loremflickr.com/100/300" />
          <div className="text">
            <h1>Dahee Kwon</h1>
            <p>
              Hi — I am a software developer and artist currently studying at
              Columbia University.
            </p>
          </div>
        </div>
        <div className="section2">
          <img src="https://loremflickr.com/300/400" />
          <p>
            I was born in Seoul, have lived in San Diego, Lawrenceville, London,
            and am currently living in New York.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
