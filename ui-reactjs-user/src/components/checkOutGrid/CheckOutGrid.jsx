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
                      <StyledTableCell>Giá</StyledTableCell>
                      <StyledTableCell>Số lượng</StyledTableCell>
                      <StyledTableCell>Thành tiền</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        <div style={{ display: "flex" }}>
                          <img
                            src="https://bizweb.dktcdn.net/thumb/1024x1024/100/448/660/products/giay-ultraboost-21-xam-fy0375-01-standard-e19e5c6a-d577-4f32-afd0-c791ac8c4f87.jpg?v=1645669520997"
                            style={{ width: "100px" }}
                            alt=""
                          />
                          <div>
                            <p>Giày nam Fake</p>
                            <p>Size: 38</p>
                            <p>XÓa</p>
                          </div>
                        </div>
                      </StyledTableCell>
                      <StyledTableCell>
                        <p>300.000đ</p>
                      </StyledTableCell>
                      <StyledTableCell align="right"></StyledTableCell>
                      <StyledTableCell align="right"></StyledTableCell>
                    </StyledTableRow>
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
                      <StyledTableCell sx={{ textAlign: "center" }}>
                        TÓM TẮT ĐƠN HÀNG
                      </StyledTableCell>
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
                          sx={{ width: "100%", borderRadius: "0px" }}
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
                            borderRadius: "0px",
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
