import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
  FormGroup,
  Paper,
  Stack,
} from "@mui/material";
import PropertyMaster from "../../master.json";
import { experimentalStyled as styled } from "@mui/material/styles";
import { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PropertyForm = ({ selectedProperty }) => {
  const [formData, setFormData] = useState({
    id: "",
    homeType: "",
    isBuy: false,
    bed: "",
    bath: "",
    price: "",
    currency: "",
    sqFt: "",
    address: "",
    city: "",
    state: "",
    title: "",
    description: "",
    images: [],
    img1: "",
    img2: "",
    yearBuilt: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    sellerType: "",
    isListed: "",
    sellDuration: "",
    amenities: [],
    status: "",
  });

  useEffect(() => {
    if (selectedProperty) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...selectedProperty,
      }));
    }
  }, [selectedProperty]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form logic here
    console.log(formData);
  };

  const handleCheckboxChange = (value) => (e) => {
    handleChange({
      target: { name: "amenities", value, checked: e.target.checked },
    });
  };

  console.log("Property Master::", PropertyMaster.propertyType);

  return (
    <>
      <Typography variant="h4" mt={-3} mb={-5} ml={1}>
        Property
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} spacing={6}>
            <Stack spacing={3}>
              <TextField
                label="ID"
                name="ID"
                value={formData.id}
                onChange={handleChange}
                fullWidth
                disabled
              />
              <TextField
                label="Property Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                fullWidth
                multiline
                required
                rows={4}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Item>
              <img
                src={formData.img1}
                alt=""
                loading="lazy"
                width="100%"
                height="166"
              />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Property Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Property Full Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              multiline
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>How Many Beds</InputLabel>
              <Select
                name="bath"
                value={formData.bed}
                onChange={handleChange}
                required
                size="small"
              >
                {PropertyMaster.beds.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>How Many Baths</InputLabel>
              <Select
                name="bath"
                value={formData.bath}
                onChange={handleChange}
                required
                size="small"
              >
                {PropertyMaster.baths.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Property Size"
              name="sqFt"
              type="number"
              value={formData.sqFt}
              onChange={handleChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Property Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Home Type</InputLabel>
              <Select
                name="homeType"
                value={formData.homeType}
                onChange={handleChange}
                required
                size="small"
              >
                {PropertyMaster.propertyType.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Year Built"
              name="yearBuilt"
              type="number"
              value={formData.yearBuilt}
              onChange={handleChange}
              fullWidth
              inputProps={{
                min: 2000,
              }}
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Contact Name"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Contact Email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Contact Phone"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Seller Type"
              name="sellerType"
              value={formData.sellerType}
              onChange={handleChange}
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Is Listed</InputLabel>
              <Select
                name="isListed"
                value={formData.isListed}
                onChange={handleChange}
                required
                size="small"
              >
                {PropertyMaster.isListed.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Availability Duration</InputLabel>
              <Select
                name="sellDuration"
                value={formData.sellDuration}
                onChange={handleChange}
                required
                size="small"
              >
                {PropertyMaster.duration.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{border: 1, borderColor:"grey", padding: 1, margin: 2}}>
            <InputLabel>Amenities</InputLabel>
            <FormControl component="fieldset">
              <FormGroup>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {PropertyMaster.amenities.map((option) => (
                    <Grid item xs={2} sm={4} md={4} key={option}>
                      <FormControlLabel
                        key={option}
                        control={
                          <Checkbox
                            name="amenities"
                            value={option}
                            checked={formData.amenities.includes(option)}
                            onChange={handleCheckboxChange(option)}
                          />
                        }
                        label={option}
                      />
                    </Grid>
                  ))}
                </Grid>
              </FormGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default PropertyForm;
