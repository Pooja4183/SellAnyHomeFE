import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import bolgImg from '../images/news.jpg';
import bImg from '../images/bImg.jpg';
import blImg from '../images/blImg.jpg';

import styles from './blog.module.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>

      <Grid container spacing={{ xs: 2, md: 1}} columns={{ xs: 4, sm: 8, md: 12 }} className={styles.newsContainer} >

      <Grid container spacing={2} className={styles.newsHeading} >
            <Grid item xs={12}>
              <Item sx={{ borderRadius: 0, boxShadow: "none" , textAlign:'center', padding:0}}>
                <h2>Latest Updates and News</h2>
              </Item>
              
            </Grid>
          </Grid>

       
          <Grid item xs={12} sm={6} md={4} sx={{padding: 0}} >


            <Item  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,boxShadow:'none'}}>
            <Card sx={{ maxWidth: 345 ,boxShadow:'none'}} className={styles.cardImg}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image={bolgImg}
          alt="green iguana"
          
        />
        <CardContent className={styles.newsCont}>
          <Typography gutterBottom component="div" className={styles.newsContH}>
          Rent or buy? Here’s how to make that decision?
          </Typography>
          <Typography variant="body2" color="text.secondary" >
          Discover some of the very best apartments, penthouses, townhouses and villas for rent across Dubai. 
          Located in some of the most prime communities, these homes are designed to cater to every type of lifestyle.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Item>

          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{padding: 0}} >


<Item  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,boxShadow:'none'}}>
<Card sx={{ maxWidth: 345 ,boxShadow:'none'}} className={styles.cardImg}>
<CardActionArea >
<CardMedia
component="img"
height="200"
image={blImg}
alt="green iguana"

/>
<CardContent className={styles.newsCont}>
<Typography gutterBottom component="div" className={styles.newsContH}>
A home where every view is a view to live for.
</Typography>
<Typography variant="body2" color="text.secondary" >
What truly sets Golf Place Terraces apart are views of the clean-cut golf course, lush fairways, 
winding walkways, landscaped parks and gardens, as well as vast open spaces that would enhance the life of every resident.
</Typography>
</CardContent>
</CardActionArea>
</Card>
</Item>

</Grid>
<Grid item xs={12} sm={6} md={4} sx={{padding: 0}} >


<Item  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,boxShadow:'none'}}>
<Card sx={{ maxWidth: 345 ,boxShadow:'none'}} className={styles.cardImg}>
<CardActionArea >
<CardMedia
component="img"
height="200"
image={bImg}
alt="green iguana"

/>
<CardContent className={styles.newsCont}>
<Typography gutterBottom component="div" className={styles.newsContH}>
Your Trusted Property Finder In Dubai
</Typography>
<Typography variant="body2" color="text.secondary" >
Dubai’s latest and unprecedented residential marina masterpiece on the Arabian Gulf coast is driven by a desire to change the meaning of sophistication.
 An architectural endeavor that offers luxurious seafront living.
</Typography>
</CardContent>
</CardActionArea>
</Card>
</Item>

</Grid>

    
      </Grid>
    </Box>
  );
}


















