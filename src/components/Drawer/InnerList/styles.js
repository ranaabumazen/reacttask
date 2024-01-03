import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";

export const StyledListTextTypography = styled(Typography)({
  color: "#d4d5d8",
  fontSize: "0.75rem",
  fontWeight: "700",
});
export const StyledListItem = styled(ListItem)({
  display: "flex",
  ".Mui-selected": {
    backgroundColor: "#fc7123",
  },
  marginLeft: "1em",
  borderRadius: "0.3em",
});
export const StyledListIcon = styled(ListItemIcon)({
  color: "#687381",
  marginLeft: "0.5em",
});
export const StyledListItemText = styled(ListItemText)({
  marginLeft: "-1.5em",
});
export const StyledSideListItemButton = styled(ListItemButton)({
  borderBottomRightRadius: "0.3em",
  width: "5px",
  marginLeft: "-2.5em",
  height: "40px",
  borderLeft: "none",
  borderTopRightRadius: "0.3em",
});
