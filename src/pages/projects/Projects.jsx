import React, { Component } from "react";
import "./Projects.css";

import OneProject from "../../components/oneproject/OneProject";
import Profile from "../home/Profile.JPG";
import iBegoo from "./images/iBegoo.png";
import HaesunHwang from "./images/HaesunHwang.png";
import dxyz from "./images/dxyz.png";
import Aokigahara from "./images/Aokigahara.png";
import Bmag from "./images/Bmag.jpg";
import Foodprinter from "./images/foodprinter.jpg";
import ARC from "./images/ARC.png";

class Projects extends Component {
  state = {};
  render() {
    const projects = [
      {
        Name: "Digital Food",
        Description: "GUI development for 3D food printer and laser cooker",
        Image: Foodprinter,
        Pos: "right"
      },
      {
        Name: "Armaments Research Company",
        Description: "Website Development",
        Image: ARC,
        Pos: "left"
      },
      {
        Name: "iBegoo",
        Description: "Development of web application",
        Image: iBegoo,
        Pos: "right"
      },
      {
        Name: "Haesun Hwang Studio",
        Description: "Web Design for South Korean artist and sculptor",
        Image: HaesunHwang,
        Pos: "left"
      },
      {
        Name: "Aokigahara",
        Description: "Game Development",
        Image: Aokigahara,
        Pos: "right"
      },
      {
        Name: "72 Seconds",
        Description: "Marketing Project",
        Image: dxyz,
        Pos: "left"
      },
      {
        Name: "JOH Company",
        Description: "Consulting and Journalism",
        Image: Bmag,
        Pos: "right"
      }
    ];
    return (
      <div className="projects">
        <h1>PROJECTS</h1>
        {projects.map(({ Name, Description, Image, Color, Pos, index }) => (
          <OneProject
            key={index}
            name={Name}
            description={Description}
            image={Image}
            color="rgba(255,246,239,0.3)"
            pos={Pos}
          />
        ))}
      </div>
    );
  }
}

export default Projects;
