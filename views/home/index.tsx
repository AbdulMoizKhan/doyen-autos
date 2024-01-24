import React, { useState, useEffect } from "react";
import HeroSection from "../../components/hero-section";
import { Divider } from "@mui/material";
import ImageText from "../../components/image-text";
import ImageCards from "../../components/image-cards";

const HomePage = () => {
  // const changedText = ['Repair', 'MOT', 'Car Service'];
  // const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % changedText.length);
  //   }, 2000);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <>
      <HeroSection
        heroTittle={`Doyen Auto Services`}
        heroSubContent="At Doyen Auto Services, we understand the importance of a reliable and well-maintained vehicle in your daily life. Our team of dedicated and experienced car mechanics is committed to providing top-notch automotive services to keep you on the road with confidence."
        buttonText="Get Started"
      />
      <Divider sx={{borderColor:'#fff',marginTop:'260px', marginBottom:'90px'}}></Divider>
      <ImageText/>
      <Divider sx={{borderColor:'#fff',margin:'40px 0px'}}></Divider>
      <ImageCards/>
    </>
  );
};

export default HomePage;
