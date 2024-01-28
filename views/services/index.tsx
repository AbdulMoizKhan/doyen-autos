import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "../../components/service-card";
import Service from "../../assests/service.jpg";
import Service2 from "../../assests/aboutBanner.jpg";

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
        <Grid item xs={6}>
          <ServiceCard
            heading={"Routine Maintenance"}
            services={[
              "•	Oil Changes",
              "•	Oil Filter Change",
              "•	Fluid Checks and Top-Ups",
              "•	Air Filter Replacement",
            ]}
            imgSrc={Service.src}
          />
        </Grid>
        <Grid item xs={6}>
          <ServiceCard
            heading={"Routine Maintenance"}
            services={[
              "•	Oil Changes",
              "•	Oil Filter Change",
              "•	Fluid Checks and Top-Ups",
              "•	Air Filter Replacement",
            ]}
            imgSrc={Service2.src}
          />
        </Grid>
        <Grid item xs={6}>
          <ServiceCard
            heading={"Routine Maintenance"}
            services={[
              "•	Oil Changes",
              "•	Oil Filter Change",
              "•	Fluid Checks and Top-Ups",
              "•	Air Filter Replacement",
            ]}
            imgSrc={Service.src}
          />
        </Grid>
        <Grid item xs={6}>
          <ServiceCard
            heading={"Routine Maintenance"}
            services={[
              "•	Oil Changes",
              "•	Oil Filter Change",
              "•	Fluid Checks and Top-Ups",
              "•	Air Filter Replacement",
            ]}
            imgSrc={Service2.src}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
