import React from "react";
import { useHistory } from "react-router-dom";
import StyledFormControl from "../custom/StyledFormControl";
import StyledButton from "../custom/StyledButton";
import NestedRightGrid from "../custom/NestedRightGrid";
import NestedLeftGrid from "../custom/NestedLeftGrid";
import Grid from "@mui/material/Grid";
import Sellstyle from "./WhoAreYouForm.module.css";
import StyledInputLabel from "../custom/StyledInputLabel";
import MenuItem from "@mui/material/MenuItem";
import StyledSelect from "../custom/StyledSelect";


const PropertyDetailForm = ({
  houseWorthInfo,
  propertyDetailInfo,
  handleTimelineChange,
}) => {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/sell/contact");
  }
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
            columns={{ xs: 12,sm: 12, md: 6, lg:8}}
          >
            <Grid item xs={6} md={3}>
              <StyledFormControl fullWidth >
                <StyledInputLabel id="demo-simple-select-label">
                  Property Type?
                </StyledInputLabel>
                <StyledSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Bunglow"}>Bunglow</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Villa"}>Villa</MenuItem>
                </StyledSelect>
              </StyledFormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <StyledFormControl fullWidth>
                <StyledInputLabel id="demo-simple-select-label">
                  Number Of Bedrooms
                </StyledInputLabel>
                <StyledSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Bunglow"}>Bunglow</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Villa"}>Villa</MenuItem>
                </StyledSelect>
              </StyledFormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <StyledFormControl fullWidth>
                <StyledInputLabel id="demo-simple-select-label">
                  Number Of Bathrooms
                </StyledInputLabel>
                <StyledSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Bunglow"}>Bunglow</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Villa"}>Villa</MenuItem>
                </StyledSelect>
              </StyledFormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <StyledFormControl fullWidth>
                <StyledInputLabel id="demo-simple-select-label">
                  Property Size
                </StyledInputLabel>
                <StyledSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Bunglow"}>Bunglow</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Villa"}>Villa</MenuItem>
                </StyledSelect>
              </StyledFormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <StyledFormControl fullWidth>
                <StyledInputLabel id="demo-simple-select-label">
                  Year Built
                </StyledInputLabel>
                <StyledSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Bunglow"}>Bunglow</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Villa"}>Villa</MenuItem>
                </StyledSelect>
              </StyledFormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <StyledFormControl fullWidth>
                <StyledInputLabel id="demo-simple-select-label">Ask Price</StyledInputLabel>
                <StyledSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Bunglow"}>Bunglow</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Villa"}>Villa</MenuItem>
                </StyledSelect>
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
