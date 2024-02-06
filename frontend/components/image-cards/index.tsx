import React, { useState } from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import Cards from '../cards';
import human from '../../assests/human.jpeg';
import human2 from '../../assests/human2.png';
import human3 from '../../assests/human3.png';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


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
        title: 'Exceptional Service!',
        quote: '“Extremely knowledgeable staff, manager went above and beyond. Highly recommended!"',
        bottomLeftText: 'Samantha',
        score: '4.8',
        imageUrl: human,
        },
        {
        title: 'Outstanding Workmanship!',
        quote: '“Top-notch team fixed my car quickly. Appreciate their professionalism."',
        bottomLeftText: 'James',
        score: '4.9',
        imageUrl: human,
        },
        {
        title: 'Impressive Service!',
        quote: '“Friendly, competent staff, manager ensured smooth service. Will return!"',
        bottomLeftText: 'Sophie',
        score: '4.7',
        imageUrl: human3,
        },
        {
        title: 'Highly Recommend!',
        quote: '“Fantastic experience! Courteous staff, manager was incredibly helpful. Thank you!"',
        bottomLeftText: 'David',
        score: '4.6',
        imageUrl: human,
        },
        {
        title: 'Great Service!',
        quote: '“Exceptional service, knowledgeable staff, manager ensured everything. Coming back!"',
        bottomLeftText: 'Emily',
        score: '4.7',
        imageUrl: human,
        } 
];


const ImageCards = () => {
    // const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
    // const isMobileOrLaptop = useMediaQuery({ query: '(min-width: 700px)' })

    return (
        <Container>
            <Stack direction="column" sx={{ marginBottom: '20px' }}>
                <Typography variant="h3" textAlign={'center'}>
                    Reviews from our loyal customer
                </Typography>
            </Stack>
            <Swiper
                spaceBetween={0}
                slidesPerView={'auto'}
                rewind={true}
                navigation={true} modules={[Navigation]}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide>
                        <Cards
                            key={index}
                            title={review.title}
                            quote={review.quote}
                            bottomLeftText={review.bottomLeftText}
                            score={review.score}
                            imageUrl={review.imageUrl}
                        />
                        </SwiperSlide>
                    ))}
                </Swiper>
        </Container>
    );
};

export default ImageCards;
