import React, { useRef } from "react";
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
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import Stack from "@mui/material/Stack";

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

export default function OrderGrid() {
  const carts = !localStorage.lstOrFd ? "" : JSON.parse(localStorage.lstOrFd);
  const breadcrumbs = [
    <Link
      key="1"
      color="inherit"
      to="/"
      style={{
        color: "black",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
      }}
    >
      <HomeIcon sx={{ mr: 0.75 }} fontSize="inherit" />
      Trang chủ
    </Link>,
    <Link
      key="2"
      style={{ color: "black", textDecoration: "none" }}
      to={`/order`}
    >
      <b>Thanh toán bằng tiền mặt</b>
    </Link>,
  ];
  function listCart() {
    return carts.cart.products.map((item, i) => {
      return (
        <React.Fragment key={i}>
          <TableRow>
            <StyledTableCell component="th">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={item.img}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    marginRight: "15px",
                  }}
                  alt=""
                />
                <div>
                  <p style={{ fontWeight: "bold" }}>{item.name}</p>
                  <p style={{ fontWeight: "bold" }}>Size: {item.size}</p>
                </div>
              </div>
            </StyledTableCell>

            <StyledTableCell>
              <p>$ {item.price}</p>
            </StyledTableCell>
            <StyledTableCell>
              <p>{item.quantity}</p>
            </StyledTableCell>
          </TableRow>
        </React.Fragment>
      );
    });
  }
  return (
    <Container>
      <Stack spacing={2} sx={{ mt: 2 }}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "54ch" },
            }}
            className="registerBox"
          >
            <Typography variant="h6" component="p">
              Thông tin giao hàng
            </Typography>

            <TextField required id="outlined-customer" label="Tên khách hàng" />
            <TextField required id="outlined-phone" label="Số điện thoại" />
            <TextField
              required
              id="outlined-address"
              label="Địa chỉ nhận hàng"
            />
            <TextField required id="outlined-email" label="Email" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <TableContainer>
            <Paper variant="outlined" square>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Tên sản phẩm</StyledTableCell>
                    <StyledTableCell>Giá</StyledTableCell>
                    <StyledTableCell>Số lượng</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{listCart()}</TableBody>
              </Table>
            </Paper>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
