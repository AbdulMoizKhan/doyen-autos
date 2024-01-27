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
        heroTittle={`Welcome to Doyen Auto Services`}
        heroSubContent="At Doyen Auto Services, we extend a warm welcome to you and your vehicle. As your trusted automotive partner, we understand the significance of a well-maintained vehicle in your daily life. Whether you're here for routine maintenance, repairs, or expert diagnostics, we're dedicated to providing the highest quality service tailored to your automotive needs."
        buttonText="Get Started"
      />
      <ImageText
      heading={"Why Choose Doyen Auto Services:"}
      subheading="We are on a mission to revolutionize the way you manage, invest, and secure your finances. With a commitment to innovation and user empowerment."
      />
      <Divider sx={{borderColor:'#fff',margin:'40px 0px'}}></Divider>
      <ImageCards/>
    </>
  );
};

export default HomePage;
