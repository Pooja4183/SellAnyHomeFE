import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductsById } from "../../store/productAction";
import styles from "./product.module.css";
import agentImage from "../../images/SAH_Images/agentProfile.png";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { borderTop } from "@mui/system";

const preventDefault = (event) => event.preventDefault();
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

const items = [
  { id: 1, title: "Item 1", description: "Description for Item 1" },
  { id: 2, title: "Item 2", description: "Description for Item 2" },
  { id: 3, title: "Item 3", description: "Description for Item 3" },
];

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
            <Carousel>
              {product.images &&
                product.images.map((item) => (
                  <>
                    <Item
                      key={item.id}
                      sx={{ textAlign: "left" }}
                      className={styles.ProperryTytle}
                    >
                      <h4>{product.description}</h4>
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
                            <b>{product.bed}</b>Bed | <b>{product.bath}</b>Bath
                            | <b>{product.sqFt}</b> Sq. Ft
                          </p>
                        </div>
                        <div style={{ fontSize: "large", fontWeight: "bold" }}>
                          <p>AED {product.price}</p>
                        </div>
                      </div>
                    </Item>
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
                <p>
                  This wonderfully designed property comes furnished with
                  exquisite decor and furniture that compliments the natural
                  travertine, energy, and mood of the house. It has a very
                  balanced and brilliant color scheme that remains consistent
                  throughout. Grand floor-to-ceiling windows allow light to flow
                  naturally through the house creating a very zen and relaxing
                  accommodation for its inhabitants.
                </p>
                <p>
                  These windows also compliment the magnificent Downtown Dubai
                  skyline with Burj khalifa visible from a number of rooms in
                  the house. It also has two exceptionally large rooftop
                  terraces, one furnished as a cozy lounge area and another left
                  empty so the new occupier has the freedom to get creative with
                  the potential of this space.
                </p>

                <Typography
                  variant="subtitle1"
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
                  <Item>
                    {" "}
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{ fontWeight: "bold" }}
                    >
                      Covered Parking
                    </Typography>
                  </Item>
                  <Item>
                    {" "}
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{ fontWeight: "bold" }}
                    >
                      Loungeterrace
                    </Typography>
                  </Item>
                  <Item>
                    {" "}
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{ fontWeight: "bold" }}
                    >
                      Finished Basement
                    </Typography>
                  </Item>
                  <Item>
                    {" "}
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{ fontWeight: "bold" }}
                    >
                      Finished Basement
                    </Typography>
                  </Item>
                  <Item>
                    {" "}
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{ fontWeight: "bold" }}
                    >
                      Finished Basement
                    </Typography>
                  </Item>
                  <Item>
                    {" "}
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{ fontWeight: "bold" }}
                    >
                      Finished Basement
                    </Typography>
                  </Item>
                  <Item>
                    {" "}
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{ fontWeight: "bold" }}
                    >
                      Finished Basement
                    </Typography>
                  </Item>
                  <Item>
                    {" "}
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{ fontWeight: "bold" }}
                    >
                      Finished Basement
                    </Typography>
                  </Item>
                  <Item>
                    {" "}
                    <Typography
                      variant="body2"
                      gutterBottom
                      sx={{ fontWeight: "bold" }}
                    >
                      Finished Basement
                    </Typography>
                  </Item>
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
            <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" sx={{justifyContent:'center'}}>
              <Item className={styles.agent}>
                <img src={agentImage} />
              </Item>
              <Item sx={{textAlign:'left'}}>
                
              <Typography
                  variant="subtitle1"
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
              <Stack>
                  
       <Box
      sx={{
        width: 400,
        maxWidth: '100%', 
        margin:1,
        borderTop:0.5
      }}
    >
     <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ textAlign: "left", fontWeight: "bold" }}
                >
                  CONTACT TEAM(S)
                </Typography>
      <TextField fullWidth label="Name" id="fullWidth" />
      <TextField fullWidth label="Email" id="fullWidth" />
      <TextField fullWidth label="Phone" id="fullWidth" />
      <TextField fullWidth label="i would like to more information about 265 Puntam Avenue" id="fullWidth" />
      <Button variant="outlined">Outlined</Button>
    </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    )
  );
};

export default ProductDetail;
