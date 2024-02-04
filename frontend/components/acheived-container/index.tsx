import { Box, Container, Stack, SxProps, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import car from '../../assests/car_repair.png'
import Horizontal from '../horizontal-card'
import Elipse from '../../assests/Ellipse3.png'
import Elipse1 from '../../assests/Ellipse4.png'
import Elipse2 from '../../assests/Ellipse5.png'


const boxStructure : SxProps = {
width:'100%',
height:'50vh',
display:'flex',
flexDirection:'column',
justifyContent:'start',
alignItems:'center',
// gap:'100px'
}

const boxStructure2 : SxProps ={
display:'flex',
paddingRight:'60px',
flexDirection:'column',
justifyContent:'space-evenly'
}
const imageResponsive : SxProps ={
  display: {xs:'none',md:'block'}
}
const acheivementContent =[
  {
    image:Elipse,
    title:"150K+ Car’s get Serviced",
  },
  {
    image:Elipse1,
    title:"4.8  Rated"
  },
  {
    image:Elipse2,
    title:"100K+ Happy Customers"
  }
]
const AcheivedContainer = () => {
  return (
    <Container sx={{padding:'20px'}}>
        <Box sx={boxStructure}>
            <h1 className="">What we have achieved till date</h1>
            <Stack direction={'row'} sx={{gap:'100px'}}>
                <Box sx={imageResponsive}>
                <Image
                src={car}
                alt='car'
                width={550}
                height={400}
                />
                </Box>
                <Box sx={boxStructure2}>
                    <Typography variant='body2' className='acheivementheader'>Schedule your service appointment online or give us a call. Our team is ready to welcome you and your vehicle to the Doyen Auto Services family.</Typography>
                    {acheivementContent.map((content,index)=> (
                      <Horizontal
                      key={index}
                      imageUrl={content.image}
                      chooseHeading={content.title}
                      imageHeight={50}
                      imageWidth={50}
                      section={"achievements"}
                      />
                    ))}
                </Box>
            </Stack>
        </Box>
    </Container>
  )
}

export default AcheivedContainer
