import styles from "../bannerStyle.module.css";
import banerimg from "../../images/SellBanner.jpg";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Sellstyle from "./WhoAreYouForm.module.css";
import { useHistory } from 'react-router-dom';

const WhoAreYouForm = ({houseWorthInfo,  whoAreYouInfo, handleWhoAreYouChange }) => {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push('/sell/listingplatform');
  }
 
  return (
    <div>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${banerimg})` }}
      >
        <div className={styles.luxeryHeader}>
          <form  onSubmit={handleSubmit}>
            <h2 text>Who Are You?</h2>
            {/* <label className={styles.label}>
              <input
                className={styles.bannerinput}
                type="text"
                placeholder="Enter Your Full Address"
                value={whoAreYouInfo.address}
                onChange={handleWhoAreYouChange}
              />
              <button type = "submit" className={styles.button} >
                Estimate
              </button>
            </label> */}
            <Grid container>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <label className={styles.label}>{houseWorthInfo.address}</label>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={whoAreYouInfo.value}
                    onChange={handleWhoAreYouChange}
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
                  <Button
                    sx={{ mt: 1, mr: 1 }}
                    type="submit"
                
                    className={styles.button} 
                  >
                    Next
                  </Button>
                </FormControl>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WhoAreYouForm;
