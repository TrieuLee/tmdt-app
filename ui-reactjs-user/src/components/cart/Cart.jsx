import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";

function Cart(props) {
  const { visible, onRequestClose } = props;
  const { onAdd, onRemove } = props;
  const { cartItems } = { props };
  console.log(cartItems);

  return (
    <SlidingPane
      className="some-custom-class"
      isOpen={visible}
      title="Giỏ hàng của tôi"
      width="40%"
      onRequestClose={onRequestClose}
      cartItems={cartItems}
    >
      {/* {cartItems.map((item) => (
        <div key={item.id} className="row mt-2">
          <div className="col-3">
            <img
              src={item.images}
              style={{ width: "100px", height: "100px" }}
              alt=""
            />
          </div>

          <div className="col-6">
            <p className="my-4 mb-0 fw-bold fs-5">{item.title} </p>
            <div>
              <p className="m-0">
                Số lượng: {item.qty} x {item.price}
              </p>
            </div>
          </div>
          <div className="col-3 ">
            <div className="d-flex justify-content-center my-5">
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="me-3"
                onClick={() => onAdd(item)}
              />

              <FontAwesomeIcon
                icon={faCircleMinus}
                className=""
                onClick={() => onRemove(item)}
              />
            </div>
          </div>
        </div>
      ))} */}
      <div>GIo hang trong</div>
      {cartItems && cartItems.map((item) => <div>{props.item.title}</div>)}
    </SlidingPane>
  );
}

export default Cart;
