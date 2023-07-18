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
  fetchDirectlyCreatedProducts,
} from "../../store/adminAction";
import { Radio, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const BuyBooking = ({ type, text, onItemSelect, selectedItem }) => {
  const dispatch = useDispatch();
  let rows = [];
  let selector = useSelector((state) => state.admin);
  if (type === "buy") {
    rows = selector.buyProducts;
  } else {
    rows = selector.directProducts;
  }

  useEffect(() => {
    switch (type) {
      case "buy":
        dispatch(fetchProductsForBuy());
        break;
      case "direct":
        dispatch(fetchDirectlyCreatedProducts());
        break;
    }

  }, [dispatch]);



  const handleClick = (event, row) => {
    onItemSelect({ row: row, text: text });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ background: grey[400], fontWeight: "bold" }}>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.slice(0, 3).map((row,index) => {
              const isItemSelected = selectedItem?.row?.id === row?.id; // Check if the row is selected
              const labelId = `enhanced-table-checkbox-${index}`;
              return(
              <TableRow
                key={row.id}
                role="radio"
                onClick={(event) => handleClick(event, row)}
              >
                <TableCell scope="row" padding="none">
                  <Radio
                    checked={isItemSelected}
                    onChange={(event) => handleClick(event, row)}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </TableCell>
                <TableCell>#{row.id.slice(18)}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.homeType}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
              )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BuyBooking;
