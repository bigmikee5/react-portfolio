import React from "react";
import NavBar from "../components/navbar/NavBar";
import Homepage from "../components/homepage/Homepage";
import Footer from "../components/footer/Footer";
import Portfolio from "../components/portfolio/Portfolio";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Homepage />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
