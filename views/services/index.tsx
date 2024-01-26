import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "../../components/service-card";

const Services = () => {
  return (
    <Box sx={{ pt: "95px" }}>
      <Box component="div" sx={{ m: { xs: 2, sm: 8 } }}>
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
      <Grid container  margin={3}>
        <Grid item xs={4}>
          <ServiceCard
            heading={"Routine Maintenance"}
            body={`ABC`}
            imgSrc=""
          />
        </Grid>
        <Grid item xs={4}>
          <ServiceCard
            heading={"Routine Maintenance"}
            body={`ABC`}
            imgSrc=""
          />
        </Grid>
        <Grid item xs={4}>
          <ServiceCard
            heading={"Routine Maintenance"}
            body={`ABC`}
            imgSrc=""
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
