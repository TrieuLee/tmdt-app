import React, { useContext } from "react";
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
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import domain from "../../utils/domain";

export default function Cart(props) {
  const { isOpen, onRequestClose } = props;
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // console.log(cart.products[0].img);
  // console.log(cart);
  const getTotal = () => {
    let totalQuantity = 0;
    let subPrice = 0;
    let shipPrice = 0;
    let totalPrice = 0;
    cart.products.forEach((item) => {
      const x = item.img;
      totalQuantity += item.quantity;
      subPrice += item.price * item.quantity;
      shipPrice = subPrice < 100 ? 20 : 0;
      totalPrice = subPrice + shipPrice;
    });
    return { subPrice, totalPrice, totalQuantity, shipPrice };
  };
  //   const itemsPrice = cart
  //     ? cart.reduce((a, c) => a + c.price * c.quantity, 0)
  //     : 0;
  // const dis = getTotal().totalPrice * 0.01;
  // const shippingPrice = getTotal().totalPrice < 200000 ? 0 : dis;
  // //   const totalPrice = itemsPrice + shippingPrice;
  function SetCartPayment() {
    const x = cart.products.map((item) => {
      return {
        ...item,
        img: domain + "/images/" + item.img,
      };
    });
    const lstOrFd = {
      cart: x,
      total: getTotal(),
      // itemsPrice: itemsPrice ? itemsPrice : "",
      // totalPrice: totalPrice ? totalPrice : "",
    };
    localStorage.setItem("lstOrFd", JSON.stringify(lstOrFd));
  }
  return (
    <SlidingPane
      className="sliding-pane"
      isOpen={isOpen}
      title="Giỏ hàng của tôi"
      width="40%"
      onRequestClose={onRequestClose}
    >
      {cart.products && cart.products.length === 0 && (
        <>
          <div>
            <img
              style={{ width: "100%", marginTop: "15%" }}
              src={PF + "img/empty_cart.png"}
              alt=""
            />
            <p
              style={{
                fontWeight: "bold",
                display: "flex",
                fontSize: "35px",
                justifyContent: "center",
              }}
            >
              Giỏ hàng trống{" "}
            </p>
          </div>
        </>
      )}
      {cart.products.map((item, i) => (
        <Grid container key={i}>
          <Grid item xs={3}>
            <img
              src={`${domain}/images/${item.img}`}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                marginTop: "15px",
              }}
              alt=""
            />
          </Grid>
          <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
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
                <b>${item.price}</b>
              </li>
              <li style={{ marginTop: "8px" }}>
                <b>Size:</b> {item.size}
              </li>
              <li style={{ marginTop: "8px" }}>
                <b>Số lượng:</b> {item.quantity} x ${item.price}
              </li>
            </ul>
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={() => {
                dispatch(incrementQuantity(item._id));
              }}
            >
              <AddCircleIcon />
            </IconButton>
            <div>{item.quantity}</div>
            <IconButton
              onClick={() => {
                dispatch(decrementQuantity(item._id));
              }}
            >
              <RemoveCircleIcon />
            </IconButton>
          </Grid>

          <Grid
            item
            xs={2}
            sx={{ display: "flex", alignItems: "center", color: "red" }}
          >
            <DeleteIcon onClick={() => dispatch(removeProduct(item._id))} />
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
            Tạm tính: ${getTotal().subPrice}
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
            <DeleteForeverIcon />
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
