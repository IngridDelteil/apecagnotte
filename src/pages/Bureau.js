import React from "react";
import MainContainer from "../components/MainContainer";
import Member from "../components/Member";
import Title from "../components/Title";
import {Grid} from "@mui/material";
import dataBureau from "../datas/dataBureau";

const Bureau = () => {
  return (
    <MainContainer>
      <Title>Il était une fois une équipe de choc...</Title>
      <Grid container spacing={4}>
        {dataBureau.map((member, index) => (
          <Grid
            item
            key={`${member.name}+'-'+${member.job}`}
            xs={12}
            sm={6}
            md={3}
          >
            <Member
              name={member.name}
              job={member.job}
              picture={member.picture}
            />
          </Grid>
        ))}
      </Grid>
    </MainContainer>
  );
};

export default Bureau;
