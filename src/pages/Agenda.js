import React from "react";
import MainContainer from "../components/MainContainer";
import Title from "../components/Title";
import Event from "../components/Event";
import {Typography, Stack} from "@mui/material";
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
        <Stack spacing={4}>
          {dataAgenda.map((rdv) => (
            <Event
              key={rdv.date + " " + rdv.titre}
              titre={rdv.titre}
              date={rdv.date}
              heure={rdv.heure}
              lieu={rdv.lieu}
              audience={rdv.audience}
              image={rdv.image}
            >
              {rdv.description}
            </Event>
          ))}
        </Stack>
      )}
    </MainContainer>
  );
};

export default Agenda;
