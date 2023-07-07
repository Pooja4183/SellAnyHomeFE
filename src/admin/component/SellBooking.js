import React from "react";
import { styled } from "@mui/material/styles";
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
  fetchProductsForSell,
} from "../../store/adminAction";
import { grey } from "@mui/material/colors";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const SellBooking = ({onItemSelect}) => {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.admin.sellProducts);

  const [selectedRow, setSelectedRow] = useState(0); // Track the selected row

  useEffect(() => {
    dispatch(fetchProductsForSell());
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
            {rows.slice(0, 3).map((row) => (
              <TableRow key={row.id}  onClick={(event) => handleClick(event, row)}>
                <TableCell>...{row.id.slice(18)}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.homeType}</TableCell>
                <TableCell>{row.status ? row.status : "DRAFT"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};

export default SellBooking;
