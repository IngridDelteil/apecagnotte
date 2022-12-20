import React from "react";
import {Link} from "@mui/material";

const FooterLink = ({to, children}) => {
  return (
    <Link
      href={to}
      underline='hover'
      component='a'
      color='#f9fafb'
      sx={{fontFamily: "Fredericka The Great"}}
    >
      {children}
    </Link>
  );
};

export default FooterLink;
