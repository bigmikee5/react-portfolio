import "../about/AboutContent.css";

import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/image2.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Aside my Frontend development skills, As an adept Canva user, I bring
          an additional layer of creativity to my projects, enabling me to
          produce captivating visual designs that enhance user experiences. This
          skill further enriches my ability to create well-rounded frontend
          solutions.
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <img src={aboutImg} alt="aboutImg" />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
