import {
  FaCode,
  FaCss3,
  FaHtml5,
  FaJs,
  FaPencilAlt,
  FaReact,
} from "react-icons/fa";
import "../skills/mySkills.css";

import React from "react";

const mySkills = () => {
  return (
    <div className="skills">
      <span className="skill-title">My Skills</span>
      <div className="skillBars">
        <div className="skillBar">
          <FaHtml5
            size={50}
            style={{ color: "#E34C26", marginRight: "2rem" }}
          />
          <h2>HTML</h2>
        </div>
        <div className="skillBar">
          <FaCss3 size={50} style={{ color: "#264de4", marginRight: "2rem" }} />
          <h2>CSS3</h2>
        </div>
        <div className="skillBar">
          <FaJs size={50} style={{ color: "#f7df1e", marginRight: "2rem" }} />
          <h2>JAVASCRIPT</h2>
        </div>
        <div className="skillBar">
          <FaReact
            size={50}
            style={{ color: "#61dafb", marginRight: "2rem" }}
          />
          <h2>REACT</h2>
        </div>
        <div className="skillBar">
          <FaJs size={50} style={{ color: "#007acc", marginRight: "2rem" }} />
          <h2>TYPESCRIPT</h2>
        </div>
        <div className="skillBar">
          <FaCode size={50} style={{ color: "#38b2ac", marginRight: "2rem" }} />
          <h2>TAILWIND CSS</h2>
        </div>
        <div className="skillBar">
          <FaPencilAlt
            size={50}
            style={{ color: "#FF5733", marginRight: "2rem" }}
          />
          <h2>CANVA</h2>
        </div>
      </div>
    </div>
  );
};

export default mySkills;
