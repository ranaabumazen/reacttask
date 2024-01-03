import { Typography } from "@mui/material";
import { StyledCenterFlexBox } from "../../sharedstyles";
import VideoCameraBackOutlinedIcon from "@mui/icons-material/VideoCameraBackOutlined";
import { StyledInnerLink, StyledTypography, StyledVideoIcon } from "./styles";

const LeftNav = () => {
  return (
    <StyledCenterFlexBox>
      <Typography noWrap component="div">
        <StyledCenterFlexBox>
          <StyledVideoIcon>
            <VideoCameraBackOutlinedIcon />
          </StyledVideoIcon>
          <StyledTypography>
            Discover our platform through a video tutorial.
          </StyledTypography>
          <StyledInnerLink>Watch now!</StyledInnerLink>
        </StyledCenterFlexBox>
      </Typography>
    </StyledCenterFlexBox>
  );
};
export default LeftNav;
