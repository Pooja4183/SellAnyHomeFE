import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { MenuItem, Paper, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Logo from "../images/SAH_Images/tomor_adobe_express.svg";
import styles from "./bannerStyle.module.css";

const pages = ["Buy", "Sell", "Agent"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar({showSearch}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  useEffect(()=> {
    if(isSubmitted) {
      let uri = "/buy-list?search="+address;
      history.push(uri);
    }

  },[isSubmitted, history]);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{ backgroundColor: "transparent", position: "absolute", }}
      className={styles.appbarShadow}
    >
      <Container maxWidth="xl" className={styles.headerPadding}>
        <Toolbar disableGutters>
          <Link to={`/`}>
            <img
              src={Logo}
              className={styles.logo}
              alt="Tomorrow.luxury property"
            />
          </Link>
           {showSearch && ( <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
                marginLeft:'15%'
              }}
              onSubmit={handleSubmit}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, width: "100%" }}
                placeholder="Search Property on Tomorrow"
                inputProps={{ "aria-label": "search property pn tomorrow" }}
                value={address}
                onChange={inputEvent}
              />
              <IconButton type="submit" sx={{ p: "10px", }} aria-label="search">
                <SearchIcon sx={{color:'blue'}}/>
              </IconButton>
            </Paper>
)}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", color: "white"}
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link  to={`/${page}`}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              mr: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to={`/${page.toLowerCase()}`}>{page}</Link>
              </Button>
            ))}
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
