import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Sellstyle from "./WhoAreYouForm.module.css";
import { useHistory } from "react-router-dom";

import { styled } from "@mui/system";

const StyledFormControlLabel = styled(FormControlLabel)`
  border: 2px solid rgb(222, 222, 222);
  border-radius: 20px;
  width: 400px;
  display: flex;
  align-items: center;

  .MuiFormControlLabel-label {
    justify-content: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

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
    <div>
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
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={whoAreYouInfo.value}
                onChange={handleWhoAreYouChange}
              >
                <StyledFormControlLabel
                  value="I am the owner of this home"
                  control={<Radio />}
                  label="I am the owner of this home"
                />
                <StyledFormControlLabel
                  value="I am a realtor or agent"
                  control={<Radio  />}
                  label="I am a realtor or agent"
                />
                <StyledFormControlLabel
                  value="Other"
                  control={<Radio/>}
                  label="Other"
                />
              </RadioGroup>
              <Button type="submit" className={Sellstyle.button}>
                Next
              </Button>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default WhoAreYouForm;
