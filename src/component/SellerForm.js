import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Sellstyle from "./SellForm.module.css";

export default function SellerForm() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid container>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              className={Sellstyle.sellField}
              value="I am the owner of this home"
              control={<Radio />}
              label="I am the owner of this home"
            />
            <FormControlLabel
              className={Sellstyle.sellField}
              value="I am a realtor or agent"
              control={<Radio />}
              label="I am a realtor or agent"
            />
            <FormControlLabel
              className={Sellstyle.sellField}
              value="Other"
              control={<Radio />}
              label="Other"
            />
          </RadioGroup>
          <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Next
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
}
