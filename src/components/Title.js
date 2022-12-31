import React from "react";
import {Box, Typography} from "@mui/material";

const Title = ({children}) => {
  return (
    <Box sx={{textAlign: "center", mb: 4}}>
      <Typography
        sx={{fontFamily: "fontDeco"}}
        color='info.main'
        component='h1'
        variant='body1'
      >
        {children}
      </Typography>
    </Box>
  );
};

export default Title;
