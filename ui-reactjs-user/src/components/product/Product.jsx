import React from "react";
import "./product.scss";
export default function Product() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="product">
      <img src={PF + "img/air.png"} alt="" className="productImg" />
      <div className="productDetails">
        <h1 className="productTitle">AIR FORCE</h1>
        <h2 className="productPrice">$199</h2>
        <p className="productDesc">
          Lorem ipsum dolor sit amet consectetur impal adipisicing elit. Alias
          assumenda dolorum doloremque sapiente aliquid aperiam.
        </p>
        <div className="colors">
          <div className="color"></div>
          <div className="color"></div>
        </div>
        <div className="sizes">
          <div className="size">42</div>
          <div className="size">43</div>
          <div className="size">44</div>
        </div>
        <button className="productButton">BUY NOW!</button>
      </div>
    </div>
  );
}
