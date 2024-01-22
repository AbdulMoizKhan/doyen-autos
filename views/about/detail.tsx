import React from "react";
import { Box, Container, SxProps, Typography } from "@mui/material";

const textWrapper: SxProps = {
  width: "80%",
  mx: "auto",
};

const Detail = () => {
  return (
    <Box>
      <Container sx={{ mb: 6 }}>
        <Box sx={textWrapper}>
          <Typography
            variant="subtitle1"
            fontSize={32}
            fontWeight={400}
            textAlign={"center"}
            my={8}
          >
            Doyen Auto Services is focused on providing a streamlined and
            transparent experience for your car repairs.
          </Typography>
        </Box>
        <Typography variant="h4" mb={3}>
          Trust, Transparency, and Convenience
        </Typography>
        <Typography variant="subtitle2">
          Doyen Auto Services is dedicated to three core principles:
          trustworthiness, transparency, and customer convenience. With a
          commitment to honest communication and assessments, the company
          ensures a trustworthy service experience. Transparency is evident in
          clear explanations of service processes and itemized billing,
          empowering customers with a clear understanding of maintenance
          details. Prioritizing customer convenience, Doyen Auto Services
          streamlines processes and offers flexible scheduling options, making
          automotive service straightforward and efficient. These principles
          collectively define the company's commitment to providing a reliable,
          transparent, and convenient service for its valued
        </Typography>

        <Typography variant="h4" mt={3} mb={3}>
          Online, Fixed Price Quote
        </Typography>
        <Typography variant="subtitle2">
          Users initiate the process by acquiring an online fixed price quote at
          Doyen Auto Services, aligning with industry standards. This approach
          is designed to offer upfront clarity on costs, ensuring transparency
          and preventing unexpected surprises for customers. The emphasis on
          providing accurate, fixed price quotes reflects Doyen Auto Services'
          commitment to a straightforward and customer-friendly experience.
        </Typography>
        <Typography variant="h4" mt={3} mb={3}>
          Quick Quote Turnaround
        </Typography>
        <Typography variant="subtitle2">
          The promise of receiving a fixed price quote in minutes suggests an
          efficient and prompt service, catering to the modern customer's need
          for quick and accessible information.
        </Typography>
        <Typography variant="h4" mt={3} mb={3}>
          Booking Process
        </Typography>
        <Typography variant="subtitle2">
          Once users are satisfied with the quote, they can proceed to book the
          service. This step indicates a seamless transition from obtaining a
          quote to scheduling the actual repair or maintenance work.
        </Typography>
        <Typography variant="h4" mt={3} mb={3}>
          Mobile Mechanic or Garage Option
        </Typography>
        <Typography variant="subtitle2">
          Doyen Auto Services offers flexibility by allowing customers to choose
          between a mobile mechanic who comes to their location and a garage
          option where the vehicle can be taken for repairs.
        </Typography>
        <Typography variant="h4" mt={3} mb={3}>
          Work Undertaken in the Workshop
        </Typography>
        <Typography variant="subtitle2">
          If customers opt for the garage option, the service specifies that the
          work will be undertaken in their workshop. This information provides
          transparency about where the repairs will take place.
        </Typography>
      </Container>
    </Box>
  );
};

export default Detail;
