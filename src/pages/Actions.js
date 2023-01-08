import React from "react";
import MainContainer from "../components/MainContainer";
import Title from "../components/Title";
import Action from "../components/Action";
import {Typography, Stack} from "@mui/material";
// datas
import dataActions from "../datas/dataActions";

const Actions = () => {
  return (
    <MainContainer>
      <Title>Récolter des fonds pour les projets futurs...</Title>
      {dataActions.length === 0 ? (
        <Typography color='primary' component='p' variant='body1'>
          Aucune action n'a encore été mise en place...
        </Typography>
      ) : (
        <Stack spacing={4}>
          {dataActions.map((action) => (
            <Action
              key={action.categorie + "-" + action.titre}
              titre={action.titre}
              galerie={action.galerie}
              benefices={action.benefices}
            >
              {action.description}
            </Action>
          ))}
        </Stack>
      )}
    </MainContainer>
  );
};

export default Actions;
