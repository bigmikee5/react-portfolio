import React from "react";

import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Homepage2 from "../components/homepage2/Homepage2";
import MySkills from "../components/skills/mySkills";
const Skills = () => {
  return (
    <div>
      <NavBar />
      <Homepage2
        heading="SKILLS"
        text="I possess a comprehensive skill set in web development technologies. My proficiency in HTML and CSS enables me to create structured, visually appealing layouts while ensuring accessibility and SEO optimization. I am adept at utilizing Canva to produce engaging designs that enhance the overall user experience. In addition, my leverage in JavaScript allows me to develop dynamic and interactive web applications, while my skill in React and TypeScript empowers me to create modular, efficient, and well-documented user interfaces. I am also skilled in Tailwind CSS, enabling me to quickly design responsive and modern interfaces by utilizing utility classes. These combined skills reflect my commitment to crafting exceptional digital experiences."
      />
      <MySkills />
      <Footer />
    </div>
  );
};

export default Skills;
