import { Grid } from "@mui/material";
import Item from "./Item";
import { useEffect, useState } from "react";
import LowerBar from "./LowerBar";
import PropertyForm from "./PropertyForm";

const MidBar = ({onItemClick}) => {
  const [activeSection, setActiveSection] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSmallItemClick = (section) => {
    onItemClick(section);
    setActiveSection(section);
   
  };

  useEffect(()=> {
    console.log("SSSelected Item", selectedItem);  
  },[selectedItem]);

  return (
    <>
    <Grid container  spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Item type="sell" text="Latest 3 Sell Bookings"  onItemSelect={setSelectedItem}/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Item type="buy" text=" Latest 3 Buy Bookings"   onItemSelect={setSelectedItem}/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Item  type="direct" text="Direct Created Properties"   onItemSelect={setSelectedItem}/>
      </Grid>
    </Grid>
    {selectedItem && (
        <>
        <Grid container>
          <Grid item ml={"20%"} mr={"20%"}>
          <PropertyForm selectedProperty={selectedItem} editable/>
          </Grid>
        </Grid>
       
        </>
        )}
   
    </>
  );
};

export default MidBar;
