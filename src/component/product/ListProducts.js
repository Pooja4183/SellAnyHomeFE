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
import placeholderImg from "../../images/news.jpg";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ListProducts = ({ title, isExclusive }) => {
  let productListing = [];
  const selector = useSelector((state) => state.products);

  if (isExclusive) {
    if(selector.exclusives) {
    productListing = selector.exclusives;
    } 
  } else {
    if(selector.products) {
      productListing = selector.products;
    }
  }


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
                  <Link to={"/property/" + product._id}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={product.img1=== undefined ? placeholderImg: product.img1}
                      alt="tomorrowdubai"
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
                      {product.priceOnApplication? "Price On Application": <Currency value={product.price} />}
                      </b>
                      <span>
                        <b>{product.bed}</b> {product.bed > 1 ? 'Beds': 'Bed'} | <b>{product.bath}</b>  {product.bath > 1 ? 'Baths': 'Bath'} |{" "}
                        <b><Currency value={product.sqFt} hideSymbol/></b> SqFt
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
                      <span>
                        Ref: TM
                        {product._id
                          ? product._id.slice(18)
                          : product.id.slice(18)}
                      </span>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        {productListing.length < 1 && (
          <>
            <Grid container justifyContent={"center"} alignItems={"center"}>
              <Grid item>
                
                  No matching result
                  Try changing your Search...
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    )
  );
};

export default ListProducts;
