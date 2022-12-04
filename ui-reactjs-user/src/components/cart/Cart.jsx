import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { AuthContext } from "../../context/AuthContext";

import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function Cart(props) {
  const { visible, onRequestClose } = props;
  const cart = useSelector((state) => state.cart);
  const { user } = useContext(AuthContext);
  console.log(cart);
  //   const itemsPrice = cart
  //     ? cart.reduce((a, c) => a + c.price * c.quantity, 0)
  //     : 0;
  //   const dis = itemsPrice * 0.01;
  //   const shippingPrice = itemsPrice < 200000 ? 0 : dis;
  //   const totalPrice = itemsPrice + shippingPrice;
  function SetCartPayment() {
    const lstOrFd = {
      cart: cart,
      // itemsPrice: itemsPrice ? itemsPrice : "",
      // shippingPrice: shippingPrice ? shippingPrice : "",
      // totalPrice: totalPrice ? totalPrice : "",
    };
    localStorage.setItem("lstOrFd", JSON.stringify(lstOrFd));
  }
  return (
    <SlidingPane
      className="some-custom-class"
      isOpen={visible}
      title="Giỏ hàng của tôi"
      width="40%"
      onRequestClose={onRequestClose}
    >
      {cart.products && cart.products.length === 0 && <p>Giỏ hàng trống</p>}
      {cart.products.map((item, i) => (
        <Grid container key={i}>
          <Grid item xs={3}>
            <img src={item.img} style={{ width: "100px" }} alt="" />
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
              }}
            >
              <li>
                <b>{item.name}</b>
              </li>
              <li style={{ marginTop: "8px" }}>
                <b>{item.price}$</b>
              </li>
              <li style={{ marginTop: "8px" }}>
                <b>Size:</b> {item.size}
              </li>
              <li style={{ marginTop: "8px" }}>
                <b>Số lượng:</b> {item.quantity} x {item.price}$
              </li>
            </ul>
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <AddCircleIcon />
            </IconButton>

            <IconButton>
              <RemoveCircleIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      {cart.products && cart.products.length !== 0 && (
        <>
          <div style={{ marginTop: "70%" }}>
            <p style={{ display: "flex", justifyContent: "end" }}>
              Tạm tính: {cart.total}$
            </p>
            {/* <p style={{ display: "flex", justifyContent: "end" }}>
              Phí ship:{" "}
              {shippingPrice.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </p>
            <p style={{ display: "flex", justifyContent: "end" }}>
              Tổng tiền:{" "}
              {totalPrice.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </p> */}
          </div>
          {user ? (
            <Link
              type="submit"
              value="Thanh toán"
              to="/checkout"
              style={{ textDecoration: "none", color: "white" }}
              onClick={SetCartPayment}
            >
              <Button variant="contained" sx={{ width: "100%" }}>
                Thanh Toán
              </Button>
            </Link>
          ) : (
            <p>Hãy đăng nhập để thanh toán sản phẩm</p>
          )}
        </>
      )}
    </SlidingPane>
  );
}
