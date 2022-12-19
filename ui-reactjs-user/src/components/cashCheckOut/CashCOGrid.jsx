import React, { useRef, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
// import Record from "../../server.json";
import domain from "../../utils/domain";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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
  console.log(carts.total);
  const x = carts.cart.map((item) => {
    const temp = {
      productId: item._id,
      quantity: item.quantity,
      name: item.name,
      price: item.price,
    };
    return temp;
  });

  const { user } = useContext(AuthContext);
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
      to={`/checkout-cash`}
    >
      <b>Thanh toán bằng tiền mặt</b>
    </Link>,
  ];
  function listCart() {
    return carts.cart.map((item, i) => {
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
                  <p style={{ fontWeight: "bold" }}>
                    Số lượng: {item.quantity}
                  </p>
                </div>
              </div>
            </StyledTableCell>

            <StyledTableCell>
              <p>$ {item.price}</p>
            </StyledTableCell>
          </TableRow>
        </React.Fragment>
      );
    });
  }
  function priceCheckOut() {
    return (
      <>
        <div style={{ paddingRight: "15px" }}>
          <p
            style={{
              color: "red",
              display: "flex",
              justifyContent: "flex-end",
              fontWeight: "bold",
            }}
          >
            Đơn hàng trên $1000 sẽ được miễn phí ship
          </p>
          <p style={{ display: "flex", justifyContent: "flex-end" }}>
            Tổng số lượng: {carts.total.totalQuantity}
          </p>
          <p style={{ display: "flex", justifyContent: "flex-end" }}>
            Sản phẩm: $ {carts.total.subPrice}
          </p>
          {carts.total.discountPrice !== 0 && (
            <p style={{ display: "flex", justifyContent: "flex-end" }}>
              Khách hàng Thân thiết: giảm $ {carts.total.discountPrice}
            </p>
          )}

          <p style={{ display: "flex", justifyContent: "flex-end" }}>
            Phí ship: $ {carts.total.shipPrice}
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "flex-end",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Cần thanh toán: $ {carts.total.totalPrice}
          </p>
        </div>
      </>
    );
  }
  const nameCus = useRef();
  const address = useRef();
  const phone = useRef();
  const email = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const order = {
      userId: user.user._id,
      address: address.current.value,

      products: x,
      subtotal: carts.total.shipPrice,
      total: carts.total.totalPrice,
      payment_status: "Chưa thanh toán",
      shipping: {
        name: nameCus.current.value,
        address: address.current.value,
        phone: phone.current.value,
        email: email.current.value,
      },
      payment_method: 0,
    };
    try {
      const answer = window.confirm("Bạn có chắc chắn đặt mua sản phẩm?");
      if (answer) {
        const header = JSON.parse(localStorage.getItem("user")).accessToken;

        await axios.post(`${domain}/api/orders/${header}`, order);
        navigate("/checkout-success");
        console.log(order);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Stack spacing={2} sx={{ mt: 2 }}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ mt: 2 }}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "54ch" },
            }}
            className="registerBox"
            onSubmit={handleClick}
          >
            <Typography variant="h6" component="p">
              Thông tin giao hàng
            </Typography>

            <TextField
              required
              id="outlined-customer"
              label="Tên khách hàng"
              inputRef={nameCus}
            />
            <TextField
              required
              id="outlined-phone"
              label="Số điện thoại"
              inputRef={phone}
            />
            <TextField
              required
              id="outlined-address"
              label="Địa chỉ nhận hàng"
              inputRef={address}
            />
            <TextField
              required
              id="outlined-email"
              label="Email"
              inputRef={email}
            />
            <Button
              variant="contained"
              color="success"
              style={{ marginLeft: "10px", marginTop: "10px" }}
              type="submit"
            >
              <CheckCircleIcon />
              <p style={{ margin: "5px" }}>Hoàn tất đơn hàng</p>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <TableContainer>
            <Paper variant="outlined" square>
              <Table>
                <TableBody>{listCart()}</TableBody>
              </Table>
              {priceCheckOut()}
            </Paper>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
