import styled from "styled-components";
import Box from "@mui/material/Box";

const StyledDiv = styled.div`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignitems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.pointer?'pointer':''};

`;

export default StyledDiv;
