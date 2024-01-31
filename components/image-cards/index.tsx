import React, { useState } from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import Cards from '../cards';
import human from '../../assests/human.jpeg';
import human2 from '../../assests/human2.png';
import human3 from '../../assests/human3.png';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive'

const reviews = [
    {
        title: 'trustworthy garage.',
        quote: '“I was very happy with how my MOT was booked in and managed. Thanks guys.”',
        bottomLeftText: 'Roxane',
        score: '4.0',
        imageUrl: human3,
    },
    {
        title: 'Excellent!!',
        quote: '“This is the best garage I have ever dealt with, highly recommend. From checking in, to the level of service, great communication, excellent end results.”',
        bottomLeftText: 'George',
        score: '5.0',
        imageUrl: human2,
    },
    {
        title: 'Excellent service',
        quote: '“Honestly the best garage i have been too, went for my MOT had quite a few problems and they knew i needed the car back that day and they worked tirelessly to get my car back road worthy. Great communication, very friendly staff, overall top service."',
        bottomLeftText: 'Harry',
        score: '3.5',
        imageUrl: human,
    },
    {
        title: 'Impecable MTO Service',
        quote: '“Very friendly staff and very friendly manager"',
        bottomLeftText: 'Anabell',
        score: '4.5',
        imageUrl: human3,
    },
];

const ImageCards = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
    const isMobileOrLaptop = useMediaQuery({query: '(min-width: 700px)'})

    const [startIndex, setStartIndex] = useState(0);

    const showNext = () => {
        if (startIndex < reviews.length - 1) {
            setStartIndex(startIndex + 1);
        }
    };
    console.log(startIndex)

    const showPrevious = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <Container>
            <Stack direction="column" sx={{ marginBottom: '20px' }}>
                <Typography variant="h3" textAlign={'center'}>
                    Reviews from our loyal customer
                </Typography>
            </Stack>
            <Stack direction="row" justifyContent="center" alignItems="center" sx={{gap: {xs:'0px',sm:'10px',md:'10px'}}}>
                <Button onClick={showPrevious}><MdOutlineArrowBackIos /></Button>
                {reviews.slice(startIndex, startIndex + (isDesktopOrLaptop == true ? 3: isMobileOrLaptop== true ? 2 : 1)).map((review, index) => (
                    <Cards
                        key={startIndex + index}
                        title={review.title}
                        quote={review.quote}
                        bottomLeftText={review.bottomLeftText}
                        score={review.score}
                        imageUrl={review.imageUrl}
                    />
                ))}
                <Button onClick={showNext}><MdOutlineArrowForwardIos /></Button>
            </Stack>
        </Container>
    );
};

export default ImageCards;
