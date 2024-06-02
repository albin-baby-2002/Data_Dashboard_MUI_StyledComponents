import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)`
  border: 2px solid gray;
  font-weight: bold;
  padding: ${(props) => props.padding};
  width: ${(props) => props.customWidth};
  min-width: ${(props) => props.minwidth};
  font-size: 12px;
  color: black;
  text-transform: capitalize;
  border-radius: 8px;
`;
