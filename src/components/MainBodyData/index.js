import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  StyledOperationButton,
  StyledTableCellHeader,
  StyledTableContainer,
  StyledTypography,
  StyledUploadIconButton,
} from "./styles";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { StyledFlexBox } from "./styles";
import { Typography } from "@mui/material";
/*this is the MainBodyData component which is created for styling the table of the main data*/
const MainBodyData = ({ dataTable, HeaderTitles }) => {
  return (
    <StyledTableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="files table">
        <TableHead>
          <TableRow>
            {HeaderTitles.map((title) => {
              return (
                <StyledTableCellHeader align="left">
                  {title}
                </StyledTableCellHeader>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map((item) => (
            <TableRow
              key={item.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component="th" scope="row">
                <StyledFlexBox>
                  <StyledUploadIconButton>
                    <UploadFileIcon />
                  </StyledUploadIconButton>
                  <StyledTypography>
                    {item.file}
                    <Typography color={"#bbc3cc"}>{item.type}</Typography>
                  </StyledTypography>
                </StyledFlexBox>
              </TableCell>
              <TableCell>
                <StyledTypography>{item.title}</StyledTypography>
              </TableCell>
              <TableCell sx={{ display: "flex" }}>
                <StyledOperationButton>
                  <RemoveRedEyeOutlinedIcon />
                </StyledOperationButton>
                <StyledOperationButton>
                  <CloudDownloadOutlinedIcon />
                </StyledOperationButton>
                <StyledOperationButton>
                  <DeleteOutlineOutlinedIcon color="error" />
                </StyledOperationButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};
export default MainBodyData;
