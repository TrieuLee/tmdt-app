import React from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import "./Grid.scss";

export default function CheckOutGrid() {
  const StyledTableCell = styled(
    TableCell,
    Paper
  )(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  ];
  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TableContainer>
              <Paper variant="outlined" square>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Tên sản phẩm</StyledTableCell>
                      <StyledTableCell align="right">Giá</StyledTableCell>
                      <StyledTableCell align="right">Số lượng</StyledTableCell>
                      <StyledTableCell align="right">
                        Thành tiền
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.calories}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.fat}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.carbs}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </TableContainer>
          </Grid>

          <Grid item xs={4}>
            <TableContainer>
              <Paper variant="outlined" square>
                <Table sx={{ minWidth: 300 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell sx={{textAlign:'center'}}>TÓM TẮT ĐƠN HÀNG</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  {/*Nội dung  */}
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        Số lượng:
                      </StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        Tạm tính:
                      </StyledTableCell>
                    </StyledTableRow>

                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        Tổng cộng
                      </StyledTableCell>
                    </StyledTableRow>

                    <div style={{ marginTop: "10px" }}>
                      <div>
                        <Button
                          variant="contained"
                          square
                          sx={{ width: "100%", borderRadius:'0px' }}
                        >
                          THANH TOÁN
                        </Button>
                      </div>

                      <div>
                        <Button
                          variant="contained"
                          sx={{
                            width: "100%",
                            marginTop: "10px",
                            borderRadius:'0px'
                          }}
                        >
                        
                          <Link to="/airforce" className="addMore">
                            MUA THÊM SẢN PHẨM
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </TableBody>
                </Table>
              </Paper>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
