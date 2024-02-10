import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  CardContent,
  CardActions,
  Stack,
  SxProps,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DefaultButton from "../default-button";
import BasicModal from "../modal";
import axios from "axios";
import { useFormik } from "formik";
import { validationSchema } from "./schema";
import TextField from "../text-field";
import { useAlert } from "react-alert";

const btnWrapper: SxProps = {
  padding: "20px 20px",
  borderRadius: "8px",
  backgroundColor: "tomato",
};

const initialValues = {
  VRMs: "",
};

interface PropsFrom {}

const Form = ({}: PropsFrom) => {
  const alert = useAlert();
  const [carDetails, setCarDetails] = useState({
    VRMs: "",
    Make: "",
    Model: "",
    FuelType: "",
    TransmissionType: "",
    EngineSize: "",
    Doors: "",
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      values.VRMs = values.VRMs.toUpperCase();
      console.log(values);
      try {
        const response = await axios.get(
          "http://localhost:3000/api/data",
          {
            params: { ...values },
          }
        );
        setCarDetails(response.data);
        if (response.status === 200) {
          alert.success("Your car Details successfully found");
          setModalOpen(true);
        }
      } catch (error) {
        alert.error("Your car details are not found");
      }
    },
  });

  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ minWidth: 275 }}>
          <Card sx={{ bgcolor: "#89878673" }} data-aos="flip-right">
            <CardContent sx={{ padding: "20px 20px 8px 20px" }}>
              <Typography variant="h4" gutterBottom color={"white"} sx={{}}>
                Let's Go
              </Typography>
              <Typography variant="body2" gutterBottom color={"white"} sx={{}}>
                We'll help you save money on car repairs in just a few clicks.
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Registration Number"
                type="text"
                name="VRMs"
                fullWidth
                sx={{ ".MuiInputBase-input": { color: "white" } }}
                formik={formik}
              />
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{ display: "flex", justifyContent: "center", width: "93%" }}
              >
                <DefaultButton
                  variant="contained"
                  sx={btnWrapper}
                  type="submit"
                  fullWidth
                >
                  Get Quote
                </DefaultButton>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </form>
      <BasicModal open={isModalOpen} handleClose={handleModalClose}>
        <>
          <Stack>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5" color="#3c3cf3">
                Is this your car ?
              </Typography>
              <CheckIcon fontSize="large" sx={{ color: "#3c3cf3" }} />
            </Box>
            <Box
              sx={{
                mt: 2,
                p: 2,
                border: "1px solid #8383dd",
                backgroundColor: "#eaeaf5",
                display: "flex",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  borderRadius: "20px",
                  backgroundColor: "#7979fb",
                  width: "42px",
                  height: "38px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <DirectionsCarIcon
                  fontSize="small"
                  sx={{
                    color: "black",
                  }}
                />
              </Box>
              <Stack spacing={1}>
                <Typography fontWeight={600}>{carDetails.VRMs}</Typography>
                <Typography fontWeight={600}>
                  {`${carDetails.Make}, ${carDetails.Model}`}
                </Typography>
                <Typography fontWeight={600}>
                  {`${carDetails.EngineSize}cc, ${carDetails.FuelType},${carDetails.Doors} Doors , ${carDetails.TransmissionType}`}
                </Typography>
              </Stack>
            </Box>
            <Typography
              sx={{
                textDecoration: "underline",
                color: "blue",
                textAlign: "center",
                fontSize: "18px",
                mt: 2,
              }}
            >
              This is not my car
            </Typography>
            <Box
              sx={{
                mt: 2,
                p: 1,
                border: "1px solid #8383dd",
              }}
            >
              <Typography fontSize="18px" textAlign="center" color="blue">
                Yes ,This is my car
              </Typography>
            </Box>
          </Stack>
        </>
      </BasicModal>
    </>
  );
};

export default Form;
