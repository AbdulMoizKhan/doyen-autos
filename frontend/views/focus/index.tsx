import { Box, Divider, Typography } from "@mui/material";

const FocusPage = () => {
  return (
    <Box sx={{ pt: "95px" }}>
      <Box component="div" sx={{ m: { xs: 2, sm: 8 } }}>
        <Typography
          variant="h1"
          textAlign="center"
          sx={{ mt: 4 }}
          data-aos="zoom-out"
        >
          Our Focus
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          sx={{ mt: 2, mb: { xs: 5, sm: 10 } }}
          data-aos="fade-right"
        >
          Doyen Auto Services is focused on providing a streamlined and
          transparent experience for your car repairs.
        </Typography>
        <Divider
          sx={{
            backgroundColor: "black",
            height: "1px",
            mb: { xs: 5, sm: 10 },
          }}
        />
        <Typography variant="h3" mb={3} data-aos="zoom-out">
          1. Trust, Transparency, and Convenience
        </Typography>
        <Typography variant="h6" data-aos="fade-right">
          • Doyen Auto Services emphasizes these three principles, indicating a
          commitment to providing a trustworthy and transparent service while
          prioritizing customer convenience.
        </Typography>
        <Divider
          sx={{
            backgroundColor: "black",
            height: "1px",
            mb: { xs: 5, sm: 10 },
            mt: { xs: 5, sm: 10 },
          }}
        />
        <Typography variant="h3" mb={3} data-aos="zoom-out">
          2. Online, Fixed Price Quote
        </Typography>
        <Typography variant="h6" data-aos="fade-right">
          • At Doyen Auto Services, our mission is to deliver unparalleled
          automotive solutions that prioritize quality, reliability, and
          customer satisfaction. We strive to exceed expectations by combining
          cutting-edge technology with a team of skilled professionals dedicated
          to keeping your vehicle in optimal condition.
        </Typography>
        <Divider
          sx={{
            backgroundColor: "black",
            height: "1px",
            mb: { xs: 5, sm: 10 },
            mt: { xs: 5, sm: 10 },
          }}
        />
        <Typography variant="h3" mb={3} data-aos="zoom-out">
          3. Quick Quote Turnaround
        </Typography>
        <Typography variant="h6" data-aos="fade-right">
          • The promise of receiving a fixed price quote in minutes suggests an
          efficient and prompt service, catering to the modern customer's need
          for quick and accessible information.
        </Typography>
        <Divider
          sx={{
            backgroundColor: "black",
            height: "1px",
            mb: { xs: 5, sm: 10 },
            mt: { xs: 5, sm: 10 },
          }}
        />
        <Typography variant="h3" mb={3} data-aos="zoom-out">
          4. Booking Process
        </Typography>
        <Typography variant="h6" data-aos="fade-right">
          • Once users are satisfied with the quote, they can proceed to book
          the service. This step indicates a seamless transition from obtaining
          a quote to scheduling the actual repair or maintenance work.
        </Typography>
        <Divider
          sx={{
            backgroundColor: "black",
            height: "1px",
            mb: { xs: 5, sm: 10 },
            mt: { xs: 5, sm: 10 },
          }}
        />
        <Typography variant="h3" mb={3} data-aos="zoom-out">
          5. Mobile Mechanic or Garage Option
        </Typography>
        <Typography variant="h6" data-aos="fade-right">
          • Doyen Auto Services offers flexibility by allowing customers to
          choose between a mobile mechanic who comes to their location and a
          garage option where the vehicle can be taken for repairs.
        </Typography>
        <Divider
          sx={{
            backgroundColor: "black",
            height: "1px",
            mb: { xs: 5, sm: 10 },
            mt: { xs: 5, sm: 10 },
          }}
        />
        <Typography variant="h3" mb={3} data-aos="zoom-out">
          6. Work Undertaken in the Workshop
        </Typography>
        <Typography variant="h6" data-aos="fade-right">
          • If customers opt for the garage option, the service specifies that
          the work will be undertaken in their workshop. This information
          provides transparency about where the repairs will take place.
        </Typography>
      </Box>
    </Box>
  );
};

export default FocusPage;
