import { Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { grey } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import { Link} from "react-router-dom";

const pages = ["Buy", "Sell", "Agent"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const HeaderIcon=({isHome}) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
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
        <>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent:"right", pr:0 }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          sx={{pr:0}}
         
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
            display: { xs: "block", md: "none", color: "white" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Link to={`/${page}`} key={`/${page}`}>
                  {page}
                </Link>
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
            {isHome && (
              <Link
                to={`/${page.toLowerCase()}`}
                key={`/${page}`}
                style={{ color: "white", fontWeight: "bold" }}
              >
                {page}
              </Link>
            )}
            {!isHome && (
              <Link
                to={`/${page.toLowerCase()}`}
                key={`/${page}`}
                style={{ color: grey[700], fontWeight: "bold" }}
              >
                {page}
              </Link>
            )}
          </Button>
        ))}
      </Box>
      </>
    )

}

export default HeaderIcon;