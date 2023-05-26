import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/productAction";
import ListProducts from "../product/ListProducts";
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
  const count= useSelector((state) => state.products.totalRecords);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);
  const pageNumber = useSelector((state) => state.products.page)
  const productListing11 = useSelector((state) => state.products.products);

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
    size: 6
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
      page: newPage+1,
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
              id="address"
              label="Address, Neighborhood"
              variant="outlined"
              sx={{ width: "100%" }}
              value={formData.address}
              onChange={handleChange}
              name="address"
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth="true">
              <InputLabel id="demo-simple-select-label" sx={{ width: "500px" }}>
                Home Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.homeType}
                label="HomeType"
                onChange={handleChange}
                autoWidth="true"
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
          <Grid item xs={2}>
            <FormControl fullWidth="true">
              <InputLabel id="demo-simple-select-label">
                No Min Price
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.minPrice}
                label="MinPrice"
                onChange={handleChange}
                name="minPrice"
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
          <Grid item xs={2}>
            <FormControl fullWidth="true">
              <InputLabel id="demo-simple-select-label">
                No Max Price
              </InputLabel>
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
          <Grid item xs={2}>
            <Button type="submit" variant="outlined">
              Update Search
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            padding: 2,
            justifyContent: "center",
          }}
        >
          <Grid item xs={2} sx={{ alignSelf: "flex-end" }}>
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

          <Grid item xs={8}>
            <Typography variant="h2" sx={{ textAlign: "center" }}>
              {formData.search}
            </Typography>
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Residential House For Sale
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ alignSelf: "flex-end" }}>
            Sort By
            <Select
              labelId="sortby_select_label"
              id="sortby"
              value={formData.sort}
              label="sortBy"
              onChange={handleSortByChange}
              autoWidth="true"
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
      </form>
      <ListProducts />
    </Box>
  );
};

export default BuyList;
