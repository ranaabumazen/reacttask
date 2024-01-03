import { Box, IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { StyledFlexBox } from "../../sharedstyles";
import { StyledBadge } from "./styles";

const RightNav = () => {
  return (
    <StyledFlexBox>
      <Box component={"img"} src={"./language_logo.png"} />
      <IconButton size="large">
        <DarkModeOutlinedIcon />
      </IconButton>
      <IconButton size="large" aria-label="show  new notifications">
        <StyledBadge badgeContent={4} color="error">
          <NotificationsNoneOutlinedIcon />
        </StyledBadge>
      </IconButton>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true">
        <AccountCircle />
      </IconButton>
    </StyledFlexBox>
  );
};
export default RightNav;
