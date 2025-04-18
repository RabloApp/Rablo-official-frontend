import React from "react";
import WorkSection from "./WorkSection/WorkSection";
import HeroSection from "./HeroSection/HeroSection";
import ExploreTutors from "./ExploreTutors/ExploreTutors";
import Platform from "./Platform/Platform";
import Faq from "./FAQ/Faq";
import JoinOption from "./JoinOption/JoinOption";

const MainSection = () => {
  return (
    <main>
      <HeroSection />
      <WorkSection/>
      <ExploreTutors />
      <Platform />
      <Faq />
      <JoinOption />
    </main>
  );
};

export default MainSection;
