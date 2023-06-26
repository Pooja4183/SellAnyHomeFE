import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import SmallItem from "./SmallItem";
import { grey } from "@mui/material/colors";

const TopBar = ({ onItemClick }) => {
  const [activeSection, setActiveSection] = useState("");

  const handleSmallItemClick = (section) => {
    onItemClick(section);
    setActiveSection(section);
   
  };

  return (
    <Grid container spacing={3}>

      <Grid item xs={2} sm={2} md={2}>
        <SmallItem text="Buy Bookings" value="10" onClick={() => handleSmallItemClick("buy")} />
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
        <SmallItem text="Sell Bookings" value="15" onClick={() => handleSmallItemClick("sell")} />
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
        <SmallItem text="Approved Properties" value="15"  onClick={() => handleSmallItemClick("approved")} />
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
        <SmallItem text="Draft Properties" value="20"   onClick={() => handleSmallItemClick("draft")} />
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
        <SmallItem text="Total Available" value="30"   onClick={() => handleSmallItemClick("all")} />
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
        <SmallItem text="Total Agents" value="10" />
      </Grid>
    </Grid>
  );
};

export default TopBar;
