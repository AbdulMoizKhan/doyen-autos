import React, { useState, useEffect } from "react";
import HeroSection from "../../components/hero-section";
import { Divider } from "@mui/material";
import ImageText from "../../components/image-text";
import ImageCards from "../../components/image-cards";

const HomePage = () => {
  const changedText = ['Repair', 'MOT', 'Car Service'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % changedText.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <HeroSection
        heroTittle={`Compare Instant </br> ${changedText[currentTitleIndex]} </br> Deals`}
        heroSubContent="Join the 13,240,704 drivers who have compared local prices to book, so you can get on with the things that make you smile"
        buttonText="Get Started"
      />
      <Divider sx={{borderColor:'#fff',margin:'40px 0px'}}></Divider>
      <ImageText/>
      <Divider sx={{borderColor:'#fff',margin:'40px 0px'}}></Divider>
      <ImageCards/>
    </>
  );
};

export default HomePage;
