import React, {useState} from "react";
import {NavLink, Link} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {Drawer} from "@mui/material";
import Logo from "../assets/logo.svg";

const pages = [
  {
    link: "/bureau",
    name: "BUREAU",
  },
  {
    link: "/agenda",
    name: "AGENDA",
  },
  {
    link: "/actions",
    name: "ACTIONS",
  },
  {
    link: "/projets",
    name: "PROJETS",
  },
];

const Header = () => {
  const [state, setState] = useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  return (
    <AppBar position='static' color='secondary'>
      <Container maxWidth='xl' sx={{padding: "0.5rem"}}>
        <Toolbar
          disableGutters
          sx={{display: "flex", justifyContent: "space-between"}}
        >
          <IconButton
            size='large'
            aria-label='menu principal'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={toggleDrawer("top", true)}
            color='primary'
            sx={{display: {xs: "block", md: "none"}}}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/'>
            <img src={Logo} alt='APE de Cagnotte' style={{height: "60px"}} />
          </Link>
          <Box sx={{display: {xs: "flex", md: "none"}}}>
            <Drawer
              anchor='top'
              open={state["top"]}
              onClose={toggleDrawer("top", false)}
              PaperProps={{
                sx: {
                  bgcolor: "#14b8a6",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                  alignItems: "center",
                  paddingTop: "0.8rem",
                }}
              >
                {pages.map((page) => (
                  <NavLink
                    key={page.name}
                    to={page.link}
                    onClick={toggleDrawer("top", false)}
                    className={({isActive}) =>
                      isActive ? "navLinkActive" : "navLink"
                    }
                  >
                    {page.name}
                  </NavLink>
                ))}
                <Button
                  variant='contained'
                  fullWidth={true}
                  component={NavLink}
                  to='/rejoindre'
                  color='info'
                  sx={{
                    color: "#f9fafb",
                    textTransform: "none",
                    fontSize: "1.6rem",
                  }}
                >
                  Rejoignez-nous !
                </Button>
              </Box>
            </Drawer>
          </Box>
          <Box sx={{display: {xs: "none", md: "flex"}, gap: "1.6rem"}}>
            {pages.map((page) => (
              <NavLink
                key={page.name}
                to={page.link}
                className={({isActive}) =>
                  isActive ? "navLinkActive" : "navLink"
                }
              >
                {page.name}
              </NavLink>
            ))}
          </Box>
          <Button
            variant='contained'
            component={NavLink}
            to='/rejoindre'
            color='info'
            sx={{
              color: "#f9fafb",
              textTransform: "none",
              fontSize: "1.6rem",
              display: {xs: "none", sm: "block"},
            }}
          >
            Rejoignez-nous !
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
