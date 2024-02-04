import React from 'react'
import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import star from '../../assests/star2.png'

interface CustomCardProps {
    imageUrl?: string | StaticImageData;
    title?: string;
    quote?: string;
    bottomLeftText?: string;
    score?: string
}

const Cards = ({ imageUrl, title, quote, bottomLeftText,score }: CustomCardProps) => {
    return (
        <>
            <Card className='card' sx={{ height: '300px', width: {xs:'270px' , md:'320px'} }} >
                <CardContent sx={{padding: {xs:'10px 16px', md:'30px 24px'}}}>
                    <Stack direction={'column'} sx={{ gap:'20px' }}>
                        <Stack direction={'row'} justifyContent={'space-between'}>
                            <Stack direction={'row'} spacing={2}>
                                <CardMedia>
                                    <Image
                                        src={imageUrl}
                                        alt={'helow'}
                                        style={{ borderRadius: '90px', objectFit: 'cover', width: '56px', height: '56.833px' }}
                                    />
                                </CardMedia>
                                <Stack direction={'column'}>
                                    <Typography variant="body2" color="text.secondary" className='black card_name'>
                                        {bottomLeftText}
                                    </Typography>
                                    <Typography variant="body2" className='card_remarks'>
                                        {title}
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack direction={'row'} alignItems={'center'} className='score'>
                                <Image
                                    src={star}
                                    alt={'helow'}
                                    height='14'
                                    width='14'
                                    style={{paddingRight:'5px'}}
                                />
                                {score}
                            </Stack>
                        </Stack>
                        <Typography variant="body2" color="text.secondary" className='card_quote'>
                            {quote}
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </>
    )
}

export default Cards;
