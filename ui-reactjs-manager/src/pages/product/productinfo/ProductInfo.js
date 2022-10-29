import React from "react";
import "./Single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { Link } from "react-router-dom";
export default function ProductInfo() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">
              <Link to="/users/edit" className="link">
                Chỉnh sửa
              </Link>
            </div>
            <h1 className="title">Thông tin sản phẩm</h1>
            <div className="item">
              <img
                src="https://bizweb.dktcdn.net/thumb/1024x1024/100/448/660/products/ea0bb554-e3f6-4bb9-9221-3baa7f65f052.jpg?v=1645670272520"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Air Force</h1>
                <div className="detailItem">
                  <span className="itemKey">Hãng:</span>
                  <span className="itemValue">Air Force</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Giá tiền:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Size:</span>
                  <span className="itemValue">38,39,40</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Màu giày:</span>
                  <span className="itemValue"></span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Tình trạng:</span>
                  <span className="itemValue">Còn hàng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
