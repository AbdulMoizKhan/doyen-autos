import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const ImageText = () => {
    return (
        <div>
            <Container>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={6}>
                        {/* <Image></Image> */}
                        image of shahrukhkahn
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h1" gutterBottom={true}>
                            13,244,550 happy drivers can't be wrong.
                        </Typography>
                        <Typography variant="h4" gutterBottom={true}>
                            “I'm always on the go, so booking my MOT on my phone was really useful.
                            I compared garages, picked the best one for me and even saved money, all
                            whilst waiting for my morning coffee!”
                        </Typography>
                        {/* <Image></Image> */}
                        <Box sx={{ display: 'flex', justifyContent:'flex-end' }}>
                        <Button  >SEE OUR REVIEWS</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ImageText;
