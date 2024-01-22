import { Box, Container, Grid, SxProps, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AboutPicture from "../../assests/aboutBanner.jpg";

const containerResposive: SxProps = {
  pb: { md: "80px", xs: "0px" },
  pt: { md: "225px", xs: "120px" },
};

const About = () => {
  return (
    <>
      <Image
        src={AboutPicture}
        alt="helow"
        style={{
          color: "transparent",
          position: "absolute",
          zIndex: "-1",
          width: "100%",
          opacity: "0.9",
          height: "100vh ",
        }}
      />
      <Container sx={containerResposive}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item md={12} xs={12} sx={{ paddingRight: "0px",width:'100%' }}>
            <Typography
              sx={{
                fontWeight: "700",
                lineHeight: "1.5",
                fontSize: { xs: "50px", sm: "70px", md: "110px" },
                color:"white"
              }}
            >
              About Us
            </Typography>
            <Typography  sx={{
                fontWeight: "700",
                lineHeight: "1.2",
                fontSize: { xs: "30px", sm: "40px", md: "55px" },
                color:"white",
                mt:8
              }}>
              We focus on providing a streamlined and transparent experience for
              your car repairs
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
