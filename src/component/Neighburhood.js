import * as React from "react";
import { useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "./Neighburhood.module.css";
import propertyImg from "../images/neighbor.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Neighburhood() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => setPosition(position),
        (error) => console.log(error)
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
      <div>
        {position ? (
          <div>
            <p>Lat: {position.coords.latitude} Lon: {position.coords.longitude}</p>
          </div>
        ) : (
          <p>Getting your location...</p>
        )}
      </div>

      <Box >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 15 }}
          className={styles.Nabour}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item sx={{ borderRadius: 0, boxShadow: "none" }}>
                <h2>Find the Neighborhood For You</h2>
              </Item>
              <Grid item xs={12}>
                <Item
                  sx={{ borderRadius: 0, boxShadow: "none" }}
                  className={styles.Nabourp}
                >
                  <p className={styles.Nabourp}>
                    The neighborhoods best suited to your lifestyle, and the
                    agents who know them best.
                  </p>
                </Item>
              </Grid>
            </Grid>
          </Grid>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item sx={{ padding: 0 }} className={styles.property}>
                {/* <img src={`path/to/image-${index}.jpg`} alt={`Image ${index}`} /> */}
                <img
                  alt="neighborhood"
                  src={propertyImg}
                  className={styles.propertyImg}
                />
                <div className={styles.content}>
                  <p>Cities nearby.</p>
                </div>
              </Item>
            </Grid>
          ))}
      
        </Grid>
      </Box>
    </>
  );
}
