import React, { useRef } from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import InformationSection from "./components/InformationSection";

const LandingPage = () => {
  const featuresRef = useRef(null);

  const handleScroll = () => {
    window.scrollTo({
      top: featuresRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <HeroSection handleScroll={handleScroll} />
      <InformationSection />
      <FeaturesSection featuresRef={featuresRef} />
    </>
  );
};

export default LandingPage;
