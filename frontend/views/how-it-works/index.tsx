import { Box, Divider, Typography } from "@mui/material";

const HowItWorksPage = () => {
  return (
    <Box sx={{ pt: "95px" }}>
      <Box component="div" sx={{ m: { xs: 2, sm: 8 } }}>
        <Typography
          variant="h1"
          textAlign="center"
          sx={{ mt: 4 }}
          data-aos="zoom-out"
        >
          HOW IT WORKS
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          sx={{ mt: 2, mb: { xs: 5, sm: 10 } }}
          data-aos="zoom-out"
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
        <Typography variant="h3" mb={3} data-aos="fade-right">
          1. Tell us about your car
        </Typography>
        <Typography variant="h6" data-aos="fade-right">
          • Enter essential information about your vehicle. Your Registration
          number, the make, model, year, and location
        </Typography>
        <Divider
          sx={{
            backgroundColor: "black",
            height: "1px",
            mb: { xs: 5, sm: 10 },
            mt: { xs: 5, sm: 10 },
          }}
        />
        <Typography variant="h3" mb={3} data-aos="fade-right">
          2. Describe the Issue
        </Typography>
        <Typography variant="h6" data-aos="fade-right">
          • Select the type of work or repairs needed for their car. This step
          ensures that the service provider gets a clear understanding of the
          customer's requirements. You can use NOTE box to describe the problem
          or the type of service you need. Be as specific as possible to help us
          understand the issue.
        </Typography>
        <Divider
          sx={{
            backgroundColor: "black",
            height: "1px",
            mb: { xs: 5, sm: 10 },
            mt: { xs: 5, sm: 10 },
          }}
        />
        <Typography variant="h3" mb={3} data-aos="fade-right">
          3. Get a Quote
        </Typography>
        <Typography variant="h6" data-aos="fade-right">
          • After providing the necessary information, you'll typically receive
          a quote for the estimated cost of the repair or service. This may be
          an instant quote or one provided after a review by our mechanic.
        </Typography>
        <Divider
          sx={{
            backgroundColor: "black",
            height: "1px",
            mb: { xs: 5, sm: 10 },
            mt: { xs: 5, sm: 10 },
          }}
        />
        <Typography variant="h3" mb={3} data-aos="fade-right">
          4. Choose Appointment Details:
        </Typography>
        <Typography variant="h6" data-aos="fade-right">
          • Select your preferred date, time, and location for the auto repair
          service. Doyen Auto Services offers flexibility by allowing customers
          to choose between a mobile mechanic who comes to their location and a
          garage option where the vehicle can be taken for repairs
        </Typography>
        <Divider
          sx={{
            backgroundColor: "black",
            height: "2px",
            mb: { xs: 5, sm: 10 },
            mt: { xs: 5, sm: 10 },
          }}
        />
        <Typography variant="h3" mb={3} data-aos="fade-right">
          5. Provide Contact Information
        </Typography>
        <Typography variant="h6" data-aos="fade-right">
          • Enter your contact details, including your name, phone number, and
          email address. This information is crucial for us to confirm the
          appointment and communicate with you.
        </Typography>
        <Divider
          sx={{
            backgroundColor: "black",
            height: "1px",
            mb: { xs: 5, sm: 10 },
            mt: { xs: 5, sm: 10 },
          }}
        />
        <Typography variant="h3" mb={3} data-aos="fade-right">
          6. Review and Confirm:
        </Typography>
        <Typography variant="h6" data-aos="fade-right">
          • Review all the information you've provided, including the service
          details, appointment time, and contact information. Ensure everything
          is accurate, and then confirm the booking.
        </Typography>
        <Divider
          sx={{
            backgroundColor: "black",
            height: "1px",
            mb: { xs: 5, sm: 10 },
            mt: { xs: 5, sm: 10 },
          }}
        />
        <Typography variant="h3" mb={3} data-aos="fade-right">
          7. Payment Information:
        </Typography>
        <Typography variant="h6" data-aos="fade-right">
          • Payment is processed only after the service is completed.
        </Typography>
        <Divider
          sx={{
            backgroundColor: "black",
            height: "1px",
            mb: { xs: 5, sm: 10 },
            mt: { xs: 5, sm: 10 },
          }}
        />
        <Typography variant="h3" mb={3} data-aos="fade-right">
          8. Receive Confirmation:
        </Typography>
        <Typography variant="h6" data-aos="fade-right">
          • Once you confirm the booking, you should receive a confirmation
          email or notification. This usually includes the details of your
          appointment and any additional instructions.
        </Typography>
        <Divider sx={{ mt: 3 }} />

        <Typography
          variant="h3"
          mt={3}
          mb={3}
          sx={{ textAlign: "center", color: "tomato" }}
          data-aos="zoom-in"
        >
          Contact Us
        </Typography>
        <Typography
          textAlign={"center"}
          variant="subtitle2"
          fontWeight={700}
          data-aos="zoom-in"
        >
          Experience the Doyen Auto Services difference. Visit our garage at 50,
          Stronend Street, G22 6AR <br />
          Give us a call at 07760926245 or doyenautos@gmail.com to schedule your
          next service appointment.
        </Typography>
        <Typography variant="h6" mt={5} mb={3} textAlign={"center"}>
          Thank you for choosing Doyen Auto Services – Where Excellence Meets
          Automotive Care!
        </Typography>
      </Box>
    </Box>
  );
};

export default HowItWorksPage;
