import React from "react";
import styles from "../bannerStyle.module.css";
import banerimg from "../../images/banner_sellAnyHome123.jpg";
import { useHistory } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const HouseWorthForm = ({ houseWorthInfo, handleHouseWorthChange }) => {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/sellforms/whoareyou");
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  }));

  const TextItem = styled(TextField)(({ theme }) => ({
    backgroundColor: "white",
    border: 0,
    borderRadius: 0,
    "& .MuiInputLabel-root": {
      marginTop: 0,
    },

    "& .Mui-focused": {
      borderRadius: 0,
      color: "black",
      border: "none",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderRadius: 0,
    },
  }));

  const ButtonStyling = styled(Button)(({ theme }) => ({
    fontSize: "14px",
    cursor: "pointer",
    padding: "0 10%",
    border: "none",
    letterSpacing: "2px",
    backgroundColor: "slateblue",
    color: "white",
    borderRadius: 0,
    textTransform: "uppercase",
  }));

  return (
    <>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${banerimg})` }}
      >
        {/* <Header/> */}

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={12} md={12}>
            <Item className={styles.luxeryHeader}>
              <h2 text>How Much Is My</h2>
              <h1>House Worth?</h1>

              <Box
                sx={{
                  maxWidth: "100%",
                  marginTop: "3%",
                }}
              >
                <Stack
                  spacing={2}
                  direction="row"
                  variant="form"
                  onSubmit={handleSubmit}
                >
                  <TextItem
                    fullWidth
                    label="Enter Your Full Address"
                    id="fullWidth"
                    value={houseWorthInfo.address}
                    onChange={handleHouseWorthChange}
                    size="small"
                  />
                  {/* {errors.address && <span className="error">{errors.address}</span>} */}
                  <ButtonStyling variant="outlined" type="submit">
                    {" "}
                    Estimate
                  </ButtonStyling>
                </Stack>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </div>
    </>

    // (
    //     <div
    //       className={styles.banner}
    //       style={{ backgroundImage: `url(${banerimg})` }}
    //     >
    //       <div className={styles.luxeryHeader}>
    //         <form  onSubmit={handleSubmit}>
    //         <h2 text>How Much Is My</h2>
    //         <h1>House Worth?</h1>
    //         <label className={styles.label}>
    //           <input
    //             className={styles.bannerinput}
    //             type="text"
    //             placeholder="Enter Your Full Address"
    //             name="address"
    //             value={houseWorthInfo.address}
    //             onChange={handleHouseWorthChange}
    //           />
    //           <button type = "submit" className={styles.button} >
    //             Estimate
    //           </button>
    //         </label>
    //         </form>
    //       </div>
    //     </div>
    // )
  );
};

export default HouseWorthForm;
