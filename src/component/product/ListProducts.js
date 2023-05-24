import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./product.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { color } from "@mui/system";

const ListProducts = ({ title }) => {
  const productListing = useSelector((state) => state.products.products);
  console.log("Product Listing...", productListing);

  return (
    productListing && (
      <Box sx={{ flexGrow: 1,padding:'5% 10%' }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{paddingLeft:1, paddingBottom:4 }}
        >
          <Typography variant="h4" component="h4" sx={{fontFamily:'Cooper Std'}}>
            {title}
          </Typography>
          
        </Grid>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          
        >
           {productListing.map((product) => (
         
            <Grid xs={12} sm={6} md={4} lg={4}   >
             
                <Card className={style.cardBorder}>
                  <CardActionArea sx={{borderRadius:'none!important'}}>
                    <Link to={"/product/" + product.id}>
                      <CardMedia
                        component="img"
                        height="240"
                        image={product.img1}
                        alt="green iguana"
                      />
                    </Link>
                    <CardContent sx={{paddingLeft:'0'}}>
                     
                    <Typography variant="subtitle2" color="text.secondary" sx={{ display: 'flex', justifyContent: 'space-between', color:'black' }}>
  <span>INR {product.price}</span>
  <span>{`${product.bed} Bed | ${product.bath} Bath | ${product.sqFt} SqFt`}</span>
</Typography>

                      <Typography gutterBottom variant="caption" component="div">
                       
                       {product.address}
                   
                   </Typography>
                   <Typography gutterBottom variant="caption" component="div"sx={{color:'blue'}}>
                       
                      Apartment For Sale
                   
                   </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
             
            </Grid>
           ))}
        </Grid>
      </Box>
    )
  );
};

export default ListProducts;

// <Container fluid className={style.produtCont}>
// <Row className={style.headinExclusive}> <Col><h2>{title}</h2></Col></Row>
// <Row xs={2} md={3} className='g-4 mx-2 produtRow'>
//   {productListing.map((product) => (
//     <Col className={style.colpadding} key={product.id}>
//       <Card  className={style.thinCard}>
//         <Card.Body className={style.cardImage} >
//           <Link to={'/product/' + product.id}>
//             <Card.Img  src={product.img1} className={style.cardI}   />
//           </Link>
//         </Card.Body>

//         <Card.Footer className={style.cardBody}  >
//           <Card.Title className={style.proTtile}  >
//             {' '}
//             <Link to={'/product/' + product.id}>
//               {product.title}
//             </Link>{' '}
//           </Card.Title>
//           <Card.Text>
//             <span className={style.protext}> INR {product.price}</span>
//             <span className={style.pro}>{product.bed} Bed | {product.bath} Bath | {product.sqFt} SqFt  </span>
//           </Card.Text>
//         </Card.Footer>
//       </Card>
//     </Col>
//   ))}
// </Row>
// </Container>