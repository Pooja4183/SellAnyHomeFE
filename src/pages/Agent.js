import React from "react";
import styles from "../component/bannerStyle.module.css";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Box, Grid, Typography } from "@mui/material";
import AgentConnect from "../component/agent/AgentConnect";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { red } from "@mui/material/colors";


const Agent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div
        className={styles.bannerAgent}
        style={{backgroundColor:'#ccd9ff'}}
      >
        <Header isHome={true}/>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Box className={styles.luxeryHeaderA}>
              <Typography className={styles.agentTytle} variant="h2" sx={{fontSize: [32] }} >We're looking</Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "black", fontSize: [66] }}
              >
                for <u>partners</u>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "black", fontSize: [30] }}
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
