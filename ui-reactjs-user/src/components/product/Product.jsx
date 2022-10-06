import React from "react";
import "./product.scss";
export default function Product() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="product">
      <img src={PF + "img/air.png"} alt="" className="productImg" />
      <div class="productDetails">
        <h1 class="productTitle">AIR FORCE</h1>
        <h2 class="productPrice">$199</h2>
        <p class="productDesc">
          Lorem ipsum dolor sit amet consectetur impal adipisicing elit. Alias
          assumenda dolorum doloremque sapiente aliquid aperiam.
        </p>
        <div class="colors">
          <div class="color"></div>
          <div class="color"></div>
        </div>
        <div class="sizes">
          <div class="size">42</div>
          <div class="size">43</div>
          <div class="size">44</div>
        </div>
        <button class="productButton">BUY NOW!</button>
      </div>
    </div>
  );
}
