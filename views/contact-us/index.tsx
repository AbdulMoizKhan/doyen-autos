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
} from "@mui/material";
import { useFormik } from "formik";
import { validationSchema } from "./schema";
import CircleCheckedFilled from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import TextField from "../../components/text-field";
import DefaultButton from "../../components/default-button";

const checkboxitems = [
  { label: "General Enquiry" },
  { label: "Trails" },
  { label: "Complaints" },
  { label: "Feedback" },
];

const imageStyle: SxProps = {
  display: { md: "block", xs: "none" },
};

const containerWrapper: SxProps = {
  backgroundColor: "background.paper",
  padding: "40px",
  boxShadow: 14,
  borderRadius: "10px",
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
  subject: "",
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
          >
            <Grid item xs={12} sm={12} md={12}>
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
                      placeholder="Write Services you want with message"
                      label="Services"
                      multiline
                      maxRows={4}
                      rows={4}
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
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactUsPage;
