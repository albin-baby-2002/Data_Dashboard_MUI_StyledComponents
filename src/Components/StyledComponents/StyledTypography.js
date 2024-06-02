import { styled, Typography } from "@mui/material";

export const StyledTypography = styled(Typography)`
  font-weight: ${(props) => props.fontWeight};
    
  @media (max-width: 650px) {
    display: ${(props) => (props.xshide ? "none" : "")};
  }
`;

export const ResponsiveHeadingTypography = styled(Typography)`
  ${({ theme }) => `
       
        font-size: ${theme.typography.h5.fontSize};
       
        font-weight: ${(props) => props.fontWeight};
        
        @media (min-width: ${theme.breakpoints.values.md}px) {
            font-size: ${theme.typography.h4.fontSize};
          
        }
        
        @media (max-width: 650px) {
        display: ${(props) => (props.xshide ? "none" : "")};
         }

       
    `}
`;

export const ResponsiveButtonTypography = styled(Typography)`
  font-weight: ${(props) => props.fontWeight};
  @media (max-width: 700px) {
    display: ${(props) => (props.xshide ? "none" : "block")};
  }
  ${({ theme }) => `
       
        font-size: 14px;
        
        @media (min-width: ${theme.breakpoints.values.md}px) {
            font-size: ${theme.typography.body2.fontSize};
          
        }
       
    `}
`;
