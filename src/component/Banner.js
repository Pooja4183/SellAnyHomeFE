import styles from "./bannerStyle.module.css";
import React, { useState, useEffect } from "react";
import banerimg from "../images/banner_sellAnyHome.jpg";
import { useHistory } from "react-router-dom";
import Header from '../component/Header';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Banner = () => {
  const history = useHistory();
  const [address, setAddress] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const inputEvent = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(()=> {
    if(isSubmitted) {
      let uri = "/buy-list?search="+address;
      history.push(uri);
    }

  },[isSubmitted, history]);



  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow:'none'
    
  }));

  const TextItem = styled(TextField)(({ theme }) => ({
    backgroundColor:'white',
    border: 0,
    "& .MuiInputLabel-root": {
     
      marginTop:0
    },
    

    
  
    
  }));

  const ButtonStyling = styled(Button)(({ theme }) => ({
    fontSize: '14px',
    cursor: 'pointer',
    margin: '10px',
    padding:'0 10%',
    border: 'none',
    letterSpacing:' 2px',
    textTransform: 'uppercase',
   backgroundColor:'slateblue',
   color: 'white',

   
    
  }));

  return (
    <>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${banerimg})` }}
      >
        <Header/>


        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
 
    <Grid item xs={2} sm={12} md={12}>
      <Item className={styles.luxeryHeader}>
      <h2>Find The Perfect</h2>
      <h1>Luxury Home</h1>


          <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginTop:'3%'
      }}
    >
       <Stack spacing={2} direction="row" variant="form"  onSubmit={handleSubmit}>
      <TextItem fullWidth label="Address Neighborhood" id="fullWidth"  value={address}  onChange={inputEvent} />
      {errors.address && <span className="error">{errors.address}</span>}
      <ButtonStyling variant="outlined" type="submit" >Search</ButtonStyling>
    </Stack>
    </Box>
      </Item>
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
