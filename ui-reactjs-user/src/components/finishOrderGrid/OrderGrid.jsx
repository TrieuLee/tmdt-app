import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Record from "../../server.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
export default function OrderGrid() {
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
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "45ch" },
            }}
            noValidate
            autoComplete="off"
            className="registerBox"
          >
            <Typography variant="h6" component="p">
              Thông tin giao hàng
            </Typography>

            <TextField required id="outlined-required" label="Tên khách hàng" />
            <TextField required id="outlined-required" label="Số điện thoại" />
            <TextField
              required
              id="outlined-required"
              label="Địa chỉ nhận hàng"
            />
            <TextField required id="outlined-required" label="Email" />
          </Box>
        </Grid>
        <Grid item xs={6}>
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
  );
}
