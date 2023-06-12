import * as React from "react";
import Grid from "@mui/material/Grid";
import style from "./steps.module.css";
import { Typography } from "@mui/material";

const Stepper = ({ name, heading, children }) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} className={style.offer}>
        <div className={style.step}>
          <p>{name}</p>
        </div>
        <Typography variant="h5"> {heading}</Typography>
        <Typography variant="p" className={style.offerContent}> {children}</Typography>
       
      </Grid>
    </>
  );
};

export default function ResponsiveGrid() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 2 }}
      sx={{ flexGrow: 1 }}
      className={style.offerStyling}
    >
      <Stepper name="Step 1" heading="Request an Offer">
        Tell us your home and answer a few questions. It takes less than 5
        minutes.
      </Stepper>
      <Stepper name="Step 2" heading="Review offers">
        Schedule an appointment, On-site A to Z point check. Get your estimate,
        its free with no obligation to sell.
      </Stepper>
      <Stepper name="Step 3" heading="Sold, stress-free">
        Choose when you want to close. Negotitate better terms, our team will
        manage the rest.
      </Stepper>
    </Grid>
  );
}
