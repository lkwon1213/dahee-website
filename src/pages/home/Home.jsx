import React, { Component } from "react";
import "./Home.css";

import Cloud from "../../components/cloud/Cloud";
import Sign from "./sign4.png";
import Profile from "./ProfileBW.JPG";
import Projects from "../projects/Projects";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="cloud">
          <Cloud
            width="100vw"
            height="100vh"
            smokeSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
            smokeOpacity="0.3"
          />
        </div>
        <span className="line" />
        <div className="section1">
          {/*<img src={Sign} />*/}
          <img src={Profile} />
          <div className="text">
            <h1>Dahee Kwon</h1>
            <p>
              Hi — I am a software developer and artist currently studying at
              Columbia University.
            </p>
            <p>
              I was born in Seoul, have lived in San Diego, Lawrenceville,
              London, and am currently living in New York.
            </p>
            <p>
              My interests are in web development and more recently, computer
              vision. I have worked on projects that span from front end
              development, UI design, GUI development, and game development.
            </p>
          </div>
        </div>
        {/*<Projects />*/}
      </div>
    );
  }
}

export default Home;
