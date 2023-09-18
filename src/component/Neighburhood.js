import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "./Neighburhood.module.css";
import { Link } from "react-router-dom";

import Master from './../master.json';
import downtown from "../images/SAH_Images/downtown dubai.jpg";
import dubaiHill from "../images/SAH_Images/dubai hill.jpeg";
import emirates from "../images/SAH_Images/emirates hills.jpg";
import dubaiMarina from "../images/SAH_Images/dubai marina.jpg";
import jumeirah from "../images/SAH_Images/jumeirah-1_uBRSD_xl.jpg";
import palmJumeirah from "../images/SAH_Images/palm jume.jpg";
import { Typography } from "@mui/material";

const imagePaths = [emirates, downtown, dubaiHill, dubaiMarina, jumeirah, palmJumeirah];

const cityNames = Master.neighbourhood.cityNames;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Neighburhood({title}) {
 
  return (
    <>
     

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
                <Typography variant="h2">{title}</Typography>
              </Item>
             
            </Grid>
          </Grid>
          {imagePaths.map((image, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
               <Link to={"/buy-list?search=" + cityNames[index]}>
              <Item sx={{ padding: 0 }} className={styles.property}>
                {/* <img src={`path/to/image-${index}.jpg`} alt={`Image ${index}`} /> */}
                <img
                   alt={`neighborhood-${index}`}
                   src={image}
                  className={styles.propertyImg}
                />
                <div className={styles.content}>
                  <p>{cityNames[index]}</p>
                </div>
              </Item>
              </Link>
            </Grid>
          ))}
      
        </Grid>
      </Box>
    </>
  );
}
