import React from "react";
import MainContainer from "../components/MainContainer";
import Title from "../components/Title";
import ActionOrProject from "../components/ActionOrProject";
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
            <ActionOrProject
              key={action.titre}
              type='action'
              titre={action.titre}
              galerie={action.galerie}
              montant={action.benefices}
            >
              {action.description}
            </ActionOrProject>
          ))}
        </Stack>
      )}
    </MainContainer>
  );
};

export default Actions;
