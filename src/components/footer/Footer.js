import "../footer/Footer.css";

import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +23470300317345
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              edehmichael16@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>Visit me @</p>
          <div className="social">
            <Link
              to="https://web.facebook.com/michael.edeh.1460"
              target="_blank"
            >
              <FaFacebook
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>
            <Link to="https://twitter.com/michaeledehh" target="_blank">
              <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/edeh-michael-852580109/"
              target="_blank"
            >
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>
            <Link to="https://github.com/bigmikee5" target="_blank">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
