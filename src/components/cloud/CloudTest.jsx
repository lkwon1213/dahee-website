import React, { Component } from "react";

import SmokeElement from "smoke-effect-react";

import SmokeImg from "./images/smokeimg.png";

class CloudTest extends Component {
  state = {};
  render() {
    return (
      <SmokeElement
        opacity="2"
        smokeSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
        smokeOpacity="0.6"
      />
    );
  }
}

export default CloudTest;
