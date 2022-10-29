import React from "react";
import "./Single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { Link } from "react-router-dom";

export default function CategoryInfo() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">
              <Link to="/categories/edit" className="link">
                Chỉnh sửa
              </Link>
            </div>
            <h1 className="title">Thông tin loại sản phẩm</h1>
            <div className="item">
              <img
                src="https://giaysneakerhcm.com/wp-content/uploads/2021/04/logo-nike-air-force-one-ruby-store.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Air Force</h1>
                <div className="detailItem">
                  <span className="itemKey">Hãng:</span>
                  <span className="itemValue">Air Force</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
