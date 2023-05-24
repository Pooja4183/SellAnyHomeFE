import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/productAction";
import ListProducts from "../product/ListProducts";
import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  SelectChangeEvent,
  InputLabel,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import StyledButton from "../custom/StyledButton";
import { alignProperty } from "@mui/material/styles/cssUtils";

const BuyList = ({ title }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(title));
  }, [dispatch]);

  const [homeType, setHomeType] = React.useState("");
  const [minPrice, setMinPrice] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");

  const handleHomeTypeChange = (event) => {
    setHomeType(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  return (
    <Box  sx={{
     marginTop: '1.5%',
     marginLeft: '0.8%',
     marginRight: '0.2%',
     alignItems: "baseline",
      
      // backgroundColor: "primary.dark",
      // "&:hover": {
      //   backgroundColor: "primary.main",
      //   opacity: [0.9, 0.8, 0.7],
      // },
    
    }}>
      <form>
        <Grid
          container
          spacing={2}
          sx={{
            height: '20%',
             border: '1px solid grey',
            // backgroundColor: "primary.dark",
            // "&:hover": {
            //   backgroundColor: "primary.main",
            //   opacity: [0.9, 0.8, 0.7],
            // },
            justifyContent: "center"
          }}
        >
          <Grid item xs={4}>
            <TextField
              id="outlined-basic"
              label="Address, Neighborhood"
              variant="outlined"
              sx={{  width: '100%' }}
              value={title}
            />
          </Grid>
          <Grid item xs={2} md={2} lg={2}>
            <FormControl>
              <InputLabel id="demo-simple-select-label" sx={{width:'500px'}}>Home Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={homeType}
                label="Age"
                onChange={handleHomeTypeChange}
                sx={{  width: '500%' }}
                
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl>
              <InputLabel id="demo-simple-select-label">
                No Min Price
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={homeType}
                label="Age"
                onChange={handleMinPriceChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl>
              <InputLabel id="demo-simple-select-label">
                No Max Price
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={homeType}
                label="Age"
                onChange={handleMaxPriceChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <Button type="submit" variant="outlined">
              Update Search
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Residential House For Sale
      </Typography>

      <ListProducts searchString={title}/>
    </Box>
  );
};

export default BuyList;
