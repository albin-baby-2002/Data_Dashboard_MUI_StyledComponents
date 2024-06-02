import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import SearchIcon from "@mui/icons-material/Search";
import { StyledTableHead } from "../StyledComponents/StyledTableHead";
import StyledBox from "../StyledComponents/StyledBox";
import StyledDiv from "../StyledComponents/StyledDiv";
import { StyledTableCell } from "../StyledComponents/StyledTableCell";
import ColumnSearchFilter from "../ColumnSearchFilter/ColumnSearchFilter";
import { Box } from "@mui/material";
import { visuallyHidden } from "@mui/utils";


export default function CustomTableHead({
  order,
  orderBy,
  onRequestSort,
  headCells,
  searchModalVisibility,
  setSearchModalVisibility,
  setSearchTerms,
  searchTerms,
}) {
  //    handling sorting based on column clicked

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  //    toggle search modal of columns

  const toggleSearchModal = (headId) => {
    setSearchModalVisibility((prev) => {
      let val = { ...prev };

      Object.keys(prev).map((key) => {
        val[key] = key === headId ? !prev[key] : false;
      });

      return val;
    });
  };

  return (
    <StyledTableHead>
      <TableRow>
        {/* maping through headCells to create header for columns */}
        {headCells &&
          headCells.map((headCell) => (
            <StyledTableCell
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <StyledBox
                display={"flex"}
                justifyContent={"space-between"}
                alignContent={"center"}
              >
                {/* label of each column */}
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {/* hidden element for showing ascending or descending for
                  screen reader */}
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
                <StyledDiv
                  $pointer={"true"}
                  display={"flex"}
                  $alignitems={"center"}
                >
                  {/* search icon to toggle search modal of each column */}
                  <SearchIcon
                    style={{ fontSize: 20, color: "gray" }}
                    onClick={() => {
                      toggleSearchModal(headCell.id);
                    }}
                  />
                  {/* search modal for each column */}
                  {searchModalVisibility[headCell.id] && (
                    <ColumnSearchFilter
                      headCell={headCell}
                      toggleSearchModal={toggleSearchModal}
                      setSearchTerms={setSearchTerms}
                      searchTerms={searchTerms}
                    />
                  )}
                </StyledDiv>
              </StyledBox>
            </StyledTableCell>
          ))}
        {/* additional cell for options */}
        <TableCell align="center">Options</TableCell>
      </TableRow>
    </StyledTableHead>
  );
}
