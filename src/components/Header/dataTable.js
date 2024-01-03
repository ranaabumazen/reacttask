/*this file contains the titles of headers of the data table,and the dummy data of the main table*/
function createData(file, title,type) {
    return { file, title,type };
  }
export const HeaderTitles = ["FILE","FILE TITLE","OPERATIONS"];
export const dataTable = [
    createData("banner-logo.png", "File Title Here","PNG File"),
    createData("banner-logo.png", "File Title Here","PNG File"),
    createData("banner-logo.png", "File Title Here","PNG File"),
    createData("banner-logo.png", "File Title Here","PNG File"),
    createData("banner-logo.png", "File Title Here","PNG File"),
    createData("banner-logo.png", "File Title Here","PNG File"),
    createData("banner-logo.png", "File Title Here","PNG File"),
    createData("banner-logo.png", "File Title Here","PNG File"),
  ];