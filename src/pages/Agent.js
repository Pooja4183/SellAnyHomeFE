import React from "react";
import styles from "../component/bannerStyle.module.css";
import banerimg from "../images/banner_sellAnyHome123.jpg";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Box, Grid, Typography } from "@mui/material";
// import PerkCompare from "../component/agent/PerkCompare";
import AgentConnect from "../component/agent/AgentConnect";
import { fontSize } from "@mui/system";


const Agent = () => {

  return (
    <>
      <div
        className={styles.banner}
        style={{backgroundColor:'#EAEFF1'}}
      >
        <Header />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={6} sm={8} md={12}>
            <Box className={styles.luxeryHeader}>
              <Typography className={styles.agentTytle} variant="h2"  sx={{ color: "black",}} >We're looking</Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "black", fontSize: 66, }}
              >
                for <u>partners</u>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "black", fontSize: 30, }}
              >
                <br />
                We made real estate <u>brokerage</u> simple, plug & play
              </Typography>
             
            </Box>
          </Grid>
        </Grid>
      </div>
      {/* <PerkCompare/> */}
      <AgentConnect/>
      <Footer/>
    </>
  );
};

export default Agent;
