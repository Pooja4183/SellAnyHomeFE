import React from "react";
import { Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import TopBar from "../component/TopBar";
import MidBar from "../component/MidBar";
import LowerBar from "../component/LowerBar";

const Dashboard = () => {
  return (
    <Box
      sx={{
        mt: 10,
        ml: 1,
        mr: 1,
        backgroundColor: grey[50],
      }}
    >
  
      <Typography variant="h6" component="p" sx={{background:grey[300], mb:1, padding:1}}>
        Dashboard
      </Typography>

      <TopBar />
      <MidBar />
      <LowerBar />
    </Box>
  );
};

export default Dashboard;
