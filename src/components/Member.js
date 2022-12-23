import React from "react";
import {Stack, Avatar, Typography} from "@mui/material";

const Member = ({name, job, picture}) => {
  return (
    <Stack direction='column' alignItems='center' spacing={0.5}>
      <Avatar
        alt={name}
        src={picture}
        sx={{width: "60%", height: "60%", boxShadow: "0 0.5px 2px #fb7185"}}
      />
      <Typography
        sx={{fontFamily: "fontDeco"}}
        color='secondary'
        component='h2'
        variant='h6'
      >
        {name}
      </Typography>
      <Typography component='p' variant='h6'>
        {job}
      </Typography>
    </Stack>
  );
};

export default Member;
