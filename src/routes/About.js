import React from "react";

import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Homepage2 from "../components/homepage2/Homepage2";
import AboutContent from "../components/about/AboutContent";

const About = () => {
  return (
    <div>
      <NavBar />
      <Homepage2
        heading="ABOUT ME"
        text="I am a frontend web developer skilled in HTML, CSS,JavaScript, React, TypeScript,Tailwind CSS and Canva. I am committed to pushing the boundaries of web development to create exceptional user experiences. My dedication to skill enhancement and embracing new challenges makes me an asset in any frontend development endeavor."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
