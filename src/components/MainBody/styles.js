import {
  Box,
  IconButton,
  TableCell,
  TableContainer,
  Typography,
  styled,
} from "@mui/material";

export const StyledTableContainer = styled(TableContainer)({
  backgroundColor: "white",
  width: "95%",
  borderRadius: "0.3em",
  margin: "1.5em",
  marginTop: "0.5em",
  marginLeft:'2em',
  boxSizing: "border-box",
  boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
});
export const StyledFlexBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  paddingLeft:'1em',
});
export const StyledOperationButton = styled(IconButton)({
  backgroundColor: "#f5f5f9",
  borderRadius: "0.3em",
  margin: "0.2em",
  border: "1px solid #d9e3f4",
});

export const StyledTypography = styled(Typography)({
  color: "#04233b",
  fontWeight: "700",
  paddingLeft:'0.9em',

});
export const StyledUploadIconButton = styled(IconButton)({
  backgroundColor: "#d6e0f1",
  borderRadius: "0.3em",
  marginRight: "0.1em",
  border: "1px solid #d9e3f4",
  color: "#676d89",
  fontSize: 20,
});
export const StyledTableCellHeader = styled(TableCell)({
  color: "#718597",
  paddingLeft:'2em',
});
