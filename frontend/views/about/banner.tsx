import {
  Box,
  Container,
  Grid,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import AboutPicture from "../../assests/bannerCheck.jpg";
import { useMediaQuery } from "react-responsive";

const flexBox: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

const Banner = () => {
  const isMobileOrLaptop = useMediaQuery({ query: "(min-width: 900px)" });

  return (
    <>
      <Container>
        {isMobileOrLaptop == true ? (
          <Image
            src={AboutPicture}
            alt="helow"
            style={{
              color: "transparent",
              position: "absolute",
              zIndex: "-1",
              width: "100%",
              filter: "brightness(0.5)",
              height: "101vh",
              top: "65px",
              left: "0px",
            }}
          />
        ) : (
          <Box
            sx={{
              padding: "0px",
              background: "linear-gradient(to bottom, #000000 , #808080)",
              height: "50vh",
              width: "100%",
              position: "absolute",
              left: "0px",
              top: "0px",
            }}
          ></Box>
        )}
        <Stack
          sx={{
            height: { xs: "50vh", md: "100vh", lg: "100vh" },
            justifyContent: "center",
          }}
        >
          <Typography
            data-aos="fade-up"
            sx={{
              fontWeight: "700",
              lineHeight: "1.2",
              fontSize: { xs: "20px", sm: "30px", md: "55px" },
              color: "white",
              mt: 8,
            }}
          >
            Welcome to Doyen Auto Services <br />
            Your Trusted Automotive Partner!
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default Banner;
