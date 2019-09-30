import React, { Component } from "react";
import "./OneProject.css";
import Tilt from "react-tilt";

class OneProject extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    let positioning;
    if (this.props.pos === "right") {
      positioning = (
        <div
          className="oneproject right"
          style={{ backgroundColor: this.props.color }}
        >
          <div className="text">
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
          </div>
          <Tilt
            className="Tilt"
            options={{
              max: 17,
              scale: 1,
              easing: "cubic-bezier(.03,.98,.52,.99)"
            }}
          >
            <img src={this.props.image} />
          </Tilt>
        </div>
      );
    } else {
      positioning = (
        <div
          className="oneproject left"
          style={{ backgroundColor: this.props.color }}
        >
          <Tilt
            className="Tilt"
            options={{
              max: 17,
              scale: 1,
              easing: "cubic-bezier(.03,.98,.52,.99)"
            }}
          >
            <img src={this.props.image} />
          </Tilt>
          <div className="text">
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
          </div>
        </div>
      );
    }
    return (
      <Tilt
        options={{
          max: 0,
          scale: 1.02,
          easing: "cubic-bezier(.03,.98,.52,.99)"
        }}
      >
        {positioning}
      </Tilt>
    );
  }
}

export default OneProject;
