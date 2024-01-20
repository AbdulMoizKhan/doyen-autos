import React from "react";
import TextField from "../../components/text-field";
import HeroSection from "../../components/hero-section"

const HomePage = () => {
  return (
    <>
      <HeroSection
      heroTittle="Compare Instant Repair Deals."
      heroSubContent="Join the 13,240,704 drivers who have compared local prices to book, so you can get on with the things that make you smile."
      buttonText="Get Started"
      />
    </>
  );
};

export default HomePage;
