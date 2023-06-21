import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Typography, Grid,
  Box
} from "@mui/material";
import {
  grey
} from "@mui/material/colors";
import SmallItem from "../component/SmallItem";
import Item from "../component/Item";
import LargeItem from "../component/LargeItem";



const Dashboard = () => {

  return (
    <Box
      sx={{
        mt: 10,
        ml: 2,
        mr: 2,
        backgroundColor: grey[50],
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            component="p"
          >
            Dashboard
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <SmallItem text="Buy Bookings" value="10" />
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <SmallItem text="Sale Bookings" value="15" />
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <SmallItem text="Approved Properties" value="15" />
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <SmallItem text="Draft Properties" value="20" />
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <SmallItem text="Total Available" value="30" />
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <SmallItem text="Total Agents" value="10" />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Item text="Latest 3 Sale Bookings" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item text=" Latest 3 Buy Bookings" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item text="All Properties" />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <LargeItem text=" Number of Properties Registered across Months" />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <LargeItem text=" Areas and Count of Properties" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
