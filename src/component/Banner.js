import styles from "./bannerStyle.module.css";
import React, { useState } from "react";
import banerimg from "../images/banner_sellAnyHome123.jpg";
import { useHistory } from "react-router-dom";
import Header from "../component/Header";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import StyledButtonHome from "./custom/StyledButtonHome";
import { Typography } from "@mui/material";

const Banner = () => {
  const history = useHistory();
  const [searchString, setSearchString] = useState("");

  const handleChange = (event) => {
    // console.log("Event::", event.target.value);
    // setSearchString(event.target.value);

    const { name, value } = event.target;
    setSearchString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let uri = "/buy-list?search=" + searchString;
    history.push(uri);
  };

 
  return (
    <>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${banerimg})` }}
      >
        <Header />

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Box className={styles.luxeryHeader}>
              <Typography variant="h2">Find The Perfect</Typography>
              <Typography variant="h1">Luxury Home</Typography>
              <Stack
                spacing={2}
                direction="row"
                component="form"
                //  variant="form"
                onSubmit={handleSubmit}
                paddingTop={4}
              >
                <TextField
                  
                  name="address"
                  label="Address Neighborhood"
                  id="address"
                  value={searchString}
                  onChange={handleChange}
                  size="small"
                  sx={{
                    background: "white",
                    border: 0,
                    borderRadius: 0,
                  width:'50%'
                  }}
                />

                <StyledButtonHome variant="outlined" type="submit">
                  Search
                </StyledButtonHome>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Banner;

