import { Container, Grid, SxProps, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import AboutPicture from "../../assests/bannerCheck.jpg";

const containerResposive: SxProps = {
  pb: { md: "80px", xs: "0px" },
  pt: { md: "225px", xs: "120px" },
  height: "100vh",
};

const flexBox: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

const Banner = () => {
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
          opacity: "0.8",
          height: "100vh ",
        }}
      />
      <Container sx={containerResposive}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid
            item
            md={12}
            xs={12}
            sx={{ paddingRight: "0px", width: "100%" }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                lineHeight: "1.5",
                fontSize: { xs: "50px", sm: "70px", md: "100px" },
                color: "white",
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                lineHeight: "1.2",
                fontSize: { xs: "20px", sm: "30px", md: "45px" },
                color: "white",
                mt: 8,
              }}
            >
              Welcome to Doyen Auto Services – Your Trusted Automotive Partner!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Banner;
