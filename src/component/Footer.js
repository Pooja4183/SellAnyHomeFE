import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/SAH_Images/tomo._adobe.svg";
import { Grid, Typography } from "@mui/material";

const Footer = () => {
  const pages = [
    "About Us",
    "Team",
    "Careers",
    "Help",
    "Term of Use",
    "Contact Us",
    "Admin",
  ];
  const social = [
    "Facebook",
    "Twitter",
    "Instagram",
    "LinkedIn",
    "YouTube",
    "PInterest",
  ];

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100%", textAlign: "center", borderTop: 1, borderColor: "lightgray", marginTop: 5, }}
      >
        <Grid item xs={12} md={12} lg={12}>
          <Typography>
            <Link to={`/`}>
              <img
                src={Logo}
                style={{ height: "100%", objectFit: "contain", width: "25%" }}
                alt="Tomorrow.luxury property"
              />
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          {pages.map((page) => (
            <Link key={page} to={`/${page.toLowerCase()}`}>{page}&nbsp; &nbsp;</Link>
          ))}
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          {social.map((page) => (
            <Link  key={page} to={`/${page.toLowerCase()}`} sx={{ color: 'yellow', '&:hover': { color: 'orange' } }}>{page}&nbsp; | </Link>
          ))}
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="p">
            DO NOT SELL MY PERSONAL INFORMATION
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
