import React from "react";

import NavBar from "../components/navbar/NavBar";
import Homepage2 from "../components/homepage2/Homepage2";
import Footer from "../components/footer/Footer";
import Portfolio from "../components/portfolio/Portfolio";

const Project = () => {
  return (
    <div>
      <NavBar />
      <Homepage2
        heading="PORTFOLIO"
        text=" Below you'll find a carefully curated selection of projects that highlight my skills, creativity, and expertise. Each project represents a unique challenge and an opportunity for me to demonstrate my problem-solving abilities and passion for creating impactful solutions."
      />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Project;
