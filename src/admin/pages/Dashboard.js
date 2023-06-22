import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import TopBar from "../component/TopBar";
import BuyBooking from "../component/BuyBooking";
import SellBooking from "../component/SellBooking";
import MidBar from "../component/MidBar";
import LowerBar from "../component/LowerBar";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleSmallItemClick = (section) => {
    setActiveSection(section);
  };

  return (
    <Box
      sx={{
        mt: 10,
        ml: 1,
        mr: 1,
        backgroundColor: grey[50],
      }}
    >
      <Typography
        variant="h6"
        component="p"
        sx={{ background: grey[300], mb: 1, padding: 1 }}
        onClick={() => handleSmallItemClick("dashboard")}
      >
        <DashboardIcon /> Dashboard
      </Typography>

      <TopBar onItemClick={handleSmallItemClick} />

      {activeSection === "buy" && <BuyBooking />}
      {activeSection === "sell" && <SellBooking />}
      {activeSection === "dashboard" && (
        <>
          <MidBar />
          <LowerBar />
        </>
      )}
    </Box>
  );
};

export default Dashboard;
