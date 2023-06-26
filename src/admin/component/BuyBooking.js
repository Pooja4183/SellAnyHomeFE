import React from "react";
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
  fetchProductsForSale,
} from "../../store/adminAction";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const BuyBooking = () => {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.admin.sellProducts);

  useEffect(() => {
    dispatch(fetchProductsForSale());
    console.log("Rows::", rows);
  }, [dispatch]);

  return (
   
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{background: grey[400], fontWeight: "bold"}}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(0, 3).map((item) => (
              <TableRow key={item.id}>
                <TableCell>...{item.id.slice(18)}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.homeType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default BuyBooking;
