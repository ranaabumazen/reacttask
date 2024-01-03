import * as React from "react";
import {
  StyledAppBar,
  StyledArrowIcon,
  StyledAttachIconButton,
  StyledInnerIconButton,
  StyledInnerTypography,
  StyledMainBox,
  StyledOuterIconButton,
  StyledSubTitleTypography,
  StyledTitleTypography,
  StyledToolBar,
} from "./styles";
import { StyledFlexBox, StyledGrowBox } from "../sharedstyles";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import DrawerCmp from "../Drawer";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SendToMobileOutlinedIcon from "@mui/icons-material/SendToMobileOutlined";
import ForkLeftOutlinedIcon from "@mui/icons-material/ForkLeftOutlined";
import { IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MainBodyData from "../MainBodyData";
import { HeaderTitles, dataTable } from "./dataTable";

const drawerList = [
  { text: "Statistics & Analytics", icon: <HomeOutlinedIcon /> },
  { text: "Learning Path", icon: <ForkLeftOutlinedIcon /> },
  { text: "My Learning", icon: <PlaylistAddCheckOutlinedIcon /> },
  { text: "Roadmap", icon: <CalendarTodayOutlinedIcon /> },
  { text: "Enrollments", icon: <AssignmentTurnedInOutlinedIcon /> },
  { text: "Shared knowledge", icon: <SendToMobileOutlinedIcon /> },
];
/*this is the Header component which conatins the appbar ,drawer and the body data */
const drawerWidth = 240;
const Header = () => {
  return (
    <StyledFlexBox>
      <StyledAppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth + 50}px)`,
        }}
      >
        <StyledToolBar>
          <StyledOuterIconButton>
            <StyledInnerIconButton>
              <StyledArrowIcon />
            </StyledInnerIconButton>
          </StyledOuterIconButton>
          <LeftNav />
          <StyledGrowBox />
          <RightNav />
        </StyledToolBar>
      </StyledAppBar>

      <DrawerCmp drawerWidth={drawerWidth} drawerList={drawerList} />

      <StyledMainBox>
        <StyledToolBar>
          <StyledTitleTypography>
            Shared knowledge / Communications
            <StyledAttachIconButton>
              <IconButton>
                <AttachFileIcon />
              </IconButton>
              <StyledInnerTypography>Add Document/s</StyledInnerTypography>
            </StyledAttachIconButton>
          </StyledTitleTypography>
          <StyledFlexBox>
            <StyledSubTitleTypography>
           Home /  Shared knowledge / 
            </StyledSubTitleTypography>
            <StyledSubTitleTypography sx={{color:"#bbc3cc"}}>
              &nbsp;Communications
            </StyledSubTitleTypography>
          </StyledFlexBox>
        </StyledToolBar>
        <MainBodyData dataTable={dataTable} HeaderTitles={HeaderTitles} />
      </StyledMainBox>
    </StyledFlexBox>
  );
};
export default Header;
