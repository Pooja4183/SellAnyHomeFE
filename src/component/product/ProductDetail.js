import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { experimentalStyled as styled } from "@mui/material/styles";
import * as React from "react";
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import agentImage from "../../images/SAH_Images/agentProfile.png";
import { fetchProductsById } from "../../store/productAction";
import styles from "./product.module.css";
import OLMap from "../custom/Map";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) => state.products.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsById(id));
  }, [dispatch, id]);
  return (
    product && (
      <Box sx={{ flexGrow: 1, marginTop: 15 }}>
        <Grid
          className={styles.ProductDetailContainer}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Item sx={{ textAlign: "left" }} className={styles.ProperryTytle}>
              <h4>{product.title}</h4>
              <p>{product.address}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {" "}
                  <p style={{ fontSize: "large" }}>
                    <b>{product.bed}</b>&nbsp;Bed | <b>{product.bath}</b>
                    &nbsp;Bath | <b>{product.sqFt}</b> Sq. Ft
                  </p>
                </div>
                <div style={{ fontSize: "large", fontWeight: "bold" }}>
                  <p>AED {product.price}</p>
                </div>
              </div>
            </Item>
            <Carousel>
              {product.images &&
                product.images.map((item) => (
                  <>
                    <img src={item} className={styles.carouselStyle} />
                  </>
                ))}
            </Carousel>
          </Grid>
        </Grid>
        <Grid
          className={styles.agentContainer}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: "flex", justifyContent: "left" }}
          >
            <Item>
              <div className={styles.gridStyling}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ textAlign: "left", fontWeight: "bold" }}
                >
                  Description
                </Typography>
                <Typography variant="body2">{product.description}</Typography>
                <Typography variant="h3">&nbsp;</Typography>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ textAlign: "left", fontWeight: "bold" }}
                >
                  Feature & Amenities
                </Typography>

                <Stack
                  direction="row"
                  spacing={2}
                  useFlexGap
                  flexWrap="wrap"
                  sx={{ fontWeight: "bold" }}
                >
                  {product.amenities &&
                    product.amenities.map((item) => (
                      <Item>
                        {" "}
                        <Typography
                          variant="body2"
                          gutterBottom
                          sx={{ fontWeight: "bold" }}
                        >
                          {item}
                        </Typography>
                      </Item>
                    ))}
                </Stack>
              </div>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Stack
              direction="row"
              spacing={2}
              useFlexGap
              flexWrap="wrap"
              sx={{ justifyContent: "center" }}
            >
              <Item className={styles.agent}>
                <img src={agentImage} />
              </Item>
              <Item sx={{ textAlign: "left" }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ textAlign: "left", fontWeight: "bold" }}
                >
                  Listing Agent
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Smith erne
                </Typography>
                <p>licensed associate</p>
                <p>sellanyhome.com</p>
                <p>p:88598444578</p>
              </Item>
            </Stack>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ textAlign: "left", fontWeight: "bold", marginLeft:3 }}
            >
              Location Map
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ textAlign: "left", fontWeight: "bold", marginLeft:3 }}
            >
              {product.address}
            </Typography>
          </Grid>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              sx={{ display: "flex", justifyContent: "left", marginLeft:6 }}
            >
              <OLMap />
            </Grid>

            <Grid
              item
              xs={5}
              sm={5}
              md={5}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  width: 400,
                  maxWidth: "100%",
                  margin: 1,
                  borderTop: 0.5,
                }}
              >
                <Stack
                  spacing={2}
                  sx={{ width: 380, marginTop: 5, marginLeft: 1 }}
                >
                  <Typography
                    variant="h6"
                    sx={{ textAlign: "left", fontWeight: "bold" }}
                  >
                    CONTACT TEAM(S)
                  </Typography>

                  <TextField fullWidth label="Name" id="fullWidth" />
                  <TextField fullWidth label="Email" id="fullWidth" />
                  <TextField fullWidth label="Phone" id="fullWidth" />
                  <TextField
                    fullWidth
                    label="i would like to gain more information about..."
                    id="fullWidth"
                    multiline
                    rows={4}
                  />
                </Stack>
                <Button variant="outlined" sx={{ marginTop: 2, marginLeft: 1 }}>
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    )
  );
};

export default ProductDetail;
