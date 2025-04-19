import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import ExploreTutors from "./ExploreTutors/ExploreTutors";
import Platform from "./Platform/Platform";
import Faq from "./FAQ/Faq";
import JoinOption from "./JoinOption/JoinOption";
import Benefits from "./Benefits/Benefits";

const MainSection = () => {
  return (
    <main>
      <HeroSection />
      <Benefits/>
      <ExploreTutors />
      <Platform />
      <Faq />
      <JoinOption />
    </main>
  );
};

export default MainSection;
