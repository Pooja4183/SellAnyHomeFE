import * as React from "react";
import Grid from "@mui/material/Grid";
import Sellstyle from "./WhoAreYouForm.module.css";
import StyledButton from "../custom/StyledButton";
import NestedRightGrid from "../custom/NestedRightGrid";
import NestedLeftGrid from "../custom/NestedLeftGrid";
import StyledTextField from "../custom/StyledTextField";
import textStyle from './PropertyDetailForm.module.css';
import StyledFormControl from "../custom/StyledFormControl";
import Typography from '@mui/material/Typography';
import { textAlign } from "@mui/system";


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
    handleContactChange(event);
    const formData =  {
      address: houseWorthInfo.address,
        sellerType: whoAreYouInfo.sellerType,
        isListed: listingPlatformInfo.isListed,
        duration: timelineInfo.duration,
        type: propertyDetailInfo.type,
        beds: propertyDetailInfo.beds,
        baths:propertyDetailInfo.baths,
        size: propertyDetailInfo.size,
        yearBuilt: propertyDetailInfo.yearBuilt,
        price: propertyDetailInfo.price,
        name: contactInfo.name,
        email: contactInfo.email,
        phone: contactInfo.phone,
    }

    console.log("Form Data::", formData)
  }

  return (
      <Grid container className={Sellstyle.formstyleform}>
        <NestedRightGrid
          title={"Is This The Correct Address? If Not Click Here?"}
          value={houseWorthInfo.address}
        />
        <NestedLeftGrid title={"We'd Love To Connect Width You"} sx={{paddingBottom:'50px'}} >
        <Typography variant="subtitle1" gutterBottom sx={{paddingBottom:'4%', textAlign:'left'}}>
       Enter your information to get a call in minutes.
      </Typography>
          <form onSubmit={handleSubmit}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            columns={{ xs: 12, sm: 4, md: 4, lg:4 }}
             
            >

           
            <Grid item xs={12} md={3}>
              <StyledFormControl fullWidth>
                <StyledTextField id="name" label="Your Full Name"  className={textStyle.inputStyle} name="name" onInput={handleContactChange}/>
              </StyledFormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledFormControl fullWidth>
                 <StyledTextField id="email" label="Email" variant="outlined" className={textStyle.inputStyle}  type="email" name="email"   onInput={handleContactChange} />
               
              </StyledFormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <StyledFormControl fullWidth>
                <StyledTextField id="phone" label="Phone" variant="outlined" className={textStyle.inputStyle}  name="phone"   onInput={handleContactChange}/>
              </StyledFormControl>
            </Grid>
          </Grid>
          <StyledButton type="submit" variant="outlined">
              I'am Interested
            </StyledButton>
          </form>
          
        </NestedLeftGrid>
      </Grid>

      



      
     
  );
};

export default ContactForm;
