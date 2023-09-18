import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchExclusiveProducts } from "../../store/productAction";
import ListProducts from "./ListProducts";
import style from "./product.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ExclusiveProducts = ({title}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExclusiveProducts());
  }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} className={style.headinExclusive}>
        <Grid item xs={12}>
        <ListProducts title={title? title: "Our Exclusive Homes"} isExclusive/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExclusiveProducts;
