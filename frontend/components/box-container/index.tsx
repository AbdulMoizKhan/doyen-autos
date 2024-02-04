import { Box, Button, Container, SxProps, Typography } from '@mui/material'
import React from 'react'

const boxBackground : SxProps ={
    backgroundColor: '#084162',
    width:'100%',
    height:{xs:'15vh',sm:'28vh',md:'22vh'},
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    gap: {xs:'10px',md:'200px'}
}

const btnCss : SxProps = {
  display:'flex',
  flexDirection:'row',
  gap:{xs:'5px', md:'30px'},

}
const textCss : SxProps = {
  width:{xs:'50%', md:'50%',xl:'60%'}

}

const BoxContainer = () => {
  return (
    <>
      <Container>
        <Box sx={boxBackground} >
            <Box sx={textCss}>
                <Typography variant="h4" sx={{color: 'white'}} className='box-container_heaidng' gutterBottom>
                Ready to Experience Excellence in Automotive Care?
                </Typography>
                <Typography variant='body2' sx={{color: 'white'}} className='box-container_body' >
                Schedule your service appointment online or give us a call. Our team is ready to welcome you and your vehicle to the Doyen Auto Services family.
                </Typography>
            </Box>
            <Box sx={btnCss}>
                <Button className='box-container_btn'>Contact Us</Button>
                <Button sx={{backgroundColor:'white !important',color:'black !important'}} className='box-container_btn box-container_btn2'>Learn More</Button>
            </Box>
        </Box>
      </Container>
    </>
  )
}

export default BoxContainer
