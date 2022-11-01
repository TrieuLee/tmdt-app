import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

function Cart({ visible, onRequestClose }) {
  return (
    <SlidingPane
      className="some-custom-class"
      isOpen={visible}
      title="Giỏ hàng của tôi"
      width="40%"
      onRequestClose={onRequestClose}
    >
      <div>Giỏ hàng trống</div>

      <br />
    </SlidingPane>
  );
}

export default Cart;
