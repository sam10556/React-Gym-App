import React from "react";
import Hero from "./Hero";
import About from "./About";
import BMI from "./BMI";
import Service from "./Service";
import Banner from "./Banner";
import Trainers from "./Trainers";
import Popular from "./Popular";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto overflow-hidden">
        <Hero/>
        <About/>
        <BMI/>
        <Service/>
        <Banner/>
        <Trainers/>
        <Popular/>
        <Pricing/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
