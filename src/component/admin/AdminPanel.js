import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PropertyGrid from "./PropertyGrid";
import PropertyForm from "./PropertyForm";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
 // textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AdminPanel = () => {

  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <Box
      sx={{
        marginTop: "110px",
        marginBottom: "0%",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} lg={6}>
          <Item  elevation={6}>
            <PropertyGrid onPropertySelect={setSelectedProperty}/>
          </Item>
        </Grid>
        <Grid item xs={12}  sm={6} lg={6}>
          <Item elevation={6}>
            <PropertyForm selectedProperty={selectedProperty}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminPanel;
