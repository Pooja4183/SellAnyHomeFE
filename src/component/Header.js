
import SearchIcon from "@mui/icons-material/Search";
import { Paper, useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../images/SAH_Images/tomor_adobe_express.svg";
import LogoOther from "../images/SAH_Images/tomor_adobe_expres.svg";
import styles from "./bannerStyle.module.css";

import { useTheme } from "@emotion/react";
import HeaderIcon from "./HeaderIcon";



function ResponsiveAppBar({ showSearch, isHome }) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  /* Form Submission */
  const history = useHistory();
  const [address, setAddress] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputEvent = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      let uri = "/buy-list?search=" + address;
      history.push(uri);
    }
  }, [isSubmitted, history]);



  return (
    <AppBar
      sx={{ backgroundColor: "transparent", position: "absolute"}}
      className={styles.appbarShadow}
      
    >

      {!isMobile && (
      <Container maxWidth="xl" className={styles.headerPadding}>
      <Toolbar disableGutters>
        <Link to={`/`}>
          <img
            src={isHome ? Logo : LogoOther}
            className={isHome ? styles.logo : styles.logoOther}
            alt="Tomorrow.luxury property"
          />
        </Link>
        {showSearch && (
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
              marginLeft: "15%",
            }}
            onSubmit={handleSubmit}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, width: "100%" }}
              placeholder="Search by places, address, building and agents"
              inputProps={{ "aria-label": "Search by places, address, building and agents" }}
              value={address}
              onChange={inputEvent}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon sx={{ color: "blue" }} />
            </IconButton>
          </Paper>
        )}
        <HeaderIcon isHome={isHome}/>
      </Toolbar>
    </Container>
      )}
      {isMobile && (
      <Container maxWidth="xl" className={styles.headerPadding}>
      <Toolbar disableGutters>
        <Link to={`/`}>
          <img
            src={isHome ? Logo : LogoOther}
            className={isHome ? styles.logo : styles.logoOther}
            alt="Tomorrow.luxury property"
          />
        </Link>

        <HeaderIcon/>
        </Toolbar>
        {showSearch && (
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            onSubmit={handleSubmit}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, width: "100%" }}
              placeholder="Search by places, address, building and agents"
              inputProps={{ "aria-label": "Search by places, address, building and agents" }}
              value={address}
              onChange={inputEvent}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon sx={{ color: "blue" }} />
            </IconButton>
          </Paper>
        )}
     
    </Container>
      )}
    </AppBar>
  );
}
export default ResponsiveAppBar;
