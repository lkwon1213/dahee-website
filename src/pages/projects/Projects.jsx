import React, { Component } from "react";
import "./Projects.css";

import OneProject from "../../components/oneproject/OneProject";
import Profile from "../home/Profile.JPG";
import DivBot from "./images/divbot.jpg";
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
        Name: "DivBot",
        Keywords: "Chatbot Design, Web Development",
        Description:
          "DivBot helps the user learn about programming by either quizzing the user about fundamental computer science concepts, or by providing resources for the user to learn more about programming based on their needs. We noticed that most coding and interview preparation websites are one-directional, so we wanted to create an interactive application where the user can communicate directly with the chatbot to gain information. We created the structure of the chatbot in Dialogflow, and the front end in React.js. We also created a server using Express.js. <Won 2nd Place at DivHacks 2019, a hackathon hosted by Columbia University>",
        Image: DivBot
      },
      {
        Name: "Digital Food",
        Keywords: "Software Development",
        Description:
          "At the Creative Machines Lab at Columbia University, we are building a a 3D food printer which simultaneously prints and cooks food using laser heat technology, which is personally super exciting with my background in culinary school! For the 3D printer, my team is working on developing the software that will allow for the easy manipulation of the printer, that enables users unfamiliar with 3D printing to create food models and print them. I am developing the GUI for the printer, by editing and embedding an open source 3D modeling software called FreeCAD.",
        Image: Foodprinter,
        Pos: "right"
      },
      {
        Name: "Armaments Research Company",
        Keywords: "Web Development, Full Stack Development",
        Description:
          "As a summer intern at Armaments Research Company, I was tasked with creating a new company website. I went through the process of research, wireframing, development and deployment to create an interactive user friendly website! I worked with the React framework and the Express framework for development, and created wireframes and designs using Adobe XD. This experience was especially enjoyable because I was able to incorporate my design and visual arts background into code. An example of one of the main features I implemented in the website would be an email form that links to the company gmail, and overall, I used agile methodolgy to plan out the whole project, working in two week sprints.",
        Image: ARC,
        Pos: "left"
      },
      {
        Name: "iBegoo",
        Keywords: "Web Development, FrontEnd Development",
        Description:
          "Developed web app tool in team of four for iBegoo, a mobile platform for creating interactive narratives with AR, presented at NYC Media Lab Summit ‘18 and An[0]ther{AI} by professor Amir Baradaran. Created the main component of front-end built with Vue.js, the narrative dialogue tree which exports the narratives to C# for AR",
        Image: iBegoo,
        Pos: "right"
      },
      {
        Name: "Haesun Hwang Studio",
        Keywords: "Website Design",
        Description: "Web Design for South Korean artist and sculptor",
        Image: HaesunHwang,
        Pos: "left"
      },
      {
        Name: "Aokigahara",
        Keywords: "Game Development",
        Description:
          "Designed and created educational room escape themed puzzle game in team of two intended to teach basic coding concepts. Constructed algorithms using C# for various puzzles – simple coding questions that increase in difficulty as the player gets closer to the final escape",
        Image: Aokigahara,
        Pos: "right"
      },
      {
        Name: "72 Seconds",
        Keywords: "Marketing",
        Description: "Marketing Project",
        Image: dxyz,
        Pos: "left"
      },
      {
        Name: "JOH Company",
        Keywords: "Consulting, Journalism",
        Description: "Consulting and Journalism",
        Image: Bmag,
        Pos: "right"
      }
    ];
    return (
      <div className="projects">
        <h1>PROJECTS</h1>
        <div className="proj-list">
          {projects.map(
            ({ Name, Keywords, Description, Image, Color, Pos, index }) => (
              <OneProject
                key={index}
                name={Name}
                keywords={Keywords}
                description={Description}
                image={Image}
                color="rgba(255,246,239,0.3)"
                pos={Pos}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default Projects;
