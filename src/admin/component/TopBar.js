import { Grid } from "@mui/material";
import SmallItem from "./SmallItem";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const TopBar = () => {
  const history = useHistory();
  const [uri, setUri] = useState("/admin");

  useEffect(()=> {
    let isMounted = true;
    //if(isSubmitted) {
      //let uri = "/buy-list?search="+address;
      history.push(uri);
    //}
    return () => {
      // Cleanup function to cancel any ongoing tasks or subscriptions
      isMounted = false;
    };
  },[uri,history]);

  const handleSmallItemClick = () => {
    console.log("Small Item Clicked");
  };
  
  const handleSaleClick = () => {
    setUri("/admin/sell");
    //history.push(uri);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={2} sm={2} md={2}>
        <SmallItem
          text="Buy Bookings"
          value="10"
          onClick={handleSmallItemClick}
        />
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
        <SmallItem text="Sale Bookings" value="15"  onClick={handleSaleClick}/>
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
        <SmallItem text="Approved Properties" value="15" />
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
        <SmallItem text="Draft Properties" value="20" />
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
        <SmallItem text="Total Available" value="30" />
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
        <SmallItem text="Total Agents" value="10" />
      </Grid>
    </Grid>
  );
};

export default TopBar;
