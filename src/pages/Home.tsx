import React from "react";
import Navbar from "../components/NavBar/Navbar";
import Hero from "../components/HomePageComponent/Hero";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Home;
