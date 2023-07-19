import { Grid, IconButton, Paper, Typography } from "@mui/material";
import Item from "./Item";
import { useEffect, useState } from "react";
import PropertyForm from "./PropertyForm";
import { Close } from "@mui/icons-material";

const MidBar = () => {
  const [selectedItem, setSelectedItem] = useState({
    row: null,
    type: null,
    text: null,
  });

  const handleClose = () => {
    //onItemClick(section);
    setSelectedItem({
      row: null,
      type: null,
      text: null,
    })
  };

  useEffect(() => {
    console.log("SSSelected Item", selectedItem);
  }, [selectedItem]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Item
            type="sell"
            text="Latest 3 Seller Interests"
            onItemSelect={setSelectedItem}
            selectedItem={selectedItem}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item
            type="buy"
            text=" Latest 3 Buyer Interests"
            onItemSelect={setSelectedItem}
            selectedItem={selectedItem}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item
            type="direct"
            text="Admin Created Properties"
            onItemSelect={setSelectedItem}
            selectedItem={selectedItem}
          />
        </Grid>
      </Grid>
      {selectedItem.row && (
        <>
          <Paper elevation={24} sx={{ ml: "18%", mr: "18%", mb: 2 }}>
            <Grid container justifyContent={"space-between"}>
              <Grid item >
                <Typography
                  variant="button"
                  sx={{ fontWeight: "bold", padding: 1 }}
                >
                  {selectedItem.text}
                </Typography>
              </Grid>
              <Grid item >
                <IconButton onClick={handleClose}>
                  <Close />
                </IconButton>
              </Grid>
              <Grid item>
                <PropertyForm selectedProperty={selectedItem.row} editable  handleClose={handleClose}/>
              </Grid>
            </Grid>
          </Paper>
        </>
      )}
    </>
  );
};

export default MidBar;
