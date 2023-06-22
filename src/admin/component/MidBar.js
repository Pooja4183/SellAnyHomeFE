import { Grid } from "@mui/material";
import Item from "./Item";

const MidBar = () => {
  return (
    <Grid container  spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Item text="Latest 3 Sale Bookings" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Item text=" Latest 3 Buy Bookings" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Item text="All Properties" />
      </Grid>
    </Grid>
  );
};

export default MidBar;
