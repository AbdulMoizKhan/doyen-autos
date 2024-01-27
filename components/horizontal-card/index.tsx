import { Box, Stack, Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface PropsHorizontalCard {
    chooseHeading?: string | StaticImageData
    chooseDetail?: string
    imageUrl?: string | StaticImageData;
}


const HorizontalCard = ({ chooseHeading, chooseDetail, imageUrl }: PropsHorizontalCard) => {
    return (
        <>
            <Box sx={{pb:'20px'}}>
                <Stack direction={'row'} alignItems={'center'} spacing={2} >
                    <Image
                        src={imageUrl}
                        alt={"choose"}
                        height={'24'}
                        width={'24'}
                        style={{
                            padding: '20px',
                            borderRadius: '6px',
                            backgroundColor:'tomato'
                        }}
                    />
                    <Box flexDirection={'column'}>
                        <Typography className='chooseHeading'>{chooseHeading}</Typography>
                        <Typography className='chooseDetail'>{chooseDetail}</Typography>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default HorizontalCard;
