import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
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
import ContactForm from "../buy/ContactForm";
import Currency from "../custom/Currency";
import Phone from "../custom/Phone";
import Email from "../custom/Email";
import WhatsApp from "../custom/WhatsApp";
import { Avatar, useMediaQuery } from "@mui/material";
import placeholderImg from "../../images/news.jpg";
import { useTheme } from "@emotion/react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "2% 2% 5% 5%",
  color: "black",
  boxShadow: "none",
}));

const ProductDetail = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { id } = useParams();
  const product = useSelector((state) => state.products.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsById(id));
    console.log("Product::", product);
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  if (!product) {
    return null;
  }

  return (
    product && (
      <Box sx={{ paddingTop: ["35%", "6.5%"], marginBottom: 5 }}>
        <Grid
          sx={{ borderTop: "2px solid lightgray" }}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Item sx={{ padding: isMobile ? "0% 5% 1% 5%" : "0% 10% 1% 10%" }}>
              <Typography
                variant="h1"
                sx={{ fontSize: isMobile ? 24 : 30, pb: isMobile ? 2 : 2 }}
              >
                {product.title}
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: isMobile ? "1%" : "0.5%",
                }}
              >
                <p>
                  {product.homeType} | {product.address}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: isMobile ? "1%" : "0%",
                }}
              >
                <div>
                  <p style={{ fontSize: "medium" }}>
                    {product.homeType !== "Plot" && (
                      <span>
                        <b>{product.bed}</b> {product.bed > 1 ? "Beds" : "Bed"}{" "}
                        | <b>{product.bath}</b>
                        &nbsp; {product.bath > 1 ? "Baths" : "Bath"} |
                      </span>
                    )}
                    <b>
                      {" "}
                      <Currency value={product.sqFt} hideSymbol />
                    </b>{" "}
                    Sq.Ft
                  </p>
                </div>
                <div className={styles.propertyDetail}>
                  {product.priceOnApplication ? (
                    "Price On Application"
                  ) : (
                    <Currency value={product.price} />
                  )}
                </div>
              </div>
            </Item>
            <Carousel autoPlay={false}>
              {product.images &&
                product.images.map((item) => (
                  <>
                    <img
                      src={item}
                      className={styles.carouselStyle}
                      alt="property img"
                    />
                  </>
                ))}
            </Carousel>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ padding: isMobile ? "5% 5% 0% 5%" : "5% 10% 0% 10%"}}
        >
          <Grid item xs={12} sm={12} md={7}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "black",
                pt: 0,
                fontSize: "large",
              }}
            >
              Description
            </Typography>
            <Typography
              variant="div"
              sx={{ lineHeight: 1.6, letterSpacing: 1, color: "black" }}
            >
              {product.description &&
                product.description.split("<br/>").map((paragraph, index) => (
                  <Typography
                    variant="body1"
                    pb={2}
                    textAlign="justify"
                    key={index}
                  >
                    {paragraph}
                  </Typography>
                ))}
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "black",
                paddingTop: 10,
                fontSize: "large",
              }}
            >
              Feature & Amenities
            </Typography>

            <Grid container spacing={2}>
              {product.amenities &&
                product.amenities.map((item, index) => (
                  <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{
                        color: "black",
                        backgroundColor: "rgba(128, 128, 128, 0.25)",
                        p: "5%",
                      }}
                    >
                      {item}
                    </Typography>
                  </Grid>
                ))}
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              sx={{
                display: "flex",
                justifyContent: "left",
                paddingTop: 10,
              }}
            >
              <Stack
                direction="column"
                spacing={2}
                useFlexGap
                flexWrap="wrap"
                sx={{ justifyContent: "center" }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    textAlign: "left",
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "large",
                  }}
                >
                  Location Map
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ textAlign: "left", color: "black", mb: 2 }}
                >
                  {product.address}
                </Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              sx={{
                display: "flex",
                justifyContent: "left",
                minWidth: "200px",
              }}
              mb={2}
            >
              <OLMap address={product.address} location={product.location} />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={5}>
            <Grid container justifyContent={"right"} className={styles.responsiveTeam}>
              <Grid item sx={{ justifyContent: "left" }} xs={12}></Grid>
              <Grid item xs={12}>
                <Stack
                  direction={"row-reverse"}
                  sx={{ justifyContent: isMobile ? "center" : "right"}}
                  className={styles.agentMob}
                >
                  <Item>
                    <Typography
                      variant="h3"
                      sx={{ fontWeight: "bold", textAlign: "left" }}
                    >
                      Listing Agent
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      {product.agent ? product.agent.name : "Smith Arene"}
                    </Typography>
                    <p>licensed associate</p>
                    <p>
                      <Email objectWithEmail={product.agent} />
                    </p>
                    <p>
                      <Phone objectWithPhone={product.agent} />
                    </p>
                    <p>
                      <WhatsApp objectWithPhone={product.agent} />{" "}
                    </p>
                  </Item>
                  <Avatar
                    alt="Agent"
                    src={product.agent ? product.agent.img : agentImage}
                    sx={{ width: [115, 70, 120], height: [115, 70, 120] ,mt:4}}
                  />
                </Stack>
              </Grid>
              <Grid item >
                <ContactForm />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    )
  );
};

export default ProductDetail;
