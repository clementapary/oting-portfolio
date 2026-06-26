import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./portfolio/about";
import Experinces from "./portfolio/experinces";
import Projects from "./portfolio/projects";
import Services from "./portfolio/services";

export default function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Experinces />
    </div>
  );
}
