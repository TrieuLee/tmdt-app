import React, { useEffect, useContext, useState } from "react";
import "./Single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import List from "../../../components/table/Table";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import domain from "../../../utils/domain";
export default function OrderInfo() {
  const location = useLocation();
  const idP = location.pathname.split("/")[2];
  console.log(idP);
  const [orders, setOrders] = useState({});
  useEffect(() => {
    const getOrders = async () => {
      try {
        const header = JSON.parse(localStorage.getItem("user")).accessToken;
        const res = await axios.get(`${domain}/api/orders/find/${idP}/${header}` );
        setOrders(res.data);

        localStorage.setItem("editOrder", JSON.stringify(res.data));
      } catch (err) {}
    };
    getOrders();
  }, [idP]);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">
              <Link to="/products/edit" className="link">
                Chỉnh sửa
              </Link>
            </div>
            <h1 className="title">Thông tin sản phẩm</h1>
            <div className="item">
              <img src={orders.img} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{orders.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Hãng:</span>
                  <span className="itemValue">{orders.brand}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Giá tiền:</span>
                  <span className="itemValue">{orders.price}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Size:</span>
                  <span className="itemValue">
                    {orders.size &&
                      orders.size.map((record, i) => (
                        <span key={i}>{record}</span>
                      ))}
                  </span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Tình trạng:</span>
                  <span className="itemValue">
                    {orders.state ? "Còn hàng" : "Tạm hết"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
