import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { AuthContext } from "../../context/AuthContext";

function Cart(props) {
  const { user } = useContext(AuthContext);

  const { visible, onRequestClose } = props;
  const { onAdd, onRemove } = props;
  const { cartItems } = { props };
  console.log(cartItems);
  const itemsPrice = cartItems
    ? cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    : 0;
  const dis = itemsPrice * 0.01;
  const shippingPrice = itemsPrice < 200000 ? 0 : dis;
  const totalPrice = itemsPrice + shippingPrice;
  function SetCartPayment() {
    const lstOrFd = {
      cart: cartItems,
      itemsPrice: itemsPrice ? itemsPrice : "",
      shippingPrice: shippingPrice ? shippingPrice : "",
      totalPrice: totalPrice ? totalPrice : "",
    };
    localStorage.setItem("lstOrFd", JSON.stringify(lstOrFd));
  }
  const product = localStorage.getItem("products");

  return (
    <SlidingPane
      className="some-custom-class"
      isOpen={visible}
      title="Giỏ hàng của tôi"
      width="40%"
      onRequestClose={onRequestClose}
      cartItems={cartItems}
    >
      {cartItems && cartItems.length === 0 && <p>Giỏ hàng trống</p>}
      {cartItems &&
        cartItems.map((item) => (
          <Grid container key={item._id}>
            <Grid item xs={3}>
              <img src={item.images} style={{ width: "100px" }} alt="" />
            </Grid>
            <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                <li>
                  <b>{item.title}</b>
                </li>
                <li style={{ marginTop: "8px" }}>
                  <b>
                    {item.price.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </b>
                </li>
                <li style={{ marginTop: "8px" }}>
                  <b>Size:</b> {item.size}
                </li>
                <li style={{ marginTop: "8px" }}>
                  <b>Số lượng:</b> {item.qty} x{" "}
                  {item.price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </li>
              </ul>
            </Grid>
            <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
              <IconButton onClick={() => onAdd(item)}>
                <AddCircleIcon />
              </IconButton>

              <IconButton onClick={() => onRemove(item)}>
                <RemoveCircleIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
      {cartItems && cartItems.length !== 0 && (
        <>
          <div style={{ marginTop: "70%" }}>
            <p style={{ display: "flex", justifyContent: "end" }}>
              Tạm tính:{" "}
              {itemsPrice.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </p>
            <p style={{ display: "flex", justifyContent: "end" }}>
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
            </p>
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

export default Cart;
