import React, { useEffect, useContext, useState } from "react";
import "./Single.scss";

import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import List from "../../../components/table/Table";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import domain from "../../../utils/domain";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export default function CustomerInfo() {
  // const { user } = useContext(AuthContext);
  const location = useLocation();

  const idP = location.pathname.split("/")[2];
  // console.log(idP);
  const [users, setUsers] = useState({});
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${domain}/api/auth/find/` + idP);
        setUsers(res.data);
        // console.log(res.data);
      } catch (err) {}
    };
    getUsers();
  }, [idP]);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/orders/find/${idP}`
        );
        setOrders(res.data);
        // console.log(res.data);
      } catch (err) {}
    };
    getOrders();
  }, [idP]);
  console.log(orders);
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
            <h1 className="title">Thông tin khách hàng</h1>
            <div className="item">
              <img
                src="https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{users.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{users.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Số điện thoại:</span>
                  <span className="itemValue">{users.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Địa chỉ:</span>
                  <span className="itemValue">{users.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {users.role !== 3 ? (
          <div></div>
        ) : (
          <div className="bottom">
            <h1 className="title">Sản phẩm đã mua</h1>
            <TableContainer component={Paper} className="table">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="tableCell">Mã đơn hàng</TableCell>
                    <TableCell className="tableCell">Sản phẩm</TableCell>
                    <TableCell className="tableCell">Khách hàng</TableCell>
                    <TableCell className="tableCell">Ngày mua</TableCell>
                    <TableCell className="tableCell">Số lượng</TableCell>
                    <TableCell className="tableCell">
                      Phương thức thanh toán
                    </TableCell>
                    <TableCell className="tableCell">Tình trạng</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="tableCell">{item._id}</TableCell>
                      <TableCell className="tableCell">
                        <div className="cellWrapper">
                          {/* <img src={orders.img} alt="" className="image" />
                        {orders.product} */}
                        </div>
                      </TableCell>
                      <TableCell className="tableCell">
                        {orders.total}
                      </TableCell>
                      <TableCell className="tableCell">{orders.date}</TableCell>
                      <TableCell className="tableCell">
                        {orders.amount}
                      </TableCell>
                      <TableCell className="tableCell">
                        {orders.method}
                      </TableCell>
                      <TableCell className="tableCell">
                        <span className={`status ${orders.status}`}>
                          {orders.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </div>
    </div>
  );
}
