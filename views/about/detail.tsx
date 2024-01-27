import React from "react";
import { Box, Container, Divider, SxProps, Typography } from "@mui/material";

const textWrapper: SxProps = {
  width: "80%",
  mx: "auto",
};

const ourServices = [
  {
    name: "Mechanical Repairs:",
    detail:
      "From routine maintenance to complex engine diagnostics, our experienced technicians are equipped to handle a wide range of mechanical repairs.",
  },
  {
    name: "Auto Maintenance:",
    detail:
      "We believe in proactive vehicle care. Our comprehensive maintenance services ensure that your car runs smoothly and efficiently.",
  },
  {
    name: "Diagnostic Services:",
    detail:
      "State-of-the-art diagnostic tools help us identify and address issues with precision, saving you time and money.",
  },
  {
    name: "Customer Satisfaction: ",
    detail:
      "Your satisfaction is our priority. We aim to build lasting relationships with our customers by delivering exceptional service with a smile.",
  },
];

const whyChooseUs = [
  {
    name: "Expert Team:",
    detail:
      "Our team comprises highly skilled and certified technicians passionate about cars and dedicated to their craft.",
  },
  {
    name: "Quality Assurance:",
    detail:
      "We use the latest technology and high-quality parts to ensure that your vehicle receives the best care.",
  },
  {
    name: "Transparent Communication:",
    detail:
      "We believe in open and honest communication. You'll always be informed about the status of your vehicle and any necessary repairs.",
  },
  {
    name: "Convenience:",
    detail:
      "With our convenient location and efficient service, we aim to make the auto care experience hassle-free for our customers.",
  },
];

const Detail = () => {
  return (
    <Box>
      <Container sx={{ mb: 6 }}>
        <Divider sx={{mt:5}} />
        <Box sx={textWrapper}>
          <Typography
            variant="subtitle1"
            fontSize={32}
            fontWeight={400}
            textAlign={"center"}
            my={8}
            data-aos="zoom-in"
          >
            At Doyen Auto Services, we take pride in being a leading name in the
            automotive service industry. With a commitment to excellence and a
            passion for cars, we have been providing top-notch auto services to
            our valued customers.
          </Typography>

        </Box>
        <Divider sx={{mt:5,mb:5}} />
        <Typography variant="h4" mb={3} data-aos="zoom-in">
          Our Mission
        </Typography>
        <Typography variant="subtitle2" data-aos="zoom-in">
          At Doyen Auto Services, our mission is to deliver unparalleled
          automotive solutions that prioritize quality, reliability, and
          customer satisfaction. We strive to exceed expectations by combining
          cutting-edge technology with a team of skilled professionals dedicated
          to keeping your vehicle in optimal condition.
        </Typography>
        <Divider sx={{mt:3}} />
        <Typography variant="h4" mt={3} mb={3} data-aos="zoom-in">
          Services We Offer
        </Typography>
        <ul style={{ paddingLeft: "24px" }}>
          {ourServices.map((item, i) => (
            <li key={i} style={{ paddingBottom: "14px" }} data-aos="zoom-in">
              <Typography variant="subtitle2">
                {" "}
                <span style={{ fontWeight: "bold" }}>{item.name} </span>
                {item.detail}
              </Typography>
            </li>
          ))}
        </ul>
        <Divider sx={{mt:3}} />
        <Typography variant="h4" mt={3} mb={3} data-aos="zoom-in">
          Why Choose Doyen Auto Services
        </Typography>
        <ul style={{ paddingLeft: "24px" }}>
          {whyChooseUs.map((item, i) => (
            <li key={i} style={{ paddingBottom: "14px" }} data-aos="zoom-in">
              <Typography variant="subtitle2">
                {" "}
                <span style={{ fontWeight: "bold" }}>{item.name} </span>
                {item.detail}
              </Typography>
            </li>
          ))}
        </ul>
        <Divider sx={{mt:3}} />

        <Typography
          variant="h3"
          mt={3}
          mb={3}
          sx={{ textAlign: "center", color: "tomato" }}
          data-aos="zoom-out"
        >
          Contact Us
        </Typography>
        <Typography variant="subtitle2" fontWeight={700} data-aos="zoom-out">
          Experience the Doyen Auto Services difference. Visit our garage at 50,
          Stronend Street, G22 6AR <br />
          Give us a call at 07760926245 or support@doyen.co.uk to schedule your
          next service appointment.
        </Typography>
        <Typography
          variant="h6"
          mt={5}
          mb={3}
        >
          Thank you for choosing Doyen Auto Services – Where Excellence Meets Automotive Care!
        </Typography>
      </Container>
    </Box>
  );
};

export default Detail;
