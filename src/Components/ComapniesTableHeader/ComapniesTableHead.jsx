import { Add, Download, FilterListOff } from "@mui/icons-material";
import StyledBox from "../StyledComponents/StyledBox";
import { StyledButton } from "../StyledComponents/StyledButton";
import { ResponsiveButtonTypography, ResponsiveHeadingTypography } from "../StyledComponents/StyledTypography";
import { IconButton } from "@mui/material";


const ComapniesTableHead = ({
  openAddCompanyModal,
  handleExport,
  openFilterModal,
  setSearchTerms,
}) => {
  return (
    <div>
      <StyledBox padding={"25px 0px"}>
        <ResponsiveHeadingTypography fontWeight={"bold"}>
          Companies
        </ResponsiveHeadingTypography>
      </StyledBox>

      <StyledBox full="true" display={"flex"}>
        <StyledBox full="true" display={"flex"} gap={"10px"}>
          <StyledButton
          aria-label="clear all search filters for table columns"
            minwidth={"40px"}
            padding={"0px"}
            variant="text"
            onClick={() => {setSearchTerms({})}}
          >
            <StyledBox display={"flex"} $alignitems={"center"} gap={"10px"}>
              <FilterListOff />
            </StyledBox>
          </StyledButton>

          <StyledButton variant="text" onClick={openFilterModal}>
            <StyledBox display={"flex"} $alignitems={"center"} gap={"10px"}>
              <ResponsiveButtonTypography fontWeight={"bold"}>
                Filter
              </ResponsiveButtonTypography>
            </StyledBox>
          </StyledButton>
        </StyledBox>

        <StyledBox
          full="true"
          display={"flex"}
          justifyContent={"end"}
          gap={"10px"}
        >
          <StyledButton variant="text" onClick={handleExport}>
            <StyledBox display={"flex"} $alignitems={"center"} gap={"10px"}>
              <ResponsiveButtonTypography xshide={"true"} fontWeight={"bold"}>
                {"Download "}
              </ResponsiveButtonTypography>
              <Download fontSize="small" />
            </StyledBox>
          </StyledButton>

          <StyledButton variant="text" onClick={openAddCompanyModal}>
            <StyledBox display={"flex"} $alignitems={"center"} gap={"10px"}>
              <ResponsiveButtonTypography fontWeight={"bold"} xshide={"true"}>
                {"Add Companies"}
              </ResponsiveButtonTypography>
              <Add fontSize="small" />
            </StyledBox>
          </StyledButton>
        </StyledBox>
      </StyledBox>
    </div>
  );
};

export default ComapniesTableHead;
