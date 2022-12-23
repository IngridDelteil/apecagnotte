import {createTheme} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Cookie",
    fontDeco: "Fredericka The Great",
  },
  palette: {
    primary: {
      main: "#0c4a6e",
    },
    secondary: {
      main: "#14b8a6",
    },
    info: {
      main: "#fb7185",
    },
    gray: {
      400: "#9ca3af",
    },
  },
});

export default theme;
