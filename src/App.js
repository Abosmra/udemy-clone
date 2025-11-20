import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ReimagineCareer from "./components/ReimagineCareer";
import SkillsSection from "./components/SkillsSection";
import TrustedCompanies from "./components/TrustedCompanies";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Categories />
      <ReimagineCareer />
      <SkillsSection />
      <TrustedCompanies />
    </div>
  );
}
