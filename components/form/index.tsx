import React, { useState } from 'react';
import { Box, Card, TextField, Button, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, CardContent, CardActions, MenuItem } from '@mui/material';
import { FormContainer, TextFieldElement, useForm, useWatch } from 'react-hook-form-mui'

const enginesize = [
    {
        value: '1',
        label: '1000CC',
    },
    {
        value: '2',
        label: '1300CC',
    },
    {
        value: '3',
        label: '1800CC',
    },
    {
        value: '4',
        label: '3000CC',
    },
];

const Form = () => {
    const [openServices, setOpen] = useState(false);
    const [openCar, setOpenCar] = useState(false);

    const [values, setValues] = useState()
    const onSubmit = (data) => {
        console.log('form data',data)
      setValues(data)
    }
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
            <FormContainer
            onSuccess={onSubmit}
            >
                <Box sx={{ minWidth: 275 }} color={'white'}>
                    <Card variant="outlined" sx={{ bgcolor: '#0065a6' }} >
                        <CardContent>
                            <Typography variant="h4" gutterBottom color={'white'}>
                                Let's Go
                            </Typography>
                            <TextFieldElement id="outlined-basic" name={"vehicleRegistration"} label="Vehicle Registration" variant="outlined" fullWidth size="small" />
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '7px 0px' }}><span onClick={handleClickOpenCar} style={{ cursor: 'pointer' }}>Don't know your vehicle registration?</span></Box>
                            <Dialog sx={{ color: '#0065a6' }} open={openCar} onClose={handleClickCloseCar} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                                <DialogTitle id="alert-dialog-title">{"Select your car"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText color="black" id="alert-dialog-description">
                                        <TextField sx={{ paddingBottom: '20px' }} id="outlined-basic" label="Enter Your PostCode" variant="outlined" fullWidth size="small" />
                                        <TextField sx={{ paddingBottom: '20px' }} id="outlined-select-enginesize" select label="Products" variant="outlined" fullWidth size="small" >
                                            {enginesize.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField sx={{ paddingBottom: '20px' }} id="outlined-select-currency" select label="Car Make" variant="outlined" fullWidth size="small" />
                                        <TextField sx={{ paddingBottom: '20px' }} id="outlined-select-currency" select label="Car Model" variant="outlined" fullWidth size="small" />
                                        <TextField sx={{ paddingBottom: '20px' }} id="outlined-select-currency" select label="Engine Size" variant="outlined" fullWidth size="small" />
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} fullWidth>
                                        Get Prices
                                    </Button>
                                </DialogActions>
                            </Dialog>
                            <Button variant="outlined" fullWidth onClick={handleClickOpenServices} sx={{ fontWeight: '100', marginBottom: '13px', paddingLeft: '10px', display: 'flex', justifyContent: 'flex-start', color: 'white', border: '1px solid white' }}>
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
                            </Dialog>
                            <TextFieldElement id="outlined-basic" name="postcode" label="Enter Your PostCode" variant="outlined" fullWidth size="small" />
                        </CardContent>
                        <CardActions>
                            <Button size="small" type='submit' fullWidth>COMPARE PRICES INSTANTLY</Button>
                        </CardActions>
                    </Card>
                </Box>
            </FormContainer>
        </>
    );
};

export default Form;
