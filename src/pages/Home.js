import React from "react";
import Business from "../components/Business";
import Hero from "../components/Hero";
import Mail from "../components/Mail";
import Navbar from "../components/Navbar";
import Solution from "../components/Solution";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Business />
      <Solution />
      <Mail />
    </>
  );
}

export default Home;
