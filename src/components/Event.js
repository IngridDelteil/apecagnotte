import React from "react";
import {Grid} from "@mui/material";

const Event = ({titre, date, heure, lieu, audience, image, children}) => {
  return (
    <Grid container>
      <Grid item>Photo</Grid>
      <Grid container>
        <Grid item>Date et Heure</Grid>
        <Grid item>Titre</Grid>
        <Grid item>Description</Grid>
        <Grid item>Lieu et audience</Grid>
      </Grid>
    </Grid>
  );
};

export default Event;
