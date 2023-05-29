import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/productAction";
import ListProducts from "../product/ListProducts";
import styles from "./BuyProduct.module.css";
import StyledInputLabel from "../custom/StyledInputLabel";

import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputLabel,
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
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

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
    size: 6,
  });

  const [isSubmitted, setSubmitted] = React.useState(false);

  /* Data Fetch */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(formData));
    setSubmitted(false);
  }, [dispatch, isSubmitted]);

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
    setRowsPerPage(parseInt(event.target.value, 10));
    setFormData({
      ...formData,
      size: rowsPerPage,
    });
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
        marginTop: "5%",
        marginBottom: "5%",
      }}
    >
      <form onSubmit={handleSubmit} >
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
            <FormControl fullWidth>
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
                className={styles.filterinput}
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
            <FormControl fullWidth>
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
            <Button type="submit" variant="outlined">
              Update Search
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ flexGrow: 1, padding:"2% 5%" }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            
            <Grid item xs={2} sm={4} md={3} sx={{ alignSelf: "flex-end"}}>
              <TablePagination
                component="div"
                count={count}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                getItemAriaLabel={defaultGetAriaLabel}
                labelDisplayedRows={labelDisplayedRows}
                labelRowsPerPage=""
                rowsPerPageOptions={[]}
                name="page"
              />
            </Grid>

            <Grid item xs={2} sm={4} md={6} >
              <Typography variant="h2" sx={{ textAlign: "center" }}>
                {formData.search}
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                Residential House For Sale
              </Typography>
            </Grid>
            <Grid item xs={2} sm={4} md={3} sx={{ alignSelf: "flex-end" }}>
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
      <Grid item xs={12} sx={{ padding: "0% 7%" }}>
        <ListProducts />
      </Grid>
    </Box>
  );
};

export default BuyList;
