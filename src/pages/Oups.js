import React from "react";
import MainContainer from "../components/MainContainer";
import Title from "../components/Title";
import {Stack} from "@mui/material";
import perdu from "../assets/perdu.svg";

const Oups = () => {
  return (
    <MainContainer>
      <Stack alignItems='center' spacing={2}>
        <img src={perdu} alt='Perdu' style={{maxWidth: "300px"}} />
        <Title>Oups ! Essaie un autre chemin ...</Title>
      </Stack>
    </MainContainer>
  );
};

export default Oups;
