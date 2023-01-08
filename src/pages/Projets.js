import React from "react";
import MainContainer from "../components/MainContainer";
import Title from "../components/Title";
import ActionOrProject from "../components/ActionOrProject";
import {Typography, Stack} from "@mui/material";
// datas
import dataProjets from "../datas/dataProjets";

const Projets = () => {
  return (
    <MainContainer>
      <Title>Financer des projets pour les enfants...</Title>
      {dataProjets.length === 0 ? (
        <Typography color='primary' component='p' variant='body1'>
          Aucun projet n'a encore été mené...
        </Typography>
      ) : (
        <Stack spacing={4}>
          {dataProjets.map((projet) => (
            <ActionOrProject
              key={projet.titre}
              type='projet'
              titre={projet.titre}
              galerie={projet.galerie}
              montant={projet.couts}
            >
              {projet.description}
            </ActionOrProject>
          ))}
        </Stack>
      )}
    </MainContainer>
  );
};

export default Projets;
