import styles from "./bannerStyle.module.css";
import React, { useState } from "react";
import banerimg from "../images/banner_sellAnyHome.jpg";
import { useHistory } from "react-router-dom";
import Header from "../component/Header";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import StyledButtonHome from "./custom/StyledButtonHome";
import { Typography } from "@mui/material";

const Banner = () => {
  const history = useHistory();
  const [searchString, setSearchString] = useState("");

  const handleChange = (event) => {
    // console.log("Event::", event.target.value);
    // setSearchString(event.target.value);

    const { name, value } = event.target;
    setSearchString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let uri = "/buy-list?search=" + searchString;
    history.push(uri);
  };

  // const Item = styled(Box)(({ theme }) => ({
  //   backgroundColor:'transparent',
  //   ...theme.typography.body2,
  //   padding: theme.spacing(2),
  //   textAlign: 'left',
  //   color: theme.palette.text.secondary,
  //   boxShadow:'none'

  // }));

  // const TextItem = styled(TextField)(({ theme }) => ({

  // }));

  return (
    <>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${banerimg})` }}
      >
        <Header />

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Box className={styles.luxeryHeader}>
              <Typography variant="h2">Find The Perfect</Typography>
              <Typography variant="h1">Luxury Home</Typography>
              <Stack
                spacing={2}
                direction="row"
                component="form"
                //  variant="form"
                onSubmit={handleSubmit}
                paddingTop={4}
              >
                <TextField
                  
                  name="address"
                  label="Address Neighborhood"
                  id="address"
                  value={searchString}
                  onChange={handleChange}
                  size="small"
                  sx={{
                    background: "white",
                    border: 0,
                    borderRadius: 0,
                  width:'50%'
                  }}
                />

                <StyledButtonHome variant="outlined" type="submit">
                  Search
                </StyledButtonHome>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Banner;

// import styles from "./bannerStyle.module.css";
// import React, { useState, useEffect } from "react";
// import banerimg from "../images/banner_sellAnyHome.jpg";
// import { useHistory } from "react-router-dom";
// import Header from '../component/Header';

// const Banner = () => {
//   const history = useHistory();
//   const [address, setAddress] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});

//   const inputEvent = (event) => {
//     setAddress(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsSubmitted(true);
//   };

//   useEffect(()=> {
//     if(isSubmitted) {
//       let uri = "/buy-list?search="+address;
//       history.push(uri);
//     }

//   },[isSubmitted, history]);

//   return (
//     <>
//       <div
//         className={styles.banner}
//         style={{ backgroundImage: `url(${banerimg})` }}
//       >
//         <Header/>

//         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className={styles.luxeryHeader}>

//     <Grid item xs={2} sm={12} md={12}>
//       <Item>

//       <form onSubmit={handleSubmit}>
//           <h2>Find The Perfect</h2>
//           <h1>Luxury Home</h1>
//           <label className={styles.label}>
//             <input
//               className={styles.bannerinput}
//               type="text"
//               placeholder="Address Neighborhood"
//               value={address}
//               onChange={inputEvent}
//             />
//             <button className={styles.button} type="submit">
//               Search
//             </button>
//             {errors.address && <span className="error">{errors.address}</span>}
//           </label>
//           </form>

//       </Item>
//     </Grid>

// </Grid>

//       </div>
//     </>
//   );
// };

// export default Banner;
