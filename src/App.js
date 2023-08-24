import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Portfolio from "./routes/Portfolio";
import Contact from "./routes/Contact";

import { Route, Routes } from "react-router-dom";
import Skills from "./routes/Skills";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
