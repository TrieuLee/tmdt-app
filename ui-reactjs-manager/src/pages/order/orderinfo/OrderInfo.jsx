import React, { useEffect, useState } from "react";
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
  const [order, setOrder] = useState(null);
  useEffect(() => {
    const getOrder = async () => {
      try {
        const header = JSON.parse(localStorage.getItem("user")).accessToken;
        const res = await axios.get(
          `${domain}/api/orders/find/${idP}/${header}`
        );
        setOrder(res.data);
        localStorage.setItem("editOrder", JSON.stringify(res.data));
      } catch (err) {}
    };
    getOrder();
  }, [idP]);

  const GetProducts = () => {
    const x = order.products.map((i) => {
      return (
        <ul>
          <li className="itemValue">Tên sản phẩm: {i.name}</li>
          <li className="itemValue">Giá sản phẩm: {i.price}</li>
          <li className="itemValue">Số lượng: {i.quantity}</li>
        </ul>
      );
    });
    return x;
  };
  return (
    <div className="single">
      <Sidebar />
      {order && (
        <>
          <div className="singleContainer">
            <Navbar />
            <div className="top">
              <div className="left">
                <div className="editButton">
                  <Link to="/orders/edit" className="link">
                    Chỉnh sửa
                  </Link>
                </div>
                <div className="item">
                  <div className="details">
                    <h1 className="title">Thông tin Người nhận</h1>
                    <h1 className="itemTitle"></h1>
                    <div className="detailItem">
                      <span className="itemKey">Tên người nhận:</span>
                      <span className="itemValue">{order.shipping.name}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Địa chỉ nhận hàng:</span>
                      <span className="itemValue">
                        {order.shipping.address.line1 ? (
                          <>
                            {order.shipping.address.line1},{" "}
                            {order.shipping.address.city},
                            {order.shipping.address.country}
                          </>
                        ) : (
                          <>{order.shipping.address}</>
                        )}
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Số điện thoại:</span>
                      <span className="itemValue">{order.shipping.phone}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Email người nhận:</span>
                      <span className="itemValue">{order.shipping.email}</span>
                    </div>
                  </div>
                  <hr />
                  <div className="details">
                    <h1 className="title">Thông tin Đơn hàng</h1>
                    <h1 className="itemTitle"></h1>
                    <div className="detailItem">
                      <span className="itemKey">Sản phẩm:</span>
                      {GetProducts()}
                    </div>

                    <div className="detailItem">
                      <span className="itemKey">Trạng thái đơn hàng:</span>
                      <span className="itemValue">{order.delivery_status}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Thanh toán:</span>
                      <span className="itemValue">
                        {order.payment_status
                          ? "Đã thanh toán"
                          : "Chưa thanh toán"}
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Hình thức thanh toán:</span>
                      <span className="itemValue">
                        {order.payment_method === 0
                          ? "Trực tiếp"
                          : "Chuyển khoản"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Tổng cộng:</span>
                  <span className="itemValue"> {order.total} $</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
