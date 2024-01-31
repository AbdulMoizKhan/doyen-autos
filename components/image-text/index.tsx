import { Box, Button, Container, Grid, Stack, SxProps, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import wehelp from '../../assests/wehelp.png';
import HorizontalCard from '../horizontal-card';
import Outline from '../../assests/Outline.png'
import Setting from '../../assests/Setting.png'
interface PropsImageText {
    heading?: string
    subheading?: string
}


const imgageResponsive: SxProps = {
    display: {
      md: "flex",
      xs: "none",
    },
  };

const ImageText = ({ heading, subheading }: PropsImageText) => {
    return (
        <>
            <Container sx={{ pt: '90px' }}>
                <Typography variant='h3' gutterBottom textAlign={'left'} className='headingSecond'>
                    {heading}
                </Typography>
                <Typography className='subHeadingSecond grey' gutterBottom>
                    {subheading}
                </Typography>
                <Stack direction={'row'} sx={{alignItems:'center'}}>
                    <Box flexDirection={'column'}>
                        <HorizontalCard
                            chooseHeading="Expertise: "
                            chooseDetail="Our team of certified technicians brings unparalleled expertise to every service, ensuring your vehicle receives the attention it deserves."
                            imageUrl={Outline}
                            imageHeight={24}
                            imageWidth={24}
                        />
                        <HorizontalCard
                            chooseHeading="Quality Assurance: "
                            chooseDetail="We pride ourselves on using top-quality parts and employing the latest technology to deliver reliable and lasting solutions."
                            imageUrl={Setting}
                            imageHeight={24}
                            imageWidth={24}
                        />
                        <HorizontalCard
                            chooseHeading="Customer-Centric Approach: "
                            chooseDetail="Your satisfaction is at the forefront of everything we do. Experience transparent communication, fair pricing, and a commitment to exceeding your expectations. "
                            imageUrl={Outline}
                            imageHeight={24}
                            imageWidth={24}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Button className='primaryCTA black'>SEE OUR REVIEW</Button>
                        </Box>
                    </Box>
                    <Box sx={imgageResponsive}>
                        <Image
                            src={wehelp}
                            alt={'car'}
                            width={476}
                            height={399}
                            loading="lazy"
                            style={{borderRadius: '20px' }}
                        />
                    </Box>
                </Stack>
            </Container>
        </>
    );
};

export default ImageText;
