import Item from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/productAction";
import StyledInputLabel from "../custom/StyledInputLabel";
import ListProducts from "../product/ListProducts";
import styles from "./BuyProduct.module.css";

import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
 // useMediaQuery,
} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PropertyDetail from "../../master.json";
import AutocompleteTextField from "../custom/AutoCompleteTextField";
import ExclusiveProducts from "../product/ExclusiveProducts";

const BuyList = () => {
  /* Routing */
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [searchString, setSearchString] = useState(queryParams.get("search"));
  /* Pagination */
  const [page, setPage] = React.useState(0);
  const count = useSelector((state) => state.products.totalRecords) || 0;
  const [rowsPerPage, setRowsPerPage] = React.useState(9);
  //const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  // Conditionally set rowsPerPageOptions based on device type

  const products = useSelector((state) => state.products.products);

  /* Form Submission */

  const [formData, setFormData] = useState({
    // Initialize form data with default values
    search: searchString,
    address: searchString,
    homeType: "",
    minPrice: "",
    maxPrice: "",
    page: page,
    sort: "Recommended",
    size: rowsPerPage,
  });

  const [isSubmitted, setSubmitted] = React.useState(false);

  /* Data Fetch */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(formData));
    setSubmitted(false);
  }, [dispatch, formData, isSubmitted]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleAutoChange = (event, value) => {
    setFormData({
      ...formData,
      search: value,
      address: value,
    });
  };
  /* Form Submision */
  const handleSubmit = async (event) => {
    event.preventDefault();
    formData.search = formData.address;
    console.debug("FormData submitted::", formData);
    setSubmitted(true);
  };

  const handleChangePage = (event, newPage) => {
    setFormData({
      ...formData,
      page: newPage + 1,
    });
    setPage(newPage);
    setSubmitted(true);
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = +event.target.value;

    const newPage = 0; //Math.floor((rowsPerPage * page) / newRowsPerPage);
    console.debug("Event triggered::", newRowsPerPage, "Page", newPage);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    setFormData({
      ...formData,
      size: newRowsPerPage,
      page: newPage,
    });
    console.debug("Updated forms ::", formData);
    setSubmitted(true);
  };

  function defaultGetAriaLabel(type) {
    return `Go to ${type} page`;
  }

  const labelDisplayedRows = ({ from, to, count }) => {
    return `${from}-${to} of ${count} Homes`;
  };

  const handleSortByChange = (event) => {
    handleChange(event);
    setSubmitted(true);
  };

  return (
    <Box
      sx={{
        marginTop: "110px",
        marginBottom: "0%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          pb={1}
          
          sx={{
            borderBottom: "0.5px solid #decebd",
            borderTop: "0.5px solid #decebd",
            pl: "9.8%",
            pr: "10%",
          }}
         
        >
          <Grid item xs={12} md={4} lg={4} pb={1}>
            <AutocompleteTextField
              id="address"
              label="Search by places, address, building and agents"
              onChange={handleAutoChange}
              nameProp="address"
              options={PropertyDetail.locations}
              value={formData.address}
              key="autoCompleteSearchString"
              setSearchString={setSearchString}
              widthValue='100%'
            />
          </Grid>

          <Grid item xs={6}  md={2} lg={2} pb={1} >
            <FormControl fullWidth>
              <StyledInputLabel
                id="demo-simple-select-label"
              >
                Home Type
              </StyledInputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.homeType}
                label="HomeType"
                onChange={handleChange}
                autoWidth
                name="homeType"
                size="small"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {PropertyDetail.propertyType.map((property) => (
                  <MenuItem key={property._id} value={property.name}>
                    {property.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}  md={2} lg={2}>
            <FormControl fullWidth>
              <StyledInputLabel id="demo-simple-select-label">
                Min Price (AED)
              </StyledInputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.minPrice}
                label="MinPrice"
                onChange={handleChange}
                name="minPrice"
                size="small"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {PropertyDetail.minPrice.map((property) => (
                  <MenuItem key={property._id} value={property.name}>
                    {parseInt(property.name).toLocaleString()}{" "}
                    {/* Convert price to number and format it as currency */}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}  md={2} lg={2}>
            <FormControl fullWidth>
              <StyledInputLabel id="demo-simple-select-label">
                Max Price (AED)
              </StyledInputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.maxPrice}
                label="Age"
                onChange={handleChange}
                name="maxPrice"
                size="small"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {PropertyDetail.maxPrice.map((property) => (
                  <MenuItem key={property._id} value={property.name}>
                    {parseInt(property.name).toLocaleString()}{" "}
                    {/* Convert price to number and format it as currency */}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}  md={2} lg={2}>
            <Button
              type="submit"
              variant="outlined"
              fullWidth
              sx={{
                '@media (max-width: 600px)': {
                  '&.MuiButton-root': {
                    // Apply size="small" for screens with a max-width of 600px (adjust this value as needed)
                    fontSize: '0.75rem', // You might need to adjust this based on your design
                    padding: '8px 16px', // You might need to adjust this based on your design
                  },
                },
              }}
            >
             Update Search
            </Button>
          </Grid>
        </Grid>
        {products && products.length > 0 && (
        <Box sx={{ flexGrow: 1, padding: "2% 2%" }}>
          <Item sx={{ textAlign: "center" }}>
            {" "}
            <Typography variant="h2">{formData.search}</Typography>
          </Item>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            justifyContent={"space-between"}
            sx={{ padding: "0% 8.4%" }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Typography variant="subtitle1" sx={{ textAlign: "left" }}>
                Residential House For Sale
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              sm={4}
              md={3}
              sx={{ alignSelf: "flex-end", textAlign: "right" }}
            >
              Sort By
              <Select
                labelId="sortby_select_label"
                id="sortby"
                value={formData.sort}
                label="sortBy"
                onChange={handleSortByChange}
                autoWidth
                defaultValue={"Recommended"}
                name="sort"
                size="small"
                sx={{ marginLeft: "10px" }}
              >
                {PropertyDetail.sortBy.map((property) => (
                  <MenuItem key={property._id} value={property.name}>
                    {property.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Box>
        )}
      </form>
      {products && products.length > 0 && (
        <>
          <Grid container>
            <Grid item xs={12} sx={{ padding: "0% 10%" }}>
              <ListProducts />
            </Grid>
          </Grid>
          <Grid
            container
            mt={5}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid item>
              <TablePagination
                component="div"
                count={count}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                getItemAriaLabel={defaultGetAriaLabel}
                labelDisplayedRows={labelDisplayedRows}
                labelRowsPerPage="Pages"
                rowsPerPageOptions={[9, 27, 99]}
                name="page"
              />
            </Grid>
          </Grid>
        </>
      )}
      {products && products.length <= 0 && (
        <Grid container justifyContent={"center"} alignItems={"center"} mt={1}>
            <Grid item xs={12} md={12} lg={12} mt={10} mb={5} textAlign={"center"}>
            <Typography  variant="h2">  {searchString}</Typography>
            </Grid>
          <Grid item xs={12} md={12} lg={12} mt={1} mb={10} textAlign={"center"}>
         
              <Typography>  No matching result</Typography>
              <Typography>  Try changing your Search...</Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <ExclusiveProducts title="Other Similar Properties"/>
          
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default BuyList;
