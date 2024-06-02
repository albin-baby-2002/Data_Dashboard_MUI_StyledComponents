import {
  
  Button,
  IconButton,
  Modal,
  TextField,
  
  
} from "@mui/material";
import React, { useState } from "react";
import StyledBox from "../StyledComponents/StyledBox";
import { Close } from "@mui/icons-material";
import { StyledTypography } from "../StyledComponents/StyledTypography";

const AddCompanyModal = ({
  showAddModal,
  closeAddCompanyModal,
  AddNewCompany,
}) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [industry, setIndustry] = useState("");
  const [stage, setStage] = useState("");
  const [fundedby, setFundedby] = useState("");
  
  const resetInputs = ()=>{
    setName('')
    setCountry('');
    setIndustry('');
    setStage('');
    setFundedby('');
  }

  return (
    <Modal
      open={showAddModal}
      onClose={closeAddCompanyModal}
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
        <StyledBox padding={"10px"} full={'true'} display={"flex"} justifyContent={"between"} gap={'10px'} alignitems={"center"} >
            
          <StyledBox customwidth={'90%'} display={'flex'} justifyContent={'center'}>
            <StyledTypography fontWeight={'bold'}>Add Company Modal </StyledTypography>
          </StyledBox>
            
          <IconButton aria-label="close the add new company modal" size="small" onClick={closeAddCompanyModal}>
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
            aria-label="Add new company"
            onClick={() => {
              AddNewCompany(name, country, industry, stage, fundedby);
              closeAddCompanyModal();
              resetInputs();
            }}
          >
            Add Now
          </Button>
        </StyledBox>
      </StyledBox>
    </Modal>
  );
};

export default AddCompanyModal;
