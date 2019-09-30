import React, { Component } from "react";
import "./Home.css";

import Cloud from "../../components/cloud/Cloud";
import Sign from "./sign4.png";
import Profile from "./Profile.JPG";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="cloud">
          <Cloud
            width="55vh"
            height="55vh"
            opacity="10"
            smokeSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
            smokeOpacity="0.7"
          />
        </div>
        <span className="line" />
        <div className="section1">
          {/*<img src={Sign} />*/}
          <div className="text">
            <h1>Dahee Kwon</h1>
            <p>
              Hi — I am a software developer and artist currently studying at
              Columbia University.
            </p>
          </div>
        </div>
        <div className="section2">
          <div className="text">
            <p>
              I was born in Seoul, have lived in San Diego, Lawrenceville,
              London, and am currently living in New York.
            </p>
            <p>
              My interests are in web development and more recently, computer
              vision. I have worked on projects that span from front end
              development, UI design, GUI development, and game development. As
              both a designer and an engineer,
            </p>
          </div>
          <img src={Profile} />
        </div>
      </div>
    );
  }
}

export default Home;
