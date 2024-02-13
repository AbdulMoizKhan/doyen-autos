import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "../../components/service-card";
import Service from "../../assests/service.jpg";
import Service2 from "../../assests/aboutBanner.jpg";
import { servicesData } from "../../mocks/services";

const Services = () => {
  return (
    <Box sx={{ pt: "95px", width: "100%" }}>
      <Box component="div" sx={{ m: { xs: 2, sm: 6 } }}>
        <Typography
          variant="h1"
          textAlign="center"
          sx={{ mt: 4 }}
          data-aos="zoom-out"
        >
          Our Auto Services
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          sx={{ mt: 2, mb: { xs: 5, sm: 10 } }}
          data-aos="fade-right"
        >
          At Doyen Auto Services, we take pride in offering a comprehensive
          range of automotive services to keep your vehicle running smoothly.
          Our skilled team of mechanics is dedicated to providing high-quality
          workmanship and exceptional customer service. Whether you drive a
          domestic or foreign vehicle, we have the expertise to meet all your
          automotive needs. Explore our services below:
        </Typography>
        <Divider
          sx={{
            backgroundColor: "black",
            height: "1px",
            mb: { xs: 5, sm: 10 },
          }}
        />
      </Box>
      <Grid container p={6} spacing={3} sx={{ width: "100%" }}>
        {servicesData.map((service, index) => (
          <Grid key={index} item xs={12} sm={12} md={6} mb={4}>
            <ServiceCard
              heading={service.heading}
              services={service.services}
              imgSrc={service.imgSrc}
            />
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ mt: 3 }} />
      <Box p={6} display="flex" alignItems="center" flexDirection="column">
        <Typography
          variant="h3"
          mt={3}
          mb={3}
          sx={{ textAlign: "center", color: "tomato" }}
        >
          Schedule an Appointment Today!
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={700}
          sx={{ padding: { xs: "0px 40px", sm: "0px 50px", md: "0px 70px" } }}
        >
          Whether your vehicle needs routine maintenance, urgent repairs, or
          performance upgrades, Doyen Auto Services is here to deliver top-notch
          service. Our skilled technicians use the latest tools and technology
          to ensure your vehicle receives the care it deserves. Schedule an
          appointment today and experience the difference of working with a
          trusted car mechanic team.
        </Typography>
        <Typography variant="h6" mt={5} mb={3}>
          Thank you for choosing Doyen Auto Services – Where Excellence Meets
          Automotive Care!
        </Typography>
      </Box>
    </Box>
  );
};

export default Services;
