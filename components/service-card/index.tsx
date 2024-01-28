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
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={imgSrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Box>
            {services.map((item) => (
              <Typography key={item} variant="body1">
                {item}
              </Typography>
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
