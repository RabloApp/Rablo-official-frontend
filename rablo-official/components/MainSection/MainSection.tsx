"use client"
import React, { useRef } from "react";
import WorkSection from "./WorkSection/WorkSection";
import HeroSection from "./HeroSection/HeroSection";
import ExploreTutors from "./ExploreTutors/ExploreTutors";
import Platform from "./Platform/Platform";
import Faq from "./FAQ/Faq";
import JoinOption from "./JoinOption/JoinOption";
import Benefits from "./Benefits/Benefits";
import Testimonials from "./Testimonials/Testimonials";
import CraftedForTutors from "./CraftedForTutors/CraftedForTutors";


const MainSection = () => {

  return (
    <main>
      <HeroSection/>
      <CraftedForTutors/>
      <WorkSection/>
      <Benefits />
      <ExploreTutors />
      <Testimonials />
      <Platform />
      <Faq />
      <JoinOption />
    </main>
  );
};

export default MainSection;
