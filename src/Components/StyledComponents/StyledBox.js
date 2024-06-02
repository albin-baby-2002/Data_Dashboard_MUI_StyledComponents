import styled from "styled-components";
import Box from "@mui/material/Box";

const StyledBox = styled(Box)`
  
  width: ${(props) => props.full?'100%':'none'};
  width: ${(props) => props.customwidth};
  display: ${(props) => props.display};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgcolor};
  border-radius: ${(props) => props.borderRadius};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignitems};
  justify-content: ${(props) => props.justifycontent};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
  position: ${(props) => props.position};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  transform: ${(props) => props.transform};
  box-shadow: ${(props) => props.boxShadow};
`;

export default StyledBox;
