import React from "react";
import { useHistory } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import StyledButton from "../custom/StyledButton";
import NestedRightGrid from "../custom/NestedRightGrid";
import NestedLeftGrid from "../custom/NestedLeftGrid";
import Grid from "@mui/material/Grid";
import Sellstyle from "./WhoAreYouForm.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

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
              <FormControl fullWidth  sx={{borderRadius:'20px'}} >
                <InputLabel id="demo-simple-select-label"
                 sx={{ margin:'0px', fontSize:'small', fontWeight:'bold' , fontFamily:"unset", padding:'0% 5%'}}>
                  Property Type?
                </InputLabel>
                <Select
               sx={{borderRadius:'20px',fontSize:'small', fontWeight:'bold' , fontFamily:"unset",}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Bunglow"}>Bunglow</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Villa"}>Villa</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Number Of Bedrooms
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Bunglow"}>Bunglow</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Villa"}>Villa</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Number Of Bathrooms
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Bunglow"}>Bunglow</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Villa"}>Villa</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Property Size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Bunglow"}>Bunglow</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Villa"}>Villa</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Year Built
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Bunglow"}>Bunglow</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Villa"}>Villa</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Ask Price</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={"Bunglow"}>Bunglow</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Villa"}>Villa</MenuItem>
                </Select>
              </FormControl>
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
