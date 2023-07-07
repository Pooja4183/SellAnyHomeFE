import React from "react";
import { Link } from "react-router-dom";
import { Grid, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import {
  grey, lime
} from "@mui/material/colors";

const Footer = () => {
  const pages = [
    "About Us",
    "Team",
    "Careers",
    "Help",
    "Term of Use",
    "Contact Us",
  ];
  const socialIcons = [
    { name: "Facebook", icon: FacebookIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Instagram", icon: InstagramIcon },
    { name: "LinkedIn", icon: LinkedInIcon },
    { name: "YouTube", icon: YouTubeIcon },
    { name: "Pinterest", icon: PinterestIcon },
  ];

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: lime["A700"],
          height: "100%",
          textAlign: "center",
          borderTop: 1,
          borderColor: "lightgray",
        }}
      >
         <Grid item xs={2} md={2} lg={2}>
          <Typography variant="p">
            DO NOT SELL MY PERSONAL INFORMATION
          </Typography>
        </Grid>
        
        <Grid item xs={4} md={4} lg={4}>
          {pages.map((page) => (
            <Link key={page} to={`/${page.toLowerCase()}`}>
              {page}&nbsp; &nbsp;
            </Link>
          ))}
        </Grid>
        <Grid item xs={2} md={2} lg={2}>
          {socialIcons.map((page) => {
            const Icon = page.icon;
            return (
              <Link key={page.name} to={`/${page.name.toLowerCase()}`}>
                <Icon />
               
              </Link>
            );
          })}
        </Grid>
        <Grid item xs={3} md={3} lg={3}  >
          <Stack direction="row" alignItems="flex-end" sx={{ alignContent:"end",  justifyContent: "right", pr:1, color: grey[600]}}>
            <Typography variant="h1" component="h1" sx={{}} >
              Tomorrow
            </Typography>
            <Typography variant="h6" component="h6" sx={{ textAlign: "end" }} >
              .luxuryproperty
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
