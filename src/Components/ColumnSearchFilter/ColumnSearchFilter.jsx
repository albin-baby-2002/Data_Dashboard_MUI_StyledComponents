import React from "react";
import { StyledPaper } from "../StyledComponents/StyledPaper";
import StyledInput from "../StyledComponents/StyledInput";
import { Close } from "@mui/icons-material";
import StyledDiv from "../StyledComponents/StyledDiv";

const ColumnSearchFilter = ({
  headCell,
  setSearchTerms,
  toggleSearchModal,
  searchTerms,
}) => {
  return (
    <StyledPaper
      display={"flex"}
      gap={"10px"}
      alignitems={"center"}
      justifycontent={"between"}
      position={"absolute"}
      right={"0"}
      bottom={"-45px"}
      padding={"10px 10px"}
      bgcolor={"white"}
      borderradius={"10px"}
    >
      <StyledInput
        type="text"
        placeholder={`${headCell.id}`}
        value={searchTerms[headCell.id]}
        onChange={(e) => {
          setSearchTerms((prev) => {
            let key = headCell.id;
            return { ...prev, [key]: e.target.value };
          });
        }}
      />

      <StyledDiv
        display={"flex"}
        onClick={() => {
          toggleSearchModal(headCell.id);
        }}
      >
        <Close fontSize="small" />
      </StyledDiv>
    </StyledPaper>
  );
};

export default ColumnSearchFilter;
