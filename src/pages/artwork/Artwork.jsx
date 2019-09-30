import React, { Component } from "react";
import "./Artwork.css";
//import { RegularPolygon } from "@psychobolt/react-paperjs";
import { Slide } from "react-slideshow-image";

import im1 from "./images/im1.JPG";
import im2 from "./images/im2.JPG";

class Artwork extends Component {
  state = {};

  render() {
    const images = [im1, im2];
    const properties = {
      duration: 5000,
      transitionDuration: 700,
      infinite: true,
      indicators: true,
      arrows: true,
      onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
      }
    };
    return (
      <div className="artwork">
        <div className="paintings">
          <Slide {...properties}>
            <div className="each-slide">
              <img src={images[0]} />
            </div>
            <div className="each-slide">
              <img src={images[1]} />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Artwork;
