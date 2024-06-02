import { Container, styled } from "@mui/material";

export const StyledContainer = styled(Container)`

padding: 10px 20px !important;


  ${({ theme }) => `
  @media (min-width: ${theme.breakpoints.values.sm}px) {
    padding: 20px 40px !important;
`}
`;
