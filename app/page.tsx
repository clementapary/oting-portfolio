import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./portfolio/about";
import Projects from "./portfolio/projects";
import ServicesPage from "./portfolio/services";
import ExperincesPage from "./portfolio/experinces";
import ToggleTheme from "./components/toggleTheme";
import SocialIcons from "./components/social-icons";
import ContactMe from "./portfolio/contact-me";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <div className="">
      <div className="sticky top-0 z-10 flex items-center justify-between p-6 py-2 shadow-lg backdrop-blur-lg dark:bg-zinc-900 dark:text-white">
        <SocialIcons />
        <ToggleTheme />
      </div>
      <HeroSection />
      <About />
      <ServicesPage />
      <Projects />
      <ExperincesPage />
      <ContactMe />
      <Footer />
    </div>
  );
}
