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
import banner from '../../assests/banner.jpg'
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
const containerResposive : SxProps ={
 pb: {md:'80px' , xs : '0px'},
 pt: {md:'225px', xs:'120px'}
}
const gridResponsiveWrapper : SxProps = {
  flexDirection: {xs:"column", sm:"row"},
  alignItems: {xs:'center'}
}
const HeroSection = ({ heroTittle, heroSubContent, buttonText }: PropsHeroSection) => {

  return (
    <>
    <Image src={banner} alt='helow' style={{
    color: 'transparent',
    position: 'absolute',
    zIndex: '-1',
    width: '100%',
    opacity: '0.3',
    height: '100vh '}}/>
    <Container sx={containerResposive}>
      <Grid container sx={gridResponsiveWrapper} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item md={8} xs={12} sx={{ paddingRight: '0px' }}>
          <Typography variant="h1" gutterBottom sx={{fontWeight: '800',lineHeight: '1.1'}} dangerouslySetInnerHTML={{ __html: heroTittle || '' }} />
          <Typography variant="h4" gutterBottom>
            {heroSubContent}
          </Typography>
          image of trustpilot
        </Grid>
        <Grid item md={4} xs={12}>
          <Form />
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default HeroSection;
