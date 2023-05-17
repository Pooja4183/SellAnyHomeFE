import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Sellstyle from "./WhoAreYouForm.module.css";
import { useHistory } from "react-router-dom";
import StyledButton from "../custom/StyledButton";
import StyledFormControlLabel from '../custom/StyledFormControlLabel';

const WhoAreYouForm = ({
  houseWorthInfo,
  whoAreYouInfo,
  handleWhoAreYouChange,
}) => {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/sell/listingplatform");
  }

  return (
    <Grid container className={Sellstyle.formstyleform}>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={{
          textAlign: {
            xs: "center",
            sm: "center",
            lg: "left",
            md: "left",
          },
        }}
        className={Sellstyle.formstyle}
      >
        <div className={Sellstyle.label}>
          <p>Is This The Correct Address? If Not Click Here</p>
          <h5>{houseWorthInfo.address}</h5>
        </div>
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={8}
        sx={{
          textAlign: {
            xs: "center",
            sm: "center",
            lg: "left",
            md: "left",
          },
        }}
        className={Sellstyle.formstyle}
      >
        <h1 className={Sellstyle.whoAreyou}>Who Are You?</h1>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Stack direction="column" spacing={2}>
              <RadioGroup
                name="controlled-radio-buttons-group"
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
        </form>
      </Grid>
    </Grid>
  );
};

export default WhoAreYouForm;
