import React,{useState} from "react";
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
import StripeCheckout from "react-stripe-checkout";
import "./Grid.scss";

export default function CheckOutGrid() {
  const KEY = process.env.REACT_PUBLISH_KEY;
  const [stripeToken, setStripeToken] = useState(null)
  const onToken =(token)=>{
    setStripeToken(token)
  }
  console.log(stripeToken)
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
  console.log(carts);
  function listCart() {
    let cartdb = [...carts.cart];
    return cartdb.map((cart, i) => {
      const total = cart.price * cart.qty;
      return (
        <>
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
        </>
      );
    });
  }
  function orderSummary() {
    let cartdb = [...carts.cart];
    return cartdb.map((cart, i) => {
      return (
        <>
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
        </>
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
                  <TableBody>
                    {orderSummary()}
                    <div style={{ marginTop: "10px" }}>
                      <div>
                        <StripeCheckout
                          name ="ScofieldShop"
                          billingAddress  
                          shippingAddress
                          description=""
                          amount={100}
                          token={onToken}
                          stripeKey ={KEY}>
                          
                        <Button
                          variant="contained"
                          square
                          sx={{ width: "100%", borderRadius: "0px" }}
                        >
                          THANH TOÁN
                        </Button>
                        </StripeCheckout>
                        
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
