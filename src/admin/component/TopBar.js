import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import SmallItem from "./SmallItem";
import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsMeta } from "../../store/adminAction";

const TopBar = ({ onItemClick }) => {
  const [activeSection, setActiveSection] = useState("");

  const handleSmallItemClick = (section) => {
    onItemClick(section);
    setActiveSection(section);
   
  };

  const [metaInfo, setMetaInfo] = useState({
    cnt_sellProducts: 0,
    cnt_buyProducts: 0,
    cnt_approvedProducts: 0,
    cnt_draftProducts:0,
    cnt_allProducts: 0,
    cnt_agents: 0
  });
  const dispatch = useDispatch();

  const cnt_sellProducts = useSelector((state) => state.admin.sellProducts.length);
  const cnt_buyProducts = useSelector((state) => state.admin.buyProducts.length);
  const cnt_approvedProducts = useSelector((state) => state.admin.approvedProducts.length);
  const cnt_draftProducts = useSelector((state) => state.admin.draftProducts.length);
  const cnt_allProducts = useSelector((state) => state.admin.allProducts.length);
  const cnt_agents = useSelector((state) => state.admin.agents.length);

  useEffect(()=> {
    dispatch(fetchProductsMeta());
  }, [dispatch])

  return (
    <Grid container spacing={3}>

      <Grid item xs={2} sm={2} md={2}>
        <SmallItem text="Buy Bookings" value={cnt_buyProducts} onClick={() => handleSmallItemClick("buy")} />
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
        <SmallItem text="Sell Bookings" value={cnt_sellProducts} onClick={() => handleSmallItemClick("sell")} />
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
        <SmallItem text="Approved Properties" value={cnt_approvedProducts}  onClick={() => handleSmallItemClick("approved")} />
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
        <SmallItem text="Draft Properties" value={cnt_draftProducts}  onClick={() => handleSmallItemClick("draft")} />
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
        <SmallItem text="Total Available" value={cnt_allProducts}   onClick={() => handleSmallItemClick("all")} />
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
        <SmallItem text="Total Agents" value={cnt_agents}  onClick={() => handleSmallItemClick("agent")} />
      </Grid>
    </Grid>
  );
};

export default TopBar;
