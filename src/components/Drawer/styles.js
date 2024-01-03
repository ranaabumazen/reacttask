import { Drawer, styled } from "@mui/material";

export const StyledDrawer = styled(Drawer)({
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      backgroundColor: "#04233b",
      zIndex:'-1',
      position:'fixed'
    },
})