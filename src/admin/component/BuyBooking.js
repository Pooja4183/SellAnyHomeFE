import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  fetchProductsForBuy,
  fetchDirectlyCreatedProducts
} from "../../store/adminAction";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const BuyBooking = ({type,onItemSelect}) => {
  const dispatch = useDispatch();
  let rows = [];
   let selector = useSelector((state) => state.admin);
   if(type=== 'buy'){
    rows = selector.buyProducts;
   } else{
    rows = selector.directProducts;
   }

  const [selectedRow, setSelectedRow] = useState(0); // Track the selected row

  useEffect(() => {
    switch(type){
      case 'buy':
        dispatch(fetchProductsForBuy());
        break;
      case 'direct':
        dispatch(fetchDirectlyCreatedProducts())
        break;
    }
   
    console.log("Rows::", rows);
  }, [dispatch]);

  const handleClick = (event, row) => {
    setSelectedRow(row); // Update the selected row
    onItemSelect(row);
  };

  return (
   
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{background: grey[400], fontWeight: "bold"}}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows.slice(0, 3).map((row) => (
              <TableRow key={row.id}  onClick={(event) => handleClick(event, row)}>
                <TableCell>...{row.id.slice(18)}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.homeType}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default BuyBooking;
