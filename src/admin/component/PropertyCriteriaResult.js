import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PropertyGrid from "./PropertyGrid";
import PropertyForm from "./PropertyForm";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsForSell,
  fetchProductsForBuy,
  fetchProductsForApproved,
  fetchProductsForDraft,
  fetchProductsForAll,
} from "../../store/adminAction";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PropertyCriteriaResult = ({ title, type , handleClose}) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const dispatch = useDispatch();
  const adminState = useSelector((state) => state.admin);
  let rows = [];

  switch (type) {
    case "sell":
      rows = adminState.sellProducts;
      break;
    case "buy":
      rows = adminState.buyProducts;
      break;
    case "approved":
      rows = adminState.approvedProducts;
      break;
    case "draft":
      rows = adminState.draftProducts;
      break;
    case "all":
      rows = adminState.allProducts;
      break;
    default:
      // setRows(adminState.sellProducts);
      break;
  }
  useEffect(() => {
    console.debug("Rows::", rows, "Type", type);
    const fetchData = async () => {
      try {
        switch (type) {
          case "sell":
            dispatch(fetchProductsForSell());
            break;
          case "buy":
            dispatch(fetchProductsForBuy());
            break;
          case "approved":
            dispatch(fetchProductsForApproved());
            break;
          case "draft":
            dispatch(fetchProductsForDraft());
            break;
          case "all":
            dispatch(fetchProductsForAll());
            break;
          default:
            // setRows(adminState.sellProducts);
            break;
        }
        if(rows && rows.length>0) {
          setSelectedProperty(rows[0]);
        }
       
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, [dispatch, type]);

  return (
    <Box
      sx={{
        marginBottom: "0%",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} lg={6}>
          <Item elevation={6}>
            {rows && (
              <PropertyGrid
                rows={rows}
                title={title}
                type={type}
                onPropertySelect={setSelectedProperty}
              />
            )}
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          
            <PropertyForm selectedProperty={selectedProperty} handleClose={handleClose}/>
         
        </Grid>
      </Grid>
    </Box>
  );
};

export default PropertyCriteriaResult;
