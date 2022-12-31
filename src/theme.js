import {createTheme} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Cookie",
    fontDeco: "Fredericka The Great",
    fontSize: 20,
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
      50: "#f9fafb",
      400: "#9ca3af",
    },
  },
});

export default theme;
