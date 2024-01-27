import React from 'react'
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import Cards from '../cards';
import human from '../../assests/human.jpeg'
import human2 from '../../assests/human2.png'
import human3 from '../../assests/human3.png'

const ImageCards = () => {
    return (
        <div>
            <Container>
                <Stack direction="column" spacing={2}>
                    <Typography variant="h1" gutterBottom={true}>
                        Garages we trust and you love
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignContent={'center'} justifyContent={'center'}>
                    <Cards 
                        title='Experienced and trustworthy garage.'
                        quote='“I was very happy with how my MOT was booked in and managed. Thanks guys.”'
                        bottomLeftText='Arthur'
                        score='4.0'
                        imageUrl={human3}
                    />
                    <Cards
                        title='Excellent!!'
                        quote='“This is the best garage I have ever dealt with, highly recommend. From checking in, to the level of service, great communication, excellent end results.”'
                        bottomLeftText='George' 
                        score='5.0'
                        imageUrl={human2}
                        />
                        
                    <Cards
                        title='Excellent service'
                        quote='“Honestly the best garage i have been too, went for my MOT had quite a few problems and they knew i needed the car back that day and they worked tirelessly to get my car back road worthy. Great communication, very friendly staff, overall top service."'
                        bottomLeftText='Harry' 
                        score='3.5'
                        imageUrl={human}
                        />
                </Stack>
            </Container>
        </div>
    )
}

export default ImageCards
