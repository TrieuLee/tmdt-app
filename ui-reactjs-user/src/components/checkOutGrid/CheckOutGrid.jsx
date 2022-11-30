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
import { url } from "../../stripeAPI";
import axios from "axios";
import "./Grid.scss";

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
export default function CheckOutGrid(props) {
  const carts = !localStorage.lstOrFd ? "" : JSON.parse(localStorage.lstOrFd);
  console.log(carts);

  function listCart() {
    return carts.cart.products.map((item, i) => {
      return (
        <React.Fragment key={i}>
          <StyledTableCell component="th">
            <div style={{ display: "flex" }}>
              <img src={item.images} style={{ width: "100px" }} alt="" />
              {/* <div>
                <p>{item.title}</p>
                <p>{item.size}</p>
                <p>XÓa</p>
              </div> */}
            </div>
          </StyledTableCell>
          <StyledTableCell>
            <p>
              {item.price?.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          </StyledTableCell>
          <StyledTableCell>
            <p>{item.quantity}</p>
          </StyledTableCell>
        </React.Fragment>
      );
    });
  }
  function orderSummary() {
    return (
      <React.Fragment>
        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            Số lượng: {carts.cart.quantity}
          </StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            Phí ship:{" "}
            {/* {shippingPrice.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })} */}
          </StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            Tạm tính:{" "}
            {/* {totalPrice.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })} */}
          </StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
          <StyledTableCell component="th" scope="row">
            Tổng cộng:{" "}
            {carts.cart.total?.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </StyledTableCell>
        </StyledTableRow>
      </React.Fragment>
    );
  }
  const handleCheckout = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        carts,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };
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
                  {/* Nội dung */}
                  <TableBody>{orderSummary()}</TableBody>
                </Table>
              </Paper>
              <div style={{ marginTop: "10px" }}>
                <Button
                  variant="contained"
                  square="true"
                  sx={{ width: "100%", borderRadius: "0px" }}
                  onClick={() => handleCheckout()}
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
