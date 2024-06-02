import { Button, IconButton, Modal, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import StyledBox from '../StyledComponents/StyledBox';
import { StyledTypography } from '../StyledComponents/StyledTypography';
import { Close } from '@mui/icons-material';

const FilterModal = ({ showFilterModal, closeFilterModal,headCells,searchTerms,setSearchTerms }) => {

  
  return (
    <Modal
      open={showFilterModal}
      onClose={closeFilterModal}
      aria-labelledby="add-company"
      aria-describedby="add new company data"
    >
      <StyledBox
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        customwidth={"400px"}
        bgcolor={"background.paper"}
        boxShadow={"24"}
        padding={"20px"}
      >
        <StyledBox
          padding={"10px"}
          full={"true"}
          display={"flex"}
          justifyContent={"between"}
          gap={"10px"}
          alignitems={"center"}
        >
          <StyledBox
            customwidth={"90%"}
            display={"flex"}
            justifyContent={"center"}
          >
            <StyledTypography fontWeight={"bold"}>
              Filter Data Modal{" "}
            </StyledTypography>
          </StyledBox>

          <IconButton
            aria-label="close the add new company modal"
            size="small"
            onClick={closeFilterModal}
          >
            <Close />
          </IconButton>
        </StyledBox>

        <StyledBox
          display={"flex"}
          flexDirection={"column"}
          padding={"20px"}
          gap={"20px"}
        >
          {headCells &&
            headCells.map((headCell) => (
              <TextField
              key={headCell.id}
                label={headCell.id}
                id="outlined-basic"
               value={searchTerms[headCell.id]}
               onChange={(e)=>{
                setSearchTerms((prev) => {
                  let key = headCell.id;
                  return { ...prev, [key]: e.target.value };
                });
               }}
                variant="outlined"
                size="small"
              />
            ))}
        </StyledBox>
      </StyledBox>
    </Modal>
  );
};

export default FilterModal
