import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import StyledButton from "../custom/StyledButton";
import NestedRightGrid from "../custom/NestedRightGrid";
import NestedLeftGrid from "../custom/NestedLeftGrid";
import listingStyle from "./WhoAreYouForm.module.css";
import { useHistory } from "react-router-dom";
import StyledFormControlLabel from "../custom/StyledFormControlLabel";
import Sellstyle from "./WhoAreYouForm.module.css";

const ListingPlatformForm = ({
  houseWorthInfo,
  whoAreYouInfo,
  listingPlatformInfo,
  handleListingPlatformChange,
}) => {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/sell-landing/timeline");
  }

  const isFormValid = listingPlatformInfo.isListed !== "";
  return (
      <Grid container className={Sellstyle.formstyleform}>
      <NestedRightGrid
        title={"Is This The Correct Address? If Not Click Here?"}
        value={houseWorthInfo.address}
      />

      <NestedLeftGrid title={" This Home Listed Any Of Listing Platform Or With Brokers?"}>
             
          <form onSubmit={handleSubmit}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="isListed"
                value={listingPlatformInfo.address}
                onChange={handleListingPlatformChange}
              >
                 <StyledFormControlLabel
                  className={listingStyle.sellField}
                  value="Yes"
                  control={<Radio className={listingStyle.radioStyle} />}
                  label="Yes"
                />

<StyledFormControlLabel
                  className={listingStyle.sellField}
                  value="No"
                  control={<Radio className={listingStyle.radioStyle} />}
                  label="No"
                />
              </RadioGroup>
              <StyledButton type="submit" variant="outlined"  disabled={!isFormValid}>
                Next
              </StyledButton>
            </FormControl>
          </form>
      </NestedLeftGrid>
      </Grid>
  );
};

export default ListingPlatformForm;
