import { Grid } from "@mui/material";
import LargeItem from "./LargeItem";

const LowerBar = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={6}>
        <LargeItem
          type="chart"
          text=" Number of Properties Registered across Months"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <LargeItem type="map" text="Areas and Count of Properties" />
      </Grid>
    </Grid>
  );
};

export default LowerBar;
