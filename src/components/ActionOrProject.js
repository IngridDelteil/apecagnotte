import React from "react";
import {Grid, Typography} from "@mui/material";
import Carousel from "better-react-carousel";

const ActionOrProject = ({type, titre, galerie, montant, children}) => {
  return (
    <Grid container sx={{boxShadow: "0 0.5px 2px #9ca3af"}}>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: "info.main",
          px: 1,
          py: 0.5,
          textAlign: "center",
        }}
      >
        <Typography fontFamily='fontDeco' color='gray.50'>
          {titre}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          px: 1,
          py: 0.5,
        }}
      >
        <Typography color='primary' sx={{whiteSpace: "pre-line"}}>
          {children}
        </Typography>
      </Grid>
      {galerie.length !== 0 ? (
        <Grid
          item
          xs={12}
          sx={{
            paddingX: 1,
            paddingY: 3,
            textAlign: "center",
          }}
        >
          <Carousel
            cols={4}
            rows={1}
            gap={10}
            loop
            showDots
            dotColorInactive='#9ca3af'
            dotColorActive='#fb7185'
          >
            {galerie.map((photo) => (
              <Carousel.Item key={photo.texte}>
                <img width='100%' src={photo.image} alt={photo.texte} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Grid>
      ) : null}
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: "secondary.main",
          px: 1,
          py: 0.5,
          textAlign: "center",
        }}
      >
        <Typography fontFamily='fontDeco' color='gray.50'>
          {type === "action" ? `Bénéfices : ${montant}` : `Coût : ${montant}`}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ActionOrProject;
