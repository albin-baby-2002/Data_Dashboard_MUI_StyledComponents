import { Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)`
  width: ${(props) => (props.full ? "100%" : "auto")};
  display: ${(props) => props.display};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgcolor};
  border-radius: ${(props) => props.borderradius};

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
`;