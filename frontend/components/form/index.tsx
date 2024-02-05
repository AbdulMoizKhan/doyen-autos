import React, { useState } from "react";
import {
  Box,
  Card,
  TextField,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  CardContent,
  CardActions,
  MenuItem,
  Stack,
  SxProps,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import {
  FormContainer,
  TextFieldElement,
  useForm,
  useWatch,
} from "react-hook-form-mui";
import DefaultButton from "../default-button";
import BasicModal from "../modal";

const enginesize = [
  {
    value: "1",
    label: "1000CC",
  },
  {
    value: "2",
    label: "1300CC",
  },
  {
    value: "3",
    label: "1800CC",
  },
  {
    value: "4",
    label: "3000CC",
  },
];
const btnWrapper: SxProps = {
  padding: "20px 20px",
  borderRadius: "8px",
  backgroundColor: "tomato",
};

interface PropsFrom {}
const Form = ({}: PropsFrom) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  const [openServices, setOpen] = useState(false);
  const [openCar, setOpenCar] = useState(false);

  const [values, setValues] = useState();
  const onSubmit = (data) => {
    console.log("form data", data);
    setValues(data);
  };
  const handleClickOpenServices = () => {
    setOpen(true);
  };
  const handleClickOpenCar = () => {
    setOpenCar(true);
  };
  const handleClickCloseCar = () => {
    setOpenCar(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FormContainer onSuccess={onSubmit}>
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
                name="firstname"
                fullWidth
              />
              {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '7px 0px' }}><span onClick={handleClickOpenCar} style={{ cursor: 'pointer' }}>Don't know your vehicle registration?</span></Box> */}
              <Dialog
                sx={{ color: "#0065a6" }}
                open={openCar}
                onClose={handleClickCloseCar}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Select your car"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    color="black"
                    id="alert-dialog-description"
                  >
                    <TextField
                      sx={{ paddingBottom: "20px" }}
                      id="outlined-basic"
                      label="Enter Your PostCode"
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                    <TextField
                      sx={{ paddingBottom: "20px" }}
                      id="outlined-select-enginesize"
                      select
                      label="Products"
                      variant="outlined"
                      fullWidth
                      size="small"
                    >
                      {enginesize.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      sx={{ paddingBottom: "20px" }}
                      id="outlined-select-currency"
                      select
                      label="Car Make"
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                    <TextField
                      sx={{ paddingBottom: "20px" }}
                      id="outlined-select-currency"
                      select
                      label="Car Model"
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                    <TextField
                      sx={{ paddingBottom: "20px" }}
                      id="outlined-select-currency"
                      select
                      label="Engine Size"
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} fullWidth>
                    Get Prices
                  </Button>
                </DialogActions>
              </Dialog>
              {/* <Button variant="outlined" fullWidth onClick={handleClickOpenServices} sx={{ fontWeight: '100', marginBottom: '13px', paddingLeft: '10px', display: 'flex', justifyContent: 'flex-start', color: 'white', border: '1px solid white' }}>
                                Service
                            </Button>
                            <Dialog open={openServices} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                                <DialogTitle id="alert-dialog-title">{"Choose your services"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText color="black" id="alert-dialog-description">
                                        You will be able to make changes to your selection on the next page, garage prices will update accordingly.
                                    </DialogContentText>
                                    <Typography color="black" fontSize={22} bgcolor="grey">
                                        MOT & Services
                                    </Typography>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} fullWidth>
                                        Select
                                    </Button>
                                </DialogActions>
                            </Dialog> */}
              {/* <TextFieldElement id="outlined-basic" name="postcode" label="Enter Your PostCode" variant="outlined" fullWidth size="small" /> */}
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
              {/* <Button size="small" type='submit' fullWidth>COMPARE PRICES INSTANTLY</Button> */}
            </CardActions>
          </Card>
        </Box>
      </FormContainer>
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
                <Typography fontWeight={600}>NA59BFJ</Typography>
                <Typography fontWeight={600}>
                  CITREON,GRAND C4 PICASSO VTR HDI(110),2009
                </Typography>
                <Typography fontWeight={600}>
                  1560 cc Diesel, 5 Door,Automatic
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
