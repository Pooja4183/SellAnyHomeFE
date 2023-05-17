import React from "react";
import { useHistory } from 'react-router-dom';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Sellstyle from "./WhoAreYouForm.module.css";


const TimelineForm=({ houseWorthInfo,timelineInfo, handleTimelineChange }) => {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push('/sell/propertydetail');
  }


  
  return (
    (
      <div>
     <Grid container className={Sellstyle.formstyleform}>
     <Grid item xs={12} sm={12} md={4}   sx={{
  textAlign: {
    xs: "center",
    sm: "center",
    lg: "left",
    md: 'left'
  } }}          className={Sellstyle.formstyle} > 
  <div className={Sellstyle.label}>   
            <p >Is This The Correct Addres? If Not Click Here</p>
            {houseWorthInfo && <h5>{houseWorthInfo.address}</h5>}
           </div></Grid>
    
           
           <Grid item xs={12} sm={12} md={8}  sx={{
  textAlign: {
    xs: "center",
    sm: "center",
    lg: "left",
    md: 'left'
  } }}     className={Sellstyle.formstyle}>
          
          <h1 className={Sellstyle.whoAreyou}>What's Your Sale Timeline?</h1>
           <form  onSubmit={handleSubmit}>
             <FormControl>
           
               <RadioGroup
                 aria-labelledby="demo-controlled-radio-buttons-group"
                 name="controlled-radio-buttons-group"
                 value={timelineInfo.address}
                 onChange={handleTimelineChange}
               >
                 <FormControlLabel
                   className={Sellstyle.sellField}
                   value="asap"
                   control={<Radio className={Sellstyle.radioStyle} />}
                   label="ASAP"
                  
                 />
                 <FormControlLabel
                   className={Sellstyle.sellField}
                   value="2-4 weeks"
                   control={<Radio className={Sellstyle.radioStyle}/>}
                   label=" 2-4 Weeks"
                 />
                 <FormControlLabel
                   className={Sellstyle.sellField}
                   value="4-6 weeks"
                   control={<Radio className={Sellstyle.radioStyle} />}
                   label="4-6 Weeks"
                 />
                  <FormControlLabel
                   className={Sellstyle.sellField}
                   value="check estimate offer"
                   control={<Radio className={Sellstyle.radioStyle} />}
                   label="Check Estimate Offer"
                 />
               </RadioGroup> 
               <Button
                
                 type="submit"
             
                 className={Sellstyle.button} 
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

export default TimelineForm;
