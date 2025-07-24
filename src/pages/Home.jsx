import React from "react";

import ThemeToggle from "../components/ThemeToggle";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WorksSection from "../components/WorksSection";
import FeaturedSection from "../components/FeaturedSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen  bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <WorksSection />

        <FeaturedSection />

        <Footer />
      </main>
    </div>
  );
};

export default Home;
