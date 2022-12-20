import React from "react";
import FooterLink from "./FooterLink";
import {Box} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        p: 1,
        bgcolor: "#14b8a6",
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <FacebookIcon color='primary' />
        <FooterLink to='https://www.facebook.com/apecagnotte'>
          apecagnotte
        </FooterLink>
      </Box>
      <FooterLink to="https://www.softinmedia.fr'">
        Réalisation Softin'Media
      </FooterLink>
    </Box>
  );
};

export default Footer;
