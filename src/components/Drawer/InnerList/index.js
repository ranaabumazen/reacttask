import { List, ListItemButton } from "@mui/material";
import {
  StyledListIcon,
  StyledListItem,
  StyledListItemText,
  StyledListTextTypography,
  StyledSideListItemButton,
} from "./styles";
/*this is the Inner List component for the list in the drawer component */
const InnerList = ({ data }) => {
  return (
    <List>
      {data.map(({ text, icon }) => (
        <ListItemButton>
          <StyledSideListItemButton
            sx={{ bgcolor: text == "Shared knowledge" ? "#fc7123" : "" }}
          />
          <StyledListItem
            key={text}
            disablePadding
            sx={{ bgcolor: text == "Shared knowledge" ? "#fc7123" : "" }}
          >
            <ListItemButton>
              <StyledListIcon
                sx={text == "Shared knowledge" ? { color: "#06243b" } : ""}
              >
                {icon}
              </StyledListIcon>
              <StyledListItemText
                primary={
                  <StyledListTextTypography
                    sx={text == "Shared knowledge" ? { color: "#06243b" } : ""}
                  >
                    {text}
                  </StyledListTextTypography>
                }
              />
            </ListItemButton>
          </StyledListItem>
        </ListItemButton>
      ))}
    </List>
  );
};
export default InnerList;
