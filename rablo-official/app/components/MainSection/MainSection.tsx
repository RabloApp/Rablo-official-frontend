import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import JoinOption from "./JoinOption/JoinOption";
import Platform from "./Platform/Platform";
import Faq from "./FAQ/Faq";
import Testimonails from "./Testimonials/Testimonials";

const MainSection = () => {
  return (
    <main>
      <HeroSection />
      <Testimonails/>
      <Platform/>
      <Faq/>
      <JoinOption/>
      
      
    </main>
  );
};

export default MainSection;
