import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Sellstyle from "./WhoAreYouForm.module.css";
import StyledButton from "../custom/StyledButton";
import NestedRightGrid from "../custom/NestedRightGrid";
import NestedLeftGrid from "../custom/NestedLeftGrid";

const ContactForm = ({
  houseWorthInfo,
  whoAreYouInfo,
  listingPlatformInfo,
  propertyDetailInfo,
  timelineInfo,
  contactInfo,
  handleContactChange,
}) => {
  
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
   <>

<Grid container className={Sellstyle.formstyleform}>
      <NestedRightGrid
        title={"Is This The Correct Address? If Not Click Here?"}
        value={houseWorthInfo.address}
      />
      <NestedLeftGrid title={"Who Are You?"}>
        <form onSubmit={handleSubmit}>

        <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '50%' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="Your Full Name" variant="outlined" sx={{marginTop:'0px'}} />
    <TextField id="outlined-basic" label="Email" variant="outlined" />
    <TextField id="outlined-basic" label="Phone" variant="outlined" />
   
  </Box>
           

              <StyledButton type="submit" variant="outlined">
                Next
              </StyledButton>
            
        
        </form>
      </NestedLeftGrid>
    </Grid>





{/*  */}






   
  </>
  );
};

export default ContactForm;
