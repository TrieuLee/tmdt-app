import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeProduct,
  resetCart,
} from "../../context/CartReducer";

import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Cart(props) {
  const { visible, onRequestClose } = props;
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.products.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();

  //   const itemsPrice = cart
  //     ? cart.reduce((a, c) => a + c.price * c.quantity, 0)
  //     : 0;
  //   const dis = itemsPrice * 0.01;
  //   const shippingPrice = itemsPrice < 200000 ? 0 : dis;
  //   const totalPrice = itemsPrice + shippingPrice;
  function SetCartPayment() {
    const lstOrFd = {
      cart: cart,
      total: getTotal(),
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
            <IconButton onClick={() => dispatch(incrementQuantity(item._id))}>
              <AddCircleIcon />
            </IconButton>
            <div>{item.quantity}</div>
            <IconButton onClick={() => dispatch(decrementQuantity(item._id))}>
              <RemoveCircleIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      {cart.products && cart.products.length !== 0 && (
        <>
          <p
            style={{
              display: "flex",
              justifyContent: "end",
              color: "green",
              fontWeight: "bold",
              marginTop: "0",
            }}
          >
            Tạm tính: {getTotal().totalPrice}$
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "end",
              color: "red",
              fontWeight: "bold",
              cursor: "pointer",
              alignItems: "center",
            }}
            className="reset"
            onClick={() => dispatch(resetCart())}
          >
            <DeleteIcon />
            Xoá tất cả sản phẩm
          </p>

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
