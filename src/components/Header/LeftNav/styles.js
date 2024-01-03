import { IconButton, Link, Typography,styled } from "@mui/material";

export const StyledTypography = styled(Typography)({
    color:"#bbc3cc",
    fontSize:'0.9rem'
});
export const StyledVideoIcon = styled(IconButton)({
    marginRight: "0.5em",
    fontSize: "1.5rem",
    color: "#fc7123",
});
export const StyledInnerLink = styled(Link)({
    fontSize: "0.9rem",
    textDecorationLine: "underline",
    textDecorationColor: "#fc7123",
    color:"#fc7123",
    textUnderlineOffset:'5px'
});