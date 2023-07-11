import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Currency from "../custom/Currency";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ListProducts = ({ title }) => {
  const productListing = useSelector((state) => state.products.products);
  console.log("Product Listing...", productListing);

  return (
    productListing && (
      <Box sx={{ flexGrow: 1, minHeight: "450px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ paddingLeft: 1, paddingBottom: 4 }}
        >
          <Typography variant="h2">{title}</Typography>
        </Grid>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {productListing.map((product) => (
            <Grid xs={12} sm={6} md={4} lg={4} key={product._id}>
              <Card sx={{ borderRadius: 0, boxShadow: "none" }}>
                <CardActionArea>
                  <Link to={"/property/" + product.id}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={product.img1}
                      alt="green iguana"
                    />
                  </Link>
                  <CardContent sx={{ paddingLeft: "0" }}>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        color: "black",
                      }}
                    >
                      <b>
                        <Currency value={product.price} />
                      </b>
                      <span>
                        <b>{product.bed}</b> Bed | <b>{product.bath}</b> Bath |{" "}
                        <b>{product.sqFt}</b> SqFt
                      </span>
                    </Typography>

                    <Typography gutterBottom variant="caption" component="div">
                      {product.address}, {product.city}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="caption"
                      component="div"
                      sx={{
                        display: "flex",
                        textTransform: "capitalize",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "blue" }}>
                        {product.homeType} for sale
                      </span>
                      <span>Ref: {product.id}</span>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
       
        </Grid>
        {productListing.length < 1 && (
            <Grid
              container
              justifyContent= {"center"}
               alignItems= {"center"}
            >
              <Grid item>
                <Alert severity="info">
                  Oops, We can't find the property you're looking for!
                </Alert>
              </Grid>
            </Grid>
          )}
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
