import React from "react";
import MainContainer from "../components/MainContainer";
import Title from "../components/Title";
import {Typography} from "@mui/material";
// datas
import dataAgenda from "../datas/dataAgenda";

const Agenda = () => {
  return (
    <MainContainer>
      <Title>Rendez-vous à ne pas manquer...</Title>
      {dataAgenda.length === 0 ? (
        <Typography color='primary' component='p' variant='body1'>
          Il n'y a aucun évènement prévu pour le moment...
        </Typography>
      ) : (
        dataAgenda.map((rdv) => <p key={rdv.date + " " + rdv.titre}>Rdv</p>)
      )}
    </MainContainer>
  );
};

export default Agenda;
