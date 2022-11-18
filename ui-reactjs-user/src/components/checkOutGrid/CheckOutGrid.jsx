import React, { useState } from "react";
import axios from "axios";
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
// import { url } from "../../stripeAPI";
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

  const carts = !localStorage.lstOrFd ? "" : JSON.parse(localStorage.lstOrFd);
  const shippingPrice = carts.shippingPrice;
  const totalPrice = carts.totalPrice;

  const checkout = async () => {
    await fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: carts }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };
  console.log(carts);
  function listCart() {
    let cartdb = [...carts.cart];
    return cartdb.map((cart, i) => {
      const total = cart.price * cart.qty;
      return (
        <React.Fragment key={i}>
          <StyledTableCell component="th" scope="row">
            <div style={{ display: "flex" }}>
              <img src={cart.images} style={{ width: "100px" }} alt="" />
              <div>
                <p>{cart.title}</p>
                <p>{cart.size}</p>
                <p>XÓa</p>
              </div>
            </div>
          </StyledTableCell>
          <StyledTableCell>
            <p>
              {cart.price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          </StyledTableCell>
          <StyledTableCell>
            <p>{cart.qty}</p>
          </StyledTableCell>
          <StyledTableCell>
            {total.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </StyledTableCell>
        </React.Fragment>
      );
    });
  }
  function orderSummary() {
    let cartdb = [...carts.cart];
    return cartdb.map((cart, i) => {
      return (
        <React.Fragment key={i}>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Số lượng: {cart.qty}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Phí ship:{" "}
              {shippingPrice.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Tạm tính:{" "}
              {totalPrice.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Tổng cộng:{" "}
              {totalPrice.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </StyledTableCell>
          </StyledTableRow>
        </React.Fragment>
      );
    });
  }

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
                    <StyledTableRow>{listCart()}</StyledTableRow>
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
                  <TableBody>{orderSummary()}</TableBody>
                </Table>
              </Paper>
              <div style={{ marginTop: "10px" }}>
                <Button
                  variant="contained"
                  square="true"
                  sx={{ width: "100%", borderRadius: "0px" }}
                  onClick={() => checkout()}
                >
                  THANH TOÁN
                </Button>

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
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
