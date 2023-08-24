import "../portfolio/Portfolio.css";
import Work from "../myWorks/Work";
import WorkData from "../myWorks/WorkData"; // Assuming this contains the array of work data

import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1 className="project-heading">PORTFOLIO</h1>
      <div className="project-container">
        {WorkData.map((val, ind) => {
          return (
            <Work
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
