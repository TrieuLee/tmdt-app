import React from "react";
import "./newSeason.scss";
export default function Newseason() {
  return (
    <div className="newSeason">
      <div className="nsItem">
        <img
          src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="nsImg"
        />
      </div>
      <div className="nsItem">
        <h3 className="nsTitleSm">MÙA ĐÔNG ĐÃ ĐẾN</h3>
        <h1 className="nsTitle">Siêu phẩm mới</h1>
        <h1 className="nsTitle">Bộ sưu tập mới</h1>
        <a href="#nav" className="nsLink">
          <button className="nsButton">PHONG CÁCH CỦA RIÊNG BẠN</button>
        </a>
      </div>
      <div className="nsItem">
        <img
          src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="nsImg"
        />
      </div>
    </div>
  );
}
