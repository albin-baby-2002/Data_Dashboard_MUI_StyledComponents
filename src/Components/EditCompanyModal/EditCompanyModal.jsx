import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import StyledBox from "../StyledComponents/StyledBox";
import { Close } from "@mui/icons-material";
import { StyledTypography } from '../StyledComponents/StyledTypography';


const EditCompanyModal = ({
  showEditModal,
  closeEditModal,
  EditCompany,
  rows,
  companyToEdit,
}) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [industry, setIndustry] = useState("");
  const [stage, setStage] = useState("");
  const [fundedby, setFundedby] = useState("");

  useEffect(() => {
        
    if(rows){
         let data = rows.find((val) => {
           return val.id === companyToEdit;
         });

       
         setName(data.companies);
         setCountry(data.country);
         setIndustry(data.industry);
         setStage(data.stage);
         setFundedby(data.fundedby)
    }
   
    
  },[companyToEdit]);

  return (
    <Modal
      open={showEditModal}
      onClose={closeEditModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
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
        <StyledBox padding={"10px"} display={"flex"} justifyContent={"end"}>
          <StyledBox
            customwidth={"90%"}
            display={"flex"}
            justifyContent={"center"}
          >
            <StyledTypography fontWeight={"bold"}>
              Edit Company Modal{" "}
            </StyledTypography>
          </StyledBox>
          <IconButton
            aria-label="close edit new company modal"
            size="small"
            onClick={closeEditModal}
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
          <TextField
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
          />

          <TextField
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            id="outlined-basic"
            label="Country"
            variant="outlined"
            size="small"
          />

          <TextField
            value={industry}
            onChange={(e) => {
              setIndustry(e.target.value);
            }}
            id="outlined-basic"
            label="Industry"
            variant="outlined"
            size="small"
          />

          <TextField
            value={stage}
            onChange={(e) => {
              setStage(e.target.value);
            }}
            id="outlined-basic"
            label="Stage"
            variant="outlined"
            size="small"
          />

          <TextField
            value={fundedby}
            onChange={(e) => {
              setFundedby(e.target.value);
            }}
            id="outlined-basic"
            label="Funded By"
            variant="outlined"
            size="small"
          />

          <Button
            variant="outlined"
            aria-label="Edit new company"
            onClick={() => {
              EditCompany(name, country, industry, stage, fundedby);
              closeEditModal();
            }}
          >
            Edit Now
          </Button>
        </StyledBox>
      </StyledBox>
    </Modal>
  );
};


export default EditCompanyModal
