import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";

export const StyledOuterBox = styled(Box)({
  display: "flex",
  flexGrow: 1,
});
export const StyledAppBar = styled(AppBar)({
  backgroundColor: "white",
  marginTop: "0.5em",
  marginRight: "1.5em",
  marginBottom: "1em",
  borderRadius: "0.3em",
  boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
  display: "flex",
});
export const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
});
export const StyledMainBox = styled(Box)({
  flexGrow: 1,
  backgroundColor: "#F5F5F5",
  paddingTop: "5em",
});
export const StyledAttachIconButton = styled(IconButton)({
  backgroundColor: "#d9e3f4",
  padding: "0.1em",
  paddingRight: "0.5em",
  marginLeft: "1em",
  color: "#374159",
  border: "solid 1px #b3c6de",
  borderRadius: "1em",
});
export const StyledTitleTypography = styled(Typography)({
  color: "#454c54",
  fontWeight: "700",
  fontStyle: "italic",
});
export const StyledInnerTypography = styled(Typography)({
  fontSize: "0.8rem",
  color: "#494f56",
  fontWeight: "700",
});
export const StyledSubTitleTypography = styled(Typography)({
  color: "#fc7123",
  fontStyle:'italic'
});
export const StyledOuterIconButton = styled(IconButton)({
  width: "50px",
  border: "1px solid black",
  padding: "6px",
  height: "50px",
  borderRadius: "25px",
  borderColor: "#F5F5F5",
  backgroundColor: "#F5F5F5",
  marginLeft: "-3.1em",
  zIndex: "1000",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "#F5F5F5",
  },
});
export const StyledInnerIconButton = styled(IconButton)({
  width: "30px",
  border: "1px solid black",
  padding: "6px",
  height: "30px",
  borderRadius: "15px",
  backgroundColor: "#04233b",
  "&:hover": {
    backgroundColor: "#04233b",
  },
});
export const StyledArrowIcon = styled(ArrowBackIosNewIcon)({
  color: "white",
  fontSize: "12px",
});
