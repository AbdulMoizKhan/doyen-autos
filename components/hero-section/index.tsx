import React, { useState } from 'react'
import Container from '@mui/system/Container';
import Grid from '@mui/material/Grid';
import { Box, Card, Link, ListItem, SxProps, TextField, MenuItem, DialogTitle, DialogContentText, DialogActions, DialogContent, Dialog } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Popover from '@mui/material/Popover';
import Form from '../form'
import Image from 'next/image';
import car from '../../assests/car-being-taking-care-workshop.jpg'
import { useMediaQuery } from 'react-responsive'

interface PropsHeroSection {
  heroTittle?: string,
  heroSubContent?: string,
  buttonText?: string
}
const heroWrapper: SxProps = {
  pb: { md: 0, xs: 2 },
  pt: { md: 0, xs: 1 },
  display: {
    md: "flex",
    xs: "none",
  },
};
const ContainerResposive: SxProps = {
  //  pb: {md:'80px' , xs : '0px'},
  //  pt: {md:'225px', xs:'120px'},
}
const formPadding: SxProps = {
  pt: { xs: '50px' },
  maxWidth: { xs: '400px' },
  justifyContent: { xs: 'center' }
}
const HeroSection = ({ heroTittle, heroSubContent, buttonText }: PropsHeroSection) => {
  const isMobileOrLaptop = useMediaQuery({ query: '(min-width: 700px)' })


  return (
    <>
      <Container sx={ContainerResposive} >
        {isMobileOrLaptop == true ? (
        <Box >
          <Image src={car} alt='helow' style={{
            color: 'transparent',
            position: 'absolute',
            zIndex: '-1',
            width: '100%',
            filter: 'brightness(0.5)',
            height: '100vh',
            top: '0px',
            left: '0px'
          }}
          />
        </Box>) : (
          <Box sx={{ backgroundColor: 'black', height: '100vh', width: '100%', position: 'absolute', left: '0px', top: '0px' }}>

          </Box>
        )}
        <Grid container height={'100vh'} alignContent={'center'} justifyContent={'center'} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item md={8} xs={12} sx={{ paddingRight: '0px' }}>
            <Typography data-aos="fade-up" variant="h1" className='white' gutterBottom sx={{ fontWeight: '800', lineHeight: '1.1' }} dangerouslySetInnerHTML={{ __html: (heroTittle.includes("Doyen Auto")) ? `${heroTittle} ` : '' }} />
            <Typography data-aos="fade-up" variant="h4" className='white' textAlign={'justify'} sx={{ pr: '60px' }} gutterBottom>
              {heroSubContent}
            </Typography>
            {/* <Button className='primaryCTA'>Get Quote</Button> */}
          </Grid>
          <Grid sx={formPadding} item md={4} xs={12}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HeroSection;
