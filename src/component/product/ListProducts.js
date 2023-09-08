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

const ListProducts = ({ title, isExclusive }) => {
  let productListing = [];
  const selector = useSelector((state) => state.products.products);

  if (isExclusive) {
    productListing = getRandomProducts(selector, 3);
  } else {
    productListing = selector;
  }

  /*
   * Provides list of random products from the list.
   * @param {*} arr
   * @param {*} numItems
   * @returns
   */
  function getRandomProducts(arr, numItems) {
    // Check if the number of items requested is greater than the array length
    if (numItems >= arr.length) {
      return arr; // Return the whole array
    }

    // Create a copy of the original array to avoid modifying it
    const copyArray = [...arr];

    // Initialize an array to store the selected items
    const selectedItems = [];

    // Use a loop to randomly select items
    while (selectedItems.length < numItems) {
      // Generate a random index within the remaining items
      const randomIndex = Math.floor(Math.random() * copyArray.length);

      // Remove the selected item from the copyArray and add it to the selectedItems
      const selectedItem = copyArray.splice(randomIndex, 1)[0];

      if (selectedItem !== undefined) {
        selectedItems.push(selectedItem);
      }
    }

    return selectedItems;
  }

  console.debug("Product Listing...", productListing);

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
                      image={product.img1}
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
                <Alert severity="info">
                  Oops, We can't find the property you're looking for!
                </Alert>
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    )
  );
};

export default ListProducts;
