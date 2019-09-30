import React, { Component } from "react";
import "./Projects.css";

import OneProject from "../../components/oneproject/OneProject";
import Profile from "../home/Profile.JPG";

class Projects extends Component {
  state = {};
  render() {
    const projects = [
      {
        Name: "Digital Food",
        Description: "GUI development for 3D food printer and laser cooker",
        Image: Profile,
        Color: "white",
        Pos: "right"
      },
      {
        Name: "Armaments Research Company",
        Description: "Website Development",
        Image: Profile,
        Color: "white",
        Pos: "left"
      },
      {
        Name: "iBegoo",
        Description: "Development of web application",
        Image: Profile,
        Color: "white",
        Pos: "right"
      },
      {
        Name: "Haesun Hwang Studio",
        Description: "Web Design for South Korean artist and sculptor",
        Image: Profile,
        Color: "white",
        Pos: "left"
      },
      {
        Name: "Aokigahara",
        Description: "Game Development",
        Image: Profile,
        Color: "white",
        Pos: "right"
      },
      {
        Name: "72 Seconds",
        Description: "Marketing Project",
        Image: Profile,
        Color: "white",
        Pos: "left"
      },
      {
        Name: "JOH Company",
        Description: "Consulting and Journalism",
        Image: Profile,
        Color: "white",
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
            color={Color}
            pos={Pos}
          />
        ))}
      </div>
    );
  }
}

export default Projects;
