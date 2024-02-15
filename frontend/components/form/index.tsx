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
import { useRouter } from "next/router";

const btnWrapper: SxProps = {
  padding: "20px 20px",
  borderRadius: "8px",
  backgroundColor: "tomato",
};

const initialValues = {
  VRMs: "",
};

const Form = () => {
  const alert = useAlert();
  const router = useRouter();
  const [carDetails, setCarDetails] = useState({
    VRMs: "",
    Make: "",
    Model: "",
    FuelType: "",
    TransmissionType: "",
    EngineSize: "",
    Doors: "",
    Weight: "",
    Gears: "",
    Color: "",
    Year: "",
    EngineNumber: "",
    ModelSetupDate: "",
    BodyStyle: "",
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const [VRMs, setVrms] = useState("");
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.get(
          "https://doyen-autos-71yu.vercel.app/api/data",
          {
            params: { ...values },
          }
        );
        setCarDetails(response.data);
        const carDetailsJSON = JSON.stringify(response.data);
        localStorage.setItem("carDetails", carDetailsJSON);
        if (response.status === 200) {
          alert.success(response.data.message);
          setModalOpen(true);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert.error(error.response.data.message);
          setModalOpen(true);
        } else {
          alert.error("An error occurred while processing your request.");
        }
      }
    },
  });

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    const newValue = e.target.value.toUpperCase();
    setVrms(newValue);
    formik.handleChange(e);
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
                We'll help you save money on car repairs in just a few clicks.
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Registration Number"
                type="text"
                name="VRMs"
                value={VRMs}
                onChange={handleChange}
                fullWidth
                sx={{
                  ".MuiInputBase-input": { color: "white" },
                  textTransform: "uppercase",
                }}
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
                  onClick={() => setCarDetails(null)}
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
                {carDetails ? `Is this your car ?` : `Car details not found !`}
              </Typography>
              {carDetails && (
                <CheckIcon fontSize="large" sx={{ color: "#3c3cf3" }} />
              )}
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
                {carDetails ? (
                  <>
                    <Typography fontWeight={600}>{carDetails?.VRMs}</Typography>
                    <Typography fontWeight={600}>
                      {`${carDetails?.Make}, ${carDetails?.Model}`}
                    </Typography>
                    <Typography fontWeight={600}>
                      {`${carDetails?.EngineSize}cc, ${carDetails?.FuelType}, ${carDetails?.Doors} Doors , ${carDetails?.TransmissionType}`}
                    </Typography>
                  </>
                ) : (
                  <Typography fontWeight={600}>
                    Your car was not found
                    <br /> Enter the details manually
                  </Typography>
                )}
              </Stack>
            </Box>
            <Typography
              sx={{
                textDecoration: "underline",
                color: "blue",
                textAlign: "center",
                fontSize: "18px",
                mt: 2,
                cursor: "pointer",
              }}
              onClick={() => {
                setModalOpen(false);
                alert.info("Try again");
              }}
            >
              {carDetails && `This is not my car`}
            </Typography>
            <Box
              sx={{
                mt: 2,
                p: 1,
                border: "1px solid #8383dd",
                cursor: "pointer",
              }}
              onClick={() => {
                router.push({ pathname: "/quote" });
              }}
            >
              <Typography fontSize="18px" textAlign="center" color="blue">
                {carDetails
                  ? `Yes ,This is my car`
                  : `Enter the details manually`}
              </Typography>
            </Box>
          </Stack>
        </>
      </BasicModal>
    </>
  );
};

export default Form;
