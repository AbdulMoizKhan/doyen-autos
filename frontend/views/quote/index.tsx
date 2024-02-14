import { useEffect, useState } from "react";
import { Box, Grid, Typography, SxProps, Container } from "@mui/material";
import { useFormik } from "formik";
import { validationSchema } from "./schema";
import TextField from "../../components/text-field";
import DefaultButton from "../../components/default-button";
import DatePicker from "../../components/date-picker";
import MultipleSelect from "../../components/select-box";
import { serviceOptions } from "../../utils/helpers";
import axios from "axios";
import { useAlert } from "react-alert";


const containerWrapper: SxProps = {
  backgroundColor: "whitesmoke",
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
  VRMs: "",
  Make: "",
  Model: "",
  EngineSize: "",
  Year: "",
  Color: "",
  Gears: "",
  FuelType: "",
  Weight: "",
  EngineNumber: "",
  ModelSetupDate: "",
  BodyStyle: "",
  postCode: "",
  firstname: "",
  lastName: "",
  email: "",
  services: [],
  phoneNo: "",
  address: "",
  date: new Date(),
  Message: "",
};

const QuotePage = () => {
  const [isLoading, setBtnLoader] = useState(false);
  const alert = useAlert();
  const carDetailsJSON = typeof window !== 'undefined' ? localStorage.getItem('carDetails') : null;
  const carDetails = carDetailsJSON ? JSON.parse(carDetailsJSON) : null;
  const isDatasetValid = carDetails ? Object.values(carDetails).every(value => value !== undefined && value !== null) : false;
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setBtnLoader(true);
      try {
        const response = await axios.post("https://doyen-autos-71yu.vercel.app/api/quote", {
          ...values,
        });
        alert.success(response.data)
        setBtnLoader(false);
        resetForm()
      } catch (error) {
        setBtnLoader(false);
      }
    },
  });
  useEffect(() => {
    if (isDatasetValid) {
      formik.setValues({ ...carDetails });
    }
  }, []);

  const handleSelectionChange = (selectedValues: string[]) => {
    formik.setFieldValue("services", selectedValues);
  };

  return (
    <Box sx={{ pt: "95px" }}>
      <Box component="div" sx={{ m: { xs: 2, sm: 8 } }}>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ mt: 4, mb: { xs: 5, sm: 10 } }}
        >
          Get a Quote
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
                      variant="outlined"
                      placeholder="Registration No"
                      label="Vehicle Registration Plate"
                      type="text"
                      name="VRMs"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="Make"
                      label="Manufacturer"
                      type="text"
                      name="Make"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="Model"
                      label="Vehicle Model"
                      type="text"
                      name="Model"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="Engine Size"
                      label="Engine Capacity (cc)"
                      type="text"
                      name="EngineSize"
                      formik={formik}
                    />
                  </Grid>


                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="Year"
                      label="Year of Manufacture"
                      type="text"
                      name="Year"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="Color"
                      label="Vehicle Color"
                      type="text"
                      name="Color"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="Gears"
                      label="Transmission Type (Gears)"
                      type="text"
                      name="Gears"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="FuelType"
                      label="Fuel Used"
                      type="text"
                      name="FuelType"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="Weight"
                      label="Vehicle Weight (kg)"
                      type="text"
                      name="Weight"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="EngineNumber"
                      label="Engine Serial Number"
                      type="text"
                      name="EngineNumber"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="ModelSetupDate"
                      label="Manufacturing Date"
                      type="text"
                      name="ModelSetupDate"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="BodyStyle"
                      label="Vehicle Body Type"
                      type="text"
                      name="BodyStyle"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="Post Code"
                      label="Post Code"
                      type="text"
                      name="postCode"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="First Name"
                      label="First Name"
                      type="text"
                      name="firstname"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="Last Name"
                      label="Last Name"
                      type="text"
                      name="lastName"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="Email"
                      label="Email"
                      type="email"
                      name="email"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography fontSize={20} fontWeight={500} gutterBottom>
                        Services
                      </Typography>
                      <MultipleSelect
                        options={serviceOptions}
                        onChange={handleSelectionChange}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="Phone Number"
                      label="Phone Number"
                      type="text"
                      name="phoneNo"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      placeholder="Your Address"
                      label="Address"
                      type="text"
                      name="address"
                      formik={formik}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <DatePicker
                      label="Schedule Your Date"
                      required
                      onChangeValue={(value) => {
                        formik.setFieldValue("date", value);
                      }}
                      value={formik.values.date}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      placeholder="Write your message...."
                      label="Message"
                      multiline
                      rows={4}
                      name="Message"
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
                      Get Quote
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

export default QuotePage;
