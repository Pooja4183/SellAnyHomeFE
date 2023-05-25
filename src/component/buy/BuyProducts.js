import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/productAction";
import ListProducts from "../product/ListProducts";
import { styled } from "@mui/material/styles";
import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputLabel,
  Button,
  Paper,
} from "@mui/material";
import { Box, borderColor } from "@mui/system";
import TablePagination from "@mui/material/TablePagination";
import { useLocation } from "react-router-dom";

const BuyList = () => {

  /* Routing */
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [paramValue, setParamValue] = React.useState(queryParams.get("search"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(paramValue));
  }, [dispatch]);

  /* Pagination */
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  /* Sorting */
  const [sortBy, setSortBy] = React.useState("Recommended");

  /* Filtering */
  const [address, setAddress] = React.useState(paramValue);
  const [homeType, setHomeType] = React.useState("");
  const [minPrice, setMinPrice] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function defaultGetAriaLabel(type) {
    return `Go to ${type} page`;
  }

  const labelDisplayedRows = ({ from, to, count }) => {
    return `${from}-${to} of ${count} Homes`;
  };

  const handleSearchChange = (event) => {
   // setParamValue(event.target.value);
    
  }
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    
  }
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleHomeTypeChange = (event) => {
    setHomeType(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted with ", address, homeType, minPrice, maxPrice);
  };

  

  return (
    <Box
      sx={{
        marginTop: "4.5%",
        marginLeft: "0.8%",
        marginRight: "0.2%",
        alignItems: "baseline",

      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          sx={{
            height: "20%",
            padding: 1,
            borderBottom: "1px solid #decebd",
            justifyContent: "center",
          }}
        >
          <Grid item xs={4}>
            <TextField
              id="txtaddress"
              label="Address, Neighborhood"
              variant="outlined"
              sx={{ width: "100%" }}
              value={address}
              onChange={handleAddressChange}
              onKeyPress={handleSearchChange}
            />
          </Grid>
          <Grid item xs={2} md={2} lg={2}>
            <FormControl fullWidth="true">
              <InputLabel id="demo-simple-select-label" sx={{ width: "500px" }}>
                Home Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={homeType}
                label="Age"
                onChange={handleHomeTypeChange}
                autoWidth="true"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth="true">
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
            <FormControl fullWidth="true">
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

      <Grid container  sx={{
            padding: 2,
            justifyContent: "center",
          }}>
        <Grid item xs={2} sx={{ alignSelf: 'flex-end' }}>
          <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            getItemAriaLabel={defaultGetAriaLabel}
            labelDisplayedRows={labelDisplayedRows}
            labelRowsPerPage=""
            rowsPerPageOptions={[]}
          />
        </Grid>

        <Grid item xs={8}>
          <Typography variant="h2" sx={{textAlign:"center"}}>
            {paramValue}
          </Typography>
          <Typography variant="h6" sx={{textAlign:"center"}}>
            Residential House For Sale
          </Typography>
        </Grid>
        <Grid item xs={2}  sx={{ alignSelf: 'flex-end' }}>
           Sort By
            <Select
              labelId="sortby_select_label"
              id="sortby"
              value={sortBy}
              label="sortBy"
              onChange={handleSortByChange}
              autoWidth="true"
              defaultValue={"Recommended"}
            >
              <MenuItem value={"Recommended"}>Recommended</MenuItem>
              <MenuItem value={"Popular"}>Popular</MenuItem>
              <MenuItem value={"High to Low"}>High To Low</MenuItem>
              <MenuItem value={"Low to High"}>Low to High</MenuItem>
            </Select>
        </Grid>
      </Grid>
      <ListProducts />
    </Box>
  );
};

export default BuyList;
