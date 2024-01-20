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
const HeroSection = ({ heroTittle, heroSubContent, buttonText }: PropsHeroSection) => {

  return (
    <Container sx={{ paddingTop: '135px', paddingBottom: '80px' }}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={8}>
          <Typography variant="h1" gutterBottom={true}>
            {heroTittle}
          </Typography>
          <Typography variant="h4" gutterBottom={true}>
            {heroSubContent}
          </Typography>
          <Button>{buttonText}</Button>
        </Grid>
        <Grid item xs={4}>
          <Form/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HeroSection;
