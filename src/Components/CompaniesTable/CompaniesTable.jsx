import {
  IconButton,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import * as XLSX from "xlsx";
import React, { useEffect, useState } from "react";
import CompaniesData from "../../Data/companies-data.json";
import StyledBox from "../StyledComponents/StyledBox";
import StyledTable from "../StyledComponents/StyledTable";
import { Delete, Edit } from "@mui/icons-material";
import CustomTableHead from "../CustomTableHead/CustomTableHead";
import ComapniesTableHead from "../ComapniesTableHeader/ComapniesTableHead";
import AddCompanyModal from "../AddComapnyModal/AddCompanyModal";
import EditCompanyModal from "../EditCompanyModal/EditCompanyModal";
import FilterModal from "../FilterModal/FilterModal";

const LOCAL_STORAGE_KEY = "my-app-state";

const CompaniesTable = () => {
  //  order of sorting and column on which sorting is done
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");

  // manage rows and headCells data of the table
  const [rows, setRows] = useState();
  const [headCells, setHeadCells] = useState();

  // current page and no of rows in a page
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // display state of modal to add and edit company data
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // company selected for edit
  const [companyToEdit, setCompanyToEdit] = useState("");

  // search filter term for each column
  const [searchTerms, setSearchTerms] = React.useState({});

  // visibility state of search modal of each column
  const [searchModalVisibility, setSearchModalVisibility] = useState({});

  // visibility state of modal where all search filters can be edited
  const [showFilterModal, setShowFilterModal] = useState(false);

  // functions to handle closing and opening of modals
  const openAddCompanyModal = () => setShowAddModal(true);
  const closeAddCompanyModal = () => setShowAddModal(false);

  const openEditModal = () => setShowEditModal(true);
  const closeEditModal = () => setShowEditModal(false);

  const openFilterModal = () => setShowFilterModal(true);
  const closeFilterModal = () => setShowFilterModal(false);

  // useEffect to get the state from local storage of take fresh data from the json file

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (saved) {
      const data = JSON.parse(saved);
      setRows(data.rows);
      setHeadCells(data.headCells);
    } else {
      setRows(CompaniesData.rows);
      setHeadCells(CompaniesData.headCells);
    }
  }, []);

  // useEffect to change the data in localStorage when state changes

  useEffect(() => {
    const data = { headCells, rows };

    if (headCells && rows) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }
  }, [rows, headCells]);

  // useEffect to set the intial visibility of individual search modals

  useEffect(() => {
    const visibility = {};

    if (headCells) {
      headCells.forEach((val) => {
        visibility[val.id] = false;
      });

      setSearchModalVisibility(visibility);
    }
  }, [headCells]);

  // function to add new company to the existing data

  const AddNewCompany = (name, country, industry, stage, fundedby) => {
    if (name && country && industry && stage && fundedby) {
      let newCompany = {
        id: Date.now(),
        companies: name,
        country,
        industry,
        stage,
        fundedby,
      };

      setRows((prev) => {
        return [...prev, newCompany];
      });
    }
  };

  // function to edit the selected company data

  const EditCompany = (name, country, industry, stage, fundedby) => {
    const Edited = {
      id: companyToEdit,
      companies: name,
      country,
      industry,
      stage,
      fundedby,
    };

    setRows((prevRows) => {
      const index = prevRows.findIndex((row) => row.id === companyToEdit);
      if (index !== -1) {
        const updatedRows = [...prevRows];
        updatedRows[index] = Edited;
        return updatedRows;
      } else {
        return [...prevRows, Edited];
      }
    });
  };

  // company to delete a specific company data

  const DeleteComapny = (id) => {
    let newCompanies = rows.filter((val) => {
      return val.id !== id;
    });

    setRows(newCompanies);
  };

  // function to handle page change

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // function to handle row per page change

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // function to download the excel file

  const handleExport = () => {
    let wb = XLSX.utils.book_new();

    let ws = XLSX.utils.json_to_sheet(rows);

    XLSX.utils.book_append_sheet(wb, ws, "sheet1");

    XLSX.writeFile(wb, "Company_data.xlsx");
  };

  // function to change the state of order and column based on which data is orderedby

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // find no of empty rows to get the table to add equalent empty space to have the same height

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  // function to determine which all data show based on search filter and also the order based on order and orderby state and also the no of rows based on page and rows per page

  const visibleRows = React.useMemo(() => {
    if (rows) {
      return rows
        .filter((row) => {
          for (const columnId in searchTerms) {
            const value = row[columnId]?.toString().toLowerCase() || "";

            if (!value.includes(searchTerms[columnId].toLowerCase())) {
              return false;
            }
          }
          return true;
        })
        .sort((a, b) => {
          const comparator =
            order === "asc"
              ? (a, b) => (a < b ? -1 : 1)
              : (a, b) => (a > b ? -1 : 1);
          return comparator(a[orderBy], b[orderBy]);
        })
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }
  }, [rows, orderBy, order, searchTerms, page, rowsPerPage]);

  return (
    <>
      <ComapniesTableHead
        openAddCompanyModal={openAddCompanyModal}
        handleExport={handleExport}
        openFilterModal={openFilterModal}
        setSearchTerms={setSearchTerms}
      />

      <StyledBox margin={"40px 0px"}>
        <Paper>
          <TableContainer>
            <StyledTable>
              <CustomTableHead
                headCells={headCells}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                searchModalVisibility={searchModalVisibility}
                setSearchModalVisibility={setSearchModalVisibility}
                setSearchTerms={setSearchTerms}
                searchTerms={searchTerms}
              />

              <TableBody>
                {visibleRows &&
                  visibleRows.map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow key={row.id}>
                        <TableCell padding="normal">{row.companies}</TableCell>
                        <TableCell padding="normal">{row.country}</TableCell>
                        <TableCell padding="normal">{row.industry}</TableCell>
                        <TableCell padding="normal">{row.stage}</TableCell>
                        <TableCell padding="normal">{row.fundedby}</TableCell>
                        <TableCell padding="normal" align="center">
                          <StyledBox
                            display={"flex"}
                            gap={"10px"}
                            justifycontent={"center"}
                          >
                            <IconButton
                              aria-label={`edit ${row.companies}'s data`}
                              onClick={() => {
                                openEditModal();
                                setCompanyToEdit(row.id);
                              }}
                            >
                              <Edit />
                            </IconButton>
                            <IconButton
                              aria-label={`delete ${row.companies}'s data`}
                              onClick={() => {
                                DeleteComapny(row.id);
                              }}
                            >
                              <Delete />
                            </IconButton>
                          </StyledBox>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </StyledTable>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows ? rows.length : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>

        {/* modal to add new company data */}
        <AddCompanyModal
          showAddModal={showAddModal}
          closeAddCompanyModal={closeAddCompanyModal}
          AddNewCompany={AddNewCompany}
        />

        {/* modal to edit selected company data */}
        <EditCompanyModal
          showEditModal={showEditModal}
          closeEditModal={closeEditModal}
          EditCompany={EditCompany}
          rows={rows}
          companyToEdit={companyToEdit}
        />

        {/* modal to filter the all the columns based on search value */}
        <FilterModal
          showFilterModal={showFilterModal}
          headCells={headCells}
          searchTerms={searchTerms}
          setSearchTerms={setSearchTerms}
          closeFilterModal={closeFilterModal}
        />
      </StyledBox>
    </>
  );
};

export default CompaniesTable;
