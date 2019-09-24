import React, { Component } from "react";
import "./Backdrop.css";

class Backdrop extends Component {
  render() {
    let theme = this.props.dark ? "backdrop dark" : "backdrop";
    return <div className={theme} onClick={this.props.backdropClick} />;
  }
}

export default Backdrop;
