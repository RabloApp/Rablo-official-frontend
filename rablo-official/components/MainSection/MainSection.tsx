import React from "react";
import WorkSection from "./WorkSection/WorkSection";
import HeroSection from "./HeroSection/HeroSection";
import ExploreTutors from "./ExploreTutors/ExploreTutors";
import Platform from "./Platform/Platform";
import Faq from "./FAQ/Faq";
import JoinOption from "./JoinOption/JoinOption";
import Testimonials from "./Testimonials/Testimonials";

const MainSection = () => {
  return (
    <main>
      <HeroSection />
      <WorkSection/>
      <ExploreTutors />
      <Testimonials />
      <Platform />
      <Faq />
      <JoinOption />
    </main>
  );
};

export default MainSection;
