import { Toolbar, Typography } from "@mui/material";
import InnerList from "./InnerList";
import { StyledFlexBox } from "../sharedstyles";
import { StyledDrawer } from "./styles";
/*this is the Drawer component which is styling the drawer */
const DrawerCmp = ({ drawerWidth, drawerList }) => {
  return (
    <StyledDrawer
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Typography>
          <StyledFlexBox component="img" src={"./oyoun_academy_logo.png"} />
        </Typography>
      </Toolbar>
      <InnerList data={drawerList} />
    </StyledDrawer>
  );
};
export default DrawerCmp;
