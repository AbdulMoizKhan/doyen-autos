import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import wehelp from '../../assests/wehelp.png';



const ImageText = () => {
    return (
        <>
            <Container>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={6}>
                        {/* <Image
                        src={wehelp}
                        alt={'car'}
                        width={560}
                        height={550}
                        loading="lazy"
                        style={{objectFit: "contain",borderRadius:'20px'}}	
                        // style={{borderRadius:'20px'}}	
                        /> */}
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
                        <Button className='primaryCTA black'>SEE OUR REVIEW</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default ImageText;
