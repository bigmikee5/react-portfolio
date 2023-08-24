import "../homepage/Homepage.css";

import React from "react";

import introImg from "../assets/port.jpg";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <div className="mask">
        <img src={introImg} alt="introImg" className="intro-img" />
      </div>
      <div className="content">
        <p>Hi, I'M MICHAEL</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/portfolio" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
