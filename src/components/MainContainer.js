import React from "react";
import {Container} from "@mui/material";

const MainContainer = ({children}) => {
  return (
    <Container
      maxWidth='lg'
      component='main'
      sx={{
        bgcolor: "#f9fafb",
        minHeight: "100vh",
        pt: "7rem",
        pb: "4rem",
        border: 1,
      }}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
