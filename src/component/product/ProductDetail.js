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

  if(!product) {
    return null;
  }

  return (
    product && (
      <Box sx={{ flexGrow: 1, marginTop:15 }}>
        <Grid
          sx={{borderTop: '2px solid lightgray',}}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
         
        >
          <Grid item xs={12} sm={12} md={12}>
            <Item sx={{ textAlign: "left" ,paddingTop:0 }} className={styles.ProperryTytle}>
              <h2>{product.title}</h2>
              <p>{product.address}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {" "}
                  <p style={{ fontSize: "medium" }}>
                    <b>{product.bed}</b>&nbsp;Bed | <b>{product.bath}</b>
                    &nbsp;Bath | <b>{product.sqFt}</b> Sq. Ft
                  </p>
                </div>
                <div style={{ fontSize: "medium", fontWeight: "bold" ,color:'black'}}>
                   <Currency value={product.price}/>
                </div>
              </div>
            </Item>
            <Carousel autoPlay={false}>
              {product.images &&
                product.images.map((item) => (
                  <>
                    <img src={item} className={styles.carouselStyle} alt="property img"/>
                  </>
                ))}
            </Carousel>
          </Grid>
        </Grid>
        <Grid
          className={styles.agentContainer}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, }}
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
                  variant="h3"
                  gutterBottom
                  sx={{ textAlign: "left", fontWeight: "bold", color:'black' }}
                >
                  Description
                </Typography>
                <Typography variant="body2" sx={{ lineHeight:2, color:'#383838'}}>{product.description}</Typography>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{ textAlign: "left", fontWeight: "bold" ,color:'black', paddingTop:10}}
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
                      <Item sx={{ padding:0}}>
                        {" "}
                        <Typography
                          variant="body2"
                          gutterBottom
                          sx={{ fontWeight: "bold",color:'#505050' }}
                        >
                          {item}
                        </Typography>
                      </Item>
                    ))}
                </Stack>
                <Grid item 
              xs={12}
              sm={12}
              md={12}
              sx={{ display: "flex", justifyContent: "left", paddingTop:10}}>
                 <Stack
              direction="column"
              spacing={2}
              useFlexGap
              flexWrap="wrap"
              sx={{ justifyContent: "center" }}
            >
            <Typography
              variant="h4"
              sx={{ textAlign: "left", fontWeight: "bold", color:'black' }}
            >
              Location Map
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ textAlign: "left", color:'#383838' }}
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
              sx={{ display: "flex", justifyContent: "left" }}
            >
              <OLMap />
            </Grid>
              </div>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            
            sx={{ display: "flex", justifyContent: "center"}}
          >
            <Stack
              direction="row"
              spacing={2}
              useFlexGap
              flexWrap="wrap"
              sx={{ justifyContent: "center" ,paddingTop:6, height:700 }}
            >
             
              <Item className={styles.agent}>
                <img src={agentImage} alt="Agent"/>
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
                  sx={{ fontWeight: "bold", color:'black' }}
                >
                  Smith erne
                </Typography>
                <p>licensed associate</p>
                <p>sellanyhome.com</p>
                <p>p:88598444578</p>
              </Item>
          
              
            <Grid
            
              item
              xs={6}
              sm={6}
              md={6}
              sx={{ display: "flex", justifyContent: "center", width:'100%' }}
            >
             <ContactForm/>
            </Grid>
            </Stack>
          </Grid>
         
         
        </Grid>
      </Box>
    )
  );
};

export default ProductDetail;
