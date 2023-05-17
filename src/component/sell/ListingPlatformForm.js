import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import listingStyle from "./WhoAreYouForm.module.css";
import { useHistory } from 'react-router-dom';



const ListingPlatformForm=({houseWorthInfo, listingPlatformInfo, handleListingPlatformChange }) => {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push('/sell/timeline');
  }
  return (
    (
     
      <div>
     <Grid container className={listingStyle.formstyleform}>
     <Grid item xs={12} sm={12} md={4}   sx={{
  textAlign: {
    xs: "center",
    sm: "center",
    lg: "left",
    md: 'left'
  } }}          className={listingStyle.formstyle} > 
  <div className={listingStyle.label}>   
            <p >Is This The Correct Addres? If Not Click Here</p>
            {houseWorthInfo && <h5>{houseWorthInfo.address}</h5>}
           </div></Grid>
    
           
           <Grid item xs={12} sm={12} md={8}  sx={{
  textAlign: {
    xs: "center",
    sm: "center",
    lg: "left",
    md: 'left'
  } }}     className={listingStyle.formstyle}>

<h1 className={listingStyle.whoAreyou}>This Home Listed Any Of Listing Platform Or With Brokers?</h1>
          
          
           <form  onSubmit={handleSubmit}>
             <FormControl>
            
               <RadioGroup
                 aria-labelledby="demo-controlled-radio-buttons-group"
                 name="controlled-radio-buttons-group"
                 value={listingPlatformInfo.address}
                 onChange={handleListingPlatformChange}
               >
                 <FormControlLabel
                   className={listingStyle.sellField}
                   value="Yes"
                   control={<Radio className={listingStyle.radioStyle} />}
                   label="Yes"
                   
                 />
                
                 <FormControlLabel
                   className={listingStyle.sellField}
                   value="No"
                   control={<Radio className={listingStyle.radioStyle} />}
                   label="No"
                 />
               </RadioGroup> 
               <Button
                 type="submit"
                 className={listingStyle.button} 
               >
                 Next
               </Button>
             </FormControl>
             </form>
           </Grid>
          
         </Grid>
     
    </div>
    ) 
   
  );
}

export default ListingPlatformForm;
