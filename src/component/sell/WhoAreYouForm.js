import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Sellstyle from "./WhoAreYouForm.module.css";
import { useHistory, useLocation } from "react-router-dom";
import StyledButton from "../custom/StyledButton";
import StyledFormControlLabel from "../custom/StyledFormControlLabel";
import NestedRightGrid from "../custom/NestedRightGrid";
import NestedLeftGrid from "../custom/NestedLeftGrid";
import { TextField } from "@mui/material";

const WhoAreYouForm = ({
  houseWorthInfo,
  whoAreYouInfo,
  handleHouseWorthChange,
  handleWhoAreYouChange,
}) => {
  const history = useHistory();
    /* Routing */
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const houseWorth=  queryParams.get("houseWorth");
   

  function handleSubmit(event) {
    event.preventDefault();
    houseWorthInfo.address = houseWorth;
    console.log("HouseWorth:", houseWorthInfo)
    history.push("/sell-landing/listingplatform");
    //handleHouseWorthChange(event);
  }

  return (
    <Grid container className={Sellstyle.formstyleform}>
      <NestedRightGrid
        title={"Is This The Correct Address? If Not Click Here?"}
        value={houseWorth}
      />
      <NestedLeftGrid title={"Who Are You?"}>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Stack direction="column" spacing={2}>
              <RadioGroup
                name="whoAreYou"
                value={whoAreYouInfo.value}
                onChange={handleWhoAreYouChange}
              >
                <Stack direction="column" spacing={2}>
                  <StyledFormControlLabel
                    value="I am the owner of this home"
                    control={<Radio />}
                    label="I am the owner of this home"
                  />
                  <StyledFormControlLabel
                    value="I am a realtor or agent"
                    control={<Radio />}
                    label="I am a realtor or agent"
                  />
                  <StyledFormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </Stack>
              </RadioGroup>

              <StyledButton type="submit" variant="outlined">
                Next
              </StyledButton>
            </Stack>
          </FormControl>
          <TextField id="houseWorth" label="Outlined" variant="outlined" value={houseWorthInfo.address}  />
        </form>
      </NestedLeftGrid>
    </Grid>
  );
};

export default WhoAreYouForm;
