import React from "react";
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import StyledButton from "../custom/StyledButton";
import StyledFormControl from "../custom/StyledFormControl";
import StyledInputLabel from "../custom/StyledInputLabel";
import StyledSelect from "../custom/StyledSelect";
import NestedRightGrid from "../custom/NestedRightGrid";
import NestedLeftGrid from "../custom/NestedLeftGrid";
import Sellstyle from "./WhoAreYouForm.module.css";
import PropertyDetail from '../../master.json';
import TextField from '@mui/material/TextField';
import textStyle from './PropertyDetailForm.module.css';
import { Input } from "@mui/material";



const PropertyDetailForm = ({
  houseWorthInfo,
  propertyDetailInfo,
  handleTimelineChange,
}) => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/sell-landing/contact");
  };

  const [propertyType, setPropertyType] = React.useState("");
  const [numberOfBedrooms, setNumberOfBedrooms] = React.useState("");
  const [numberOfBathrooms, setNumberOfBathrooms] = React.useState("");
  const [propertySize, setPropertySize] = React.useState("");
  const [yearBuilt, setYearBuilt] = React.useState("");
  const [askPrice, setAskPrice] = React.useState("");

  const handleChangePropertyType = (event) => {
    setPropertyType(event.target.value);
  };

  const handleChangeNumberOfBedrooms = (event) => {
    setNumberOfBedrooms(event.target.value);
  };

  const handleChangeNumberOfBathrooms = (event) => {
    setNumberOfBathrooms(event.target.value);
  };

  const handleChangePropertySize = (event) => {
    setPropertySize(event.target.value);
  };

  const handleChangeYearBuilt = (event) => {
    setYearBuilt(event.target.value);
  };

  const handleChangeAskPrice = (event) => {
    setAskPrice(event.target.value);
  };

  return (
    <Grid container className={Sellstyle.formstyleform}>
      <NestedRightGrid
        title={"Is This The Correct Address? If Not Click Here?"}
        value={houseWorthInfo.address}
      />

      <NestedLeftGrid title={"Property Details"}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            columns={{ xs: 12, sm: 12, md: 6, lg: 8 }}
          >
            <Grid item xs={6} md={3}>
              <StyledFormControl fullWidth>
                <StyledInputLabel id="property-type-label">
                  Property Type
                </StyledInputLabel>

                <StyledSelect
                  labelId="property-type-label"
                  id="property-type"
                  value={propertyType}
                  label="Property Type"
                  onChange={handleChangePropertyType}
                >
                {PropertyDetail.propertyType.map((property) => (
                    <MenuItem key={property.id} value={property.name}>
                      {property.name}
                    </MenuItem>
                     ))}
                </StyledSelect>
              </StyledFormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <StyledFormControl fullWidth>
                <StyledInputLabel id="number-of-bedrooms-label">
                  Number Of Bedrooms
                </StyledInputLabel>
                <StyledSelect
                  labelId="number-of-bedrooms-label"
                  id="number-of-bedrooms"
                  value={numberOfBedrooms}
                  label="Number Of Bedrooms"
                  onChange={handleChangeNumberOfBedrooms}
                >
                 {PropertyDetail.beds.map((bed) => (
                    <MenuItem key={bed.id} value={bed.name}>
                      {bed.name}
                    </MenuItem>
                     ))}
                </StyledSelect>
              </StyledFormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <StyledFormControl fullWidth>
                <StyledInputLabel id="number-of-bathrooms-label">
                  Number Of Bathrooms
                </StyledInputLabel>
                <StyledSelect
                  labelId="number-of-bathrooms-label"
                  id="number-of-bathrooms"
                  value={numberOfBathrooms}
                  label="Number Of Bathrooms"
                  onChange={handleChangeNumberOfBathrooms}
                >
                  {PropertyDetail.baths.map((bath) => (
                    <MenuItem key={bath.id} value={bath.name} >
                      {bath.name}
                    </MenuItem>
                  ))}
                </StyledSelect>
              </StyledFormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <StyledFormControl fullWidth>
                <TextField id="outlined-basic" label=" Property Size"  className={textStyle.inputStyle} />
              </StyledFormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <StyledFormControl fullWidth>
                 <TextField id="outlined-basic" label="Year Built" variant="outlined" className={textStyle.inputStyle} />
               
              </StyledFormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <StyledFormControl fullWidth>
                <TextField id="outlined-basic" label="Ask Price" variant="outlined" className={textStyle.inputStyle} />
              </StyledFormControl>
            </Grid>
          </Grid>

          <StyledButton type="submit" variant="outlined">
            Submit
          </StyledButton>
        </form>
      </NestedLeftGrid>
    </Grid>
  );
};

export default PropertyDetailForm;
