import React, { useState, useEffect } from "react";
import HeroSection from "../../components/hero-section";
import { Divider } from "@mui/material";
import ImageText from "../../components/image-text";
import ImageCards from "../../components/image-cards";
import BoxContainer from "../../components/box-container";
import AcheivedContainer from "../../components/acheived-container";

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
        heroTittle={`Welcome to Doyen Auto Services`}
        heroSubContent="At Doyen Auto Services, we warmly welcome you and your vehicle. As your trusted automotive partner, we prioritize your vehicle's upkeep. Whether it's routine maintenance, repairs, or diagnostics, we're committed to delivering top-notch service tailored to your needs."
        buttonText="Get Started"
      />
      <ImageText
        heading={"Why Choose Doyen Auto Services:"}
        subheading="We are on a mission to revolutionize the way you manage, invest, and secure your finances. With a commitment to innovation and user empowerment."
      />
      <Divider sx={{ borderColor: '#fff', margin: '40px 0px' }}></Divider>
      <BoxContainer />
      <Divider sx={{ borderColor: '#fff', margin: '40px 0px' }}></Divider>
      <AcheivedContainer />
      <Divider sx={{ borderColor: '#fff', margin: '40px 0px' }}></Divider>
      <ImageCards />
      <Divider sx={{ borderColor: '#fff', margin: '40px 0px' }}></Divider>

    </>
  );
};

export default HomePage;
