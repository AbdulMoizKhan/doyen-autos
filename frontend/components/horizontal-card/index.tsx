import { Box, Stack, Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface PropsHorizontalCard {
    chooseHeading?: string | StaticImageData
    chooseDetail?: string
    imageUrl?: string | StaticImageData;
    section?: string
    imageHeight: number
    imageWidth: number
}


const HorizontalCard = ({ chooseHeading, chooseDetail, imageUrl,section ,imageHeight, imageWidth}: PropsHorizontalCard) => {

    return (
        <>
            <Box sx={{pb:'20px'}}>
                <Stack direction={'row'} alignItems={'center'} spacing={2} >
                    <Image
                        src={imageUrl}
                        alt={"choose"}
                        height={imageHeight}
                        width={imageWidth}
                        className={ section==="achievements" ? "achievements_horizontal" :"horizontal_image"}
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
