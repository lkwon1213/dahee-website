import React, { Component } from "react";
import "./Cursor.css";

class Cursor extends Component {
  state = {};
  render() {
    return (
      <div class="cursorelement">
        <div class="cursor cursor--small"></div>
        <canvas class="cursor cursor--canvas" resize></canvas>
      </div>
    );
  }
}

export default Cursor;
