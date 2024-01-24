import { useState } from "react";
import {
  Box,
  FormHelperText,
  Grid,
  Typography,
  FormControl,
  SxProps,
  RadioGroup,
  FormControlLabel,
  Radio,
  Container,
  Button,
  Stack,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useFormik } from "formik";
import { validationSchema } from "./schema";
import TextField from "../../components/text-field";
import DefaultButton from "../../components/default-button";
import PlaceIcon from "@mui/icons-material/Place";

const containerWrapper: SxProps = {
  backgroundColor: "background.paper",
  padding: "40px",
  boxShadow: 14,
  borderRadius: "10px",
  alignItems: "stretch",
};

const gridBtnWrapper: SxProps = {
  display: "flex",
  justifyContent: { xs: "center", sm: "flex-end" },
};

const btnWrapper: SxProps = {
  borderRadius: "5px",
  padding: { xs: "9px 28px", sm: "15px 48px" },
  backgroundColor: "black",
};

const initialValues = {
  firstname: "",
  lastName: "",
  email: "",
  phoneNo: "",
  message: "",
};

const ContactUsPage = () => {
  const [isLoading, setBtnLoader] = useState(false);
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    },
  });

  return (
    <Box sx={{ pt: "95px" }}>
      <Box component="div" sx={{ m: { xs: 2, sm: 8 } }}>
        <Typography
          variant="h1"
          textAlign="center"
          sx={{ mt: 4, mb: { xs: 5, sm: 10 } }}
        >
          Contact Us
        </Typography>
        <Container>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={containerWrapper}
            spacing={1}
          >
            <Grid item xs={12} sm={12} md={7}>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={{ xs: 3, sm: 5, md: 7 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="standard"
                      placeholder="First Name"
                      label="First Name"
                      type="text"
                      name="firstname"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="standard"
                      placeholder="Last Name"
                      label="Last Name"
                      type="text"
                      name="lastName"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="standard"
                      placeholder="Email"
                      label="Email"
                      type="email"
                      name="email"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="standard"
                      placeholder="Phone Number"
                      label="Phone Number"
                      type="text"
                      name="phoneNo"
                      formik={formik}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      placeholder="Write your message..."
                      label="Messages"
                      multiline
                      rows={2}
                      name="message"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sx={gridBtnWrapper}>
                    <DefaultButton
                      variant="contained"
                      sx={btnWrapper}
                      type="submit"
                      isLoading={isLoading}
                    >
                      Send Message
                    </DefaultButton>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Stack
                sx={{
                  backgroundColor: "#ddd3bc",
                  p: 4,
                  height: { xs: "90%", sm: "86%" },
                  border: "1px solid white",
                  borderRadius: "5px",
                }}
                spacing={4}
              >
                <Typography variant="h5">Contact Information</Typography>

                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <EmailIcon />
                  <Typography variant="body1">
                    support@doyenautos.co.uk
                  </Typography>
                </Box>

                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <PlaceIcon />
                  <Typography variant="body1">
                    50 Stronend Street Glasgow G22 6AR{" "}
                  </Typography>
                </Box>

                <Box sx={{ width: "380", height: "280" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8950.819437180893!2d-4.2593108!3d55.8851341!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488845bf3f0e4b03%3A0x82a20df87a8b23b1!2sDoyenAutos!5e0!3m2!1sen!2s!4v1706082217042!5m2!1sen!2s"
                    style={{ width: "100%", height: "100%" }}
                    loading="lazy"
                  ></iframe>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactUsPage;
