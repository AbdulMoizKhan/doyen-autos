import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

interface IServiceCard {
  heading: string;
  imgSrc: any;
  services: string[];
}

export default function ServiceCard({
  heading,
  imgSrc,
  services,
}: IServiceCard) {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea disabled>
        <CardMedia
          component="img"
          height="300"
          image={imgSrc}
          alt="green iguana"
        />
        <CardContent sx={{ minHeight: "185px", backgroundColor: "whitesmoke" }}>
          <Typography gutterBottom variant="h4" component="div">
            {heading}
          </Typography>
          <Box>
            {services.map((item) => (
              <Typography key={item} variant="h6" mb={1} color='#575353'>
                {item}
              </Typography>
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
