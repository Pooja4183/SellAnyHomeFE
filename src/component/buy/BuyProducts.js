import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/productAction";
import ListProducts from "../product/ListProducts";
import styles from "./BuyProduct.module.css";
import StyledInputLabel from "../custom/StyledInputLabel";
import Item from "@mui/material/Grid";
import { useMediaQuery } from "@mui/material";

import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import TablePagination from "@mui/material/TablePagination";
import { useLocation } from "react-router-dom";
import PropertyDetail from "../../master.json";
import { useSelector } from "react-redux";

const BuyList = () => {
  /* Routing */
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  /* Pagination */
  const [page, setPage] = React.useState(0);
  const count = useSelector((state) => state.products.totalRecords) || 0;
  const [rowsPerPage, setRowsPerPage] = React.useState(9);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  // Conditionally set rowsPerPageOptions based on device type
  const rowsPerPageOptions = isMobile ? [] : [9, 27, 99];
  /* Form Submission */

  const [formData, setFormData] = useState({
    // Initialize form data with default values
    search: queryParams.get("search"),
    address: queryParams.get("search"),
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
    // if(isSubmitted){
    console.log("Size::", formData.size, "Page", formData.page);
    dispatch(fetchProducts(formData));
    setSubmitted(false);
    //}
  }, [dispatch, formData, isSubmitted]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  /* Form Submision */
  const handleSubmit = async (event) => {
    event.preventDefault();
    formData.search = formData.address;
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
    console.log("Event triggered::", newRowsPerPage, "Page", newPage);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    setFormData({
      ...formData,
      size: newRowsPerPage,
      page: newPage,
    });
    console.log("Updated forms ::", formData);
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
          sx={{
            padding: "1% 10%",
            borderBottom: "0.5px solid #decebd",
            justifyContent: "center",
            borderTop: "0.5px solid #decebd",
          }}
        >
          <Grid item xs={4} className={styles.filterStyle}>
            <TextField
              id="address"
              label="Address, Neighborhood"
              variant="outlined"
              sx={{ width: "100%" }}
              value={formData.address}
              onChange={handleChange}
              name="address"
              className={styles.filterinput}
              size="small"
            />
          </Grid>
          <Grid item xs={2} className={styles.filterStyle}>
            <FormControl fullWidth className={styles.formstyle}>
              <StyledInputLabel
                id="demo-simple-select-label"
                sx={{ width: "500px" }}
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
                  <MenuItem key={property.id} value={property.name}>
                    {property.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2} className={styles.filterStyle}>
            <FormControl fullWidth className={styles.formstyle}>
              <StyledInputLabel id="demo-simple-select-label">
                No Min Price
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
                  <MenuItem key={property.id} value={property.name}>
                    {property.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2} className={styles.filterStyle}>
            <FormControl fullWidth className={styles.formstyle}>
              <StyledInputLabel id="demo-simple-select-label">
                No Max Price
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
                  <MenuItem key={property.id} value={property.name}>
                    {property.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2} className={styles.filterStyle}>
            <Button
              type="submit"
              variant="outlined"
              className={styles.formstyle}
            >
              Update Search
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ flexGrow: 1, padding: "2% 2%" }}>
          <Item sx={{ textAlign: "center" }}>
            {" "}
            <h2>{formData.search}</h2>
          </Item>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            justifyContent={"space-between"}
            sx={{ padding: "0% 5%" }}
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
                  <MenuItem key={property.id} value={property.name}>
                    {property.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Box>
      </form>
      <Grid container>
        <Grid item xs={12} sx={{ padding: "0% 7%" }}>
          <ListProducts />
        </Grid>
      </Grid>
      <Grid container mt={5} sx={{ justifyContent: "center", alignItems: "center"}}>
        <Grid
          item
        >
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
    
    </Box>
  );
};

export default BuyList;
