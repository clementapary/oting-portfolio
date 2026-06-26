import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./portfolio/about";
import Projects from "./portfolio/projects";
import ServicesPage from "./portfolio/services";
import ExperincesPage from "./portfolio/experinces";
import ToggleTheme from "./components/toggleTheme";

export default function HomePage() {
  return (
    <div className="">
      <div className="">
        <ToggleTheme />
      </div>
      <HeroSection />
      <About />
      <ServicesPage />
      <Projects />
      <ExperincesPage />
    </div>
  );
}
