import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  InputLabel,
  Paper,
  Radio,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { tableCellClasses } from "@mui/material/TableCell";
import { alpha, styled } from "@mui/material/styles";
import { visuallyHidden } from "@mui/utils";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 1,
  },
}));

const headCells = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "# Id",
  },
  {
    id: "title",
    numeric: false,
    disablePadding: true,
    label: "Title",
  },
  {
    id: "updatedAt",
    numeric: true,
    disablePadding: false,
    label: "Update Date",
  },


];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };



  return (
    <TableHead>
      <StyledTableRow>
          {/* Render the radio button column */}
          <StyledTableCell padding="checkbox">
          <InputLabel sx={{ color: "white", fontSize: 14, paddingLeft: 2 }}>
          </InputLabel>
        </StyledTableCell>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            className={`${
              headCell.id === orderBy ? tableCellClasses.head : ""
            } ${
              orderBy !== false
                ? tableCellClasses[
                    `head${order === "desc" ? "-descending" : "-ascending"}`
                  ]
                : ""
            }`}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </StyledTableRow>
    </TableHead>
  );
}

const BlogGrid = ({rows, title, onItemSelect }) => {
  console.log("Rows::", rows);

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("price");
  const [selectedRow, setSelectedRow] = useState([]); // Track the selected row
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dense, setDense] = useState(false);

  const handleRequestSort = (event, item) => {
    const isAsc = orderBy === item && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(item);
  };
// Format the date
const formatDate = (dateToFormat) => {
    return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    }).format(new Date(dateToFormat));
}
  const handleClick = (event, row) => {
    setSelectedRow(row); // Update the selected row
    onItemSelect(row);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            mb: 1,

            background: blue[200],
            ...(selectedRow.length > 0 && {
              bgcolor: (theme) =>
                alpha(
                  theme.palette.primary.main,
                  theme.palette.action.activatedOpacity
                ),
            }),
          }}
        >
          <Typography
            sx={{ flex: "1 1 100%", background: blue[200] }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            {title}
          </Typography>
        </Toolbar>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = selectedRow === row; // Check if the row is selected
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <StyledTableRow
                      hover
                      onClick={(event) => handleClick(event, row)}
                      role="radio"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                        {/* Render the radio button */}
                        <StyledTableCell scope="row"
                        padding="none">
                        <Radio
                          checked={isItemSelected}
                          onChange={(event) => handleClick(event, row)}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </StyledTableCell>
                      <StyledTableCell scope="row"
                        padding="none">
                        #{row.id.slice(18)}
                      </StyledTableCell>
                      <StyledTableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.title}
                      </StyledTableCell>
                     
                      <StyledTableCell align="right">
                        {formatDate(row.updatedAt)}
                      </StyledTableCell>
                    
                    </StyledTableRow>
                  );
                })}
              {emptyRows > 0 && (
                <StyledTableRow
                  style={{ height: (dense ? 33 : 53) * emptyRows }}
                >
                  <StyledTableCell colSpan={6} />
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
};

export default BlogGrid;
