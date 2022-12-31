import React from "react";
import {Grid, Typography} from "@mui/material";

const Event = ({titre, date, heure, lieu, audience, image, children}) => {
  return (
    <Grid container alignItems='center'>
      <Grid item xs={12} sx={{py: 1}}>
        <Typography
          color='secondary'
          fontFamily='fontDeco'
          sx={{textDecoration: "underline"}}
        >
          {date} à {heure}
        </Typography>
      </Grid>
      <Grid
        item
        sm={3}
        md={2}
        sx={{
          display: {xs: "none", sm: "block"},
          padding: 1,
        }}
      >
        <img src={image} alt='logo' width='100%' />
      </Grid>
      <Grid item xs={12} sm={9} md={10}>
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
            <Typography color='primary'>{children}</Typography>
          </Grid>
          <Grid
            container
            direction='column'
            item
            xs={12}
            sx={{
              backgroundColor: "secondary.main",
              px: 1,
              py: 0.5,
            }}
          >
            <Typography color='gray.50'>Où ? {lieu}</Typography>
            <Typography color='gray.50'>Pour qui ? {audience}</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: {xs: "block", sm: "none"},
              padding: 1,
              textAlign: "center",
            }}
          >
            <img src={image} alt='logo' width='100%' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Event;
