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
import styles from './product.module.css';
import agentImage from '../../images/SAH_Images/agentProfile.png';
import Link from '@mui/material/Link';



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
      <Box sx={{ flexGrow: 1, marginTop: 15, }}>
        <Grid
        className={styles.ProductDetailContainer}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12} sm={12} md={12} >
            <Carousel>
              {product.images &&
                product.images.map((item) => (
                  <>
                    <Item key={item.id} sx={{ textAlign: "left",}} className={styles.ProperryTytle}>
                      <h4>{product.description}</h4>
                      <p>{product.address}</p>
                      <div style={{ display: 'flex',justifyContent: 'space-between'    }}>
                        <div>
                          {" "}
                          <p  style={{fontSize:'large'}}>
                            <b>{product.bed}</b>Bed | <b>{product.bath}</b>Bath
                            | <b>{product.sqFt}</b>  Sq. Ft
                          </p>
                        </div>
                        <div style={{fontSize:'large', fontWeight:'bold'}}>
                          
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
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'left',}} className={styles.gridStyling}>
            <Item>
              
              <h3>
            Description
            </h3>
            <p>
            This wonderfully designed property comes furnished with exquisite decor and furniture that compliments the natural travertine, energy, and mood of the house. It has a very balanced and brilliant color scheme that remains consistent throughout. 

Grand floor-to-ceiling windows allow light to flow naturally through the house creating a very zen and relaxing accommodation for its inhabitants. 
 </p><p>
 These windows also compliment the magnificent Downtown Dubai skyline with Burj khalifa visible from a number of rooms in the house. 
It also has two exceptionally large rooftop terraces, one furnished as a cozy lounge area and another left empty so the new occupier has the freedom to get creative with the potential of this space.
 </p>
              
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center'}} className={styles.agentBorder}>
          <Item className={styles.agent}><img src={agentImage}/></Item>
            <Item ><h5>Listing Agent</h5>
            <h6>Smith erne</h6>
            <p>licensed associate</p>
            <p>sellanyhome.com</p>
            <p>p:88598444578</p>
            </Item>

          </Grid>
         
          <Grid item xs={2} sm={4} md={6}>
            <Item>xs=2</Item>
            <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      <Link href="#">Link</Link>
      <Link href="#" color="inherit">
        {'color="inherit"'}
      </Link>
      <Link href="#" variant="body2">
        {'variant="body2"'}
      </Link>
    </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={6}>
            <Item>xs=2</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={12}>
            <Item>xs=2</Item>
          </Grid>
        </Grid>
      </Box>
    )
  );
};

export default ProductDetail;
