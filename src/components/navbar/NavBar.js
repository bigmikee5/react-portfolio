import "../navbar/NavBar.css";
import React, { useState, useEffect } from "react"; // Import useEffect for event listener cleanup
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => setClick(!click);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // Use useEffect for adding and removing event listener
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Michael</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skill">Skill</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={30} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
