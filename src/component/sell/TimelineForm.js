import React from "react";
import { useHistory } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import StyledButton from "../custom/StyledButton";
import Stack from "@mui/material/Stack";
import NestedRightGrid from "../custom/NestedRightGrid";
import NestedLeftGrid from "../custom/NestedLeftGrid";
import Grid from "@mui/material/Grid";
import StyledFormControlLabel from "../custom/StyledFormControlLabel";
import Sellstyle from "./WhoAreYouForm.module.css";
import PropertyMaster from "../../master.json";

const TimelineForm = ({
  houseWorthInfo,
  whoAreYouInfo,
  listingPlatformInfo,
  timelineInfo,
  handleTimelineChange,
}) => {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/sell-landing/propertydetail");
  }
  const isFormValid = timelineInfo.duration !== "";

  return (
    <Grid container className={Sellstyle.formstyleform}>
      <NestedRightGrid
        title={"Is This The Correct Address? If Not Click Here?"}
        value={houseWorthInfo.address}
      />

      <NestedLeftGrid title={"What's Your Sale Timeline?"}>
        <form onSubmit={handleSubmit}>
          <FormControl>
          <Stack direction="column" spacing={2}>
            <RadioGroup
              aria-labelledby="duration"
              name="duration"
              value={timelineInfo.address}
              onChange={handleTimelineChange}
            >
                <Stack direction="column" spacing={2}>
                {PropertyMaster.duration.map((option) => (
                    <StyledFormControlLabel
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                 
                ))}
             
              </Stack>
            </RadioGroup>

            <StyledButton type="submit" variant="outlined"  disabled={!isFormValid}>
              Next
            </StyledButton>
            </Stack>
          </FormControl>
          
        </form>
      </NestedLeftGrid>
    </Grid>
  );
};

export default TimelineForm;
