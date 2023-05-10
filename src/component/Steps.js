import * as React from 'react';
import Grid from '@mui/material/Grid';
import style from './steps.module.css'


export default function ResponsiveGrid() {
  return (
   
      <Grid container spacing={{ xs: 2, md: 2 }} sx={{ flexGrow: 1 }} className={style.offerStyling} >

      <Grid item xs={12} sm={6} md={4} className={style.offer}>
<item className={style.step}><p>Step 1</p></item>
<item > <h5> Request an Offer</h5> </item>
<item className={style.offerContent} ><p>Tell us your home and answer a few questions. It takes less than 5 minutes.</p> </item>
        
         </Grid>
      <Grid item xs={12} sm={6} md={4}className={style.offer} > 
      <item className={style.step}><p>Step 2</p></item>
<item ><h5> Review Offers</h5> </item>
<item className={style.offerContent}  ><p>Schedule an appointment, On-site A to Z point check. Get your estimate, its free with no obligation to sell.</p> </item>
      
      </Grid>
      <Grid item xs={12} sm={6} md={4} className={style.offer}> 
      <item className={style.step}><p>Step 3</p></item>
<item > <h5> Sold, stress-free</h5> </item>
<item className={style.offerContent} ><p>Choose when you want to close. Negotitate better terms, our team will manage the rest.</p> </item>
     
      </Grid>
       
      </Grid>
    
  );
}