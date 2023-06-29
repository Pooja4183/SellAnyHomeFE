import React from "react";
import styles from "../component/bannerStyle.module.css";
import banerimg from "../images/banner_sellAnyHome.jpg";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Box, Grid, Typography } from "@mui/material";
import PerkCompare from "../component/agent/PerkCompare";
import AgentConnect from "../component/agent/AgentConnect";


const Agent = () => {

  return (
    <>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${banerimg})` }}
      >
        <Header />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={6} sm={8} md={12}>
            <Box className={styles.luxeryHeader}>
              <Typography variant="h2">We're looking</Typography>
              <Typography
                variant="p"
                sx={{ color: "white", fontSize: 66, fontFamily: "Cooper Std" }}
              >
                for <u>partners</u>
              </Typography>
              <Typography
                variant="p"
                sx={{ color: "white", fontSize: 30, fontFamily: "Cooper Std" }}
              >
                <br /><br/>
                We made real estate <u>brokerage</u> simple, plug & play
              </Typography>
             
            </Box>
          </Grid>
        </Grid>
      </div>
      <PerkCompare/>
      <AgentConnect/>
      <Footer/>
    </>
  );
};

export default Agent;
