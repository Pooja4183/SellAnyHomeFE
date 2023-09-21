import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../component/Header";
import banerimg from "../images/banner_sellAnyHome123.jpg";
import PropertyDetail from "../master.json";
import styles from "./bannerStyle.module.css";
import StyledButtonHome from "./custom/StyledButtonHome";
import AutocompleteTextField from "./custom/AutoCompleteTextField";

const Banner = () => {
  const history = useHistory();
  const [searchString, setSearchString] = useState("");

  const handleChange = (event, value) => {
    console.debug("Value", value);
    setSearchString(value || "");
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
        <Header isHome="true" />

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
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
                <AutocompleteTextField
                  onChange={handleChange}
                  nameProp="address"
                  label="Search by places, address, building and agents"
                  id="address"
                  options={PropertyDetail.locations}
                  value={searchString}
                  key="autoCompleteSearchString"
                  setSearchString={setSearchString}
                  size='small'
                  
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
