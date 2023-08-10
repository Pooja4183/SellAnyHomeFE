import styles from "../bannerStyle.module.css";
import React, { useState } from "react";
import banerimg from "../../images/banner_sellAnyHome123.jpg";
import { useHistory } from "react-router-dom";
import StyledButtonHome from "../custom/StyledButtonHome";
import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import Header from "../Header";

const SellComponent = () => {
  const history = useHistory();
  const [houseWorthInfo, setHouseWorthInfo] = useState("");

  const handleHouseWorthChange = (event) => {
    setHouseWorthInfo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/sell-landing?houseWorth=" + houseWorthInfo);
  };

  const isFormValid = houseWorthInfo.trim() !== "";

  return (
    <>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${banerimg})` }}
      >
        <Header isHome={true}/>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={6} sm={8} md={12}>
            <Box className={styles.luxeryHeader}>
            <Typography variant="h2">How Much Is My</Typography>
            <Typography variant="h1">House Worth?</Typography>
              <Stack
                spacing={2}
                direction="row"
                component="form"
                //  variant="form"
                onSubmit={handleSubmit}
                paddingTop={4}
              >
                <TextField
                  fullWidth
                  name="address"
                  label="Enter Your Full Address"
                  id="address"
                  value={houseWorthInfo.address}
                  onChange={handleHouseWorthChange}
                  required
                  size="small"
                  sx={{
                    background: "white",
                    border: 0,
                    borderRadius: 0,
                    width:'60%'
                  }}
                />

                <StyledButtonHome
                  variant="outlined"
                  type="submit"
                >
                  Estimate
                </StyledButtonHome>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SellComponent;
