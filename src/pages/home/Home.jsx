import React, { Component } from "react";
import "./Home.css";

import Cloud from "../../components/cloud/Cloud";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="cloud">
          <Cloud
            width="70vw"
            height="75vh"
            opacity="10"
            smokeSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
            smokeOpacity="0.7"
          />
        </div>
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

export default Home;
