import React, { useState } from "react";
import {
  Box,
  Card,
  TextField,
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
import axios from 'axios';

const btnWrapper: SxProps = {
  padding: "20px 20px",
  borderRadius: "8px",
  backgroundColor: "tomato",
};

interface PropsFrom { }

const Form = ({ }: PropsFrom) => {
  const [carDetails, setCarDetails] = useState({ VRN: "", Make: "", Model: "", FuelType: "", TransmissionType: "", EngineSize: "", Doors: "" });
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/data');
      setCarDetails(response.data);
      setModalOpen(true);
    } catch (error) {
      console.error('Error:', error);
    }

  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
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
              label="Registration Number"
              type="text"
              name="VRN"
              fullWidth
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
                onClick={handleModalOpen}
              >
                Get Quote
              </DefaultButton>
            </Box>
          </CardActions>
        </Card>
      </Box>
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
                <Typography fontWeight={600}>{carDetails.VRN}</Typography>
                <Typography fontWeight={600}>
                  {`${carDetails.Make}, ${carDetails.Model}`}
                </Typography>
                <Typography fontWeight={600}>
                  {`${carDetails.EngineSize}cc, ${carDetails.FuelType}, ${carDetails.TransmissionType}`}
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
